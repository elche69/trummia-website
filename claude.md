# 🍬 CLAUDE.MD — Hướng dẫn build website TRÙM MÍA (trummia.vn) trong 1 giờ

---

## 🎯 MỤC TIÊU

Build một website **tĩnh thuần HTML/CSS/JS** (không cần backend, không cần framework phức tạp) cho thương hiệu **Trùm Mía — by Mía 9 Vị**.

Website giới thiệu sản phẩm và địa điểm cửa hàng, định hướng khách hàng mua qua kênh mạng xã hội.

**Domain**: trummia.vn  
**Thời gian hoàn thành**: ≤ 60 phút  
**Tech stack**: HTML5 + Tailwind CSS CDN + Vanilla JS (không cần npm, không cần build tool)

---

## 🎨 DESIGN SYSTEM

### Màu sắc chủ đạo (lấy từ Logo)

```css
/* Màu chính */
--color-green-dark:   #1a4a1a;   /* Xanh lá đậm — nền, header */
--color-green-main:   #2d7a2d;   /* Xanh lá chính — button, accent */
--color-green-light:  #4caf50;   /* Xanh lá nhạt — hover */
--color-yellow-gold:  #f5c518;   /* Vàng gold — tiêu đề nổi bật, CTA */
--color-yellow-light: #ffe066;   /* Vàng nhạt — highlight */
--color-cream:        #fffde7;   /* Kem — background section sáng */
--color-white:        #ffffff;
--color-text-dark:    #1a2a1a;
```

### Typography

- Font chính: `'Nunito', sans-serif` — thân thiện, tròn trịa
- Font accent (tiêu đề lớn): `'Baloo 2', cursive` — vui tươi, năng động
- Import từ Google Fonts (nhúng vào `<head>`)

```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Baloo+2:wght@700;800&display=swap" rel="stylesheet">
```

### Phong cách

- Bo góc nhiều (`rounded-2xl`, `rounded-full`)
- Shadow nhẹ nhàng (`shadow-lg`)
- Animation nhẹ: fade-in khi scroll, hover scale trên card
- Icon từ Heroicons (SVG inline) + emoji mía 🍬🌿

---

## 📁 CẤU TRÚC FILE

```
website/
├── index.html          ← File chính (toàn bộ website 1 trang)
├── assets/
│   ├── logo.png        ← Logo Trùm Mía (đã có)
│   ├── hero-bg.jpg     ← Ảnh nền hero (mía xanh, ruộng mía)
│   ├── products/
│   │   ├── nuoc-mia.jpg
│   │   ├── mia-tuoi.jpg
│   │   ├── combo-mia.jpg
│   │   └── ...
│   └── stores/
│       ├── store-1.jpg
│       └── store-2.jpg
├── css/
│   └── custom.css      ← CSS tùy chỉnh bổ sung (nếu cần)
└── claude.md           ← File này
```

> **Lưu ý**: Nếu chưa có ảnh thật, dùng placeholder từ `https://placehold.co/` với màu xanh lá và **để comment rõ chỗ cần thay ảnh thật**.

---

## 📄 CẤU TRÚC TRANG (index.html — Single Page)

Trang gồm các section theo thứ tự:

```
1. [HEADER]    — Logo + Navigation sticky
2. [HERO]      — Banner lớn + slogan + CTA
3. [ABOUT]     — Giới thiệu thương hiệu
4. [PRODUCTS]  — Sản phẩm nổi bật (grid cards)
5. [WHY US]    — Điểm khác biệt / Ưu điểm
6. [STORES]    — Địa điểm cửa hàng
7. [SOCIAL]    — Mua hàng qua kênh mạng xã hội
8. [FOOTER]    — Thông tin liên hệ + copyright
```

---

## 📝 NỘI DUNG CHI TIẾT TỪNG SECTION

---

### 1. HEADER (sticky, scroll ẩn background)

```
Logo: [ảnh logo.png — chiều cao 60px]
Tên: TRÙM MÍA  (text dự phòng nếu ảnh chưa có)
Tagline nhỏ: by Mía 9 Vị

Navigation links:
- Trang Chủ     → #hero
- Sản Phẩm      → #products
- Cửa Hàng      → #stores
- Mua Ngay      → #social  (button vàng nổi bật)

Mobile: hamburger menu (toggle)
Màu nền: xanh lá đậm (#1a4a1a)
Text: trắng + vàng gold cho active/hover
```

