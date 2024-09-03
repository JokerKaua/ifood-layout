import { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import RestaurantCard from './restaurantCard';

import * as restaurantesJson from '@/db.json'

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string
}

export function Restaurants({ urlFetch }: { urlFetch: string }) {

    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        //Pegar restaurantes do db.json, simulando uma API
        // async function getRestaurants() {
        //     const response = await fetch(urlFetch);
        //     const data = await response.json();
        //     // console.log(data);
        //     setRestaurants(data);    
        // }
        // Tirar o comentário caso estiver usando o json-server
        // getRestaurants();


        async function getRestaurantsJson() {
            // console.log(data);
            setRestaurants(restaurantesJson.restaurants); 

            console.log(restaurants);
            
        }

        getRestaurantsJson()
    }, []);

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