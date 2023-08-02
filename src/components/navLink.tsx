import React from 'react'
import { Link, ResponsiveValue } from '@chakra-ui/react'

interface NavLinkProps {
  linkText: string;
  path: string
  bgColor?: string
  fontSize?: string
  color?: string
  fontWeight?: string
  ml?: number
  tAlign?: string
  w?: string
  weight?: string
  fSize?: string
  bRadius?: string
  children?: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const {linkText, fSize, color, path, tAlign, w, bgColor, weight, bRadius, children } = props
  return (
      <Link href={path}
          pl={5}
          backgroundColor= {bgColor}
          color= {color ? color : '#110020'}
          borderRadius={bRadius}
          fontSize={fSize}
          fontWeight={weight ? weight : 'medium'}
          ml={5}
          p={1}
          w={w}
          textAlign={tAlign ? tAlign : 'left' }
    >{ linkText } {children} </Link>
  )
}

export default NavLink