import Title from "./title";
import About from "./about";
import Projects from "./projects";
import Divider from "./divider";
import { ReactNode } from "react";
import Copyright from "./copyright";

const Padded = ({ children }: { children: ReactNode }) => (
    <div className="px-8 lg:px-16">{children}</div>
);
export default function Home() {
    return (
        <main>
            <Title />
            <div className="flex flex-col">
                <Padded>
                    <About />
                </Padded>
                <Divider />
                <Padded>
                    <Projects />
                </Padded>
                <Divider />
                <Padded>
                    <Copyright />
                </Padded>
            </div>
        </main>
    );
}
