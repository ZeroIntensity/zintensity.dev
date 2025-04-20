import Title from "./title";
import About from "./about";
import Projects from "./projects";
import Divider from "./divider";
import { ReactNode } from "react";
import Copyright from "./copyright";
import type { OverallContributions } from "./about";
import { getContributions } from "./about";
import { use } from "react";

const Padded = ({ children }: { children: ReactNode }) => (
    <div className="px-8 lg:px-16">{children}</div>
);
export default function Home() {
    const contributions: OverallContributions = use(getContributions());
    return (
        <main>
            <Title />
            <div className="flex flex-col">
                <Padded>
                    <About {...contributions} />
                </Padded>
                <Divider />
                <Padded>
                    <Projects {...contributions} />
                </Padded>
                <Divider />
                <Padded>
                    <Copyright />
                </Padded>
            </div>
        </main>
    );
}
