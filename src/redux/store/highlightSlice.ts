import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
      const response = await axios.get<HighlightItem[]>(
        'https://pantip.com/api/forum-service/home/get_highlight',
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
            Cookie:
              'pantip_visitc=re0spwabns0zyZRi05J; iUUID=11a1c1ead5b3ebaf931f16a2ca04cb16; ka_iid=ksZFLFCwaQmAcgbw9Qb6z; _cc_id=ddbf4e8559470c8008f2f550cfb77f2a; FCNEC=%5B%5B%22AKsRol-8d0eT09gFgex7DIbQAJcdl4jCtLerie-KZNrApS7oEgPVoQn50h-31AVSOVv71HWM3lc7XdbB2uqEinKOfws6WOyCTaubdZGmnHI73I2Nftqcquoh01RkYf2Z1EBaWrM6-Suza_UQ5ECW6eZfNZrBk27KOA%3D%3D%22%5D%5D; _gid=GA1.2.1074873647.1718424615; panoramaId_expiry=1719052027129; panoramaId=8c07fb0e873e895b1a9df155f6714945a702739714e8c4a7174eb8d1511bbbff; panoramaIdType=panoIndiv; innity.dmp.cks.innity=1; real_referer=%3A%2F%2Fpantip.com%2Fs%2F0K7f7; cto_bundle=QX9s-V9sd3F2V1R5TVY5YWZOUWwxbkE1OWhKaElSRFhEdDBpNU02RExSREJHaXN1eERGakFtWGNpZWVXR0w4bmVLWFkwJTJGdHViR0tIWTlXVU1BNDZIcTBVU2s0cFBLWlFoZThJaklyJTJGJTJCanlwTmNYJTJGekJqakF4eHgxWXhpZklabW5YR2Qwc1R2aTZUa2lCWCUyQnA2ZSUyQkc4cTlVZTRMcGhncm8zeDFGSXhhQlZJS2FRTHJrWGd6bU5wQXY3akpGVDMxdlVlJTJGM1psbklvWFZWRHl4ekI4N1FoZHo0ZEElM0QlM0Q; __gads=ID=02ac5c30b9180906:T=1710387588:RT=1718514674:S=ALNI_MYAy7-FuSxQMwhetgml1I8u5uvb-w; __gpi=UID=00000d36b94a5ca8:T=1710387588:RT=1718514674:S=ALNI_MZ56mlQU-sNECHFo_eMN9x2IA0XPQ; __eoi=ID=7ab873fd993d57d3:T=1706683389:RT=1718514674:S=AA-Afja7fywJvjY0ntX7T_TnecoK; rlr=42756314; freq.5f73e63e47e7040e00000000=1; _ga=GA1.1.1124664925.1656138619; _ga_ZMC2WGXL4Z=GS1.1.1718513171.41.1.1718516488.59.0.0',
            'If-None-Match': 'W/"e8f-myJm2y9b+roZl8SCSYCxoMvs52E"',
            Referer: 'https://pantip.com/',
            'Sec-Ch-Ua':
              '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
          },
        },
      );

      return response.data;
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