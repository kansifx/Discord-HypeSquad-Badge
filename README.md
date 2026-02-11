# ⚡ Discord HypeSquad House Changer

Script sederhana berbasis **JavaScript** untuk mengubah House HypeSquad Discord (Bravery, Brilliance, atau Balance) tanpa harus melalui kuis manual. Script ini bekerja dengan melakukan *hooking* pada modul internal Webpack Discord.

## ✨ Fitur
- **Instant Change**: Ganti house hanya dalam hitungan detik.
- **Automated Hooking**: Mencari modul `HTTPUtils` secara otomatis.
- **Lightweight**: Tanpa dependensi eksternal, cukup jalankan di console.

## 🚀 Cara Penggunaan

1. Buka Discord di Browser (Chrome/Edge) atau aplikasi Desktop.
2. Tekan `Ctrl + Shift + I` untuk membuka **Developer Tools**.
3. Pilih tab **Console**.
4. *Copy & Paste* seluruh kode dari file `change_hypesquad.js` di repository ini.
5. Tekan `Enter`.
6. Refresh Discord (`Ctrl + R`) untuk melihat perubahannya.

## 🏠 House ID Reference
Ubah nilai `houseId` pada script sesuai dengan keinginanmu:
- `1` : **House of Bravery**
- `2` : **House of Brilliance**
- `3` : **House of Balance**

## 🛠️ Detail Teknis
Script ini menggunakan teknik pendorongan chunk ke `webpackChunkdiscord_app` untuk mendapatkan akses ke fungsi internal Discord:
- Mengambil `wreq` (Webpack Require).
- Iterasi melalui `chunks` untuk menemukan modul `HTTPUtils`.
- Mengirimkan request `POST` ke endpoint `/hypesquad/online`.

## ⚠️ Peringatan
Gunakan dengan bijak. Script ini ditujukan untuk tujuan edukasi mengenai cara kerja Webpack di aplikasi berbasis Electron. Penggunaan script pihak ketiga pada konsol Discord secara teknis melanggar TOS Discord, jadi gunakan risiko ditanggung sendiri.
