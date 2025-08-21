# Cara Menggunakan Website Ready for Order

## Langkah 1: Update Nomor WhatsApp
1. Buka file `script.js`
2. Ganti baris ini dengan nomor WhatsApp Anda:
   ```javascript
   const WHATSAPP_NUMBER = '6281234567890'; // Ganti dengan nomor WhatsApp Anda
   ```
   Contoh: Jika nomor Anda 0812-3456-7890, tulis: `6281234567890`

## Langkah 2: Upload ke Hosting
1. Upload semua file dalam folder `ready-for-order` ke hosting Anda
2. Atau gunakan layanan gratis seperti:
   - Netlify (drag & drop)
   - Vercel
   - GitHub Pages

## Langkah 3: Test Website
1. Buka website Anda
2. Klik salah satu layanan
3. Klik "Pesan Sekarang" pada salah satu paket
4. Pastikan WhatsApp terbuka dengan pesan otomatis

## Link Instagram Bio
Gunakan link: `https://namadomainanda.com/ready-for-order/`

## Struktur File
```
ready-for-order/
├── index.html      (Halaman utama)
├── styles.css      (Desain & styling)
├── script.js       (Fungsi WhatsApp & interaktif)
└── SETUP.md        (Panduan ini)
```

## Customization
- Untuk mengubah warna: edit file `styles.css`
- Untuk menambah paket: edit file `index.html`
- Untuk mengubah pesan WhatsApp: edit fungsi `orderPackage()` di `script.js`

## Troubleshooting
- Jika WhatsApp tidak terbuka: pastikan nomor WhatsApp sudah benar
- Jika tampilan rusak: cek koneksi internet untuk Font Awesome
- Untuk mobile: website sudah responsive otomatis
