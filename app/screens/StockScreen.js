import React from 'react';
import {FlatList} from 'react-native';
import StockItem from "../components/StockItem";
import instruments from "../assets/instruments.json";
import ListItemSeparator from "../components/ListItemSeparator"

const StockScreen = ({navigation}) => {
  return (
      <FlatList 
      data={instruments}
      keyExtractor={(item) => item.name}
      ItemSeparatorComponent={ListItemSeparator}
      renderItem={({ item }) => (
        <StockItem 
        name={item.name} 
        symbol={item.symbol}
        currentPrice={item.currentPrice.value}
        onPress={()=> navigation.navigate("Details", item)}
        />   
      )}
      
      />
  )
}

export default StockScreen;
//last update 