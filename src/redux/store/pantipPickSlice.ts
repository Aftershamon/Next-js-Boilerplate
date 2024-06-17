import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ApiResponse {
  data: PantipPick[];
}
interface PantipPick {
  topic_id: number;
  title: string;
  thumbnail_url?: string;
  views_count: number;
  comments_count: number;
  votes_count: number;
  author: {
    id: number;
    name: string;
    avatar: {
      original: string;
      large: string;
      medium: string;
      small: string;
    };
    slug: string;
  };
  tags: {
    name: string;
    slug: string;
  }[];
  timestamp: string;
}

interface PantipPickState {
  pantipPicks: PantipPick[];
  loading: boolean;
  error: string | null;
}

const initialState: PantipPickState = {
  pantipPicks: [],
  loading: false,
  error: null,
};

export const fetchPantipPickItems = createAsyncThunk(
  'pick/fetchPantipPickItems',
  async () => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://pantip.com/api/forum-service/home/get_pantip_pick?limit=20&id=bnVsbA%3D%3D&next_id=1718604900000',
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
      console.error('Error fetching pick:', error);
      throw error;
    }
  },
);

const pantipPickSlice = createSlice({
  name: 'pick',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPantipPickItems.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchPantipPickItems.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        pantipPicks: action.payload,
      }))
      .addCase(fetchPantipPickItems.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message ?? 'Failed to fetch pick',
      }));
  },
});
export default pantipPickSlice.reducer;
