/* ============================================================
   MARCELLINO NATANAEL - Project Data
   Source data for the portfolio grid (index.html).
   images: 1-2 photos per project. To add a photo, put the file in the
           img/ folder and write its path here, e.g. ['img/CHStore_1.png'].
           Leave [] to show a placeholder with the project initial.
           Filenames are case sensitive on GitHub Pages.
   link: Figma URL for design projects, Gamejolt URL for games.
         Leave '' while the link is not ready (button shows as disabled).
   ============================================================ */

window.PROJECTS = [
  /* ── MOBILE DESIGN ─────────────────────────────────────── */
  {
    id: 'ardor',
    category: 'mobile',
    name: 'Ardor',
    year: '2025',
    competition: true,
    description: {
      id: 'Aplikasi kebugaran dan tracking kesehatan yang dilengkapi dengan AI (Artificial Intelligence) untuk membantu penggunanya memulai hidup yang tidak hanya sehat, melainkan juga cerdas dalam menjaga kebugaran tubuhnya.',
      en: 'A fitness and health tracking app powered by AI (Artificial Intelligence) that helps users start a lifestyle that is not only healthy, but also smart about keeping their body fit.'
    },
    images: ['img/Welcome_page.png', 'img/Ardor_Home_page.png'],
    link: 'https://www.figma.com/design/4UvdqHfH9XZf9qgXbrrHdH/Ardor?node-id=50-896&t=dhVeGi9rliEsBpq8-1'
  },
  {
    id: 'retrash',
    category: 'mobile',
    name: 'Retrash',
    year: '2025',
    competition: false,
    description: {
      id: 'Aplikasi pengumpul sampah daur ulang untuk mengelola limbah menjadi produk yang bermanfaat. Pengguna yang berhasil mengumpulkan banyak sampah daur ulang dapat menukarkannya ke mesin Re-Trash terdekat untuk mendapatkan reward berupa poin, sebagai ajakan bagi masyarakat untuk peduli pada lingkungan yang berkelanjutan.',
      en: 'A recyclable waste collection app that turns waste into useful products. Users who collect plenty of recyclables can drop them at the nearest Re-Trash machine to earn reward points, encouraging people to care about a sustainable environment.'
    },
    images: ['img/Retrash_Splash_page.png', 'img/Retrash_Home_page.png'],
    link: 'https://www.figma.com/design/Ffewhqhx2o73u5yY2Svrej/RE-TRASH?node-id=0-1&t=6ClRxhSImjm4Bhr4-1'
  },
  {
    id: 'ciputra-mobile',
    category: 'mobile',
    name: 'Ciputra E-Property',
    year: '2025',
    competition: false,
    description: {
      id: 'Super App Ciputra yang mengintegrasikan seluruh kebutuhan, mulai dari pencarian rumah, pembayaran tagihan, pengecekan kondisi rumah berkala, hingga transaksi lainnya dalam satu aplikasi.',
      en: 'A Ciputra super app that brings every need together, from house hunting, bill payments and periodic home condition checks to other transactions, all in one app.'
    },
    images: ['img/Ciputra_login_page.png', 'img/Ciputra_Home_page.png'],
    link: 'https://www.figma.com/design/5lLei9fLuKHWLk6tPCMgnP/Ciputra-E-Property?node-id=285-58&t=vfZC6eof9JuIaMDV-1'
  },
  {
    id: 'padelin',
    category: 'mobile',
    name: 'Padelin',
    year: '2026',
    competition: false,
    description: {
      id: 'Aplikasi kursus dan latihan olahraga padel dengan sistem sharing dan pembelajaran bersama coach atau komunitas padel.',
      en: 'A padel course and training app with a sharing system for learning together with coaches or the padel community.'
    },
    images: ['img/Padelin_Sign-In_page.png', 'img/Padelin_Community_page.png'],
    link: 'https://www.figma.com/design/KFa87xf5ARefRmE7YmYEus/Padelin?node-id=34-371&t=f0zwl8n0hS8AufOP-1'
  },
  {
    id: 'ladang-amal',
    category: 'mobile',
    name: 'Ladang Amal',
    year: '2025',
    competition: false,
    description: {
      id: 'Aplikasi penggalangan dana atau donasi untuk korban bencana guna mendukung gerakan kemanusiaan yang saling membantu, terutama kepada mereka yang membutuhkan.',
      en: 'A fundraising and donation app for disaster victims that supports humanitarian movements of helping one another, especially those in need.'
    },
    images: ['img/Login_UI.png', 'img/Home.png'],
    link: 'https://www.figma.com/design/AnILwBAecGiQx8Xh435Rr6/LadangAmalUI?node-id=0-1&t=88VLshHVg380ipAZ-1'
  },
  {
    id: 'go-sweating',
    category: 'mobile',
    name: 'Go Sweating',
    year: '2025',
    competition: true,
    description: {
      id: 'Aplikasi kebugaran fisik dan tracking nutrisi kebutuhan tubuh dengan sejumlah fitur yang relevan.',
      en: 'A physical fitness and body nutrition tracking app with a set of relevant features.'
    },
    images: ['img/Sign-In Account.png', 'img/Guest Account.png'],
    link: 'https://www.figma.com/design/hlx3t06rDQ50JcEDixWoyr/Go-Sweating?node-id=882-11374&t=w8D7iWpwD3cbC0OX-1'
  },

  /* ── WEB DESIGN ────────────────────────────────────────── */
  {
    id: 'chstore',
    category: 'website',
    name: 'CHStore',
    year: '2026',
    competition: false,
    description: {
      id: 'Website E-Commerce (B2C) yang dirancang untuk pengguna yang memiliki bisnis reseller iPhone agar dapat menjangkau lebih banyak customer dan mempermudah owner dalam melakukan manajemen produk.',
      en: 'A B2C e-commerce website designed for iPhone resellers to reach more customers and make product management easier for the owner.'
    },
    images: ['img/CHStore_Home_Page.png', 'img/iPad Pro M5 wifi.png'],
    link: 'https://www.figma.com/design/U8k5LpnPRjOFp1Gv0bDsXm/CHStore?node-id=260-4859&t=r2klOl3d7tAIystw-1'
  },
  {
    id: 'karisma-rekomendasi',
    category: 'website',
    name: 'Aplikasi Internal Penentuan Rekomendasi Aset Lelang PT Karisma Dinamika Purwa',
    nameEn: 'Auction Asset Recommendation Internal App, PT Karisma Dinamika Purwa',
    year: '2026',
    competition: false,
    description: {
      id: 'Aplikasi internal PT Karisma Dinamika Purwa untuk menentukan rekomendasi aset lelang sebelum dipublikasikan, menggunakan algoritma SAW (Simple Additive Weighting) yang menggabungkan perhitungan bobot kriteria dengan matriks untuk menghasilkan perangkingan dan rekomendasi kelayakan.',
      en: 'An internal app for PT Karisma Dinamika Purwa that recommends auction assets before they are published, using the SAW (Simple Additive Weighting) algorithm to combine criteria weights with a matrix to produce rankings and feasibility recommendations.'
    },
    images: ['img/Karisma_Login page.png', 'img/Karisma_Dashboard_Page.png'],
    link: 'https://www.figma.com/design/P217HE16LunkINNSXQloVR/Karisma-Dinamika-Purwa?node-id=238-805&t=RxWi0GqJ9y6VWYkl-1'
  },
  {
    id: 'karisma-pemasaran',
    category: 'website',
    name: 'Aplikasi Internal Pemasaran Aset Lelang PT Karisma Dinamika Purwa',
    nameEn: 'Auction Asset Marketing Internal App, PT Karisma Dinamika Purwa',
    year: '2026',
    competition: false,
    description: {
      id: 'Aplikasi internal PT Karisma Dinamika Purwa untuk memasarkan aset lelang yang sudah dinilai kelayakannya. Website dilengkapi fitur seperti optimasi SEO (Search Engine Optimization) dan Google Calendar agar produk mudah dicari dan penjadwalan publikasi aset terdokumentasi dengan baik.',
      en: 'An internal app for PT Karisma Dinamika Purwa that markets auction assets that have passed the feasibility assessment. It includes SEO (Search Engine Optimization) and Google Calendar integration so listings are easy to find and publication schedules are well documented.'
    },
    images: ['img/Screenshot 2026-10-04 164822.png', 'img/Screenshot 2026-10-04 164923.png'],
    link: 'https://www.figma.com/design/P217HE16LunkINNSXQloVR/Karisma-Dinamika-Purwa?node-id=238-805&t=RxWi0GqJ9y6VWYkl-1'
  },
  {
    id: 'ciputra-web',
    category: 'website',
    name: 'Ciputra E-Property Web Version',
    year: '2026',
    competition: false,
    description: {
      id: 'Super App Ciputra versi website yang mengintegrasikan seluruh kebutuhan, mulai dari pencarian rumah, pembayaran tagihan, pengecekan kondisi rumah berkala, hingga transaksi lainnya dalam satu aplikasi.',
      en: 'The web version of the Ciputra super app, bringing every need together, from house hunting, bill payments and periodic home condition checks to other transactions, in one place.'
    },
    images: ['img/Ciputra Web Page.png', 'img/Ciputra Detail Residences.png'],
    link: 'https://www.figma.com/design/5lLei9fLuKHWLk6tPCMgnP/Ciputra-E-Property?node-id=592-1199&t=vfZC6eof9JuIaMDV-1'
  },
  {
    id: 'nowl-vision',
    category: 'website',
    name: 'Nowl Vision Game (Company Profile)',
    year: '2026',
    competition: false,
    description: {
      id: 'Website portfolio bisnis pribadi yang bergerak di bidang Game Development untuk memperkenalkan game, baik yang sudah maupun belum dirilis, kepada publik.',
      en: 'A portfolio website for a personal game development business that introduces both released and upcoming games to the public.'
    },
    images: ['img/Nowl_Project_Page (2).png', 'img/Nowl_Project_Page (1).png'],
    link: 'https://www.figma.com/design/qTMsQQdWMXyOEyRiB30uPH/PT-Nusa-Interactive-Studio?node-id=2-2&t=QogjT7hUx2xaJ6B5-1'
  },
  {
    id: 'meraki-soundscape',
    category: 'website',
    name: 'Meraki Soundscape',
    year: '2026',
    competition: false,
    description: {
      id: 'Website blog yang berfokus pada ulasan, review, dan rekomendasi produk audio seperti TWS dan headphone untuk para pengguna produk audio.',
      en: 'A blog website focused on reviews and recommendations of audio products such as TWS earbuds and headphones for audio enthusiasts.'
    },
    images: ['img/Artikel Infomational.png', 'img/Marketplace.png'],
    link: 'https://www.figma.com/design/JszPutqHzyc3fR0CcIwyuS/MerakiSoundscape?node-id=60-383&t=VN440EtMVJJrkiWy-1'
  },

  /* ── GAME DEVELOPMENT ──────────────────────────────────── */
  {
    id: 'the-child-kidnapper',
    category: 'game',
    name: 'The Child Kidnapper',
    year: '2024',
    competition: true,
    description: {
      id: 'Perancangan, pengembangan, dan optimalisasi game bertemakan Nusantara yang mengangkat kisah urban legend Wewe Gombel untuk memperkenalkan budaya, cerita rakyat, dan urban legend yang dimiliki Indonesia.',
      en: 'Design, development and optimization of an Indonesian-themed game based on the Wewe Gombel urban legend, introducing the culture, folklore and urban legends of Indonesia.'
    },
    images: ['img/Gombel_1_1.png', 'img/Gombel_2.png'],
    link: ''
  },
  {
    id: 'jurig-jiwa',
    category: 'game',
    name: 'Jurig Jiwa Nu Leungit',
    year: '2024',
    competition: true,
    description: {
      id: 'Perancangan, pengembangan, dan optimalisasi game bertemakan lokal yang mengangkat kisah pesugihan sebuah keluarga yang berujung pada kutukan bagi keluarga tersebut.',
      en: 'Design, development and optimization of a locally themed game about a family that performs a pesugihan ritual, which brings a curse upon the whole family.'
    },
    images: ['img/jurig_1.png', 'img/jurig_2.png'],
    link: 'https://drive.google.com/drive/folders/13mLicJ_2n0_N6vzwlxLpZ1F8Uv6TgNwZ?usp=drive_link'
  },
  {
    id: 'demit',
    category: 'game',
    name: 'Demit',
    year: '2024',
    competition: false,
    description: {
      id: 'Perancangan, pengembangan, dan optimalisasi game bertemakan lokal tentang seorang mahasiswa perantau yang mencari tempat tinggal murah. Saking murahnya, ia tidak mengetahui kisah kelam yang pernah terjadi di tempat itu pada masa lampau.',
      en: 'Design, development and optimization of a locally themed game about an out-of-town student looking for cheap lodging. It is so cheap that he never learns about the dark history of the place.'
    },
    images: ['img/Gambar_1.png', 'img/Gambar_2.png'],
    link: 'https://gamejolt.com/games/demithorrorgame/907891'
  },
  {
    id: 'perjanjian-gaib',
    category: 'game',
    name: 'Perjanjian Gaib',
    year: '2025',
    competition: true,
    description: {
      id: 'Perancangan, pengembangan, dan optimalisasi game bertemakan lokal tentang perjanjian gaib keluarga Jaka yang diwariskan turun-temurun dan justru mendatangkan petaka. Akankah Jaka berhasil mematahkan kutukan tersebut, atau menerima keadaan?',
      en: 'Design, development and optimization of a locally themed game about a supernatural pact made by Jaka\'s family, passed down for generations and bringing only disaster. Will Jaka break the curse, or accept his fate?'
    },
    images: ['img/Foto_1.png', 'img/Foto_2.png'],
    link: 'https://gamejolt.com/games/perjanjiangaib/997572'
  }
];
