import React from "react";
import './App.css';

import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaPhoneAlt, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="Footer">
      <footer className="footer-distributed">
      
      <div className="footer-left">
      
      <h3>Creme de la Nage</h3>
      
        <div className="link-and-copy">
        <p className="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">Séries</a>
        ·
        <a href="#">Jogos</a>
        ·
        <a href="#">Loja</a>
        ·
        <a href="#">Sobre</a>
        </p>
        
        <p className="footer-company-name">Creme de la Nage &copy; 2021</p>
        </div>
      </div>
      
      <div className="footer-center">
      
        <div className="mb-4">
        <MdLocationOn className="location-icon"/>
          <p><span>Rua 3 de maio, 273</span> São Paulo, Brasil</p>
        </div>
      
      <div className="mb-4">
        <FaPhoneAlt className="phone-icon" />
        <p>+55 (11) 96619-7577</p>
      </div>
      
      <div>
      <MdEmail className="mail-icon" />
      <p><a href="mailto:lolsniperwtf@gmail.com">lolsniperwtf@gmail.com</a></p>
      </div>
      
      </div>
      
      <div className="footer-right">
      
      <p className="footer-company-about">
      <span>Copyright © 2021</span>
      Creme de la Nage e Sapo-Boi Studios são marcas registradas e tals. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      
      <div className="footer-icons">
        <a href="https://www.facebook.com/aleapontando" target="_blank" className="icon"><FaFacebookSquare /></a>
        <a href="https://twitter.com/boltifi3d/status/1449422645062246404?s=20" target="_blank" className="icon"><FaTwitterSquare /></a>
        <a href="https://www.instagram.com/creme_de_la_nage" target="_blank" className="icon"><FaInstagram /></a>
        <a href="https://github.com/Creme-de-la-Dev" target="_blank" className="icon"><FaGithub /></a>
        <a href="https://discord.gg/GG8Sgg3P" target="_blank" className="icon"><FaDiscord /></a>
      </div>
      
      </div>
      
      </footer>
          </div>
        );
}

export default Footer;