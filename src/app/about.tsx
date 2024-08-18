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

async function getContributions() {
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
    return (
        contrib.totalIssueContributions +
        contrib.totalCommitContributions +
        contrib.totalRepositoryContributions +
        contrib.totalPullRequestContributions +
        contrib.totalPullRequestReviewContributions
    );
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

async function getGitHubStats(): Promise<GitHubStats> {
    const repos: Array<Repo> = await getAllRepos();

    let totalCommits = await getContributions();
    let totalStars = 0;

    for await (const repo of repos) {
        totalStars += repo.stargazers_count;
    }

    return {
        totalCommits,
        totalStars,
    };
}

export default function About() {
    const stats = use(getGitHubStats());

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
