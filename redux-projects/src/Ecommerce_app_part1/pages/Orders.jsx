import { Box, Flex, Heading, useSafeLayoutEffect } from '@chakra-ui/react'
import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getorderData } from '../Redux/Products/action'
import ProductSimple from './ProductSimple'

const Orders = () => {
  const orders = useSelector((store)=>store.ecommerceData.order)
  console.log(orders,"orderadata")
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getorderData())
  },[])
  return (
    <Box>
        <Heading as={"h2"} size="xl" textAlign={"center"}>Your Orders</Heading>
        <Flex>
        {
        orders? orders.map((el)=><ProductSimple key={el.id} image={el.image} title={el.title}  rating={el.rating.count} price={el.price}></ProductSimple>)
        :<div>...loading</div>
        }
        </Flex>
    </Box>
  )
}

export default Orders