import AllRoutes from "./components/AllRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";
import ChatBotModal from "./components/Modal/ChatBotModal";

export default function App() {
  return (
    <AuthProvider>
      <AllRoutes />
      <ChatBotModal />
      <ToastContainer />
    </AuthProvider>
  );
}
