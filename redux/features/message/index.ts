import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface Message {
  icon: null | "info" | "error" | "warning" | "success" | "loading";
  content: null | string;
  delay: null | number;
  fresh?: boolean;
}

const initialState: Message = {
  icon: null,
  content: null,
  delay: null,
  fresh: false,
};

const message = createSlice({
  name: "message",
  initialState,
  reducers: {
    // 添加 message
    addMessage: (state, action: PayloadAction<Message>) => {
      state.icon = action.payload.icon;
      state.content = action.payload.content;
      state.delay = action.payload.delay;
    },
    // 移除当前 message
    removeMessage: (state) => {
      state.icon = null;
      state.content = null;
      state.delay = null;
    },
    // 替换当前 message
    replaceMessage: (state, action: PayloadAction<Message>) => {
      state.icon = action.payload.icon;
      state.content = action.payload.content;
      state.delay = action.payload.delay;
      state.fresh = !state.fresh;
    },
  },
});

export const { addMessage, removeMessage, replaceMessage } = message.actions;

export default message.reducer;
