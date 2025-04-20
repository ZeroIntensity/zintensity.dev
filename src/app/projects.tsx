import { use } from "react";
import ProjectHeader from "./projectHeader";
import PrimaryProjectList, { PriorProjectList } from "./projectList";
import { TextGenerateEffect } from "@/components/text-generate-effect";

interface StarCounts {
    pointersStars: number;
    viewStars: number;
}

async function getRepos(): Promise<StarCounts> {
    const pointersStars = (
        await (
            await fetch(
                "https://api.github.com/repos/ZeroIntensity/pointers.py",
                {
                    next: { revalidate: 3600 },
                    headers: {
                        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    },
                }
            )
        ).json()
    ).stargazers_count;
    const viewStars = (
        await (
            await fetch("https://api.github.com/repos/ZeroIntensity/view.py", {
                next: { revalidate: 3600 },
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            })
        ).json()
    ).stargazers_count;
    return { pointersStars, viewStars };
}

export default function Projects() {
    const { pointersStars, viewStars } = use(getRepos());

    return (
        <section className="flex flex-col" id="projects">
            <ProjectHeader />
            <PrimaryProjectList
                pointersStars={pointersStars}
                viewStars={viewStars}
            />
        </section>
    );
}
