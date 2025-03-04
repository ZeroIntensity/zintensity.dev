"use client";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export default function ProjectHeader() {
    return (
        <div className="flex flex-col">
            <h2 className="text-left text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                What do I do?
            </h2>
            <TextGenerateEffect words="I do a lot! These days, my main focus is CPython, but I'll work on these from time to time." />
        </div>
    );
}
