import { use } from "react";
import ProjectHeader from "./projectHeader";
import ProjectList from "./projectList";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoGitMerge } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import type { OverallContributions, PullRequest } from "./about";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IoTimeSharp } from "react-icons/io5";

dayjs.extend(relativeTime);

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

function PullRequestDisplay(pullRequest: PullRequest) {
    return (
        <div className="w-full h-full border border-zinc-900 rounded-lg hover:border-zinc-800 hover:bg-zinc-950 transition-all">
            <a href={pullRequest.url} target="_blank">
                <div className="flex h-full flex-col p-4 space-y-1">
                    <div className="self-start flex items-center flex-col sm:flex-row sm:justify-between w-full font-medium">
                        <div className="flex items-center justify-center space-x-1">
                            {pullRequest.repositoryName.startsWith(
                                "python/"
                            ) && <FaPython className="w-4 h-4" />}
                            <p>{pullRequest.repositoryName}</p>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                            <IoTimeSharp className="w-4 h-4" />{" "}
                            <p>{dayjs(pullRequest.createdAt).fromNow()}</p>
                        </div>
                    </div>

                    <div className="flex space-x-3 items-center h-full w-full">
                        <div>
                            {pullRequest.merged ? (
                                <IoGitMerge className="text-violet-500 w-7 h-7" />
                            ) : (
                                <FaCodePullRequest className="text-green-500 w-6 h-6" />
                            )}
                        </div>
                        <p className="font-light break-all sm:break-normal max-w-full">
                            {pullRequest.title}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}

function Contributions(contributions: OverallContributions) {
    return (
        <div className="min-w-72 w-full grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-3 2xl:grid-cols-4 2xl:grid-rows-4 gap-3 auto-rows-fr">
            {contributions.pullRequests.map((pr, index) => (
                <PullRequestDisplay key={index} {...pr} />
            ))}
        </div>
    );
}

export default function Projects(contributions: OverallContributions) {
    const { pointersStars, viewStars } = use(getRepos());

    return (
        <section className="flex flex-col" id="projects">
            <ProjectHeader />
            <ProjectList pointersStars={pointersStars} viewStars={viewStars} />
            <Contributions {...contributions} />
        </section>
    );
}
