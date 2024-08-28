import { View, Text, Image, StyleSheet } from 'react-native';

import PagerView from 'react-native-pager-view';


export function Banner() {
    return (
        <View style={styles.container}>
            {/* Esse page view não funciona muito bem com o tailwind */}
            <PagerView
                pageMargin={-10}
                initialPage={0}
                style={styles.pagerView}
            >
                <View key={1} style={styles.page}>
                    <Image
                        source={require('../../assets/banner1.png')}
                        style={styles.banner}
                    />
                </View>

                <View key={2} style={styles.page}>
                    <Image
                        source={require('../../assets/banner2.png')}
                        style={styles.banner}
                    />
                </View>
            </PagerView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 114,
        marginTop: 16,
        justifyContent: 'center',
    },
    banner: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius: 20,
    },
    pagerView: {
        flex: 1,
        marginHorizontal: -5,
    },
    page: {
        paddingHorizontal: 5,
    }
})