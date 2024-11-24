import { useState } from "react";
import "./calender.css";

const Calender = () => {
  // Dapatkan tanggal saat ini untuk digunakan sebagai referensi "hari ini"
  const today = new Date();

  // Gunakan state untuk melacak bulan dan tahun yang aktif
  const [currentDate, setCurrentDate] = useState(today);

  // Ambil tahun dan bulan dari tanggal aktif (currentDate)
  const year = currentDate.getFullYear(); // Tahun aktif (misalnya 2024)
  const month = currentDate.getMonth(); // Bulan aktif (0 = Januari, 11 = Desember)

  // Daftar nama-nama bulan dalam bahasa Inggris
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Hitung jumlah hari dalam bulan aktif
  // new Date(year, month + 1, 0) => Membuat tanggal di hari terakhir bulan aktif
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Hitung hari pertama dalam bulan aktif (0 = Minggu, 6 = Sabtu)
  const firstDay = new Date(year, month, 1).getDay();

  // Fungsi untuk berpindah ke bulan berikutnya
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1)); // Tambah 1 ke bulan
  };

  // Fungsi untuk berpindah ke bulan sebelumnya
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1)); // Kurangi 1 dari bulan
  };

  // Array untuk menyusun elemen grid kalender
  const calenderDays = [];

  // Tambahkan sel kosong (placeholder) sebelum hari pertama bulan dimulai
  for (let i = 0; i < firstDay; i++) {
    calenderDays.push(
      <div key={`empty-${i}`} className="empty"></div> // Sel kosong
    );
  }

  // Tambahkan elemen untuk setiap hari dalam bulan aktif
  for (let day = 1; day <= daysInMonth; day++) {
    // Tentukan apakah hari ini adalah "hari ini" (highlight)
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    // Tambahkan elemen hari ke dalam array calenderDays
    calenderDays.push(
      <div key={day} className={`day ${isToday ? "today" : ""}`}>
        {day}
      </div>
    );
  }

  // Render komponen kalender
  return (
    <div className="calender">
      {/* Header untuk tombol navigasi dan nama bulan */}
      <header>
        <button onClick={prevMonth}>←</button>{" "}
        {/* Tombol untuk bulan sebelumnya */}
        <h2>
          {months[month]} {year} {/* Tampilkan nama bulan dan tahun */}
        </h2>
        <button onClick={nextMonth}>→</button>{" "}
        {/* Tombol untuk bulan berikutnya */}
      </header>

      {/* Grid kalender */}
      <div className="days-grid">
        {/* Nama hari dalam seminggu */}
        <div className="weekday">Sun</div>
        <div className="weekday">Mon</div>
        <div className="weekday">Tue</div>
        <div className="weekday">Wed</div>
        <div className="weekday">Thu</div>
        <div className="weekday">Fri</div>
        <div className="weekday">Sat</div>

        {/* Elemen hari (termasuk sel kosong dan hari dalam bulan) */}
        {calenderDays}
      </div>
    </div>
  );
};

export default Calender;