---

### 2. HERO SECTION

```
Layout: Full-width, chiều cao 100vh (mobile: 80vh)
Nền: ảnh ruộng mía (hoặc gradient xanh lá đậm → xanh lá)
Overlay: rgba(26, 74, 26, 0.65)

Nội dung (căn giữa):
  👑 [emoji vương miện]
  
  Tiêu đề lớn (font Baloo 2, màu vàng):
  "TRÙM MÍA"
  
  Tagline (font Nunito, màu trắng, cỡ lớn):
  "Thức uống mía tươi thượng hạng"
  "9 vị độc đáo — Ngọt thanh tự nhiên 🌿"
  
  Mô tả ngắn (màu kem):
  "Từ những cây mía được tuyển chọn kỹ lưỡng,
   Trùm Mía mang đến hương vị thuần khiết,
   tươi mát và đậm đà cho mọi khoảnh khắc."
  
  CTA Buttons:
  [🛒 Mua Ngay]      → màu vàng gold, text xanh đậm
  [📍 Tìm Cửa Hàng]  → outline trắng

  Scroll indicator: mũi tên bounce xuống
```

---

### 3. ABOUT SECTION

```
Nền: màu kem (#fffde7)
Layout: 2 cột (desktop) / 1 cột (mobile)

Cột trái — Ảnh:
  Ảnh logo lớn hoặc ảnh sản phẩm đẹp
  Viền bo tròn, shadow

Cột phải — Nội dung:
  Badge: 🌿 Về Chúng Tôi

  Tiêu đề (màu xanh đậm):
  "Trùm Mía — Nơi mía tươi trở thành nghệ thuật"

  Nội dung:
  "Trùm Mía ra đời từ tình yêu với vị ngọt thuần khiết
   của mía tươi Việt Nam. Chúng tôi không chỉ bán nước mía —
   chúng tôi mang đến trải nghiệm 9 vị mía độc đáo,
   được pha chế từ công thức riêng biệt."

  "Mỗi ly mía là sự kết hợp hoàn hảo giữa nguyên liệu
   tươi ngon và sự sáng tạo, đem lại cảm giác mát lành,
   bổ dưỡng và thật sự thú vị."

  Stats (3 số nổi bật):
  [🍬 9+ Vị]  [📍 5+ Cửa Hàng]  [😊 10,000+ Khách]
```

---

### 4. PRODUCTS SECTION

```
Nền: trắng
Tiêu đề section: "🍬 Sản Phẩm Của Chúng Tôi"
Mô tả: "9 vị mía độc đáo — mỗi vị một câu chuyện"

Grid: 3 cột (desktop) / 2 cột (tablet) / 1 cột (mobile)

--- DANH SÁCH SẢN PHẨM ---
Tạo 6 card sản phẩm:

Card 1: Mía Nguyên Vị
  Mô tả: "Vị ngọt thanh tự nhiên, không pha trộn"
  Badge: 🌿 Best Seller

Card 2: Mía Gừng
  Mô tả: "Ngọt mía kết hợp cay nhẹ của gừng, ấm bụng"
  Badge: 🔥 Hot

Card 3: Mía Tắc (Chanh)
  Mô tả: "Vị chua thanh của tắc, cân bằng vị ngọt hoàn hảo"
  Badge: ⭐ Mới

Card 4: Mía Dứa
  Mô tả: "Hương thơm dứa tươi hòa quyện vị ngọt mía"

Card 5: Mía Dừa
  Mô tả: "Combo tropical siêu mát, giải nhiệt tức thì"

Card 6: Combo Mía 9 Vị
  Mô tả: "Trải nghiệm trọn bộ 9 vị — Quà tặng hoàn hảo"
  Badge: 👑 Premium

--- THIẾT KẾ CARD ---
  - Ảnh: 300x200px, bo góc trên
  - Tên sản phẩm: font Baloo 2, màu xanh đậm
  - Badge: pill màu vàng/xanh
  - Hover: scale lên nhẹ + shadow đậm hơn
  - CTA: "Đặt Hàng Ngay →" → dẫn đến section #social

Placeholder ảnh:
<!-- TODO: Thay bằng ảnh thật sản phẩm -->
https://placehold.co/400x300/2d7a2d/ffe066?text=Ten+San+Pham
```

---

### 5. WHY US (Điểm khác biệt)

