import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

const CYCLES: Record<number, string> = {
    1: `bg-[radial-gradient(circle_farthest-side_at_0_100%,#006aff,transparent),radial-gradient(circle_farthest-side_at_100%_0,#00bbff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#3d6acc,transparent),radial-gradient(circle_farthest-side_at_0_0,#27bce6,#8c57ff)]`,
    2: `bg-[radial-gradient(circle_farthest-side_at_0_100%,#77ff4a,transparent),radial-gradient(circle_farthest-side_at_100%_0,#bcff57,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#a1ffd2,transparent),radial-gradient(circle_farthest-side_at_0_0,#bcff57,#00ffae)]`,
    3: `bg-[radial-gradient(circle_farthest-side_at_0_100%,#ff6e6e,transparent),radial-gradient(circle_farthest-side_at_100%_0,#bd1515,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#fc714e,transparent),radial-gradient(circle_farthest-side_at_0_0,#ba0230,#ff4a77)]`,
};

export const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    colorCycle,
    animate = true,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    colorCycle?: number;
    animate?: boolean;
}) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    const colorString = CYCLES[colorCycle || 1];

    return (
        <div className={cn("relative p-[4px] group", containerClassName)}>
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
                    colorString
                )}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] will-change-transform",
                    colorString
                )}
            />

            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
