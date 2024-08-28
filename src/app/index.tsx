import { ScrollView, Text, View } from "react-native";

import Constants from 'expo-constants';


// Chaves sao utilizadas quando o export não vem acompanhado de um default
import { Search } from "../components/search";
import { Banner } from "../components/banner";
import { Section } from "../components/section";

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

        <Section
          title="Comidas em altas"
          label="veja mais"
          action={
            () => { console.log(`CLICOU EM VEJA MAIS`) }
          }
          size="text-2xl"
        />

      </View>
    </ScrollView>
  );
}
