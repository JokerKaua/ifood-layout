import { Slot, Tabs } from "expo-router";

import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (

    <Tabs screenOptions={{
      headerShown: true,
      tabBarShowLabel: true,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        backgroundColor: '#d0d0d0',
        borderColor: '#fff',
        justifyContent: 'space-between'
      }
    }
    }>
      <Tabs.Screen name='restaurant/[id]' options={{title: 'TAB INDEX', tabBarShowLabel: true, headerShown: true}}/>
    </Tabs>

  )
}