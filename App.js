import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from 'twrnc'

export default function App() {
  return (
    <View style={tw`bg-[#102601] h-full`}>

      <View style={tw`text-[#8aa626] flex items-center pt-24`}>
      {/* Top */}

      <Text style={tw`text-7xl`}>0,00</Text>
      <Text style={tw`text-4xl`}>PONTOS</Text>

      </View>
      
    </View>
  );
}