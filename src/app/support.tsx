"use client";
import { BackgroundGradient } from "@/components/background-gradient";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { ReactNode } from "react";
import { FaCircleXmark } from "react-icons/fa6";

function Check({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center space-x-1">
            <FaCheckCircle className="w-5 h-5" />
            <p className="text-base">{children}</p>
        </div>
    );
}

function X({ children }: { children: ReactNode }) {
    return (
        <div className="flex items-center space-x-1">
            <FaCircleXmark className="w-5 h-5" />
            <p className="text-base">{children}</p>
        </div>
    );
}

interface CardProps {
    amount: number;
    package: string;
    tierId: string | number;
    description: string;
    colorCycle: number;
    children: ReactNode;
}

function Card(props: CardProps) {
    return (
        <BackgroundGradient
            className="rounded-[22px] w-full p-4 bg-white dark:bg-zinc-950"
            colorCycle={props.colorCycle}
            blurClass="blur-xl"
        >
            <div className="flex space-x-3 items-center">
                <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                    ${props.amount}
                </h3>
                <BackgroundGradient
                    className="rounded-[22px] w-full p-1 px-2 font-bold"
                    colorCycle={props.colorCycle}
                    blurClass="blur-sm"
                >
                    {props.package}
                </BackgroundGradient>
            </div>
            <div className="h-64">
                <p className="font-bold">{props.description}</p>
                <div className="flex flex-col py-2">
                    <p>Examples:</p>
                    <div className="flex flex-col">{props.children}</div>
                </div>
            </div>

            <div className="px-4 py-2">
                <a
                    href={`https://github.com/sponsors/ZeroIntensity/sponsorships?tier_id=${props.tierId}`}
                    target="_blank"
                >
                    <BackgroundGradient
                        className="rounded-[22px] w-full font-bold bg-zinc-950 p-2 text-center text-xl hover:bg-transparent transition-all duration-300"
                        padding="p-[2px]"
                        colorCycle={props.colorCycle}
                        blurClass="blur-none"
                    >
                        <div className="flex space-x-1 items-center justify-center">
                            <RiMoneyDollarCircleLine className="h-6 w-6" />
                            <span>Buy Now</span>
                        </div>
                    </BackgroundGradient>
                </a>
            </div>
        </BackgroundGradient>
    );
}

export default function Support() {
    return (
        <section className="flex flex-col">
            <h2 className="text-left text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                Hire Me
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-3 auto-rows-fr gap-12 lg:gap-6 xl:gap-24 py-12">
                <Card
                    amount={25}
                    package="Small"
                    tierId={335240}
                    colorCycle={1}
                    description="A small project with a few days of development time."
                >
                    <Check>Web server.</Check>
                    <Check>Discord bot.</Check>
                    <X>Website frontend.</X>
                </Card>
                <Card
                    amount={50}
                    package="Medium"
                    tierId={335243}
                    colorCycle={2}
                    description="A medium-scale project with a few weeks of development time."
                >
                    <Check>Website frontend or backend.</Check>
                    <Check>Command-line tool.</Check>
                    <X>Fullstack website.</X>
                </Card>
                <Card
                    amount={100}
                    package="Large"
                    tierId={335244}
                    colorCycle={3}
                    description="A large-scale project with a month or more of development time."
                >
                    <Check>Fullstack web application.</Check>
                    <Check>A custom-made library.</Check>
                    <Check>Anything you can dream up!</Check>
                </Card>
            </div>
        </section>
    );
}
