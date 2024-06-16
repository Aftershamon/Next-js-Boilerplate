import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import { RootState } from "./store";
import { fetchRoomsApi } from '@/app/[locale]/(unauth)/api/guestbook/route';

interface Room {
  id: number;
  name: string;
  description: string;
  link_url: string;
  room_icon_url: string;
}

interface ForumState {
  rooms: Room[];
  loading: boolean;
  error: string | null;
}

const initialState: ForumState = {
  rooms: [],
  loading: false,
  error: null,
};

export const fetchRooms = createAsyncThunk('forum/fetchRooms', async () => {
  try {
    const response = await fetchRoomsApi();
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch rooms');
  }
});
const forumSlice = createSlice({
  name: 'forum',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        return {
          ...state,
          loading: true,
          error: null,
        };
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          rooms: action.payload,
        };
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        return {
          ...state,
          loading: false,
          error: action.error.message ?? 'Unknown error',
        };
      });
  },
});
export default forumSlice.reducer;
