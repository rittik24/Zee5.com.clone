import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";

const MyTransactions = () => {
  return (
    <Box bgColor="gray.900" px="1%" py="2%">
      <Heading as="h2" size="md" textAlign="center">
        My Transactions
      </Heading>

      {/* Transaction - 1 */}
      <List spacing={3} textAlign="left" my="1%" bgColor="gray.700" p="1%">
        <ListItem>
          Transaction ID : BIL/ONL/00184453533/One Mobiqwik/264325005
        </ListItem>
        <ListItem>Amount : Rs 699</ListItem>
        <ListItem>Payment Date : 1 January, 2022, at 5:13 PM</ListItem>
        <ListItem>Plan : Premium HD</ListItem>
      </List>
      {/* Transaction - 2 */}
      <List spacing={3} textAlign="left" my="1%" bgColor="gray.600" p="1%">
        <ListItem>
          Transaction ID : BIL/ONL/00184483630/One Paytm/264334934
        </ListItem>
        <ListItem>Amount : Rs 699</ListItem>
        <ListItem>Payment Date : 1 January 2021, at 12:59 PM</ListItem>
        <ListItem>Plan : Premium HD</ListItem>
      </List>
      {/* Transaction - 3 */}
      <List spacing={3} textAlign="left" my="1%" bgColor="gray.700" p="1%">
        <ListItem>
          Transaction ID : BIL/ONL/001844836345/One RazorPay/26433492421
        </ListItem>
        <ListItem>Amount : Rs 699</ListItem>
        <ListItem>Payment Date : 1 January 2020, at 9:33 PM</ListItem>
        <ListItem>Plan : Premium HD</ListItem>
      </List>
      {/* Transaction - 4 */}
      <List spacing={3} textAlign="left" my="1%" bgColor="gray.700" p="1%">
        <ListItem>
          Transaction ID : BIL/ONL/001844836345/One RazorPay/26433492421
        </ListItem>
        <ListItem>Amount : Rs 699</ListItem>
        <ListItem>Payment Date : 1 January 2020, at 9:33 PM</ListItem>
        <ListItem>Plan : Premium HD</ListItem>
      </List>
    </Box>
  );
};

export default MyTransactions;
