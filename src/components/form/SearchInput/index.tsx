import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useColorMode,
} from "@chakra-ui/react";
import { useRef, RefObject } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

type SearchInputProps = {
  placeholder?: string;
  onSearch: (val: string) => void;
  onRemove?: (value: string) => void;
  query?: string;
  extInputRef?: RefObject<HTMLInputElement>;
};

interface FormElements extends HTMLFormControlsCollection {
  searchInput: HTMLInputElement;
}
interface SearchFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const SearchInput = ({
  placeholder,
  onSearch,
  onRemove,
  query,
  extInputRef,
}: SearchInputProps) => {
  const { colorMode } = useColorMode();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (event: React.FormEvent<SearchFormElement>) => {
    event.preventDefault();
    onSearch(event.currentTarget.elements.searchInput.value);
  };
  const handleClearInput = (ref: RefObject<HTMLInputElement>) => {
    if (ref?.current?.value) {
      ref.current.value = "";
      onRemove?.(query!);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <FormControl isRequired width={["full", "fit-content"]}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FaSearch color="#E2E2E2" />
          </InputLeftElement>
          <Input
            type="text"
            size="md"
            backgroundColor={colorMode === "light" ? "white" : "#1A202C"}
            placeholder={placeholder ?? ""}
            ref={extInputRef ?? inputRef}
            id="searchInput"
            color="current"
            role="search"
          />
          <InputRightElement>
            <MdClear
              role="button"
              cursor="pointer"
              onClick={() => handleClearInput(extInputRef ?? inputRef)}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default SearchInput;
