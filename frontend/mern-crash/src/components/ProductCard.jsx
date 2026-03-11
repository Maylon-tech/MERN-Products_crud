
import {
    Box,
    HStack,
    Heading,
    IconButton,
    Image,
    Text,
    Dialog,
    Button,
    Portal,
    Toaster,
    CloseButton,
    For,
} from "@chakra-ui/react"
import { useProductStore } from "../store/product"
import { toaster } from "../components/ui/toaster"
import { FaEdit } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"
import Modal from "./Modal"

const ProductCard = ({ product, openModal }) => {

    // const textColor = useColorModeValue("gray.600", "gray.200")
    // const bg = useColorModeValue("white", "gray.800")
    const [updatedProduct, setUpdatedProudct] = useState(product)
    const { deleteProduct } = useProductStore()

    // const { isOpen, onOpen, onClose } = useDisclosure()


    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid)
        if(!success) {
            Toaster.create({
                title: "Error",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        } else {
            toaster.create({
                title: "Success",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            })
        }
        confirm("Deleted OK!")
    }

    const handleUpdateProduct = async (pid, updateProduct) => {
        await updateProduct(pid, updateProduct)
    }

  return (
    <Box
        shadow='lg'
        rounded='md'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: "translateY(-5px)", shadow: 'xl' }}
          style={{ margin: "15px" }}
          bg="gray.950"
    >
        <Image 
            src={product.image}
            alt={product.name}
            h={48}
            w='full'
            objectFit='cover'
        />
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>
            
            <Text fontWeight='bold' fontSize='xl' mb={4}>
                $ {product.price}
            </Text>

            <HStack spacing={2}>            
                <IconButton                     
                    colorScheme='blue'  
                    onClick={() => openModal(true)}
                >
                    <FaEdit color="blue" />
                </IconButton>
               
                <IconButton                       
                    colorScheme='red'                    
                    onClick={() => handleDeleteProduct(product._id)}
                >
                    <FaTrash color="darkblue" />
                </IconButton>
            </HStack>
        </Box>

        {/* MODAL */}         

          
          
    </Box>
  )
}

export default ProductCard
