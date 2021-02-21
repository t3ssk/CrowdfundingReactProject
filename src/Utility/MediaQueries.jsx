import React from 'react';
import { useMediaQuery } from 'react-responsive';
 

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 787 })
  return isDesktop ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 786 })
  return isMobile ? children : null
}
