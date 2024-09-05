import { View, Text, Pressable, Image } from 'react-native'

import { RestaurantsProps } from '..'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import { images } from '@/src/assets/restaurants/images'

export default function RestaurantCard({ item }: { item: RestaurantsProps }) {

    const width = 140; 
    const height = 100;

    let Logo = Image.resolveAssetSource(images[item.image])
    // console.log(Logo);

    return (
        <Pressable style={{
            marginVertical: 4,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#c8c8c8',
            borderRadius: 16,
        }}
            onPress={() => { console.log(`CLICOU EM ${item.name}`) }}
        >
            <View style={{
                width: width,
                height: height,
                backgroundColor: 'black',
                borderRadius: 16,
            }}>
                {/**
                 * Aqui, tanto faz inicializar ou não o json-server. 
                 * Criei outro arquivo json. 'db-pathImages.json'
                 * Será utilizado para pegar o caminho das imagens. 
                 * 
                 * Caso queria testar o json-server, vá no componente Restaurant e comente o código da função getRestaurantsJson() e deixe apenas a função getRestaurants().
                 */}
                <Image source={Logo} onError={() => {/** não, isso não é uma boa solução, mas assim se o nome da imagem no db.json estiver errada, funciona*/}} style={{
                    width: width,
                    height: height,
                    resizeMode: 'stretch',
                    borderRadius: 16,
                }} />
            </View>
            <FontAwesome name='circle' size={38} color={'#aaa'} style={{
                position: 'absolute',
                bottom: 26,
            }} />
            <Ionicons name='fast-food-outline' size={24} style={{
                position: 'absolute',
                bottom: 32,
                color: '#ddd'
            }} />
            <Text className='font-semibold text-gray-600 text-lg mt-5'>{item.name}</Text>
        </Pressable>

    )
}