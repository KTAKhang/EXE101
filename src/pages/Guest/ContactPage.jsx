import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert('Cảm ơn bạn đã gửi yêu cầu! Chúng tôi sẽ phản hồi các thắc mắc về tour sớm nhất có thể.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  // 🚨 ĐÃ CẬP NHẬT: Thông tin liên hệ về Tour
  const contactInfo = [
    {
      icon: 'ri-map-pin-line',
      title: 'Văn phòng Cần Thơ',
      content: '12 Đường Mậu Thân, Quận Ninh Kiều, Cần Thơ, Việt Nam'
    },
    {
      icon: 'ri-phone-line',
      title: 'Hotline Đặt Tour',
      content: '+84 901 888 999' // Số điện thoại giả định
    },
    {
      icon: 'ri-mail-line',
      title: 'Email Hỗ trợ',
      content: 'support.mientaytour@email.com' // Email giả định
    },
    {
      icon: 'ri-time-line',
      title: 'Hỗ trợ Tư vấn',
      content: 'Thứ 2 - Chủ Nhật: 8:00 AM - 9:00 PM' // Giờ làm việc du lịch thường dài hơn
    }
  ];

  // 🚨 ĐÃ CẬP NHẬT: FAQs về các Tour du lịch
  const faqs = [
    {
      question: "Làm cách nào để đặt tour Trải Nghiệm Bắt Cá?",
      answer: "Quý khách vui lòng đặt tour trực tiếp qua Fanpage chính thức của chúng tôi: https://www.facebook.com/profile.php?id=61583250337486. Hoặc liên hệ Hotline để được hỗ trợ nhanh nhất."
    },
    {
      question: "Giá tour đã bao gồm chi phí ăn uống chưa?",
      answer: "Giá tour đã bao gồm các hoạt động chính và một số bữa ăn/thưởng thức đặc sản được ghi rõ trong chi tiết từng tour. Ví dụ: Tour Sóc Trăng đã bao gồm bữa trưa đặc sản."
    },
    {
      question: "Tôi có cần mang theo trang phục gì đặc biệt khi đi tour không?",
      answer: "Đối với Tour Bắt Cá ở Cần Thơ, chúng tôi cung cấp áo bà ba. Bạn chỉ cần mang theo quần áo thoải mái, nón, kem chống nắng và các vật dụng cá nhân cần thiết khác."
    },
    {
      question: "Chính sách hủy và hoàn tiền tour như thế nào?",
      answer: "Chính sách hủy tour sẽ được quy định rõ ràng khi quý khách xác nhận đặt chỗ qua Fanpage. Thường sẽ được hoàn tiền nếu hủy trước 48 giờ, trừ phí dịch vụ nhỏ."
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ & Hỗ Trợ Đặt Tour</h1>
          <p className="text-xl text-blue-100">
            Đội ngũ tư vấn của chúng tôi luôn sẵn sàng hỗ trợ mọi thông tin về tour
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${info.icon} text-blue-600 text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700">{info.content}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Gửi Yêu Cầu Tư Vấn Tour</h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập họ và tên"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tiêu đề (Ví dụ: Hỏi về Tour Sóc Trăng) *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập tiêu đề"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nội dung (Ngày dự kiến, số người, thắc mắc...) *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Nhập nội dung tin nhắn"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Đang gửi...
                    </span>
                  ) : (
                    'Gửi Yêu Cầu Tư Vấn'
                  )}
                </button>
              </form>
            </div>

            {/* Map + Support */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Văn Phòng Tư Vấn</h2>

              <div className="bg-gray-200 rounded-lg h-64 mb-6">
                {/* Thay thế bằng bản đồ văn phòng Cần Thơ thực tế */}
                <iframe
                  src="https://www.google.com/maps?q=FPT+University+Can+Tho&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Hỗ Trợ Đặt Tour & Khẩn Cấp</h3>
                <p className="text-gray-700 mb-4">
                  Để đặt tour nhanh nhất, quý khách vui lòng liên hệ trực tiếp qua Fanpage hoặc Hotline.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Thời gian phản hồi qua Form:</strong> Trong vòng 24 giờ</p>
                  <p><strong>Giờ làm việc:</strong> Thứ 2 – Chủ Nhật, 8:00 – 21:00</p>
                  <p><strong>Khẩn cấp/Tour đang diễn ra:</strong> Hỗ trợ 24/7 qua Hotline</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Câu Hỏi Thường Gặp Về Tour</h2>
            <p className="text-xl text-gray-600">Các thắc mắc phổ biến về việc đặt tour và chi phí</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="text-center text-white max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Vẫn Còn Thắc Mắc Về Tour?</h2>
          <p className="text-xl text-blue-100 mb-8">Liên hệ đội ngũ hỗ trợ của chúng tôi ngay</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support.mientaytour@email.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              <i className="ri-mail-line mr-2"></i>
              Gửi Email Hỗ Trợ
            </a>

            <a
              href="tel:+84901888999"
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
            >
              <i className="ri-phone-line mr-2"></i>
              Gọi Hotline
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;