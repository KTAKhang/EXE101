import { Link } from "react-router-dom";

const DemoPage = () => {
  const demoLinks = [
    {
      title: "Customer Home",
      path: "/customer",
      description: "Trang chủ với sản phẩm nổi bật và khuyến mãi"
    },
    {
      title: "Product List",
      path: "/customer/products",
      description: "Danh sách sản phẩm với bộ lọc"
    },
    {
      title: "Product Detail",
      path: "/customer/products/1",
      description: "Chi tiết sản phẩm với gallery và thông tin"
    },
    {
      title: "Search Page",
      path: "/customer/search",
      description: "Tìm kiếm sản phẩm với suggestions"
    },
    {
      title: "About Page",
      path: "/customer/about",
      description: "Trang giới thiệu công ty và team"
    },
    {
      title: "Contact Page",
      path: "/customer/contact",
      description: "Form liên hệ và thông tin hỗ trợ"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            CustomerFullPage Demo
          </h1>
          <p className="text-xl text-gray-600">
            Test các trang customer đã được tạo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demoLinks.map((link, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {link.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {link.description}
              </p>
              <Link
                to={link.path}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Xem trang
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Hướng dẫn sử dụng
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Tất cả các trang đã được chuyển từ TSX sang JSX</li>
            <li>• Nội dung đã được điều chỉnh từ tours sang products</li>
            <li>• Routing đã được cấu hình trong routes/index.jsx</li>
            <li>• Sidebar đã được cập nhật để hỗ trợ customer role</li>
            <li>• Remix Icons và Framer Motion đã được thêm vào</li>
            <li>• Responsive design cho tất cả các trang</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemoPage; 