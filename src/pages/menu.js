import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Menu() {
  return (

    <View className="bg-[#102601] h-full">

      <View className="flex items-center">

        {/* Texto boas vindas */}
        <Text className="text-5xl font-alice font-regular w-[278px] text-center text-[#B3BF56] mt-[144px]">Olá, como você está?</Text>
        
        <View className="mt-[128px] text-center w-[301px] h-[138px] bg-black">
        {/* Pontos ganhos */}

          <Text className="text-[#f7f7f7] text-4xl text-center ">Pontos ganhos</Text>

          <View className="mt-[14px] rounded-[20px] bg-[#365902] w-[301px] h-[83px] flex flex-row items-center justify-around " >
    
            <View className="">
              <Text className="text-2xl text-[#f7f7f7]">Hoje</Text>
              <Text className="text-2xl text-[#B3BF56]">5.34</Text>
            </View>

            <View>
              <Text className="text-2xl text-[#f7f7f7]">Totais</Text>
              <Text className="text-2xl text-[#B3BF56]">5.34</Text>
            </View>
            
          </View>

        </View>


        <View className=" mt-[90px] h-[254px] w-full bg-[#8aa626] rounded-tl-[75px] rounded-tr-[75px]">

        <View>
          <TouchableOpacity 
          onPress={() => navigation.navigate("atividades")}>
            <Text>Pratique Atividades</Text>
          </TouchableOpacity>
        </View>

        </View>

        
        <View className="bg-[#365902] h-[64px] ">
          
        </View>

      </View>
    </View>

  );
}