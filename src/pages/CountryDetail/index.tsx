import { useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { fetchCountriesByName } from "../../features/countries/slice";
import toast from "react-hot-toast";

const CountryDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { countries } = useAppSelector((state) => state.countries);

  const handleViewAllCountries = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const requestController = new AbortController();

    const onFailure = (error: any) => {
      const {
        data: { message },
      } = error;

      toast.error(`Country ${message} `);
      handleViewAllCountries();
    };

    dispatch(fetchCountriesByName({ name: id as string, onFailure }));

    return () => requestController.abort();
  }, [id]);

  return (
    <>
      {countries.map(
        ({
          name: { official },
          flags: { png },
          region,
          capital,
          population,
          subregion,
          area,
          flag,
          status,
        }) => (
          <Card
            mt="16"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            key={`${Math.random()}-${official}`}
          >
            <Image src={png} alt={`${official}-flag`} />
            <Stack>
              <CardBody>
                <Heading size="md">{official}</Heading>
                <Box display="flex" gap="2" mb="1" mt="4">
                  <Text size="sm" fontWeight="semibold">
                    Population:
                  </Text>
                  <Text color="gray.600">
                    {population.toLocaleString("en-US")}
                  </Text>
                </Box>
                <Box display="flex" gap="2" mb="1">
                  <Text size="sm" fontWeight="semibold">
                    Region:
                  </Text>
                  <Text color="gray.600">{region}</Text>
                </Box>
                <Box display="flex" gap="2" mb="1">
                  <Text size="sm" fontWeight="semibold">
                    Sub Region:
                  </Text>
                  <Text color="gray.600">{subregion}</Text>
                </Box>

                <Box display="flex" gap="2" mb="1">
                  <Text size="sm" fontWeight="semibold">
                    Capital:
                  </Text>
                  <Text color="gray.600">{capital}</Text>
                </Box>
                <Box display="flex" gap="2" mb="1">
                  <Text size="sm" fontWeight="semibold">
                    Area:
                  </Text>
                  <Text color="gray.600">{area}</Text>
                </Box>
                <Box display="flex" gap="2" mb="1">
                  <Text size="sm" fontWeight="semibold">
                    Flag:
                  </Text>
                  <Text color="gray.600">{flag}</Text>
                </Box>
                <Box display="flex" gap="2" mb="1">
                  <Text size="sm" fontWeight="semibold">
                    Status:
                  </Text>
                  <Text color="gray.600">{status}</Text>
                </Box>
              </CardBody>
              <CardFooter>
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={handleViewAllCountries}
                >
                  Back to home page
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        )
      )}
    </>
  );
};

export default CountryDetail;