```
Nền: gradient xanh lá đậm → xanh lá
Text: trắng và vàng

Tiêu đề: "Tại Sao Chọn Trùm Mía?"

Grid 4 cột (desktop) / 2 cột (mobile):

[🌿] Nguyên Liệu Tươi 100%
"Mía được thu hoạch và ép trong ngày,
 đảm bảo độ tươi ngon tối đa"

[👑] Công Thức Độc Quyền
"9 vị mía được nghiên cứu và phát triển
 riêng bởi đội ngũ Trùm Mía"

[⚡] Phục Vụ Nhanh
"Ép tươi theo order, sẵn sàng trong
 vài phút, không chờ đợi lâu"

[💚] Không Phụ Gia
"Hoàn toàn tự nhiên, không đường hóa học,
 không chất bảo quản"
```

---

### 6. STORES SECTION

```
Nền: kem (#fffde7)
Tiêu đề: "📍 Tìm Chúng Tôi Ở Đây"
Mô tả: "Ghé thăm cửa hàng để trải nghiệm trực tiếp!"

Grid: 2-3 cột

--- DANH SÁCH CỬA HÀNG (hiển thị 2 cửa hàng trên website) ---
Cửa Hàng 1:
  Tên: Trùm Mía — 29 Nguyễn Đức Cảnh
  Địa chỉ: 29 Nguyễn Đức Cảnh, Phường Nam Nha Trang, Khánh Hòa
  Google Maps: https://maps.google.com/?q=29+Nguyễn+Đức+Cảnh,+Nam+Nha+Trang,+Khánh+Hòa
  Giờ mở cửa: 7:00 - 22:00 (Thứ 2 - Chủ Nhật)
  SĐT: 0923.29.79.39

Cửa Hàng 2:
  Tên: Trùm Mía — 96 Nguyễn Tất Thành
  Địa chỉ: 96 Nguyễn Tất Thành, Phường Nam Nha Trang, Khánh Hòa
  Google Maps: https://maps.google.com/?q=96+Nguyễn+Tất+Thành,+Nam+Nha+Trang,+Khánh+Hòa
  Giờ mở cửa: 7:00 - 22:00 (Thứ 2 - Chủ Nhật)
  SĐT: 0923.29.79.39

<!-- TODO (SẼ BỔ SUNG SAU): Cửa Hàng 3 và 4
Cửa Hàng 3:
  Tên: Trùm Mía — 805 Đường 2/4
  Địa chỉ: 805 Đường 2/4, Phường Bắc Nha Trang, Khánh Hòa
  SĐT: 0923.29.79.39

Cửa Hàng 4:
  Tên: Trùm Mía — Cổng Chào Chợ Đầm
  Địa chỉ: Cổng Chào Chợ Đầm, Phường Nha Trang, Khánh Hòa
  SĐT: 0937.181.181
-->

--- THIẾT KẾ CARD CỬA HÀNG ---
  - Icon bản đồ lớn (SVG hoặc emoji 📍)
  - Tên cửa hàng: in đậm, màu xanh
  - Viền trái màu vàng gold (accent)
  - Link "Xem Bản Đồ" → Google Maps link
  - Hover: border xanh đậm
```

---

### 7. SOCIAL / MUA HÀNG SECTION

```
Nền: xanh lá đậm (#1a4a1a)
Text: trắng + vàng

Tiêu đề (vàng): "🛒 Mua Hàng Qua Kênh Của Chúng Tôi"
Mô tả (trắng): "Đặt hàng dễ dàng — Giao hàng tận nơi!"

--- 5 KÊNH MUA HÀNG ---
Grid 5 cột (desktop) / 3 cột (mobile)
Mỗi kênh: icon lớn + tên + username

Kênh 1: TikTok Shop
  Màu nền: #000000
  Text: "@trummia"
  Link: https://www.tiktok.com/@trummia  ← CẬP NHẬT

Kênh 2: Shopee
  Màu nền: #ee4d2d
  Text: "Shop Trùm Mía"
  Link: https://shopee.vn/trummia  ← CẬP NHẬT

Kênh 3: Zalo
  Màu nền: #0068ff
  Text: "Chat ngay"
  Link: https://zalo.me/0xxxxxxxxx  ← CẬP NHẬT

Kênh 4: Telegram
  Màu nền: #26a5e4
  Text: "@trummia"
  Link: https://t.me/trummia  ← CẬP NHẬT

Kênh 5: Instagram
  Màu nền: gradient hồng-tím-cam
  Text: "@trummia.vn"
  Link: https://instagram.com/trummia.vn  ← CẬP NHẬT

--- THIẾT KẾ ---
  - Icon hình tròn 80px, màu nền theo kênh
  - Hover: scale 1.1 + shadow màu kênh
  - Transition: 0.3s ease
  - target="_blank" rel="noopener noreferrer"
```

