"use client";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import { useState, useEffect, ReactNode } from "react";
import moment from "moment-timezone";
import type { GitHubStats } from "./about";
import { IoIosTime } from "react-icons/io";
import { IoGitCommitSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { SparklesCore } from "@/components/sparkles";

function CardWithIcon({
    icon,
    children,
    amount,
}: {
    icon: ReactNode;
    children: ReactNode;
    amount?: number;
}) {
    return (
        <CardItem
            translateZ={amount || 60}
            className="text-white text-base max-w-sm mt-2"
        >
            <div className="flex items-center space-x-1">
                {icon}
                <p className="text-zinc-300">{children}</p>
            </div>
        </CardItem>
    );
}

export default function Statistics(props: GitHubStats) {
    const [date, setDate] = useState("???");
    const [sleeping, setSleeping] = useState("");
    const fmt = new Intl.NumberFormat();

    useEffect(() => {
        setInterval(() => {
            const time = moment().tz("America/Toronto");
            const hour = time.hour();

            if (hour < 7 && hour > 22)
                setSleeping(", I'm (hopefully) sleeping.");

            setDate(time.format("h:mm A"));
        }, 1000);
    }, []);

    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black border-zinc-900 w-auto sm:w-[30rem] h-auto rounded-xl border  ">
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={200}
                    className="w-full h-full absolute -z-20"
                    particleColor="#FFFFFF"
                />
                <div className="p-6">
                    <CardItem
                        translateZ="30"
                        className="text-2xl font-bold text-neutral-600 dark:text-white"
                    >
                        Statistics
                    </CardItem>

                    <CardWithIcon icon={<FaStar />}>
                        {fmt.format(props.totalStars)} GitHub Stars
                    </CardWithIcon>
                    <CardWithIcon icon={<IoGitCommitSharp />} amount={70}>
                        {fmt.format(props.totalCommits)} Commits
                    </CardWithIcon>
                    <CardWithIcon icon={<IoIosTime />} amount={80}>
                        It's {date} my time{sleeping}
                    </CardWithIcon>
                </div>
            </CardBody>
        </CardContainer>
    );
}
