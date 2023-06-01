import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (

    <View className="bg-[#102601] h-full">

    <View className="flex items-center">

      {/* Texto boas vindas */}
      <Text className="text-5xl font-alice font-regular w-[278px] text-center text-[#B3BF56] pt-24">Olá, como você está?</Text>
      
      <View className="pt-[72px] text-center ">
      {/* Pontos ganhos */}

        <Text className="text-[#f7f7f7] text-4xl text-center ">Pontos ganhos</Text>

        <View className="mt-[14px] rounded-[20px] bg-[#365902] h-[83px] flex flex-row items-center justify-around " >
  
          <View className="">
            <Text className="text-2xl text-[#f7f7f7]">Hoje</Text>
            <Text className="text-2xl text-[#B3BF56]">5.34</Text>
          </View>

          <View>
            <Text className="text-2xl text-[#f7f7f7]">Totais</Text>
            <Text className="text-2xl text-[#B3BF56]">5.34</Text>
          </View>
          
        </View>


        <View className="bg-[#8AA626 mt-[90px] w-full h-[254px]">

          <View className="bg-[#B3BF56] ">

          </View>

        </View>

      </View>


    </View>



    </View>

  );
}