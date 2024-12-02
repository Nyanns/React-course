import { useState } from "react";
import AddContact from "./Components/AddContact";
import Contact from "./Components/Contact";
import DataContact from "./utils/DataContact";
import "./CSS/App.css";

function App() {
  // State global untuk daftar kontak
  const [contacts, setContacts] = useState(
    DataContact.map((contact) => ({
      ...contact,
      image: contact.image || "/images/default-avatar.jpeg", // Tambahkan gambar default jika kosong
    }))
  );

  return (
    <div className="app">
      {/* Judul Aplikasi */}
      <header className="app-header">
        <h1 style={{ padding: "24px" }}>Contact App</h1>
      </header>

      {/* Komponen untuk Menambahkan Kontak */}
      <AddContact contacts={contacts} setContacts={setContacts} />

      {/* Komponen untuk Menampilkan Kontak */}
      <Contact contacts={contacts} setContacts={setContacts} />
    </div>
  );
}

export default App;
