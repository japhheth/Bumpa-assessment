import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import {
  Card,
  CardBody,
  Button,
  Stack,
  CardFooter,
  Image,
  Heading,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useAppSelector } from "../../store/hooks";
import { setCountry } from "../../features/countries/slice";

const CountryDetail = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { country } = useAppSelector((state) => state.countries);

  const handleViewAllCountries = () => {
    dispatch(setCountry(null));
    navigate(`/countries`);
  };

  return (
    <>
      {country !== null ? (
        <Card
          mt="16"
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            src={country?.flags.png}
            alt={`${country?.name.official}-flag`}
          />
          <Stack>
            <CardBody>
              <Heading size="md">{country?.name.official}</Heading>
              <Box display="flex" gap="2" mb="1" mt="4">
                <Text size="sm" fontWeight="semibold">
                  Population:
                </Text>
                <Text color="gray.600">
                  {country?.population.toLocaleString("en-US")}
                </Text>
              </Box>
              <Box display="flex" gap="2" mb="1">
                <Text size="sm" fontWeight="semibold">
                  Region:
                </Text>
                <Text color="gray.600">{country?.region}</Text>
              </Box>
              <Box display="flex" gap="2" mb="1">
                <Text size="sm" fontWeight="semibold">
                  Sub Region:
                </Text>
                <Text color="gray.600">{country?.subregion}</Text>
              </Box>

              <Box display="flex" gap="2" mb="1">
                <Text size="sm" fontWeight="semibold">
                  Capital:
                </Text>
                <Text color="gray.600">{country?.capital}</Text>
              </Box>
              <Box display="flex" gap="2" mb="1">
                <Text size="sm" fontWeight="semibold">
                  Area:
                </Text>
                <Text color="gray.600">{country?.area}</Text>
              </Box>
              <Box display="flex" gap="2" mb="1">
                <Text size="sm" fontWeight="semibold">
                  Flag:
                </Text>
                <Text color="gray.600">{country?.flag}</Text>
              </Box>
              <Box display="flex" gap="2" mb="1">
                <Text size="sm" fontWeight="semibold">
                  Status:
                </Text>
                <Text color="gray.600">{country?.status}</Text>
              </Box>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={handleViewAllCountries}
              >
                View All Countries
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ) : (
        <Flex
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Text mb="4">Cannot view this country detail at this time.</Text>
          <Text mb="4">
            Kindly click the button below to view all countries
          </Text>
          <Box>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={handleViewAllCountries}
            >
              View All Countries
            </Button>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default CountryDetail;
