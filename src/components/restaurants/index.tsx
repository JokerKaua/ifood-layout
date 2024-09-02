import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, SectionList } from 'react-native'
import RestaurantCard from './restaurantCard';

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string
}

export function Restaurants({ urlFetch }: { urlFetch: string }) {

    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        //Pegar restaurantes do db.json, simulando uma API
        async function getRestaurants() {
            const response = await fetch(urlFetch);
            const data = await response.json();
            // console.log(data);
            setRestaurants(data);
        }

        getRestaurants();
    }, [urlFetch]);



    return (
        <View>
            <FlatList
                horizontal={true}
                data={restaurants}
                renderItem={({ item }) => <RestaurantCard item={item} />}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    gap: 12,
                    justifyContent: 'center',
                    alignItems: "center"
                }}
            />
        </View>
    )
}