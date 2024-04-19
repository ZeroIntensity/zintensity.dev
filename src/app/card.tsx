"use client";
import { motion, AnimatePresence } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { useState } from "react";

export const Card = ({
    title,
    name,
    url,
    children,
    starCount,
}: {
    title: string;
    name: string;
    url: string;
    children?: React.ReactNode;
    starCount?: number;
}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={url}
            target="_blank"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="rounded-lg border group/canvas-card flex items-center justify-center border-zinc-900 max-w-sm w-full mx-auto p-4 h-[30rem] relative"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center text-white">
                    <h3 className="text-3xl font-extralight">Hover Me...</h3>
                </div>
                <h2 className="dark:text-white text-2xl text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    <div className="flex flex-col space-y-3 items-center justify-center">
                        <h3 className="text-5xl font-extralight">{name}</h3>
                        <p>{title}</p>
                        {starCount && (
                            <div className="flex items-center space-x-1 font-normal">
                                <VscGithub />
                                <p>{starCount} Stars</p>
                            </div>
                        )}
                    </div>
                </h2>
            </div>
        </a>
    );
};
