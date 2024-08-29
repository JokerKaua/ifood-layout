import { View, Text, Pressable, Image } from 'react-native'

import { RestaurantsProps } from '..'
import { FontAwesome, Ionicons } from '@expo/vector-icons'


export default function RestaurantCard({ item }: { item: RestaurantsProps }) {
    
    return (
        <Pressable style={{
            marginVertical: 4,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ddd',
            borderRadius: 16
        }}>
            <View style={{
                width: 140,
                height: 120,
                backgroundColor: 'black',
                borderRadius: 16,
            }}>
            <Image source={{ uri: item.image }} style={{
                width: 140,
                height: 120,
                resizeMode: 'stretch',
                borderRadius: 16,
            }} />
            </View>
            <FontAwesome name='circle' size={38} color={'#aaa'} style={{
                position: 'absolute',
                bottom: 26,
            }}/>
            <Ionicons name='fast-food-outline' size={24} style={{
                position: 'absolute',
                bottom: 32,
                color: '#ddd'
            }}/>
            <Text className='font-semibold text-xl mt-5'>{item.name}</Text>
        </Pressable>

    )
}