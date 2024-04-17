"use client";
import { Highlight } from "@/components/hero-highlight";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import UTC from "dayjs/plugin/utc";
import TimeZone from "dayjs/plugin/timezone";

dayjs.extend(UTC);
dayjs.extend(TimeZone);

export default function About() {
    const [stars, setStars] = useState(0);
    const fmt = new Intl.NumberFormat();
    const [date, setDate] = useState(new Date());

    setInterval(() => {
        setDate(new Date());
    }, 1000);

    useEffect(() => {
        const repos = fetch("https://api.github.com/users/ZeroIntensity/repos");
        repos.then(res => {
            res.json().then((json: Array<{ stargazers_count: number }>) => {
                setStars(
                    json.reduce(
                        (accumulator, currentValue) =>
                            accumulator + currentValue.stargazers_count,
                        0
                    )
                );
            });
        });
    }, []);

    return (
        <section className="flex items-center justify-between px-8 w-full">
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
            <div className="border-zinc-900 p-4 text-lg text-white border rounded-lg">
                <p>{fmt.format(stars) || "???"} GitHub Stars</p>
                <p>{dayjs(date).tz("EST").format("h:mm:ss")}</p>
            </div>
        </section>
    );
}
