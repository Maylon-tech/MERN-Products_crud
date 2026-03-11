import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react'
import '../index.css'


const Modal = ({ modal }) => {

    const hancleCloseModal = () => {
        modal(false)
    }

  return (
    <div className='modal-wrapper'>
        
        <Box
            w={"full"}
            p={6}
            rounded={"lg"}
            shadow={"md"}
            className='modal-content'
        >
            <HStack className='modal-header'>
                <Text 
                    fontSize="30"
                    fontWeight="bold"
                >Editar Produtos</Text>
                
                <Button className='close-btn' onClick={hancleCloseModal}>X</Button>
            </HStack>

            <VStack spacing={4}>
                  
             <Input
                placeholder='Product Name'
                name='name'               
            />
            <Input
                placeholder='Product Name'
                name='price'               
            />
            <Input
                placeholder='Product Name'
                name='image'               
            />
{/*
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
*/}
            <HStack className='action-btn'>    
                <Button
                   
                >
                    Editar
                </Button> 
                
                <Button
                   
                    onClick={hancleCloseModal}
                >
                    Fechar
                </Button>
            </HStack>
            </VStack>
        </Box>
    </div>
  )
}

export default Modal
