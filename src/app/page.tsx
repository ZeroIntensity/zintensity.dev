import Title from "./title";
import About from "./about";
import Projects from "./projects";
import Divider from "./divider";
import Support from "./support";
import { ReactNode } from "react";

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
                    <Support />
                </Padded>
                <Divider />
            </div>
        </main>
    );
}
