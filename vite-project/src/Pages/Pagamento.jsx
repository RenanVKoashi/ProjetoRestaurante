import React, { useState } from "react";
import "./pagamento.css";

function Pagamento() {
  const [activePayment, setActivePayment] = useState("payment-card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    email: "",
  });

  const handlePaymentChange = (paymentMethod) => {
    setActivePayment(paymentMethod);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  };

  return (
    <div className="container">
      {/* Menu lateral */}
      <div className="left">
        <p>Método de pagamento</p>
        <hr className="divider" />
        <div className="metodo">
          <div
            onClick={() => handlePaymentChange("payment-card")}
            className={`payment-option ${
              activePayment === "payment-card" ? "active" : ""
            }`}
          >
            <i className="fa-solid fa-credit-card"></i>
            Cartão de Crédito/Débito
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Formulários de pagamento */}
      <div className="center">
        <a href="https://www.shift4shop.com/credit-card-logos.html">
          <img
            alt="Credit Card Logos"
            title="Credit Card Logos"
            src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-4.png"
            className="credit-card-logos"
          />
        </a>
        <hr className="divider" />

        {/* Pagamento por cartão */}
        {activePayment === "payment-card" && (
          <div className="card-details">
            <form onSubmit={handleSubmit}>
              <p>Número do cartão</p>
              <div className="c-number">
                <input
                  id="cardNumber"
                  className="cc-number"
                  placeholder="Número do cartão"
                  maxLength="16"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
                <i className="fa-solid fa-credit-card"></i>
              </div>

              <div className="c-details">
                <div>
                  <p>Vencimento</p>
                  <input
                    id="expiryDate"
                    className="cc-exp"
                    placeholder="MM/YY"
                    maxLength="5"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="email">
                <p>Email</p>
                <input
                  type="email"
                  id="email"
                  placeholder="exemplo@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit">Realizar pagamento</button>
            </form>
          </div>
        )}
      </div>

      {/* Informações do pedido */}
      <div className="right">
        <hr className="divider" />
      </div>
    </div>
  );
}

export default Pagamento;