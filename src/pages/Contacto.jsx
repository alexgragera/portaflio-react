import React, { useState } from "react";
import "./Contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    email: "",
    mensaje: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(true);
    setFormData({
      nombre: "",
      apellido1: "",
      apellido2: "",
      email: "",
      mensaje: "",
    });
    setTimeout(() => setSuccessMessage(false), 5000);
  };

  return (
    <div className="container mt-4">

      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="contact-form mx-3 mb-5">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control bg-black text-white"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido1" className="form-label">
                  Primer Apellido
                </label>
                <input
                  type="text"
                  className="form-control bg-black text-white"
                  id="surname"
                  name="apellido1"
                  value={formData.apellido1}
                  onChange={handleChange}
                  placeholder="Escribe tu primer apellido"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido2" className="form-label">
                  Segundo Apellido
                </label>
                <input
                  type="text"
                  className="form-control bg-black text-white"
                  id="apellido2"
                  name="apellido2"
                  value={formData.apellido2} // Fix typo here
                  onChange={handleChange}
                  placeholder="Escribe tu segundo apellido"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control bg-black text-white"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nombre@ejemplo.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control bg-black text-white"
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Escribe tu mensaje aquí"
                  required
                />
              </div>
              <button type="submit" className="btn btn-outline-light w-100">
                Enviar
              </button>
            </form>

            {successMessage && (
              <div
                id="successMessage"
                className="alert alert-success text-center"
                role="alert"
              >
                ¡Tu mensaje se ha enviado correctamente!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}