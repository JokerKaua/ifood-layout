import { View, Text, ScrollView } from 'react-native'
import FoodCard from './foodCard'

export function FoodType() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
            className='w-full my-4'>
            <View className='flex flex-row gap-2'>

                {/* Fazer de forma responsiva de acordo com o db
                    Fazer um request pelo db.json
                     - FlatList
                */}
                <FoodCard name='BENTOS' image={require(`@/src/assets/foodTypes/bento.png`)} />
                <FoodCard name='BURGUER' image={require(`@/src/assets/foodTypes/burguer.png`)} />
                <FoodCard name='SUSHI' image={require(`@/src/assets/foodTypes/sushi.png`)} />
                <FoodCard name='FRIED CHICKEN' image={require(`@/src/assets/foodTypes/friedchicken.png`)} />
                <FoodCard name='TACO' image={require(`@/src/assets/foodTypes/taco.png`)} />
                <FoodCard name='PIZZA' image={require(`@/src/assets/foodTypes/pizza.png`)} />
            </View>
        </ScrollView>
    )
}