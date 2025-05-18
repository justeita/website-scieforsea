# Panduan Kontribusi untuk Scieforsea

Terima kasih atas minat Anda untuk berkontribusi pada proyek Scieforsea! Berikut adalah panduan untuk membantu Anda berkontribusi.

## Setup Proyek

1. Clone repositori ini:
```bash
git clone https://github.com/scieforsea/scieforsea.github.io.git
cd scieforsea.github.io
```

2. Install dependensi:
```bash
npm install
```

3. Jalankan server pengembangan:
```bash
npm start
```

Server akan berjalan di http://localhost:3000

## Struktur Proyek

```
/
├── assets/         # Aset statis (gambar, video, font, dll)
├── css/            # File CSS
├── js/             # File JavaScript
├── pages/          # Halaman HTML
│   ├── events/     # Halaman untuk acara-acara khusus
│   └── static/     # Halaman statis standar
└── index.html      # Halaman utama
```

## Konvensi Kode

- HTML: Gunakan indentasi 2 spasi
- CSS: Gunakan kebab-case untuk nama kelas (contoh: `.header-title`)
- JavaScript: Gunakan camelCase untuk variabel dan fungsi
- Gunakan kebab-case untuk nama file (contoh: `coming-soon.html`, `photo-gallery.js`)

## Perubahan yang diterima

- Perbaikan bug
- Tambahan fitur
- Peningkatan UI/UX
- Optimasi performa
- Dokumentasi

## Proses Pull Request

1. Fork repositori ini
2. Buat branch fitur (`git checkout -b feature/amazing-feature`)
3. Commit perubahan Anda (`git commit -m 'Add some amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buka Pull Request

## Linting & Formatting

Proyek ini menggunakan ESLint dan Prettier untuk menjaga konsistensi kode:

```bash
# Jalankan linter
npm run lint

# Format kode secara otomatis
npm run format
```

## Responsivitas

Pastikan perubahan UI/UX yang Anda buat berfungsi dengan baik di:
- Desktop (minimum width 1024px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## Pertanyaan?

Jika Anda memiliki pertanyaan, silakan buka issue baru di repositori GitHub.

---

Terima kasih atas kontribusi Anda!
