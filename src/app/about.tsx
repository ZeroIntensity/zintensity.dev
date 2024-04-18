"use client";
import { Highlight } from "@/components/hero-highlight";
import { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import moment from "moment-timezone";

export default function About() {
    const [stars, setStars] = useState(0);
    const [date, setDate] = useState("???");
    const [sleeping, setSleeping] = useState("");
    const [commits, setCommits] = useState(0);
    const fmt = new Intl.NumberFormat();

    useEffect(() => {
        const repos = fetch("https://api.github.com/users/ZeroIntensity/repos");
        let commitsTotal = 0;

        // the javascript tower of terror
        repos.then(res => {
            res.json().then(
                (json: Array<{ stargazers_count: number; name: string }>) => {
                    setStars(
                        json.reduce(
                            (accumulator, currentValue) =>
                                accumulator + currentValue.stargazers_count,
                            0
                        )
                    );
                    json.forEach(repo => {
                        fetch(
                            `https://api.github.com/repos/ZeroIntensity/${repo.name}/commits`
                        ).then(response => {
                            response.json().then(
                                (
                                    commits: Array<{
                                        author: { login: string };
                                    }>
                                ) => {
                                    commits.forEach(commit => {
                                        if (
                                            commit.author?.login ==
                                            "ZeroIntensity"
                                        )
                                            ++commitsTotal;
                                    });
                                }
                            );
                        });
                    });
                    setCommits(commitsTotal);
                }
            );
        });

        setInterval(() => {
            const time = moment().tz("America/Toronto");
            const hour = time.hour();

            if (hour < 7 && hour > 22)
                setSleeping(", I'm (hopefully) sleeping.");

            setDate(time.format("h:mm A"));
        }, 1000);
    }, []);

    return (
        <section className="flex items-center justify-between w-full">
            <div className="flex flex-col">
                <h2 className="text-left text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                    Who am I?
                </h2>
                <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 w-2/3">
                    My name is{" "}
                    <Highlight className="font-bold">Peter</Highlight>. I'm 15
                    years old and love to write code. <br />I build things
                    because{" "}
                    <Highlight className="font-bold">
                        I have fun building them
                    </Highlight>
                    , not because I think they're useful.
                </p>
            </div>
            <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black border-zinc-900 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-2xl font-bold text-neutral-600 dark:text-white"
                    >
                        Statistics
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300"
                    >
                        {fmt.format(stars) || "???"} GitHub Stars
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300"
                    >
                        {commits} GitHub Commits
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300"
                    >
                        It's {date} my time{sleeping}
                    </CardItem>
                </CardBody>
            </CardContainer>
        </section>
    );
}
