import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
  <Box
  display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
  alignItems="center"
  justifyContent="space-between"
  flexDirection="column"
  padding={4}
  backgroundColor="white"
  width={{ base: "100%", md: "70%" }}
  borderRadius="2xl"
  boxShadow="md"
  border="1px solid"
  borderColor="gray.200"
  transition="all 0.3s ease-in-out"
>
  <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
</Box>

  );
};

export default Chatbox;
