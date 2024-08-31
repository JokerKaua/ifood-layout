import { View, Text } from 'react-native'
import { Slot, Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack>
        <Slot/>
    </Stack>
  )
}