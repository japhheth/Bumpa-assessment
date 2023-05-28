import { useState } from "react";
import { Box } from "@chakra-ui/react";
import ContriesHeader from "./components/CountriesHeader";
import CountryList from "./components/CountryList";

const Countries = () => {
  return (
    <Box>
      <ContriesHeader />
      <CountryList />
    </Box>
  );
};

export default Countries;
