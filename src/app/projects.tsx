"use client";
import { CanvasRevealEffect } from "@/components/canvas-reveal-effect";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VscGithub } from "react-icons/vsc";
import { TextGenerateEffect } from "@/components/text-generate-effect";

const Card = ({
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

export default function Projects() {
    const [pointersStars, setPointersStars] = useState(0);
    const [viewStars, setViewStars] = useState(0);

    useEffect(() => {
        const repos = fetch("https://api.github.com/users/ZeroIntensity/repos");
        repos.then(res => {
            res.json().then(
                (json: Array<{ stargazers_count: number; name: string }>) => {
                    json.forEach(repo => {
                        if (repo.name == "pointers.py")
                            setPointersStars(repo.stargazers_count);
                        else if (repo.name == "view.py")
                            setViewStars(repo.stargazers_count);
                    });
                }
            );
        });
    });

    return (
        <section className="flex flex-col">
            <div className="flex flex-col">
                <h2 className="text-left text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-50 to-zinc-500 bg-opacity-50">
                    What do I do?
                </h2>
                <TextGenerateEffect words="Sometimes I make serious projects. Sometimes I make silly projects. Sometimes I make both!" />
            </div>
            <div className="grid grid-cols-4 gap-4 py-20">
                <Card
                    title="Bringing the hell of pointers to Python"
                    url="https://pointers.zintensity.dev"
                    name="pointers.py"
                    starCount={pointersStars}
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-sky-900"
                        colors={[
                            [29, 111, 219],
                            [74, 225, 255],
                        ]}
                    />
                </Card>
                <Card
                    title="The Batteries-Detachable Web Framework"
                    url="https://view.zintensity.dev"
                    name="view.py"
                    starCount={viewStars}
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-rose-900"
                        colors={[
                            [250, 45, 59],
                            [255, 89, 100],
                            [255, 128, 136],
                        ]}
                    />
                </Card>
                <Card
                    title="CPython API for asynchronous functions"
                    url="https://awaitable.zintensity.dev"
                    name="PyAwaitable"
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-zinc-900"
                        colors={[
                            [122, 122, 122],
                            [161, 161, 161],
                        ]}
                    />
                </Card>
                <Card
                    title="Developer-oriented client-server communication library"
                    name="Hoist"
                    url="https://hoist.zintensity.dev"
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-900"
                        colors={[
                            [66, 245, 123],
                            [0, 125, 40],
                            [156, 255, 157],
                        ]}
                    />
                </Card>
                <Card
                    title="No more stupid dots"
                    name="namespaces.py"
                    url="https://github.com/ZeroIntensity/namespaces.py"
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-indigo-900"
                        colors={[
                            [169, 115, 255],
                            [192, 153, 255],
                            [59, 0, 153],
                        ]}
                    />
                </Card>
                <Card
                    title="Stop others from touching your privates"
                    name="privates.py"
                    url="https://privates.zintensity.dev/"
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-blue-900"
                        colors={[
                            [41, 98, 255],
                            [133, 165, 255],
                            [0, 31, 120],
                        ]}
                    />
                </Card>
                <Card
                    title="Make your Python strings mutable"
                    name="mutstring"
                    url="https://github.com/ZeroIntensity/mutstring"
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-orange-900"
                        colors={[
                            [255, 205, 105],
                            [143, 86, 0],
                            [255, 178, 122],
                        ]}
                    />
                </Card>
                <Card
                    title="Keep your dict keys PEP 8 compliant"
                    name="snakedict"
                    url="https://github.com/ZeroIntensity/snakedict"
                >
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-fuchsia-900"
                        colors={[
                            [255, 122, 224],
                            [255, 179, 237],
                            [163, 0, 125],
                        ]}
                    />
                </Card>
            </div>
        </section>
    );
}