---

### 8. FOOTER

```
Nền: #0d2a0d (xanh đậm)
Text: trắng / xám nhạt

Layout 3 cột:

Cột 1 — Thương Hiệu:
  Logo nhỏ + TRÙM MÍA + "by Mía 9 Vị"
  "Ngọt thanh tự nhiên — Vui mỗi ngày 🍬"

Cột 2 — Liên Kết Nhanh:
  Trang Chủ / Sản Phẩm / Cửa Hàng / Liên Hệ

Cột 3 — Liên Hệ:
  📞 0923.29.79.39
  📞 0937.181.181 (Cổng Chào Chợ Đầm)
  🌐 trummia.vn
  📍 Nha Trang, Khánh Hòa
  Social icons nhỏ (5 kênh)

Dưới cùng:
"© 2025 Trùm Mía — by Mía 9 Vị. Tất cả quyền được bảo lưu."
```

---

## 💻 HƯỚNG DẪN KỸ THUẬT

### Tailwind CSS Config

```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'green-dark':  '#1a4a1a',
          'green-main':  '#2d7a2d',
          'green-light': '#4caf50',
          'gold':        '#f5c518',
          'gold-light':  '#ffe066',
          'cream':       '#fffde7',
        },
        fontFamily: {
          'nunito': ['Nunito', 'sans-serif'],
          'baloo':  ['Baloo 2', 'cursive'],
        }
      }
    }
  }
</script>
```

### Scroll Animation (Intersection Observer)

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```

```css
.animate-on-scroll {
  opacity: 0; transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-on-scroll.visible { opacity: 1; transform: translateY(0); }
```

### Sticky Header

```javascript
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('shadow-xl', window.scrollY > 50);
});
```

### Mobile Nav Toggle

```javascript
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-menu').classList.toggle('hidden');
});
```

### Smooth Scroll

```html
<html lang="vi" style="scroll-behavior: smooth;">
```

---

## 📱 RESPONSIVE BREAKPOINTS

| Kích thước | Layout |
|-----------|--------|
| < 768px (mobile) | 1 cột, hamburger menu, font nhỏ hơn |
| 768-1024px (tablet) | 2 cột, layout thu gọn |
| > 1024px (desktop) | Layout đầy đủ 3-4 cột |

---

## 🚀 TIMELINE THỰC HIỆN (60 PHÚT)

| Thời gian | Công việc |
|-----------|-----------|
| 0–5 phút  | Setup HTML, Tailwind CDN, Google Fonts, màu sắc |
| 5–10 phút | Header + Navigation responsive |
| 10–20 phút | Hero section full-screen |
| 20–25 phút | About section 2 cột |
| 25–35 phút | Products section 6 card |
| 35–40 phút | Why Us section 4 icon |
| 40–45 phút | Stores section |
| 45–50 phút | Social section 5 kênh |
| 50–55 phút | Footer |
| 55–60 phút | JS animation + test responsive + fix bugs |

---

## ✅ CHECKLIST HOÀN THÀNH

- [ ] Responsive mobile (320px - 768px)
- [ ] Responsive tablet (768px - 1024px)
- [ ] Responsive desktop (1024px+)
- [ ] Tất cả link mạng xã hội hoạt động (mở tab mới)
- [ ] Smooth scroll giữa các section
- [ ] Sticky header hoạt động
- [ ] Mobile hamburger menu hoạt động
- [ ] Scroll animation hoạt động
- [ ] Favicon (logo.png hoặc emoji 🍬)
- [ ] Meta tags SEO đầy đủ
- [ ] Logo hiển thị đúng
- [ ] Màu sắc đúng: xanh lá + vàng gold

---

## 🔍 SEO META TAGS

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Trùm Mía — Nước Mía Tươi 9 Vị | trummia.vn</title>
<meta name="description" content="Trùm Mía - thương hiệu nước mía tươi với 9 vị độc đáo. Nguyên liệu tươi 100%, không phụ gia. Đặt hàng qua TikTok, Shopee, Zalo, Telegram, Instagram.">
<meta name="keywords" content="trùm mía, nước mía tươi, mía 9 vị, nước mía nguyên chất, trummia.vn">
<meta property="og:title" content="Trùm Mía — Nước Mía Tươi 9 Vị">
<meta property="og:description" content="Thức uống mía tươi thượng hạng — 9 vị độc đáo, ngọt thanh tự nhiên">
<meta property="og:image" content="https://trummia.vn/assets/og-image.jpg">
<meta property="og:url" content="https://trummia.vn">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://trummia.vn">
<link rel="icon" href="assets/logo.png" type="image/png">
```

