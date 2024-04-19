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

async function getAllPages(repo: string): Promise<number> {
    let commitsTotal = 0;
    let page = 1;

    while (true) {
        const res = await fetch(
            `https://api.github.com/repos/ZeroIntensity/${repo}/commits?author=ZeroIntensity&page=${page++}&per_page=100`,
            {
                next: { revalidate: 3600 },
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            }
        );
        const commits = await res.json();
        commitsTotal += commits.length;
        if (commits.length < 100) break;
    }

    return commitsTotal;
}

async function getGitHubStats(): Promise<GitHubStats> {
    const repos: Array<Repo> = await (
        await fetch("https://api.github.com/users/ZeroIntensity/repos", {
            next: { revalidate: 3600 },
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        })
    ).json();

    let totalCommits = 0;
    let totalStars = 0;

    for await (const repo of repos) {
        totalCommits += await getAllPages(repo.name);
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
        <section className="flex items-center justify-between w-full">
            <AboutHeader />
            <Statistics {...stats} />
        </section>
    );
}
