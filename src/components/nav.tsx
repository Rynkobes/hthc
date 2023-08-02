import React from 'react'
import { Flex, Avatar, Link } from '@chakra-ui/react'
import NavLink from './navLink'

const Menu = () => {
  return (
      <Flex
          w='100%'
          h='14vh'
          justify='space-between'
          align='start'
      >
          <Avatar
              size='xl'
              name='Help the Helpless Charity' />
          <Flex
              align='center'
          >              
              <NavLink linkText='About' path='#' />
              <NavLink linkText='Ways to help' path='#' />
              <NavLink linkText='Our Work' path='#' />
              <NavLink linkText='Information & Support' path='#' />
              <NavLink 
                  path='#'
                  linkText='Give'
                  bgColor='#D13B31'
                  color='#fff'
                  bRadius='20px'
                  fSize='18px'
                  weight='bold'
                  w='7rem'
                  tAlign='center'
              />
          </Flex>
    </Flex>
  )
}

export default Menu