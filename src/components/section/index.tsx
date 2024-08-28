import { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


interface Props {
    title: string;
    size: "text-lg" | "text-xl" | "text-2xl" ;
    label: string;
    action: () => void;
}
 

export function Section({ title, label, size, action }: Props) {
    return (
        //                                              justify não estava pegando, só reiniciei o expo e funcionou :)
        <View className='w-full flex flex-row items-center justify-between px-2 my-6'>
            <Text className={`${size} font-semibold my-2`} >
                {title}
            </Text>
            <Pressable onPress={action} className=''>
                <Text className='text-green-700'>{label}</Text>
            </Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
       
    }
})