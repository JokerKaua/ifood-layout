import '../styles/global.css'
import { Tabs } from "expo-router";

import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

export default function RootLayout() {

  const focusedColor = '#a12';
  const normalColor = '#000';

  return (

    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'relative',
          backgroundColor: "#fff",
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 5,
          marginHorizontal: 3,
          borderRadius: 30,
          borderColor: '#fff'
        }
      }}>

      <Tabs.Screen name='index' options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name='home' size={20} color={focused ? focusedColor : normalColor} />
        },
      }} />

      <Tabs.Screen name='(tabs)' options={{

        tabBarIcon: ({ focused }) => {
          return <Ionicons name='compass' size={20} color={focused ? focusedColor : normalColor} />
        },
      }} />
    </Tabs>

  )
}