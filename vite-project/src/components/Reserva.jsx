import React, { useState } from "react";
import './Reserva.css'

function Reserva() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    tableNumber: "",
    peopleCount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação dos dados
    if (formData.tableNumber <= 0 || formData.tableNumber > 10) {
      alert("O número da mesa deve ser entre 1 e 10.");
      return;
    }

    if (formData.peopleCount <= 0 || formData.peopleCount > 6) {
      alert("A quantidade de pessoas deve ser entre 1 e 6.");
      return;
    }

    // Armazenar as reservas no localStorage
    const currentReservations = JSON.parse(localStorage.getItem("reservations")) || [];

    currentReservations.push({
      name: formData.name,
      date: formData.date,
      tableNumber: formData.tableNumber,
      peopleCount: formData.peopleCount,
    });

    localStorage.setItem("reservations", JSON.stringify(currentReservations));

    // Limpar o formulário após o envio
    setFormData({
      name: "",
      date: "",
      tableNumber: "",
      peopleCount: "",
    });

    alert("Reserva realizada com sucesso!");
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    // Forçar o ano como o ano atual
    selectedDate.setFullYear(new Date().getFullYear());

    // Atualiza o valor do estado apenas com mês e dia
    setFormData({
      ...formData,
      date: selectedDate.toISOString().split("T")[0], // Mantém no formato yyyy-mm-dd
    });
  };

  return (
    <div className="form-container">
      <h1>Formulário de Reserva</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Data (sem o ano):
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleDateChange}
            required
          />
        </label>
        <br />
        <label>
          Número da Mesa (1 a 10):
          <input
            type="number"
            name="tableNumber"
            value={formData.tableNumber}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </label>
        <br />
        <label>
          Número de Pessoas (1 a 6):
          <input
            type="number"
            name="peopleCount"
            value={formData.peopleCount}
            onChange={handleChange}
            min="1"
            max="6"
            required
          />
        </label>
        <br />
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
}

export default Reserva;
