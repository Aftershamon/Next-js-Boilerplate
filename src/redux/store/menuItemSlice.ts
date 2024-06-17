import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ApiResponse {
  data: MenuItem[];
}

interface MenuItem {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  description: string;
  link_url: string;
  room_icon_url: string;
  is_pinned: boolean;
  pinned_time: null | string;
  order: null | number;
}

interface MenuState {
  menus: MenuItem[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  menus: [],
  loading: false,
  error: null,
};

export const fetchMenuItems = createAsyncThunk(
  'menu/fetchMenuItems',
  async () => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code=%7Bre0spwabns0zyZRi05J%7D',
        {
          headers: {
            authority: 'pantip.com',
            path: '/api/forum-service/home/get_highlight',
            scheme: 'https',
            Accept: 'application/json, text/plain, */*',
            'Accept-Language': 'th-TH,th;q=0.9',
            'Cache-Control': 'max-age=0',
            Priority: 'u=1, i',
            Ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
          },
        },
      );
      return response.data.data;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  },
);

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchMenuItems.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        menus: action.payload,
      }))
      .addCase(fetchMenuItems.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message ?? 'Failed to fetch menus',
      }));
  },
});

export default menu.reducer;
