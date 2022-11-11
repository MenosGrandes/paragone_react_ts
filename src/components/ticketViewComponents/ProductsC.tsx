
import React from 'react'
import { FlatList, View } from 'react-native'
import { IProduct, IProductAndPrice } from '../../dataClass/TicketI'
import ExpandableC from '../ExpandableC'
import ProductC from './ProductC'


const ProductsC = ({ data }: { data: Array<IProductAndPrice> }) => {
  return (
    <View>

      <FlatList
        data={data}
        renderItem={({ item }) => <ExpandableC item={item} onClickFunction={() => { alert("click") }} />}
        keyExtractor={(item: IProductAndPrice) => item.id}
      />
    </View>
  )
}

export default


  ProductsC
