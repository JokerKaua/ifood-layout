import { View, Text, TextInput, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

export default function Search() {
  return (
    //eu não sei porque e não quero saber, mas o tailwind 'mt-<valor>' funciona as vezes e as vezes não, então fiz um StyleSheet padrão mesmo.
    // <View className='w-full h-10 items-center rounded-xl mt-1.5 bg-gray-300 flex-row px-2'>
    <View style={styles.container}>
      <Ionicons name='search' size={24} color={'#888'}/>
      <TextInput className='w-full h-full m-2 text-gray-950' placeholder='Pesquisar comida' placeholderTextColor={"#888"}/>
    </View>
  )
}

//className='w-full h-10 items-center rounded-xl bg-gray-300 flex-row px-2'
const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#d0d0d0',
        height: 36,
        borderRadius: 12,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
        paddingHorizontal: 24
    }
});