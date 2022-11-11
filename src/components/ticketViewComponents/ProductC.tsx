
import React from 'react'
import { Text, View } from "react-native";
import { IProduct, IProductAndPrice } from "../../dataClass/TicketI";
import ExpandableC from '../ExpandableC';

const ProductC = ({ data}: { data: IProductAndPrice}) => (
  <View>
    <Text> data.product.name</Text>
  </View>
);

export default ProductC;
