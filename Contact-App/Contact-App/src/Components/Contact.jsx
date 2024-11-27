import PropTypes from "prop-types";
import "../CSS/Contact.css";

// Komponen utama Contact
function Contact({ contacts, setContacts }) {
  // Fungsi untuk menghapus kontak berdasarkan indeks
  const handleDelete = (indexToRemove) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (confirmed) {
      const filteredContacts = contacts.filter(
        (_, index) => index !== indexToRemove
      );
      setContacts(filteredContacts);
    }
  };

  return (
    <div className="contact-app">
      {contacts.length > 0 ? (
        <>
          <h1 className="contact-app__title">Daftar Kontak</h1>
          <ContactList contacts={contacts} onDelete={handleDelete} />
        </>
      ) : (
        <p className="contact-app__empty">No contacts available.</p>
      )}
    </div>
  );
}

// Komponen untuk daftar kontak
function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((contact, index) => (
        <ContactItem
          key={contact.id || index} // Gunakan ID unik jika tersedia
          {...contact} // Sebarkan properti kontak
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // ID opsional untuk keunikan
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

// Komponen untuk setiap item kontak
function ContactItem({ name, username, image, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage image={image} />
      <ContactItemBody name={name} username={username} />
      <ContactItemDelete onDelete={onDelete} />
    </div>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  image: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

// Komponen untuk menampilkan gambar kontak
function ContactItemImage({ image }) {
  return (
    <div className="contact-item__image">
      <img
        src={image || "/images/default.jpg"}
        alt="Profile"
        height="72"
        width="72"
      />
    </div>
  );
}

ContactItemImage.propTypes = {
  image: PropTypes.string,
};

// Komponen untuk body kontak (nama dan username)
function ContactItemBody({ name, username }) {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__name">{name}</h3>
      <h4 className="contact-item__username">{username}</h4>
    </div>
  );
}

ContactItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

// Komponen untuk tombol hapus kontak
function ContactItemDelete({ onDelete }) {
  return (
    <div className="contact-item__delete">
      <button
        className="contact-item__delete-button"
        onClick={onDelete}
        aria-label="Delete contact"
      >
        Delete
      </button>
    </div>
  );
}

ContactItemDelete.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
