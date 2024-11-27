import { useState } from "react";
import "./CSS/Contact.css";

function Contact() {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({ name: "", email: "", gender: "" });

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}`
    );
  };

  // Fungsi untuk menangani perubahan pada input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); // Update state berdasarkan input
  };

  // Komponen Form Register
  function RegisterForm() {
    return (
      <div className="register-form">
        <h1 className="register-form__title">Register Form</h1>
        <form onSubmit={handleSubmit} className="register-form__form">
          <InputName />
          <InputEmail />
          <InputGender />
          <button type="submit" className="register-form__button">
            Kirim
          </button>
        </form>
      </div>
    );
  }

  // Komponen Input Nama
  function InputName() {
    return (
      <div className="register-form__field">
        <label htmlFor="name" className="register-form__label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="register-form__input"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nama Anda..."
        />
      </div>
    );
  }

  // Komponen Input Email
  function InputEmail() {
    return (
      <div className="register-form__field">
        <label htmlFor="email" className="register-form__label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="register-form__input"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Anda..."
        />
      </div>
    );
  }

  // Komponen Input Gender
  function InputGender() {
    return (
      <div className="register-form__field">
        <label htmlFor="gender" className="register-form__label">
          Gender:
        </label>
        <select
          id="gender"
          name="gender"
          className="register-form__select"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="" disabled>
            Pilih Gender...
          </option>
          <option value="Man">Man</option>
          <option value="Woman">Woman</option>
        </select>
      </div>
    );
  }

  return <RegisterForm />;
}

export default Contact;
