import { configureStore } from "@reduxjs/toolkit";
import chatBotReducer from "./slices/chatbotSlice";

export const store = configureStore({ reducer: { chatBot: chatBotReducer } });
