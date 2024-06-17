import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ApiResponse {
  data: HighlightItem[];
}

interface HighlightItem {
  name: string;
  message: string;
  weight: number;
  image_url: string[];
  post_url: string;
}

interface ForumState {
  highlights: HighlightItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ForumState = {
  highlights: [],
  loading: false,
  error: null,
};
export const fetchHighlights = createAsyncThunk(
  'forum/fetchHighlights',
  async () => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://pantip.com/api/forum-service/home/get_highlight',
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
      console.error('Error fetching highlights:', error);
      throw error;
    }
  },
);

const highlight = createSlice({
  name: 'highlight',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHighlights.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchHighlights.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        highlights: action.payload,
      }))
      .addCase(fetchHighlights.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message ?? 'Failed to fetch highlights',
      }));
  },
});

export default highlight.reducer;
