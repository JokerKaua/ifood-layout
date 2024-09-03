import { View, Text, Pressable, Image } from 'react-native'

import { FoodProps } from '..'
import { FontAwesome, Ionicons } from '@expo/vector-icons'



export default function FoodCard({ item }: { item: FoodProps }) {

    const width = 140; 
    const height = 100;

    // This line works
    const Logo = Image.resolveAssetSource(require(`@/src/assets/restaurants/kfc.png`)).uri

    // But when I put the image name as the name obtained by json, it doesnt work.
    // const Logo = Image.resolveAssetSource(require(`@/src/assets/restaurants/${item.image}`)).uri

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
                <Image source={{uri: item.image}} style={{
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