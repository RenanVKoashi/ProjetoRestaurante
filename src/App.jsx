import React, { useState } from "react";
import "./style.css";

function App() {
  const [activePayment, setActivePayment] = useState("payment-card");

  const handlePaymentChange = (paymentMethod) => {
    setActivePayment(paymentMethod);
  };

  return (
    <div className="container">
      {/* Menu lateral */}
      <div className="left">
        <p>Método de pagamento</p>
        <hr style={{ border: "1px solid #ccc", margin: "0 15px" }} />
        <div className="metodo">
          <div
            onClick={() => handlePaymentChange("payment-card")}
            style={{
              color:
                activePayment === "payment-card" ? "greenyellow" : "inherit",
            }}
          >
            <i
              className="fa-solid fa-credit-card"
              style={{
                color:
                  activePayment === "payment-card" ? "greenyellow" : "inherit",
              }}
            ></i>
            Cartão de Crédito
          </div>
          <div
            onClick={() => handlePaymentChange("payment-bank")}
            style={{
              color:
                activePayment === "payment-bank" ? "greenyellow" : "inherit",
            }}
          >
            <i className="fa-solid fa-building-columns"></i> PIX
          </div>
          <div
            onClick={() => handlePaymentChange("payment-wallet")}
            style={{
              color:
                activePayment === "payment-wallet" ? "greenyellow" : "inherit",
            }}
          ></div>
        </div>
        <hr style={{ border: "1px solid #ccc", margin: "0 15px" }} />
      </div>

      {/* Formulários de pagamento */}
      <div className="center">
        <a href="https://www.shift4shop.com/credit-card-logos.html">
          <img
            alt="Credit Card Logos"
            title="Credit Card Logos"
            src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-4.png"
            width="250"
            height="auto"
          />
        </a>
        <hr style={{ border: "1px solid #ccc", margin: "0 15px" }} />

        {/* Pagamento por cartão */}
        {activePayment === "payment-card" && (
          <div className="card-details">
            <form>
              <p>Número do cartão</p>
              <div className="c-number">
                <input
                  id="number"
                  className="cc-number"
                  placeholder="Número do cartão"
                  maxLength="19"
                  required
                />
                <i
                  className="fa-solid fa-credit-card"
                  style={{ margin: 0 }}
                ></i>
              </div>

              <div className="c-details">
                <div>
                  <p>Vencimento</p>
                  <input
                    id="e-date"
                    className="cc-exp"
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                </div>
                <div>
                  <p>CVV</p>
                  <div className="cvv-box">
                    <input
                      id="cvv"
                      className="cc-cvv"
                      placeholder="CVV"
                      maxLength="3"
                      required
                    />
                    <i
                      className="fa-solid fa-circle-question"
                      title="3 dígitos atrás do cartão"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="email">
                <p>Email</p>
                <input
                  type="email"
                  placeholder="examplo@email.com"
                  id="email"
                  required
                />
              </div>
              <button type="submit">Realizar pagamento</button>
            </form>
          </div>
        )}

        {/* Pagamento via PIX */}
        {activePayment === "payment-bank" && (
          <div id="payment-bank">
            <p>Finalize o pagamento para gerar o QRCODE!</p>
          </div>
        )}

        {/* Pagamento via Apple/Google Pay */}
        {activePayment === "payment-wallet" && (
          <div id="payment-wallet">
            <p>
              Formulário para pagamento via Apple/Google Pay (aqui você pode
              adicionar inputs específicos).
            </p>
          </div>
        )}
      </div>

      {/* Informações do pedido */}
      <div className="right">
        <p>Informações</p>
        <hr style={{ border: "1px solid #ccc", margin: "0 15px" }} />
        <div className="details">
          <div style={{ fontWeight: "bold", padding: "3px 0" }}>Pedido</div>
          <div style={{ padding: "3px 0" }}>Bandeiras aceitas:</div>
          <hr style={{ border: "1px solid #ccc", margin: "0 15px" }} />
          <a href="https://www.shift4shop.com/credit-card-logos.html">
            <img
              alt="Credit Card Logos"
              title="Credit Card Logos"
              src="https://www.shift4shop.com/images/credit-card-logos/cc-lg-4.png"
              width="250"
              height="auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
