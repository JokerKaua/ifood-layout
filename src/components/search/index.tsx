import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { Ionicons, Entypo } from '@expo/vector-icons'
import { useState } from 'react';

export function Search() {

  // Usando o useState do React para fazer uma função de apagar a pesquisa.
  const [search, setSearch] = useState('');

  // Função para clear pesquisa
  const clearSearch = () => {
    setSearch('');
  };

  return (
    //eu não sei porque e não quero saber, mas o tailwind 'mt-<valor>' funciona as vezes e as vezes não, então fiz um StyleSheet padrão mesmo.
    // <View className='w-full h-10 items-center rounded-xl mt-1.5 bg-gray-300 flex-row px-2'>
    <View style={styles.container}>
      <Ionicons name='search' size={24} color={'#888'} className='absolute ml-2' />
      <TextInput className='w-full h-full mx-0 mr-2 text-gray-950'
        placeholder='Pesquisar comida'
        placeholderTextColor={"#888"}
        value={search}
        onChangeText={(text) => { setSearch(text) }}
      />
      {/* Fanzedo essa operação, o Pressable só vai renderizar/carregar caso haja algum texto na barra de pesquisa*/}
      {search.length > 0 && (

        <Pressable className='bg-transparent absolute right-0 p-2 pl-3 py-3 rounded-xl'
          onPress={clearSearch}
        >
          <Entypo name='cross' size={18} color={'#888'} />
        </Pressable>
      )}
    </View>
  )
}

//className='w-full h-10 items-center rounded-xl bg-gray-300 flex-row px-2'
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#d0d0d0',
    height: 36,
    borderRadius: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    paddingHorizontal: 34,
  }
});