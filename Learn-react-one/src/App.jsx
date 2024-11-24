import './App.css';
import { useState } from 'react';
import Greeting from './greeting'; // Mengimpor komponen Greeting
import NameInput from './NameInput'; // Mengimpor komponen NameInput
import { FavoriteFood as FoodComponent } from './fovoriteFood'; // Mengimpor komponen FavoriteFood dengan nama yang berbeda

function App() {
  const [name, setName] = useState('panda'); // State untuk menyimpan nama.

  return (
    <div className="container">
      {/* Menampilkan komponen Greeting */}
      <Greeting name={name} />

      {/* Menampilkan komponen NameInput dan mengirimkan fungsi setName sebagai prop */}
      <NameInput setName={setName} />

      <div> 
        <FoodComponent /> {/* Display the FavoriteFood component */}
      </div>
     
      <h1 className="namaBesar">
        Hello world = {name} {/* Menampilkan nilai 'name' yang telah diperbarui */}
      </h1>
    </div>
  );
}

export default App;
