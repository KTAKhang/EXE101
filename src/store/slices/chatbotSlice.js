import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendMessageToBot } from "../../service/chatbotService";

export const sendMessageToBotAsync = createAsyncThunk(
    "chatBot/sendMessageToBotAsync",
    async (message, { rejectWithValue }) => {
        try {
            const res = await sendMessageToBot(message);
            return res;
        } catch (err) {
            return rejectWithValue(err.message || "Error");
        }
    }
);

const initialState = {
    messages: [{
        text: "Xin chào! Tôi là Miền Tây Bot. Hỏi tôi bất cứ điều gì trong khả năng! 👋",
        role: "assistant",
        timestamp: new Date().toISOString(),
        isInitial: true
    }],
    isLoading: false,
    error: null
};

const chatbotSlice = createSlice({
    name: "chatBot",
    initialState,
    reducers: {
        addUserMessage: (state, action) => {
            state.messages.push({
                text: action.payload,
                role: "user",
                timestamp: new Date().toISOString()
            });
        },
        clearChat: (state) => {
            state.messages = [initialState.messages[0]];
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessageToBotAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(sendMessageToBotAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.messages.push(action.payload);
            })
            .addCase(sendMessageToBotAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.messages.push({
                    text: `❌ Lỗi: ${action.payload}`,
                    role: "assistant",
                    timestamp: new Date().toISOString(),
                    isError: true
                });
            });
    }
});

export const { addUserMessage, clearChat, clearError } = chatbotSlice.actions;
export default chatbotSlice.reducer;