import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Flex,
    Avatar,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Profile = () => {
  return (
    <Flex>
        <Menu>
  <MenuButton as={Button} 
//   rounded="full"
  variant="link"
  cursor="pointer"
  minW={0}>
  <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </MenuButton>
  <MenuList>
   
    <MenuItem>LogIn</MenuItem>
    <MenuItem>LogOut</MenuItem>
    <MenuItem>Cart</MenuItem>
    <MenuItem>Your Orders</MenuItem>
  </MenuList>
</Menu>
    </Flex>
  )
}

export default Profile