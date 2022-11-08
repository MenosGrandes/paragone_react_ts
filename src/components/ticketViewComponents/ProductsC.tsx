
import React from 'react'
import { FlatList, View } from 'react-native'
import { IProduct, IProductAndPrice } from '../../dataClass/TicketI'
import ProductC from './ProductC'


const ProductsC = ({ data }: { data: Array<IProductAndPrice> }) => {



  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductC data={item} />}
        keyExtractor={(item: IProductAndPrice ) => item.id}
      />
    </View>
  )
}

export default 


ProductsC