---

## 🔗 LINKS MXH CẦN CẬP NHẬT TRƯỚC DEPLOY

> ⚠️ Tìm và thay thế tất cả placeholder link sau bằng link thật:

| Kênh | Placeholder | Ghi chú |
|------|-------------|---------|
| TikTok | `https://www.tiktok.com/@trummia` | Username TikTok thật |
| Shopee | `https://shopee.vn/trummia` | Link shop Shopee |
| Zalo | `https://zalo.me/0xxxxxxxxx` | SĐT Zalo OA hoặc cá nhân |
| Telegram | `https://t.me/trummia` | Username Telegram |
| Instagram | `https://instagram.com/trummia.vn` | Username Instagram |

---

## 📦 ASSETS CẦN CHUẨN BỊ

| File | Trạng thái | Ghi chú |
|------|-----------|---------|
| `assets/logo.png` | ✅ Đã có | Logo Trùm Mía (chuyển từ file gốc) |
| `assets/hero-bg.jpg` | ⬜ Cần thêm | Ảnh ruộng mía hoặc ly nước mía đẹp |
| `assets/products/*.jpg` | ⬜ Cần thêm | Ảnh 6 sản phẩm (600x400px) |
| `assets/stores/*.jpg` | ⬜ Cần thêm | Ảnh cửa hàng |
| `assets/og-image.jpg` | ⬜ Cần thêm | 1200x630px cho social share |

**Placeholder URL khi chưa có ảnh thật:**
```
Hero:     https://placehold.co/1920x1080/1a4a1a/f5c518?text=Trum+Mia
Products: https://placehold.co/600x400/2d7a2d/ffe066?text=San+Pham
Stores:   https://placehold.co/600x400/1a4a1a/ffffff?text=Cua+Hang
```

---

## 🌐 HƯỚNG DẪN DEPLOY LÊN trummia.vn

### Phương án A: Netlify (Dễ nhất, miễn phí)
1. Vào **netlify.com** → "Add new site" → "Deploy manually"
2. Kéo thả thư mục `website/` vào Netlify
3. Settings → Domain → Add custom domain: `trummia.vn`
4. Copy Netlify nameservers → Cập nhật tại nhà đăng ký domain

### Phương án B: GitHub Pages + Cloudflare (Miễn phí)
1. Upload code lên GitHub repo (public)
2. Settings → Pages → Deploy from main branch
3. Cloudflare DNS: thêm CNAME `trummia.vn` → `username.github.io`
4. Bật Proxy + SSL trong Cloudflare

### Phương án C: Hosting Việt Nam (AZDIGI, PA Vietnam…)
1. Upload thư mục lên `/public_html` qua FTP hoặc File Manager
2. Trỏ domain `trummia.vn` về IP hosting

---

## 🎯 LƯU Ý QUAN TRỌNG CHO CLAUDE

1. **Một file duy nhất**: Viết toàn bộ HTML/CSS/JS trong `index.html`
2. **Dùng Tailwind CDN**: Không cần npm, không cần build
3. **Comment rõ**: Đánh dấu chỗ cần điền thông tin thật `<!-- TODO: CẬP NHẬT -->`
4. **Mobile-first**: Viết CSS/layout mobile trước, desktop sau
5. **Placeholder ảnh**: Dùng placehold.co với màu xanh lá + vàng
6. **Link social**: Luôn có `target="_blank" rel="noopener noreferrer"`
7. **Test ngay**: Mở `index.html` trong browser sau mỗi section
8. **Không backend**: Website tĩnh 100%, không cần server xử lý

---

*Tạo bởi Antigravity AI cho dự án Trùm Mía — trummia.vn*
