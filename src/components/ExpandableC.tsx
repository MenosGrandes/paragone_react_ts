import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IProductAndPrice } from '../dataClass/TicketI';




interface LayoutHeightI {
  layoutHeight: number;
}

export default ExpandableComponent = ({ item, onClickFunction }: { item: IProductAndPrice, onClickFunction: any }) => {
  //Custom Component for the Expandable List
  const [layoutHeight, setLayoutHeight] = useState<LayoutHeightI | number>(0);

  useEffect(() => {
    if (item.viewSettings.isExpanded) {
      setLayoutHeight(1);
    } else {
      setLayoutHeight(0);
    }
  }, [item.viewSettings.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}>
        <Text >{item.product.name}</Text>
    </TouchableOpacity>
    </View >
  );
};

