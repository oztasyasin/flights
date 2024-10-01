import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { themeColors } from '../../data/colors'
import { globalStyles } from '../../styles/global'
import { QrCode } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

const GradientHeader = () => {
    const { top } = useSafeAreaInsets();
    const { navigate } = useNavigation();
    return (
        <LinearGradient
            colors={[themeColors.primary500, themeColors.containerColor]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={{ ...styles.container, paddingTop: top + 16 }}
        >
            <View style={styles.frame}>
                <Image
                    transition={500}
                    style={styles.image}
                    source={"https://pbs.twimg.com/profile_images/1701389346866126848/0FfPC9wg_400x400.jpg"}
                />
                <View style={styles.middle}>
                    <Text style={{ ...globalStyles.txt15_400_normal_045, color: themeColors.subText }}>
                        Hi, Yasin
                    </Text>
                    <Text style={{ ...globalStyles.txt19_700_normal_057, color: themeColors.primaryText }}>
                        Have a good day
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigate("Barcode")}
                    style={styles.notificationsButton}>
                    <QrCode size={24} color={themeColors.primaryText} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default GradientHeader

const styles = StyleSheet.create({
    notificationsButton: {
        height: 40,
        width: 40,
        padding: 8,
        opacity: 0.5
    },
    middle: {
        rowGap: 2,
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 24
    },
    frame: {
        flexDirection: 'row',
        columnGap: 12,
        height: 48,
        paddingHorizontal: 16
    },
    container: {
        width: '100%',
        paddingBottom: 16
    }
})