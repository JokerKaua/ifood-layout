import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import RestaurantCard from './restaurantCard';

export interface RestaurantsProps {
    id: string;
    name: string;
    image: string
}

export function Restaurants() {

    const [restaurants, setRestaurants] = useState([])

    useEffect(()=>{
        //Pegar restaurantes do db.json, simulando uma API
        async function getRestaurants() {
            const response = await fetch('http://192.168.15.16:3000/restaurants');
            const data = await response.json();
            // console.log(data);
            setRestaurants(data);
        }

        getRestaurants();
    }, []);


  return (
      <FlatList
        className='w-full'
        horizontal={true}
        data={restaurants}
        renderItem={( { item }) => <RestaurantCard item={item}/>}
        showsHorizontalScrollIndicator={false}
        // columnWrapperStyle={{
        //     justifyContent: 'space-between',
        //     gap: 20,
        //     alignItems: 'flex-start'
        // }}
        contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 16,
            justifyContent: 'flex-start',
            alignItems: "flex-start"
        }}
      />
        
  )
}