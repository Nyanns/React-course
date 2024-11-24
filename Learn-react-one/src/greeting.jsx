// greeting.js
import PropTypes from 'prop-types'; // Import PropTypes

function Greeting({ name }) {
    return <h2>Welcome, {name}!</h2>;
}

// Validasi tipe data props menggunakan PropTypes
Greeting.propTypes = {
    name: PropTypes.string.isRequired, // name harus berupa string dan wajib diisi
};

export default Greeting;
