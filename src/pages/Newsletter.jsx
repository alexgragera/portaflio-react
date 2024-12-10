import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <header className="newsletter-header">
        <h1>Pixel-Bit</h1>
        <h2>¿Tu negocio necesita una página web?</h2>
        <h2>Estás de suerte!!</h2>
      </header>
      <div className="newsletter-image">
        <img
          src="img/newsletter.jpeg" 
          alt="Modern Website"
        />
      </div>
      <div className="newsletter-body">
        <p>
          Solo por este mes, te hacemos una simulación de cómo podría ser la
          página web de tu negocio. Sin compromiso.
        </p>
        <h3>¡Totalmente Gratis!</h3>
        <p>
          Si quieres ver el resultado de la página que levantará tu negocio por
          completo, pulsa en el botón para ponerte en contacto con nosotros.
        </p>
      </div>
      <div className="newsletter-button mb-3">
        <a href="/contacto" className="btn btn-outline-light">Contáctame aquí</a>
      </div>
      <footer className="newsletter-footer">
        <div className="social-media">
          <a href="#facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="#twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="#instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p className="unsubscribe-text">
          Pincha <a href="#unsubscribe">aquí</a> para no recibir nuestros newsletters.
        </p>
      </footer>
    </div>
  );
}