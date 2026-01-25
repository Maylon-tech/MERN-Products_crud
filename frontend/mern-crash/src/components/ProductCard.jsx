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
    CloseButton,
    useToastStyles,
    useDisclosure,

} from "@chakra-ui/react"
import { useProductStore } from "../store/product"
import { toaster } from "../components/ui/toaster"
import { FaEdit } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"

const ProductCard = ({ product }) => {
    // const textColor = useColorModeValue("gray.600", "gray.200")
    // const bg = useColorModeValue("white", "gray.800")

    const { deleteProduct } = useProductStore()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid)
        if(!success) {
            toaster.create({
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
    }

  return (
    <Box
        shadow='lg'
        rounded='md'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: "translateY(-5px)", shadow: 'xl' }}
        style={{ margin: "15px" }}
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
                    onClick={onOpen}
                >
                    <FaEdit color="darkblue" />
                </IconButton>

                <IconButton                       
                    colorScheme='red'                    
                    onClick={() => handleDeleteProduct(product._id)}
                >
                    <FaTrash color="darkblue" />
                </IconButton>
            </HStack>
        </Box>

          <Dialog.Root>
              {/* <Button variant="outline" size="sm">Open Modal</Button> */}
              <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Dialog Title</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </Dialog.Body>
                            
                            <Dialog.Footer>
                                <Dialog.ActionTrigger asChild>
                                    <Button variant="outline">Cancel</Button>
                                </Dialog.ActionTrigger>
                                
                                <Button>Save</Button>
                            
                            </Dialog.Footer>
                            
                            <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
              </Portal>
          </Dialog.Root>
    </Box>
  )
}

export default ProductCard
