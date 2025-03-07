# Sweet Treats Backend

**Sweet Treats Backend** adalah API berbasis **Express.js** yang digunakan untuk menangani operasi backend aplikasi **Sweet Treats**, termasuk autentikasi pengguna, manajemen produk, pesanan, dan promosi.

## 📌 Fitur Utama

✅ **Autentikasi & Otorisasi**  
- Menggunakan **JWT (JSON Web Token)** untuk autentikasi pengguna.
- Endpoint untuk **login, pendaftaran, dan manajemen pengguna**.

✅ **Manajemen Produk**  
- API untuk **menambahkan, memperbarui, menghapus, dan mengambil produk**.
- Produk dikategorikan berdasarkan jenis kue dan rekomendasi.

✅ **Manajemen Pesanan**  
- Endpoint untuk **membuat, melihat, dan memperbarui pesanan** pengguna.
- Sistem checkout dengan integrasi pembayaran.

✅ **Promosi & Voucher**  
- API untuk menampilkan **promo dan voucher diskon**.
- Menyediakan validasi penggunaan voucher.

✅ **Database dengan MySQL**  
- Menggunakan **MySQL dengan mysql2/promise** untuk menyimpan data pengguna, produk, pesanan, dan promosi.

✅ **Server Publik dengan Ngrok**  
- Server dapat diakses secara publik menggunakan **Ngrok**.

## 🚀 Teknologi yang Digunakan
- **Node.js & Express.js** untuk pengelolaan API.
- **MySQL (mysql2/promise)** untuk manajemen database.
- **JWT** untuk autentikasi pengguna.
- **dotenv** untuk pengelolaan variabel lingkungan.
- **Ngrok** untuk menjalankan server secara publik.

## 🔧 Cara Menjalankan Backend
1. **Clone repository**:
   ```sh
   git clone https://github.com/username/sweet-treats-backend.git
   cd sweet-treats-backend
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Buat file `.env`** dan isi dengan:
   ```env
   PORT=5000
   JWT_SECRET=your_jwt_secret
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASS=your_database_password
   DB_NAME=your_database_name
   ```
4. **Jalankan server**:
   ```sh
   npm start
   ```
5. **Gunakan Ngrok untuk mengakses server secara publik**:
   ```sh
   ngrok http 5000
   ```
6. **Backend berjalan di `http://localhost:5000` atau URL dari Ngrok** 🎉

Dengan backend ini, **Sweet Treats** dapat memberikan layanan yang cepat, aman, dan handal bagi pengguna! 🍰🚀

