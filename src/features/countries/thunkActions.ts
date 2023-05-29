import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../utils/httpConfig";
import { ReduxAction } from "../../types";
import { ICountries } from "../../types/countries";

interface IfetchCountriesByNameArgs extends ReduxAction {
  name: string;
}

interface IfetchCountriesByRegionsArgs extends ReduxAction {
  region: string;
}

export const fetchCountries = createAsyncThunk(
  "/countries/get-all",
  async ({ onFailure }: ReduxAction, { rejectWithValue }) => {
    try {
      const response: ICountries[] = await http.get(`/all`);
      return response;
    } catch (error: any) {
      if (onFailure) onFailure(error);
      return rejectWithValue({ error });
    }
  }
);

export const fetchCountriesByName = createAsyncThunk(
  "/get-countries",
  async (
    { name, onFailure }: IfetchCountriesByNameArgs,
    { rejectWithValue }
  ) => {
    try {
      const response: ICountries[] = await http.get(`/name/${name}`);
      return response;
    } catch (error: any) {
      if (onFailure) onFailure(error);
      return rejectWithValue({ error });
    }
  }
);

export const fetchCountriesByRegion = createAsyncThunk(
  "/get-countries-by-region",
  async (
    { region, onFailure }: IfetchCountriesByRegionsArgs,
    { rejectWithValue }
  ) => {
    try {
      const response: ICountries[] = await http.get(`/region/${region}`);
      return response;
    } catch (error: any) {
      if (onFailure) onFailure(error);
      return rejectWithValue({ error });
    }
  }
);
