import { Box, Button, HStack, Input, Text, VStack } from '@chakra-ui/react'
import '../index.css'


const Modal = ({ modal, updatedProduct, handleUpdateProduct, setUpdatedProduct }) => {

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
                value={updatedProduct.name}   
                onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value })}        
            />
            <Input
                placeholder='Product Name'
                name='price'  
                value={updatedProduct.price}             
            />
            <Input
                placeholder='Product Name'
                name='image'         
                value={updatedProduct.image}      
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
                   bgColor="blue"     
                   color="white" 
                   w='100px'
                   mr="3"           
                //    onClick={handleUpdate}
                >
                    Editar
                </Button> 
                
                <Button
                    bgColor="red"   
                    color="white"                 
                    onClick={hancleCloseModal}
                >
                    Cancelar
                </Button>
            </HStack>
            </VStack>
        </Box>
    </div>
  )
}

export default Modal
