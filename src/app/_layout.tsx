import '../styles/global.css'
import { Slot, Tabs } from "expo-router";

import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (

    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        backgroundColor: '#d0d0d0',
        borderColor: '#fff',
        justifyContent: 'space-between'
      }
    }}>

      <Tabs.Screen name='index' options={{ 
        tabBarIcon: () => { return <Ionicons name='home' size={20} color={'#000'} /> },
        tabBarInactiveBackgroundColor: '#aaa'
        
        }}/>
      <Tabs.Screen name='(tabs)' options={{ 
        tabBarIcon: ()=> {return <Ionicons name='cafe' size={20} color={'000'}/>},
        tabBarInactiveBackgroundColor: '#aaa'
        
        
        }}/>
    </Tabs>

  )
}