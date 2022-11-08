
import React from 'react'
import { Text, View } from "react-native";
import { IProduct, IProductAndPrice } from "../../dataClass/TicketI";




const ProductC = ({ data }: { data: IProductAndPrice}) => (
  <View>
    <Text> {data.product.name} | {data.price.value.toString()}zl | { data.weight.value} kg</Text>
  </View>
);

export default ProductC;
