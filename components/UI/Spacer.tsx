import { DimensionValue, View } from 'react-native'
import React from 'react'

interface spacerProps {
    width?: DimensionValue
    height?: DimensionValue
}

const Spacer = ({ width = "100%" , height = 40 } : spacerProps) => {
  return (
    <View style={{width, height}} />
   
  )
}

export default Spacer