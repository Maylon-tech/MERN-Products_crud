import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const HomePage = () => {


  return (
    <Container maxW='contanier.xl' py={12}>
      <VStack spacing={8}>
        <Text
          fontSize="30"
          fontWeight="bold"
          color="gray.300"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          textAlign="center"
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={"full"}
        >

        </SimpleGrid>

        <Text
          fontSize="xl"
          fontWeight="bold"
          color="gray.500"
          Textcolor={"whtie"}         
          textAlign={"center"}
        >
          No Products Found {" "}

          <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
            <Link to={"/create"}>
              Create a Product
            </Link>
          </Text>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage
