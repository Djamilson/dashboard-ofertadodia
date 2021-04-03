import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Djamilson Alves da Costa</Text>
        <Text color="gray.300" fontSize="small">
          djamilson@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Djamilson Alves da Costa"
        src="https://github.com/djamilson.png"
      />
    </Flex>
  );
}
