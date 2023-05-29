import { createRef, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import SearchInput from "../../../components/form/SearchInput";
import Dropdown from "../../../components/form/Dropdown";
import { regionOptions } from "../defs";
import {
  fetchCountries,
  fetchCountriesByName,
  fetchCountriesByRegion,
} from "../../../features/countries/slice";
import { useAppDispatch } from "../../../store/hooks";
import { DROPDOWN_PLACEHOLDER } from "../../../utils/constants";

const ContriesHeader = () => {
  const dispatch = useAppDispatch();
  const [region, setRegion] = useState<string>("");
  const inputRef = createRef<HTMLInputElement>();

  const handleSearchCountry = (name: string) => {
    if (region) {
      setRegion("");
    }
    const onFailure = (error: any) => {
      const {
        data: { message },
      } = error;

      toast.error(`Country ${message} `);
    };

    dispatch(fetchCountriesByName({ name, onFailure }));
  };

  const handleClearSearch = () => {
    const onFailure = () => {};
    setRegion("");

    dispatch(fetchCountries({ onFailure }));
  };

  const handleSelectedRegion = (region: string) => {
    const onFailure = (error: any) => {
      const {
        data: { message },
      } = error;

      toast.error(`Region ${message} `);
    };
    setRegion(region);
    if (inputRef?.current?.value) inputRef.current.value = "";
    if (region === DROPDOWN_PLACEHOLDER) {
      dispatch(fetchCountries({ onFailure }));
    } else {
      dispatch(fetchCountriesByRegion({ region, onFailure }));
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
