import React from 'react'
import {Box, Heading, Stack,Image, Text, useColorModeValue, Button} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartdata, postorderdata } from '../Redux/Products/action'
import Checkout from './Checkout'

const Cart = () => {
const cartData= useSelector((store)=>store.ecommerceData.cart)

const dispatch  = useDispatch()

const removeProduct=(id)=>{
  dispatch(deleteCartdata(id))
}

const handlepostorder=()=>{
  console.log(cartData,"post")
  dispatch(postorderdata(cartData))
}


console.log(cartData,"car")


  return (
    <Box>
<Heading textAlign="center">Cart</Heading>
{cartData.length && cartData.map(el=>{
  return <Cartitem 
  key={el.id} title={el.title} id={el.id}
   price={el.price} description = {el.description}
   image = {el.image} removeProduct={removeProduct}
   ></Cartitem>
  })}

<Checkout cartData={cartData} handlepostorder={handlepostorder}></Checkout>
    </Box>
  )
}



const Cartitem=({title,price,description,image,removeProduct,id})=>{
  return(
    <Box 
    // border={"1px solid red"}
    rounded="lg"
    width={"fit-content"}
    margin="auto"
    mb={"2rem"}
   
    >
      <Stack direction={{base:"column",md:"row"}}>
        <Box height={"250px"} width={"250px"}
        //  border="1px solid teal" 
         position="relative" padding="0 1rem"  _after={{
            transition: 'all .3s ease',
            content: '""',
            w: '85%',
            h: '70%',
            pos: 'absolute',
            top: "50%",
            left: "50%",
            transform:`translate(-50%,-50%)`,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}>
        <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'contain'}
            src={image}
          />
        </Box>
        <Box
         height={"250px"} width={"250px"}
          // border="1px solid teal"
         >
        <Stack p={4}>
        <Heading  size="lg" textOverflow={"ellipsis"} overflow={"hidden"} whiteSpace="nowrap">{title}</Heading>
        <Box overflow={"hidden"} whiteSpace="nowrap">
        <Text>{description}</Text>
        </Box>
        
        <Text  color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
        >{price}</Text>
        <Button  onClick={()=>removeProduct(id)} variant={"solid"} leftIcon={<DeleteIcon></DeleteIcon>}>Remove</Button>
        </Stack>
       
        </Box>
      </Stack>
    </Box>
  )
}






export default Cart