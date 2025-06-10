import { use } from "react";
import AboutHeader from "./aboutHeader";
import Statistics from "./statistics";

export interface GitHubStats {
    totalStars: number;
    totalCommits: number;
}

type Repo = {
    name: string;
    stargazers_count: number;
};

export interface PullRequest {
    repositoryName: string;
    title: string;
    createdAt: string;
    merged: boolean;
    url: string;
}

export interface OverallContributions {
    total: number;
    pullRequests: PullRequest[];
}

const CONTRIB_LIMIT = 32;

export async function getContributions(): Promise<OverallContributions> {
    const headers = {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    };
    const body = {
        query: `query {
            user(login: "ZeroIntensity") {
              name
              contributionsCollection {
                totalIssueContributions
                totalCommitContributions
                totalRepositoryContributions
                totalPullRequestContributions
                totalPullRequestReviewContributions
                pullRequestContributions(first:100) {
      	          nodes {
                    pullRequest {
          	          repository {
                        owner {
                          login
                        }
                        name
                        isPrivate
                      }
          	          title
                      merged
                      createdAt
                      closed
                      url
                    }
                  }
                }
              }
            }
          }`,
    };
    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        body: JSON.stringify(body),
        headers: headers,
    });
    const data = await response.json();
    const contrib = data.data.user.contributionsCollection;
    const total =
        contrib.totalIssueContributions +
        contrib.totalCommitContributions +
        contrib.totalRepositoryContributions +
        contrib.totalPullRequestContributions +
        contrib.totalPullRequestReviewContributions;

    const prData: Array<any> = contrib.pullRequestContributions.nodes;
    const pullRequests: PullRequest[] = [];
    let contribs = 0;
    for (const thePr of prData) {
        if (!thePr) {
            continue;
        }
        const pr = thePr.pullRequest;
        if (pr.closed && !pr.merged) {
            continue;
        }
        const repository = pr.repository;
        if (repository.isPrivate) {
            continue;
        }

        pullRequests.push({
            repositoryName: `${repository.owner.login}/${repository.name}`,
            title: pr.title,
            createdAt: pr.createdAt,
            merged: pr.merged,
            url: pr.url,
        });
        if (++contribs == CONTRIB_LIMIT) {
            break;
        }
    }

    return {
        total,
        pullRequests,
    };
}

async function getAllRepos(): Promise<Array<Repo>> {
    let repos: Array<Repo> = [];

    for (let i = 1; i < Infinity; ++i) {
        const json: Array<Repo> = await (
            await fetch(
                `https://api.github.com/users/ZeroIntensity/repos?page=${i}`,
                {
                    next: { revalidate: 3600 },
                    headers: {
                        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    },
                }
            )
        ).json();
        repos = repos.concat(json);
        if (json.length == 0)
            // end of pages
            return repos;
    }

    throw new Error("not possible");
}

async function getGitHubStats(
    contributions: OverallContributions
): Promise<GitHubStats> {
    const repos: Array<Repo> = await getAllRepos();

    let totalCommits = contributions.total;
    let totalStars = 0;

    for await (const repo of repos) {
        totalStars += repo.stargazers_count;
    }

    return {
        totalCommits,
        totalStars,
    };
}

export default function About(contributions: OverallContributions) {
    const stats = use(getGitHubStats(contributions));

    return (
        <section
            className="flex lg:flex-row flex-col items-center justify-center lg:justify-between w-full"
            id="about"
        >
            <AboutHeader />
            <Statistics {...stats} />
        </section>
    );
}
