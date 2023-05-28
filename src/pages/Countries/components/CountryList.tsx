import { useEffect } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Country from "./Country";
import { fetchCountries } from "../../../features/countries/slice";
import { ICountries } from "../../../types/countries";

const CountryList = () => {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector((state) => state.countries);

  const getAllCountries = () => {
    const onFailure = () => {};

    dispatch(fetchCountries({ onFailure }));
  };

  useEffect(() => {
    const requestController = new AbortController();

    getAllCountries();

    return () => requestController.abort();
  }, []);

  return (
    <Box mt="10" overflow="scroll" maxHeight="100vh">
      <SimpleGrid columns={[1, 2, null, 3, 5]} gap="10">
        {countries.map((country: ICountries, index) => (
          <Country country={country} key={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CountryList;
