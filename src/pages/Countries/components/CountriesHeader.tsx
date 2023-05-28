import { createRef, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import SearchInput from "../../../components/form/SearchInput";
import Dropdown from "../../../components/form/Dropdown";
import { regionOptions } from "../defs";
import {
  fetchCountries,
  setFilterdCountries,
} from "../../../features/countries/slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { DROPDOWN_PLACEHOLDER } from "../../../utils/constants";

const ContriesHeader = () => {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector((state) => state.countries);
  const [region, setRegion] = useState<string>("");
  const inputRef = createRef<HTMLInputElement>();

  const handleSearchCountry = (name: string) => {
    const _countries = [...countries];

    const filteredCountriesByName = _countries.filter(
      ({ name: { official } }) =>
        official.toLowerCase().includes(name.toLowerCase())
    );

    if (filteredCountriesByName.length > 0) {
      dispatch(setFilterdCountries(filteredCountriesByName));
    } else {
      toast.error("Unable to find countries");
    }
  };

  const handleClearSearch = () => {
    const onFailure = () => {};
    setRegion("");

    dispatch(fetchCountries({ onFailure }));
  };

  const handleSelectedRegion = (value: string) => {
    const onFailure = () => {};
    setRegion(value);

    if (value === DROPDOWN_PLACEHOLDER) {
      if (inputRef?.current?.value) inputRef.current.value = "";
      dispatch(fetchCountries({ onFailure }));
    } else {
      const _countries = [...countries];

      const filteredCountriesByRegion = _countries.filter(
        ({ region }) => region.toLowerCase() === value.toLowerCase()
      );

      if (filteredCountriesByRegion.length > 0) {
        dispatch(setFilterdCountries(filteredCountriesByRegion));
      } else {
        toast.error("Unable to find countries by region");
      }
    }
  };

  return (
    <Flex
      mt="8"
      w="full"
      gap="5"
      direction={["column", "row"]}
      justifyContent="space-between"
    >
      <SearchInput
        placeholder="Search for a country"
        onSearch={handleSearchCountry}
        onRemove={handleClearSearch}
        extInputRef={inputRef}
      />
      <Dropdown
        options={regionOptions}
        region={region}
        handleSelectedRegion={handleSelectedRegion}
      />
    </Flex>
  );
};

export default ContriesHeader;
