import React from 'react'
import { Text, View } from 'react-native';
import { IProductAndPrice } from '../../dataClass/TicketI'

const ProductC = ({ product }: { product: IProductAndPrice }) => {
  return (
    <View>
      <Text>{product.product.name}</Text>
    </View>
  )
}
export default ProductC;
