import { Flex, Text, Box, Avatar } from "@chakra-ui/react";
interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Djamilson Alves da Costa</Text>
          <Text color="gray.300" fontSize="small">
            djamilson@gmail.com
          </Text>
        </Box>
      )}
      
      <Avatar
        size="md"
        name="Djamilson Alves da Costa"
        src="https://github.com/djamilson.png"
      />
    </Flex>
  );
}
