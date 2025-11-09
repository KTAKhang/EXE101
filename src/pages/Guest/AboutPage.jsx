import { Link } from "react-router-dom";

const AboutPage = () => {
  // 🚨 ĐÃ CẬP NHẬT: Số liệu về Du lịch
  const stats = [
    { number: "500", label: "Khách du lịch mỗi năm" },
    { number: "2", label: "Địa điểm tour độc đáo" },
    { number: "4.9/5", label: "Đánh giá từ khách hàng" },
    { number: "24/7", label: "Hỗ trợ Đặt tour" }
  ];

  // 🚨 ĐÃ CẬP NHẬT: Tên đội ngũ và vai trò được giữ nguyên, chỉ thay đổi Description
  const team = [
    {
      name: "Lý Trương Bửu Ngọc",
      role: "CEO – Giám đốc điều hành",
      image: "https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*",
      description: "Dẫn dắt chiến lược, phát triển tour mới, xây dựng mối quan hệ đối tác địa phương."
    },
    {
      name: "Trần Phúc Thịnh",
      role: "CFO – Giám đốc tài chính",
      image: "https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*",
      description: "Quản lý ngân sách tour, đảm bảo chi phí hợp lý và giá tour cạnh tranh."
    },
    {
      name: "Nguyễn Huỳnh",
      role: "CMO – Giám đốc marketing",
      image: "https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*",
      description: "Xây dựng thương hiệu du lịch, quảng bá trải nghiệm Miền Tây độc đáo đến khách hàng."
    },
    {
      name: "Kiên Thạch An Khang",
      role: "CTO – Giám đốc công nghệ",
      image: "https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*",
      description: "Quản lý nền tảng đặt tour trực tuyến, đảm bảo hệ thống đặt vé mượt mà, an toàn."
    },
    {
      name: "Bùi Chí Nguyên",
      role: "Trưởng phòng Vận hành Tour", // 🚨 ĐÃ ĐỔI VAI TRÒ HỢP LÝ HƠN
      image: "https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*d",
      description: "Giám sát chất lượng dịch vụ, đào tạo hướng dẫn viên, xử lý tình huống phát sinh trong tour."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Chúng Tôi</h1>
          {/* 🚨 ĐÃ CẬP NHẬT NỘI DUNG */}
          <p className="text-xl text-blue-100">
            Chuyên gia đồng hành cùng bạn khám phá vẻ đẹp tự nhiên và văn hóa Miền Tây Nam Bộ
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Câu Chuyện Khởi Nghiệp Tour Miền Tây</h2>
              {/* 🚨 ĐÃ CẬP NHẬT NỘI DUNG */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Chúng tôi thành lập với niềm đam mê bất tận dành cho Miền Tây sông nước. Sứ mệnh của chúng tôi là
                mang đến những trải nghiệm du lịch chân thực, thân thiện môi trường, giúp khách hàng hòa mình
                vào văn hóa địa phương, từ những vườn cây ăn trái xum xuê ở Cần Thơ đến các di tích lịch sử và
                văn hóa Khmer độc đáo tại Sóc Trăng.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Khác biệt của chúng tôi nằm ở việc xây dựng tour theo hướng trải nghiệm thực tế:
                khách hàng không chỉ tham quan mà còn trực tiếp tham gia bắt cá, hái trái cây,
                hoặc học làm các món ăn truyền thống như cốm dẹp. Điều này đảm bảo mỗi chuyến đi là một kỷ niệm khó quên.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi cam kết chất lượng dịch vụ, sự an toàn và sự hài lòng tuyệt đối của du khách.
              </p>
            </div>
            <div>
              {/* Ảnh mang tính Du lịch/Văn hóa */}
              <img
                src="https://transviet.com.vn/Media/Uploads/tour/HL/VN/tim-ve-mien-tay-song-nuoc-hanh-trinh-tren-dat-phu-sa.jpg"
                alt="Du lịch Miền Tây"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Những Con Số Đáng Tự Hào</h2>
            <p className="text-xl text-gray-600">Minh chứng cho chất lượng dịch vụ của chúng tôi</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sứ Mệnh Của Chúng Tôi</h2>
              {/* 🚨 ĐÃ CẬP NHẬT NỘI DUNG */}
              <p className="text-gray-700 leading-relaxed mb-6">
                Trở thành cầu nối tin cậy, mang đến trải nghiệm du lịch văn hóa Miền Tây độc đáo,
                an toàn và thân thiện, đồng thời góp phần bảo tồn vẻ đẹp thiên nhiên và văn hóa địa phương.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Tour trải nghiệm thực tế, gần gũi thiên nhiên
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Hướng dẫn viên bản địa, am hiểu văn hóa
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Đảm bảo an toàn và chất lượng dịch vụ cao nhất
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-check-line text-green-500 mr-3"></i>
                  Giá cả hợp lý, minh bạch
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Giá Trị Cốt Lõi</h2>
              <div className="space-y-6">
                {/* 🚨 ĐÃ CẬP NHẬT NỘI DUNG */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-shield-check-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Chân thực</h3>
                    <p className="text-gray-700">Mang đến trải nghiệm văn hóa và cuộc sống địa phương đích thực.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-customer-service-line text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tận tâm</h3>
                    <p className="text-gray-700">
                      Hỗ trợ du khách chu đáo từ khâu đặt tour đến khi kết thúc hành trình.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-lightbulb-line text-purple-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Bền vững</h3>
                    <p className="text-gray-700">
                      Phát triển du lịch có trách nhiệm, bảo vệ môi trường và cộng đồng.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội Ngũ Điều Hành Tour</h2>
            <p className="text-xl text-gray-600">Những người kiến tạo nên hành trình của bạn</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Sẵn sàng khám phá Miền Tây?</h2>
          <p className="text-xl text-blue-100 mb-8">Bắt đầu hành trình trải nghiệm văn hóa độc đáo của chúng tôi ngay hôm nay!</p>
          <Link
            // Đặt liên kết tới trang danh sách tour của bạn
            to="/tours"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Xem Tour Du Lịch
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;