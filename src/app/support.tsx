"use client";
import { BackgroundGradient } from "@/components/background-gradient";

export default function Support() {
    return (
        <section className="flex flex-col">
            <h2 className="text-left text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                Hire Me
            </h2>
            <div className="grid grid-cols-3 auto-rows-fr gap-24 py-4">
                <BackgroundGradient className="rounded-[22px] w-full p-4 bg-white dark:bg-zinc-950">
                    <h3 className="text-4xl font-bold">$25</h3>
                </BackgroundGradient>
                <BackgroundGradient
                    className="rounded-[22px] w-full p-4 bg-white dark:bg-zinc-950"
                    colorCycle={2}
                >
                    <h3 className="text-4xl font-bold">$50</h3>
                </BackgroundGradient>
                <BackgroundGradient
                    className="rounded-[22px] w-full p-4 bg-white dark:bg-zinc-950"
                    colorCycle={3}
                >
                    <h3 className="text-4xl font-bold">$100</h3>
                </BackgroundGradient>
            </div>
        </section>
    );
}
