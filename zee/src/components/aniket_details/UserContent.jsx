import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import MyProfile from "./UseAccountInfo/MyProfile";
import MyRentals from "./UseAccountInfo/MyRentals";
import MySubscription from "./UseAccountInfo/MySubscription";
import MyTransactions from "./UseAccountInfo/MyTransactions";
import MyWatchlist from "./UseAccountInfo/MyWatchlist";

const initState = {
  MyProfile: true,
  MyWatchlist: false,
  MySubscription: false,
  MyRentals: false,
  MyTransactions: false,
};

const UserContent = () => {
  const [activeMenu, setActiveMenu] = useState(initState);

  const handleClick = (activeValue) => {
    setActiveMenu({ [activeValue]: true });
  };

  // console.log(activeMenu);

  return (
    <Flex>
      {/* Options */}
      <Box
        border="1px solid red"
        w="15%"
        // h="100%"
        textAlign="left"
        px="2%"
        py="1%"
      >
        <Text
          cursor="pointer"
          mb="15%"
          // px="5%"
          onClick={() => handleClick("MyProfile")}
          color={activeMenu.MyProfile ? "red" : "blue"}
        >
          My Profile
        </Text>
        <Text
          cursor="pointer"
          mb="12%"
          // px="5%"
          onClick={() => handleClick("MyWatchlist")}
          color={activeMenu.MyWatchlist ? "red" : "blue"}
        >
          My Watchlist
        </Text>
        <Text
          cursor="pointer"
          mb="12%"
          // px="5%"
          onClick={() => handleClick("MySubscription")}
          color={activeMenu.MySubscription ? "red" : "blue"}
        >
          My Subscription
        </Text>
        <Text
          cursor="pointer"
          mb="12%"
          // px="5%"
          onClick={() => handleClick("MyRentals")}
          color={activeMenu.MyRentals ? "red" : "blue"}
        >
          My Rentals
        </Text>
        <Text
          cursor="pointer"
          // mb="12%" no need it's the last option
          // px="5%"
          onClick={() => handleClick("MyTransactions")}
          color={activeMenu.MyTransactions ? "red" : "blue"}
        >
          My Transactions
        </Text>
      </Box>

      {/* Info of respective active option */}
      <Box w="85%" border="1px solid red" px="2%" py="1%">
        {activeMenu.MyProfile && <MyProfile />}
        {activeMenu.MyWatchlist && <MyWatchlist />}
        {activeMenu.MySubscription && <MySubscription />}
        {activeMenu.MyRentals && <MyRentals />}
        {activeMenu.MyTransactions && <MyTransactions />}
      </Box>
    </Flex>
  );
};

export default UserContent;
