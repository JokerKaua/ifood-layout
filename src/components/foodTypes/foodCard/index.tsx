import { View, Text, Image, Pressable } from 'react-native';

interface Props {
    name: string;
    image: any | NodeRequire;
}

const press = (name: string) => {
    console.log(`CLICOU EM ${name}`);
}

export default function FoodCard({ name, image }: Props) {
    return (
        <View className='w-24 h-24'>
            <Pressable
                onPress={() => press(name)}
            >

                <Image className="w-full h-full rounded-2xl opacity-75" style={{ resizeMode: `cover` }} source={image} />
                <Text style={{
                    zIndex: 1000,
                    position: 'absolute',
                    bottom: 0,
                    left: 10,
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 'bold',
                    textShadowColor: '#000',
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 1
                }}>
                    {name}
                </Text>
            </Pressable>

        </View>
    )
}