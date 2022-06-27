import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useColorModeValue,
    useDisclosure,
    Box,
    Image,
    Flex,

  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { postorderdata } from '../Redux/Products/action'





export default function Checkout({cartData,handlepostorder}) {
    console.log(cartData,"cardata")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    // const handlepostorder=()=>{
    //     dispatch(postorderdata(cartData));
    //     onClose()
    // }
    return (
      <>
        <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={onOpen}
            >
            Checkout
 </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Order</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
            {
                cartData.map((el)=>{
                    return(
                        <Flex key={el.id} mb="1rem">
                            <Box ><Image src={el.image} border="1px solid black" rounded={"lg"} objectFit={"contain"} alt="img" width="100px" boxSize={"100px"}></Image></Box>
                            <Box ml="1rem">{el.title}</Box>
                        </Flex>
                    )
                })
            }
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>{handlepostorder();onClose()}} colorScheme='blue' mr={3} >
                Confirm
              </Button>
           
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }