import { Link } from "react-router-dom"
import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react"
import { toaster } from "../components/ui/toaster"
import { FaArrowLeft } from "react-icons/fa"
import { useState } from "react"
import { useProductStore } from "../store/product"
import { useNavigate } from "react-router-dom"

const EditProduct = () => {
  const navigate = useNavigate()
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })

  const [updatedProduct, setUpdatedProudct] = useState(product)
  const { createProduct } = useProductStore()
  const { fetchProducts } = useProductStore()
    
    
  const handleAddProudct = async () => {
    const { success, message } = await createProduct(newProduct)
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        status: "error",
      })
    } else {
      toaster.create({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      })
    }
    setNewProduct({ name: "", price: "", image: "" })
    console.log("Success",success)
    console.log("Message", message)
    navigate("/")
  }

  return (
    <Container maxW={"container-sm"}>
      <VStack spacing={8}>
        <Heading
          as={"h1"}
          size={"2xl"}
          textAlign={"center"}
          mb={8}
          color="orangered"
        >
          Edit Products
        </Heading>

        <Box
          w={"full"}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <Input
              placeholder='Price'
              name='price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />

            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />

            <Button
              colorScheme="blue"
              onClick={handleAddProudct}
              w='xs'
            >
              Edit Product
            </Button>
          </VStack>
          
          <Button colorScheme="green" mt={10}>
            <Link to="/">Voltar</Link>
          </Button>
        </Box>
      </VStack>
    </Container>
  )
}

export default EditProduct
