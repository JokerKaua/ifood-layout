import { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import RestaurantCard from './restaurantCard';

import * as restaurantesJson from '@/db-pathImages.json'

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string
}

export function Restaurants({ urlFetch }: { urlFetch: string }) {

    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        
        /**
         * Caso queira usar o json-server, tire o código abaixo dos comentários.
         * Não esqueça de arrumar o ip no componente Restaurant em `@/src/app/index.tsx`
        */
       
       //Pegar restaurantes do db.json, simulando uma API
    //    async function getRestaurants() {
    //         const response = await fetch(urlFetch);
    //         const data = await response.json();
    //         // console.log(data);
    //         setRestaurants(data);    
    //     }
    //     getRestaurants();

        async function getRestaurantsJson() {
            setRestaurants(restaurantesJson.restaurants); 
            console.log(restaurants);
        }
        getRestaurantsJson()
        
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