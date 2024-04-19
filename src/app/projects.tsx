import { use } from "react";
import ProjectHeader from "./projectHeader";
import ProjectList from "./projectList";

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
        <section className="flex flex-col">
            <ProjectHeader />
            <ProjectList pointersStars={pointersStars} viewStars={viewStars} />
        </section>
    );
}
