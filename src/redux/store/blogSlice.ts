import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ApiResponse {
  data: BlogItem[];
}
interface BlogItem {
  title: string;
  thumbnail_url: string;
  url: string;
  group_name: string;
  group_url: string;
  group_title: string;
}

interface BlogState {
  blogItems: BlogItem[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogItems: [],
  loading: false,
  error: null,
};
export const fetchBlogItems = createAsyncThunk(
  'blog/fetchBlogItems',
  async () => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://pantip.com/api/forum-service/forum/room_bloggang?room=all',
        {
          headers: {
            authority: 'pantip.com',
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
      console.error('Error fetching bloggang:', error);
      throw error;
    }
  },
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogItems.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchBlogItems.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        blogItems: action.payload,
      }))
      .addCase(fetchBlogItems.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message ?? 'Failed to fetch bloggang',
      }));
  },
});

export default blogSlice.reducer;
