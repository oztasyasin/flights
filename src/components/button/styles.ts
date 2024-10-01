import { StyleSheet } from "react-native";
import { themeColors } from "../../data/colors";

export const customButtonStyles = StyleSheet.create({
    frame: {
        flexDirection: 'row',
        height: 60,
        maxHeight: 60,
        minHeight: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        flex: 1,
        backgroundColor: themeColors.primary500
    },
    title: {
        fontSize: 16,
        fontFamily: 'jakarta_600',
        lineHeight: 24,
        letterSpacing: -0.32,
        color: themeColors.primariy0
    }
})