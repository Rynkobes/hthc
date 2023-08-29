'use client'

import { Flex, Avatar } from '@chakra-ui/react'
import NavLink from './navLink'
import DropdownNav from './dropdownNav'

const Menu = () => {
  return (
      <Flex
          w='100%'
          justify='space-between'
          p={'0 20px'}
          bgColor='#FAFAFA'
      >
          <Avatar
              size='xl'
              name='Help the Helpless Charity' />
          <Flex
              align='center'
          >              
              <NavLink linkText='About' path='#' />
              <NavLink linkText='Ways to help' path='#' />
              {/* <NavLink linkText='Our Work' path='#' /> */}
              <DropdownNav />
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