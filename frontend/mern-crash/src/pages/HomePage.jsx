import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {

  const { fetchProducts, products } = useProductStore()
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  
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
          {
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))
          }
        </SimpleGrid>

        {
          products.length === 0 && (
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
          )
        }
      </VStack>
    </Container>
  )
}

export default HomePage
