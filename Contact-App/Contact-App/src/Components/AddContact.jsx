import { useState } from "react";
import PropTypes from "prop-types"; // Untuk validasi prop
import "../CSS/AddContact.css";

function AddContact({ contacts, setContacts }) {
  // Fungsi untuk menambahkan kontak baru
  const handleAddContact = (newContact) => {
    const contactWithImage = {
      ...newContact,
      username: `@${newContact.username.replace(/^@/, "")}`,
      image: newContact.image || "/images/default.jpg", // Tambahkan gambar default jika kosong
    };
    setContacts([...contacts, contactWithImage]);
  };

  return (
    <div className="addcontact">
      <Title />
      <AddContactForm onAddContact={handleAddContact} />
    </div>
  );
}

function Title() {
  return (
    <div className="addcontact-title">
      <h1 className="addcontact-title__title">Add Contact</h1>
    </div>
  );
}

function AddContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
  });

  const [error, setError] = useState("");

  // Mengubah nilai form berdasarkan input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value.trimStart() }); // Trim spasi awal
  };

  // Fungsi untuk submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.username.trim()) {
      setError("Name and Username are required."); // Pesan error
      return;
    }

    onAddContact(formData); // Kirim data ke induk
    setFormData({ name: "", username: "" }); // Reset form
    setError(""); // Reset error
  };

  return (
    <form onSubmit={handleSubmit} className="addcontact-form">
      <div className="addcontact-data">
        <ContactName value={formData.name} onChange={handleChange} />
        <ContactUsername value={formData.username} onChange={handleChange} />
        <ContactSubmitButton />
      </div>
      {error && <p className="addcontact-error">{error}</p>}{" "}
      {/* Tampilkan pesan error */}
    </form>
  );
}

function ContactName({ value, onChange }) {
  return (
    <div className="contactname__input">
      <input
        type="text"
        placeholder="Name..."
        name="name"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

function ContactUsername({ value, onChange }) {
  return (
    <div className="contactusername__input">
      <input
        type="text"
        placeholder="Username..."
        name="username"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

function ContactSubmitButton() {
  return (
    <div className="contactsubmit__button">
      <button type="submit" className="addcontact-button">
        Add Contact
      </button>
    </div>
  );
}

// Validasi prop
AddContact.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};

AddContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

ContactName.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ContactUsername.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddContact;
