import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserMessage, sendMessageToBotAsync } from "../../store/slices/chatbotSlice";
import { MessageCircle, Send, X, Loader2 } from "lucide-react";

export default function ChatBotModal() {
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    const messages = useSelector(s => s.chatBot.messages);
    const isLoading = useSelector(s => s.chatBot.isLoading);
    const dispatch = useDispatch();
    const messagesEndRef = useRef(null);

    // Danh sách các câu hỏi thường gặp
    const commonQuestions = [
        "Chi tiết Tour 1 Bắt Cá và Hái Trái Cây?",
        "Giá vé Tour 2 Sóc Trăng là bao nhiêu?",
        "Tour Cần Thơ có hoạt động nào vui nhất?",
        "Làm thế nào để đặt tour?"
    ];

    // Điều kiện mới để kiểm tra: Không có tin nhắn trò chuyện thực sự nào
    const showFaqs = messages.filter(m => !m.isInitial).length === 0;


    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim() || isLoading) return;
        dispatch(addUserMessage(input));
        dispatch(sendMessageToBotAsync(input));
        setInput("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Hàm xử lý khi click vào FAQ
    const handleFAQClick = (question) => {
        if (isLoading) return;
        // Gửi tin nhắn lên Redux và API
        dispatch(addUserMessage(question));
        dispatch(sendMessageToBotAsync(question));
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            >
                <MessageCircle className="w-6 h-6 text-white" />
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <h3 className="text-white font-semibold text-lg">Miền Tây Bot</h3>
                        <p className="text-blue-100 text-xs">Online</p>
                    </div>
                </div>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">

                {/* --- KHU VỰC HIỂN THỊ FAQS (ĐIỀU KIỆN ĐÃ SỬA) --- */}
                {showFaqs && (
                    <div className="text-center text-gray-400 mt-10 p-2">
                        <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p className="text-sm text-gray-700 font-medium mb-4">
                            Chào mừng bạn! Tôi có thể giúp bạn tìm hiểu về các tour Miền Tây sau:
                        </p>

                        <div className="flex flex-col space-y-2">
                            {commonQuestions.map((q, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleFAQClick(q)}
                                    disabled={isLoading}
                                    className="text-sm bg-white border border-gray-200 text-blue-600 hover:bg-blue-50 transition-colors p-3 rounded-xl shadow-sm text-left disabled:opacity-70"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                {/* ------------------------------------------------ */}

                {messages.map((m, i) => (
                    // Loại bỏ tin nhắn chào mừng ban đầu khỏi danh sách hiển thị
                    // Nếu bạn muốn hiển thị nó, bạn cần kiểm tra: {!m.isInitial || i === 0}
                    // Nhưng ở đây chúng ta chỉ muốn hiển thị tin nhắn thật sự
                    m.text && (
                        <div
                            key={i}
                            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-200`}
                        >
                            <div
                                className={`max-w-[80%] px-4 py-3 rounded-2xl ${m.role === "user"
                                    ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-br-md"
                                    : "bg-white text-gray-800 shadow-md rounded-bl-md"
                                    }`}
                            >
                                <p className="text-sm whitespace-pre-wrap break-words">{m.text}</p>
                            </div>
                        </div>
                    )
                ))}

                {isLoading && (
                    <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                        <div className="bg-white text-gray-800 shadow-md px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                            <span className="text-sm text-gray-500">Đang trả lời...</span>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex gap-2 items-end">
                    <textarea
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Nhập tin nhắn..."
                        rows={1}
                        className="flex-1 resize-none border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                        style={{ maxHeight: "100px" }}
                    />
                    <button
                        onClick={sendMessage}
                        disabled={isLoading || !input.trim()}
                        className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}