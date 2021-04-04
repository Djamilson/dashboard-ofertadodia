import {
  Box,
  Icon,
  Flex,
  Heading,
  Button,
  Table,
  Td,
  Th,
  Thead,
  Tr,
  Checkbox,
  Tbody,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4", "6"]}>
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                colorScheme="pink"
                fontSize="20"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Novo usuário
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Dada de cadastro</Th>}
                <Th width="8">Ação</Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Djamilso Alves da Costa</Text>
                    <Text fontSize="sm" color="gray.300">
                      djamilso@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td> 03 de abril de 2021</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="purple"
                    fontSize="16"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Djamilso Alves da Costa</Text>
                    <Text fontSize="sm" color="gray.300">
                      djamilso@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td> 03 de abril de 2021</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="purple"
                    fontSize="16"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Djamilso Alves da Costa</Text>
                    <Text fontSize="sm" color="gray.300">
                      djamilso@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td> 03 de abril de 2021</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    colorScheme="purple"
                    fontSize="16"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
