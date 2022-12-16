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

  return (
    <Flex>
      {/* Options in side bar */}
      <Box
        border="0px solid red"
        w="15%"
        textAlign="left"
        px="2%"
        py="3%"
        bgColor="gray.1000"
      >
        <Text
          cursor="pointer"
          mb="15%"
          onClick={() => handleClick("MyProfile")}
          color={activeMenu.MyProfile ? "red" : "blue"}
          textDecoration={activeMenu.MyProfile ? "underline" : "none"}
        >
          My Profile
        </Text>
        <Text
          cursor="pointer"
          mb="12%"
          onClick={() => handleClick("MyWatchlist")}
          color={activeMenu.MyWatchlist ? "red" : "blue"}
          textDecoration={activeMenu.MyWatchlist ? "underline" : "none"}
        >
          My Watchlist
        </Text>
        <Text
          cursor="pointer"
          mb="12%"
          onClick={() => handleClick("MySubscription")}
          color={activeMenu.MySubscription ? "red" : "blue"}
          textDecoration={activeMenu.MySubscription ? "underline" : "none"}
        >
          My Subscription
        </Text>
        <Text
          cursor="pointer"
          mb="12%"
          onClick={() => handleClick("MyRentals")}
          color={activeMenu.MyRentals ? "red" : "blue"}
          textDecoration={activeMenu.MyRentals ? "underline" : "none"}
        >
          My Rentals
        </Text>
        <Text
          cursor="pointer"
          onClick={() => handleClick("MyTransactions")}
          color={activeMenu.MyTransactions ? "red" : "blue"}
          textDecoration={activeMenu.MyTransactions ? "underline" : "none"}
        >
          My Transactions
        </Text>
      </Box>

      {/* Info of respective active option */}
      <Box w="85%" border="0px solid red">
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
