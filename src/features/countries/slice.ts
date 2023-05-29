import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCountries,
  fetchCountriesByName,
  fetchCountriesByRegion,
} from "./thunkActions";
import { ICountries } from "../../types/countries";

interface InitialState {
  countries: ICountries[];
  country: ICountries | null;
  loading: boolean;
}

const initialState: InitialState = {
  countries: [],
  country: null,
  loading: false,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setFilterdCountries: (state, action: PayloadAction<ICountries[]>) => {
      state.countries = action.payload;
    },
    setCountry: (state, action: PayloadAction<ICountries | null>) => {
      state.country = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        state.countries = payload || [];
        state.loading = false;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(fetchCountriesByName.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountriesByName.fulfilled, (state, { payload }) => {
        state.countries = payload || [];
        state.loading = false;
      })
      .addCase(fetchCountriesByName.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(fetchCountriesByRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountriesByRegion.fulfilled, (state, { payload }) => {
        state.countries = payload || [];
        state.loading = false;
      })
      .addCase(fetchCountriesByRegion.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setFilterdCountries, setCountry } = countriesSlice.actions;
export default countriesSlice.reducer;
export * from "./thunkActions";
