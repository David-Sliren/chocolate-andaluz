import { Benefit } from "./Benefit";
import { Experience } from "./experience/Experience";
import { Hero } from "./Hero";

export const Main = () => {
  return (
    <main className="">
      <Hero />
      <Benefit />
      <Experience />
    </main>
  );
};
