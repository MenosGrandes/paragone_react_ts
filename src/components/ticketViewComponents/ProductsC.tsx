
import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { IIsVisible, IProductAndPrice } from '../../dataClass/TicketI'
import ProductC from './ProductC'

const ProductsC = ({ data }: { data: Array<IProductAndPrice> }) => {

  const [isVisible, setIsVisible] = useState<IIsVisible | boolean>(false);
  useEffect(() => { }, [isVisible]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => { setIsVisible(!isVisible) }}>

        <Text>ListProduktow</Text>
      </TouchableOpacity>
      {
        isVisible &&
        <FlatList
          data={data}
          renderItem={({ item }) => <ProductC product={item} />}
          keyExtractor={(item: IProductAndPrice) => item.id}
        />
      }
    </View>
  )
}

export default ProductsC
