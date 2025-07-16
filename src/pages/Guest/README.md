# CustomerFullPage - Travel Agency Customer Interface

## Tổng quan

CustomerFullPage là một bộ các trang dành cho khách hàng (Guest role) trong hệ thống đặt tour du lịch. Các trang này được thiết kế để cung cấp trải nghiệm đặt tour và khám phá điểm đến cho người dùng cuối.

## Cấu trúc thư mục

```
CustomerFullPage/
├── CustomerLayout.jsx          # Layout chính cho customer pages (chỉ có navbar)
├── CustomerHomePage.jsx        # Trang chủ customer
├── TourListPage.jsx            # Trang danh sách tour
├── TourDetailPage.jsx          # Trang chi tiết tour
├── SearchPage.jsx              # Trang tìm kiếm tour
├── AboutPage.jsx               # Trang giới thiệu
├── ContactPage.jsx             # Trang liên hệ
├── DemoPage.jsx                # Trang demo để test các trang
├── index.jsx                   # File export tất cả components
└── README.md                   # File hướng dẫn này
```

## Các trang có sẵn

### 1. CustomerHomePage (`/customer`)

- Trang chủ với hero section về du lịch
- Hiển thị tour nổi bật
- Các khuyến mãi đặc biệt (Early Bird, Group Discount)
- Lý do chọn chúng tôi (Expert Guides, Best Value)

### 2. TourListPage (`/customer/tours`)

- Danh sách tất cả các tour
- Bộ lọc theo địa điểm, giá, thời gian
- Hiển thị dạng grid với thông tin tour

### 3. TourDetailPage (`/customer/tours/:id`)

- Chi tiết đầy đủ về tour
- Hình ảnh tour (có thể chuyển đổi)
- Lịch trình chi tiết
- Những gì bao gồm trong tour
- Tour liên quan
- Chức năng đặt tour

### 4. SearchPage (`/customer/search`)

- Tìm kiếm tour theo từ khóa
- Tìm kiếm nhanh theo điểm đến
- Hiển thị kết quả tìm kiếm
- Gợi ý điểm đến phổ biến

### 5. AboutPage (`/customer/about`)

- Thông tin về công ty du lịch
- Câu chuyện và sứ mệnh
- Thống kê và thành tựu
- Đội ngũ hướng dẫn viên

### 6. ContactPage (`/customer/contact`)

- Form liên hệ
- Thông tin liên hệ
- FAQ thường gặp về du lịch
- Bản đồ và địa chỉ

### 7. DemoPage (`/demo`)

- Trang demo để test tất cả các trang customer
- Navigation links đến tất cả các trang
- Hướng dẫn sử dụng

## Cách sử dụng

### 1. Routing

Các route đã được cấu hình trong `routes/index.jsx`:

```jsx
{
  path: "/customer",
  element: <CustomerLayout />,
  children: [
    { path: "", element: <CustomerHomePage /> },
    { path: "tours", element: <TourListPage /> },
    { path: "tours/:id", element: <TourDetailPage /> },
    { path: "search", element: <SearchPage /> },
    { path: "about", element: <AboutPage /> },
    { path: "contact", element: <ContactPage /> },
  ],
}
```

### 2. Navigation

Website sử dụng navbar truyền thống với menu navigation đầy đủ, không có sidebar. Navigation bao gồm: Home, Tours, Search, About, Contact.

### 3. Layout

CustomerLayout sử dụng CustomerNavbar riêng với thiết kế phù hợp cho website du lịch, không có sidebar.

## Tính năng chính

### Responsive Design

- Tất cả các trang đều responsive
- Tối ưu cho mobile, tablet và desktop

### Modern UI/UX

- Sử dụng Tailwind CSS
- Animations với Framer Motion
- Icons từ Remix Icons
- Gradient và shadow effects

### Interactive Elements

- Form validation
- Search functionality
- Tour filtering (location, price, duration)
- Image galleries
- Contact forms

## Dữ liệu mẫu

Hiện tại các trang sử dụng dữ liệu mẫu (mock data) về các tour du lịch. Trong thực tế, bạn cần:

1. Kết nối với API backend
2. Thay thế mock data bằng real data
3. Thêm state management (Redux/Context)
4. Implement authentication cho customer

## Tùy chỉnh

### Thay đổi theme

- Màu sắc chính: `blue-600` (có thể thay đổi trong Tailwind config)
- Gradient colors trong các component

### Thêm tính năng mới

- Tạo component mới trong thư mục
- Thêm route trong `routes/index.jsx`
- Cập nhật sidebar menu nếu cần

### Kết nối API

- Thay thế mock data bằng API calls
- Thêm loading states
- Error handling
- Pagination cho tour list

## Lưu ý

- Tất cả các trang đều sử dụng JSX (không phải TSX)
- Tương thích với cấu trúc dự án hiện tại
- Sử dụng cùng styling system với các trang khác
- Có thể mở rộng dễ dàng cho các tính năng mới
- Đã chuyển đổi từ chủ đề e-commerce sang travel agency
