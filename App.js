import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from'@react-navigation/stack'

import StockScreen from "./app/screens/StockScreen"
import DetailScreen from "./app/screens/DetailScreen"


const Stack = createStackNavigator();
const StockNavigator = ()=> (
  <Stack.Navigator>
    <Stack.Screen name="Stocks" component={StockScreen}/>
    <Stack.Screen name="Details" component={DetailScreen}/>
  </Stack.Navigator>
)

const serverURL = "192.168.0.39:3000/instruments"
export default function App() {
  
  /* fetching 
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  
  useEffect(() =>{
    fetch(serverURL)
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((error) => allert(error))
    .finally(setLoading(false))
  }
  )
  
  MY PROBLEMS: 
  fetching data and passing the data to components -> how to keep the components
   in separate files and still passing the data in app.js
  creating function that randomize the data and update it every 5 sec. 
  */
  
  return (
    <NavigationContainer>
     <StockNavigator />
    </NavigationContainer>
    
  )
}

