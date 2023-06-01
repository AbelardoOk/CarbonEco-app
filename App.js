import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import menu from "./src/pages/menu";
import atividades from "./src/pages/atividades";


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='menu'>

        <Stack.Screen name="menu" component={menu} />
        <Stack.Screen name="atividades" component={atividades} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}