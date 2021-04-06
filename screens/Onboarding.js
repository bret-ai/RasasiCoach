import React from 'react';
import { 
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet, 
    Image,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { COLORS, FONTS, images, SIZES } from '../constants';

const Onboarding = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <Image
                    source={images.onboardingImage}
                    resizeMode="contain"
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding, }}>
                    <Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
                    <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.</Text>
                </View>
                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, justifyContent: 'center', alignItems: 'center', }]}
                    onPress={() => navigation.navigate("Home")}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#46aeff', '#5884ff']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>START</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});

export default Onboarding;