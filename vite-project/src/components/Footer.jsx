import React from "react";
import "./Footer.css"; // Para adicionar o estilo do rodapé

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div></div>
        <p>&copy; 2024 Seu Restaurante. <br /> Todos os direitos reservados.
          </p>
        
        <div className="contact-info">
          <p><strong>Endereço:</strong> Rua Exemplo, 123, Bairro Central</p>
          <p><strong>Telefone:</strong> (11) 1234-5678</p>
        </div>

        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;