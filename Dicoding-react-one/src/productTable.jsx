import PropTypes from "prop-types"; // Impor PropTypes untuk validasi tipe properti
import "./productTable.css"; // Impor file CSS untuk styling

// Komponen SearchBar
// Digunakan untuk menampilkan input pencarian dan checkbox
function SearchBar() {
  return (
    <div className="search-bar_container">
      {/* Input teks untuk pencarian */}
      <input type="text" placeholder="Search..." />
      <div className="search-bar__in_stock_checkbox">
        {/* Checkbox untuk memfilter produk yang tersedia */}
        <input type="checkbox" id="in-stock" />
        <label htmlFor="in-stock">Only show products in stock</label>
      </div>
    </div>
  );
}

// Komponen ProductCategoryRow
// Menampilkan kategori produk, seperti "Sporting Goods" atau "Electronics"
function ProductCategoryRow({ name }) {
  return (
    <tr>
      {/* Kategori akan menggunakan seluruh kolom (colSpan=2) */}
      <td colSpan={2}>
        <strong>{name}</strong>
      </td>
    </tr>
  );
}

// Validasi properti (props) untuk ProductCategoryRow
ProductCategoryRow.propTypes = {
  name: PropTypes.string.isRequired, // 'name' harus berupa string dan wajib
};

// Komponen ProductRow
// Menampilkan baris produk dengan nama dan harga
function ProductRow({ name, price }) {
  return (
    <tr>
      <td>{name}</td> {/* Nama produk */}
      <td>{price}</td> {/* Harga produk */}
    </tr>
  );
}

// Validasi properti (props) untuk ProductRow
ProductRow.propTypes = {
  name: PropTypes.string.isRequired, // 'name' harus berupa string dan wajib
  price: PropTypes.string.isRequired, // 'price' harus berupa string dan wajib
};

// Komponen ProductTable
// Mengelola tabel yang menampilkan produk dan kategori
function ProductTable() {
  return (
    <div className="product-table_container">
      <table>
        <thead>
          {/* Header tabel dengan kolom "Name" dan "Price" */}
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Kategori dan produk di tabel */}
          <ProductCategoryRow name="Sporting Goods" />
          <ProductRow name="Football" price="$49.99" />
          <ProductRow name="Baseball" price="$9.99" />
          <ProductRow name="Basketball" price="$29.99" />
          <ProductCategoryRow name="Electronics" />
          <ProductRow name="iPod Touch" price="$99.99" />
          <ProductRow name="iPhone 5" price="$399.99" />
          <ProductRow name="Nexus 7" price="$249.99" />
        </tbody>
      </table>
    </div>
  );
}

// Komponen utama FilterableProductTable
// Menggabungkan SearchBar dan ProductTable
function FilterableProductTable() {
  return (
    <div className="container">
      {/* Komponen untuk pencarian */}
      <SearchBar />
      {/* Komponen untuk tabel produk */}
      <ProductTable />
    </div>
  );
}

// Ekspor komponen utama agar dapat digunakan di file lain
export default FilterableProductTable;
