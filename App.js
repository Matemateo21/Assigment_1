import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from'@react-navigation/stack'

import StockScreen from "./app/screens/StockScreen"
import DetailScreen from "./app/screens/DetailScreen"

/*function loadActivity(){
   fetch("./app/assets/instruments.json")
   .then((response) => response.json())
   .then((data) => console.log(data))
   .catch(console.log(err))
}
*/
const Stack = createStackNavigator();
const StockNavigator = ()=> (
  <Stack.Navigator>
    <Stack.Screen name="Stocks" component={StockScreen}/>
    <Stack.Screen name="Details" component={DetailScreen}/>
  </Stack.Navigator>
)
export default function App() {
  /*let data = loadActivity()
  useEffect(() => {console.warn(data)})
  */
  return (
    <NavigationContainer>
      <StockNavigator/>
    </NavigationContainer>
    
  )
}

