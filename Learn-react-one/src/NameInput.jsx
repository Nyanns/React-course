import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function NameInput({ setName }) {
  const [inputValue, setInputValue] = useState(''); // State lokal untuk menyimpan input sementara.

  function handleInputChange(event) {
    setInputValue(event.target.value); // Memperbarui nilai input lokal.
  }

  function handleSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman.
    setName(inputValue); // Mengirim nilai input ke komponen utama melalui prop setName.
    setInputValue(''); // Mengosongkan input setelah submit.
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Input Your Name:</label>
      <input
        type="text"
        id="name"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Validasi tipe data props menggunakan PropTypes
NameInput.propTypes = {
  setName: PropTypes.func.isRequired, // setName harus berupa fungsi dan wajib diisi
};

export default NameInput;
