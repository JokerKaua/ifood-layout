import { View, Text, Pressable, Image } from 'react-native'

import { RestaurantsProps } from '..'
import { FontAwesome, Ionicons } from '@expo/vector-icons'



export default function RestaurantCard({ item }: { item: RestaurantsProps }) {

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
                <Image source={{uri: Logo}} style={{
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