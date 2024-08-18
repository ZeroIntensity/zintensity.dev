"use client";
import { TextGenerateEffect } from "@/components/text-generate-effect";

export default function ProjectHeader() {
    return (
        <div className="flex flex-col">
            <h2 className="text-left text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                What have I done?
            </h2>
            <TextGenerateEffect words="I typically maintain Python libraries, either my own or contributing to others. Here are some of my own:" />
        </div>
    );
}
