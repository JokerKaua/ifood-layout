import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import RestaurantCard from './restaurantCard';

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string
}

export function Restaurants({urlFetch}:{urlFetch: string}) {

    const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        //Pegar restaurantes do db.json, simulando uma API
        async function getRestaurants() {
            const response = await fetch(urlFetch);
            const data = await response.json();
            // console.log(data);
            setRestaurants(data);
        }

        getRestaurants();
    }, []);


  return (
      <FlatList
        horizontal={false}
        data={restaurants}
        numColumns={2}
        renderItem={( { item }) => <RestaurantCard item={item}/>}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{
            justifyContent: 'space-between',
            gap: 16,
            alignItems: 'flex-start'
        }}
        contentContainerStyle={{
            gap: 12,
            paddingHorizontal: 16,
            justifyContent: 'center',
            alignItems: "center"
        }}
      />
        
  )
}