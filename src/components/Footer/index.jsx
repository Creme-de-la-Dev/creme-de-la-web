// React
import React, { useState } from "react";

// Icons
import { MdEmail } from "react-icons/md";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

// Components
import SocialIcon from "./SocialIcon";

function Footer() {
  return (
    <div>
      <footer aria-label="Site Footer" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex justify-center text-cdln-blue-600">
            <h3 className="font-semibold text-3xl">Creme de la Nage</h3>
          </div>

          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
            Creme de la Nage, Sapo-Boi Studios e todos seu derivados são marcas
            registradas e tals. Lorem ipsum dolor sit {""} 
            <a href="https://www.youtube.com/watch?v=pWsFmjckrRk">
            amet
            </a>
             , consectetur adipiscing elit.
          </p>

          <nav aria-label="Footer Nav" className="mt-12">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/home"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/games"
                >
                  Jogos
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/shows"
                >
                  Séries
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/store"
                >
                  Loja
                </a>
              </li>

              <li>
                <a
                  className="text-gray-700 transition hover:text-gray-700/75"
                  href="/about"
                >
                  Sobre Nós
                </a>
              </li>
            </ul>
          </nav>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <SocialIcon
                href="https://www.facebook.com/aleapontando"
                text="Facebook"
                BtnIcon={FaFacebookSquare}
              />
            </li>
            <li>
              <SocialIcon
                href="https://twitter.com/thefunny_mp4/status/1521276206162890755?s=46&t=P3dCuVZ3mQ1CluuQ6ebh8g"
                text="Twitter"
                BtnIcon={FaTwitter}
              />
            </li>
            <li>
              <SocialIcon
                href="https://www.instagram.com/creme_de_la_nage/?hl=pt"
                text="Instagram"
                BtnIcon={FaInstagram}
              />
            </li>
            <li>
              <SocialIcon
                href="https://github.com/Creme-de-la-Dev"
                text="GitHub"
                BtnIcon={FaGithub}
              />
            </li>
          </ul>
          <div className="text-center mt-5 mx-auto">
            <a
              className="text-gray-50 text-sm"
              href="/extras"
            >se você consegue ler isso, clique aqui</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
