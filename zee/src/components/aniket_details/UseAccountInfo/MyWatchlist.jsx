import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MyWatchlist = () => {
  return (
    <Box bgColor="gray.900" px="1%" py="2%">
      <Heading as="h2" size="md" textAlign="center">
        My WatchList
      </Heading>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {/* Movie List */}
        {watchlist &&
          watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imgUrl={movie.src}
              description={movie.description}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default MyWatchlist;

// Movie card function
export const MovieCard = ({ title, imgUrl, description }) => {
  return (
    <Card maxW="sm" color="whiteAlpha.700">
      {/* Image, description */}
      <CardBody>
        <Image src={imgUrl} borderRadius="lg" />

        <Stack mt="6" spacing="3">
          <Heading size="md">Description</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>

      <Divider />

      {/* Buttons */}
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" size="sm">
            Watch Now
          </Button>
          <Button variant="ghost" colorScheme="blue" size="sm">
            Remove from Watchlist
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

// Watchlist movies, data - which has to come dynamically for each current LoggedIn user
const watchlist = [
  {
    id: 1,
    title: "India Lockdown",
    src: "https://m.timesofindia.com/photo/95826048.cms",
    description:
      "Inspired by true events, 'India Lockdown' depicts four parallel stories and the repercussions of the Covid-19 pandemic on the people of India.",
  },
  {
    id: 2,
    title: "India Lockdown",
    src: "https://m.timesofindia.com/photo/95826048.cms",
    description:
      "Inspired by true events, 'India Lockdown' depicts four parallel stories and the repercussions of the Covid-19 pandemic on the people of India.",
  },
  {
    id: 3,
    title: "India Lockdown",
    src: "https://m.timesofindia.com/photo/95826048.cms",
    description:
      "Inspired by true events, 'India Lockdown' depicts four parallel stories and the repercussions of the Covid-19 pandemic on the people of India.",
  },
  {
    id: 4,
    title: "India Lockdown",
    src: "https://m.timesofindia.com/photo/95826048.cms",
    description:
      "Inspired by true events, 'India Lockdown' depicts four parallel stories and the repercussions of the Covid-19 pandemic on the people of India.",
  },
  {
    id: 5,
    title: "India Lockdown",
    src: "https://m.timesofindia.com/photo/95826048.cms",
    description:
      "Inspired by true events, 'India Lockdown' depicts four parallel stories and the repercussions of the Covid-19 pandemic on the people of India.",
  },
];
