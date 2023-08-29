'use client'

import { Menu, MenuList, MenuButton, MenuItem, useDisclosure } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'

const DropdownNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        onMouseOver={onOpen}
        pl={5}
        bgColor='none'
      >
        Our Work <ChevronDownIcon />
      </MenuButton>
      <MenuList 
        onMouseLeave={onClose}
      >
      <MenuItem>Orphanage</MenuItem>
      <MenuItem>Prisions outreach</MenuItem>
      <MenuItem>Medical outreach</MenuItem>
      <MenuItem>Visually impaired</MenuItem>
      <MenuItem>St Kathryns hospital</MenuItem>
      <MenuItem>St Gamaliels hospital</MenuItem>
      <MenuItem>Physically handicapped</MenuItem>
    </MenuList>
    </Menu>
  )
}

export default DropdownNav