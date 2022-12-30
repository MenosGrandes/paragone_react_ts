import React from 'react'
import { Text, View } from 'react-native';
import { useTailwind } from 'tailwind-rn/dist';
import { IProductAndPrice } from '../../dataClass/TicketI'

const ProductC = ({ product }: { product: IProductAndPrice }) => {
  	const tailwind = useTailwind();
  return (
    <View style={tailwind('border-green-600 p-4 m-4 border-b')}>
      <Text style={tailwind('text-blue-600')}> {product.product.name}</Text>
      <Text>{product.product.name}</Text>
      <Text>{product.product.type}</Text>
    </View>
  )
}
export default ProductC;
