import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface ApiResponse {
  data: TagHit[];
}

interface TagHit {
  name: string;
  slug: string;
  pageview: number;
  topic_count: number;
  follow_count: number;
}

interface TagHitState {
  tagHits: TagHit[];
  loading: boolean;
  error: string | null;
}

const initialState: TagHitState = {
  tagHits: [],
  loading: false,
  error: null,
};

export const fetchTagHits = createAsyncThunk(
  'tagHits/fetchTagHits',
  async () => {
    try {
      const response = await axios.get<ApiResponse>(
        'https://pantip.com/api/forum-service/home/get_tag_hit?limit=10',
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
      console.error('Error fetching tag hits:', error);
      throw error;
    }
  },
);

const tagHitSlice = createSlice({
  name: 'tagHit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagHits.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(fetchTagHits.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        tagHits: action.payload,
      }))
      .addCase(fetchTagHits.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message ?? 'Failed to fetch tag hit',
      }));
  },
});

export default tagHitSlice.reducer;
