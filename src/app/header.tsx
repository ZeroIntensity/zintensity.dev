import { motion } from "framer-motion";
import { LuClipboard, LuClipboardCheck } from "react-icons/lu";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";

export function Header() {
    const [copied, setCopied] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }, [copied]);

    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="relative flex flex-col items-center justify-center px-4"
        >
            <div className="h-[40rem] w-full max-w-screen flex flex-col items-center justify-center overflow-hidden rounded-md">
                <div className="flex space-x-6 items-center py-1">
                    <a
                        className="group"
                        href="https://github.com/ZeroIntensity"
                        target="_blank"
                    >
                        <FaGithub className="text-white h-10 w-10 md:h-16 md:w-16 group-hover:opacity-50 transition-all backdrop-blur-sm" />
                    </a>
                    <button
                        className="relative group"
                        onClick={() => {
                            navigator.clipboard.writeText("zerointensity");
                            setCopied(true);
                        }}
                    >
                        <FaDiscord className="text-white h-10 w-10 md:h-16 md:w-16 group-hover:opacity-50 transition-all backdrop-blur-sm" />

                        <div className="transition-all duration-300 group-hover:opacity-100 flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 opacity-0 bg-black border border-zinc-950 text-white text-xs rounded py-1 px-2 z-10">
                            {copied ? (
                                <LuClipboardCheck className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                            ) : (
                                <LuClipboard className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                            )}
                            <span className="text-sm md:text-base lg:text-lg font-medium">
                                {copied ? "Copied!" : "zerointensity"}
                            </span>
                        </div>
                    </button>
                    <a className="group" href="mailto:zintensitydev@gmail.com">
                        <MdEmail className="text-white h-10 w-10 md:h-16 md:w-16 group-hover:opacity-50 transition-all backdrop-blur-sm" />
                    </a>
                </div>
                <h1 className="md:text-7xl text-5xl lg:text-9xl font-bold text-center text-white relative z-20">
                    Hi, I'm Peter.
                </h1>
                <div className="w-[20rem] opacity-0 md:opacity-100 md:w-[40rem] relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                </div>
                <div className="text-center">
                    <div className="font-extralight text-2xl md:text-3xl dark:text-neutral-200 py-4">
                        I'm a software engineer from the United States.
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Header;
