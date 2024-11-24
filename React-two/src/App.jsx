import { useState } from "react";
import "./App.css";

function App() {
  // State untuk nama input
  const [name, setName] = useState("");

  const capitalizeAll = function (str) {
    let result = ""; // Variabel untuk menyimpan hasil
    for (let i = 0; i < str.length; i++) {
      result += str[i].toUpperCase(); // Tambahkan huruf besar ke hasil
    }
    return result; // Kembalikan hasil akhir
  };

  // Handler untuk update input nama
  const handleChange = (e) => {
    setName(e.target.value); // Update state dengan input pengguna
  };

  return (
    <>
      {/* Input untuk mengganti nama */}
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Masukkan nama :"
      />

      {/* Tampilkan nama yang sudah diubah menjadi kapital semua */}
      <h1>{capitalizeAll(name)}</h1>
    </>
  );
}

export default App;
