import { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'

import * as restaurantesJson from '@/db.json'
import FoodCard from './foodCard';

export interface FoodProps {
    id: string;
    name: string;
    image: string
}

export function Foods({ urlFetch }: { urlFetch: string }) {

    const [foods, setFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        
        /**
         * Caso queira usar o json-server, tire o código abaixo dos comentários.
         * Não esqueça de arrumar o ip no componente Restaurant em `@/src/app/index.tsx`
        */
       
       //Pegar restaurantes do db.json, simulando uma API
       async function getFoods() {
            const response = await fetch(urlFetch);
            const data = await response.json();
            // console.log(data);
            setFoods(data);    
        }
        getFoods();
        
    }, [urlFetch]);

    return (
        <View>
            <FlatList
                horizontal={true}
                data={foods}
                renderItem={({ item }) => <FoodCard item={item} />}
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