import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (

  //   <View className="flex items-center">
  //   <View>
  //     <Text className="text-3xl font-alice font-regular w-[300px] text-left text-[#B3BF56] pt-36">
  //       Bem vindo ao CarbonEco
  //     </Text>

  //     <Text className='text-2xl font-alice font-regular w-[300px] text-left text-[#B3BF56]'>
  //       Um aplicativo com o intuito de diminuir o consumo de carbono no mundo através das atitudes dos usuários
  //     </Text>
  //   </View>

  //   <View className="rounded-xl w-[268px] h-[68px] mt-[150px] bg-[#365902] 
  //   flex items-center justify-center hover:cursor-pointer">
      
  //     <Image
  //       resizeMode="stretch"
  //       source={require("./assets/play-icon.png")}
  //     />

  //     <Text>
  //       Start
  //     </Text>
  //   </View>
  // </View>
    <View className="bg-[#102601] h-full flex flex-col items-center justify-center">
        <Text className="text-3xl text-center font-alice font-regular mb-10 text-[#B3BF56]">
          Faça o seu Login
        </Text>

        {/* Container pai dos input */}
        <View className="rounded-3xl flex flex-col bg-[#8AA626] h-[413px] w-[289px] 
          items-center justify-center"> 
          {/* Icone Avatar  */}

        <View className="mb-5">
            <Image
              resizeMode="stretch"
              source={require("./assets/avatar-icon.png")}
            />
        </View>

          {/* Input-1 */}
          <TextInput className="bg-white w-[70%] mb-5"> 
            Usuário 
          </TextInput>

          {/* Input-2 */}
          <TextInput className="bg-white w-[70%]">
            Senha
          </TextInput>

          <Text className="text-white mb-4">
            Esqueci minha Senha
          </Text>

          <TouchableOpacity className="bg-[#16390A] w-[163px] h-[39px] flex 
            items-center justify-center rounded-2xl m-3">
            <Text className="text-white">Login</Text>
          </TouchableOpacity> 

          <Text className="text-white text-center p-2">
            Não tem uma conta? {'\n'}
            Cadastre-se aqui
          </Text>
        </View>
    </View>

  );
}