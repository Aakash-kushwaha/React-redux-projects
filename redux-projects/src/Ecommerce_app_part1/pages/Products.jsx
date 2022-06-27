import { Box ,Flex,Stack} from '@chakra-ui/react'
import React from 'react'
import FilterComponents from '../components/FilterComponents'
import {useSelector,useDispatch} from "react-redux"
import { getData } from '../Redux/Products/action'
import {
  Center,
  useColorModeValue,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom'
import ProductSimple from './ProductSimple'



const Products = () => {

  const productsdata = useSelector((store)=>store.ecommerceData.products)
  const[searchParam] = useSearchParams()
  console.log(productsdata)
  const dispatch = useDispatch()


  React.useEffect(()=>{
    if(productsdata?.length==0){
      let params ={
        category:searchParam.getAll("category")
      }
    dispatch(getData(params))
    }
     
  },[dispatch,productsdata?.length,searchParam])

  return (
    <Box display={{base:"flex",md:"flex"}}>
    <Stack display={{md:"flex"}} flexDirection={{ md:"row"}}>
      <Box minWidth="15rem">
        <FilterComponents></FilterComponents>
      </Box>
      </Stack>  
      <Box>
      <Heading as="h3">Products</Heading>
      <Flex flexWrap="wrap" justifyContent="space-around">
        {
          productsdata.map((el)=><ProductSimple key={el.id} image={el.image} title={el.title}  rating={el.rating.count} price={el.price}></ProductSimple>)
        }
      </Flex>
  
      </Box>
    </Box>
  )
}





export default Products