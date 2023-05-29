import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store/hooks";
import {
  Card,
  Image,
  CardBody,
  CardHeader,
  Heading,
  Box,
  Text,
} from "@chakra-ui/react";
import { setCountry } from "../../../features/countries/slice";
import { ICountries } from "../../../types/countries";

type CountryProps = {
  country: ICountries;
};

const Country = ({ country }: CountryProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    name: { official },
    flags: { png },
    region,
    capital,
    population,
  } = country;

  const navigateToCountryDetails = () => {
    dispatch(setCountry(country));
    navigate(`/countries/country/${official}`);
  };

  return (
    <Card cursor="pointer" onClick={navigateToCountryDetails}>
      <Box boxShadow="sm">
        <Image
          height="180"
          w="full"
          objectFit="cover"
          src={png}
          alt={`${official}-flag`}
          role="img"
        />
      </Box>
      <CardHeader>
        <Heading size="sm">{official}</Heading>
      </CardHeader>
      <CardBody>
        <Box display="flex" gap="2" mb="1">
          <Text size="sm" fontWeight="semibold">
            Population:
          </Text>
          <Text color="gray.600">{population.toLocaleString("en-US")}</Text>
        </Box>
        <Box display="flex" gap="2" mb="1">
          <Text size="sm" fontWeight="semibold">
            Region:
          </Text>
          <Text color="gray.600">{region}</Text>
        </Box>
        <Box display="flex" gap="2">
          <Text size="sm" fontWeight="semibold">
            Capital:
          </Text>
          <Text color="gray.600">{capital}</Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default Country;
