import { ScrollView, Text, View } from "react-native";

import Constants from 'expo-constants';

import Search from "../components/search";
import Banner from "../components/banner";

// Pegar tamanho da barra de notificações do dispositivo (ajuda muito)
const heighStatusBar = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      className="w-full h-full bg-gray-100"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="w-full px-4"
        style={{
          marginTop: heighStatusBar + 2
        }}
      >

        <Search />

        <Banner />

      </View>
    </ScrollView>
  );
}
