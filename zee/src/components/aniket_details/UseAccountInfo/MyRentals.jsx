import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { MovieCard } from "./MyWatchlist";

const MyRentals = () => {
  return (
    <Box bgColor="gray.900" px="1%" py="2%">
      <Heading as="h2" size="md" textAlign="center">
        My Rentals
      </Heading>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {/* Movie List */}
        {rentals &&
          rentals.map((movie) => (
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

export default MyRentals;

// Rental movies, data - which has to come dynamically for each current LoggedIn user
const rentals = [
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
    id: 3,
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
];
