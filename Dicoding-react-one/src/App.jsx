import "./App.css";
import Calendar from "./calender";
import Instagram from "./instagram"; // Impor komponen Instagram (PascalCase)
import FilterableProductTable from "./productTable";

function App() {
  return (
    <>
      {/* Penggunaan pertama dengan children */}
      <Instagram
        name="John Doe"
        username="johndoe"
        bio="I'm a software developer"
        isVerified={true}
      >
        {/* Konten tambahan sebagai children */}
        <p>Follow me for more updates!</p>
        <button>Send Message</button>
      </Instagram>

      {/* Penggunaan kedua tanpa children */}
      <Instagram
        name="Jane Doe"
        username="janedoe"
        bio="I'm a graphic designer"
        isVerified={false}
      />

      <div className="calender-container">
        <h1>My Calendar</h1>
        <Calendar />
      </div>

      <FilterableProductTable />
    </>
  );
}

export default App;
