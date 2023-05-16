// React
import React from "react";

// Tw Elements
import { Carousel, initTE } from "tw-elements";

// Images
import Creme1 from "../../assets/About/creme1.jpeg";

function About() {

  return (
    <div>
      <section className="header h-screen p-32">
        <div className="inline-flex justify-between w-full">
            <div className="flex-column max-w-4xl h-full justify-between">
                <h1 class="text-cdln-blue-100 text-7xl md:text-8xl font-bold animate__animated animate__pulse">
                    Sobre Nós
                </h1>
                <h2 class="text-cdln-blue-50 text-xl md:text-3xl animate__animated animate__fadeIn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </h2>
            </div>
            <img src={Creme1} className="animate__animated animate__fadeIn max-w-lg border-sky-100 border-8 rounded-md"/>
        </div>
      </section>
    </div>
  );
}

export default About;
