import { Slot, Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="index" options={{
          title: 'Explorar',
          headerStyle: {
            backgroundColor: '#c0c0c0',
          },
          headerTitleStyle: {
            color: '#a00'
          }
        }}/>
    </Stack>
  )
}