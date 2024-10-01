import { StyleSheet } from "react-native";
import { themeColors } from "../../data/colors";

export const progressBarStyles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        columnGap: 14,
        marginVertical: 32,
    },
    progress: {
        height: 2,
        backgroundColor: themeColors.primary500
    },
    barStepContainer: {
        flex: 1,
        height: 2,
        backgroundColor: 'rgba(255,255,255,0.5)'
    }
})