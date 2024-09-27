import { StyleSheet } from "react-native";
export const borderColor = "#F3F3F3";
export const errorColor = "#fb3748";
export const labelColor = "#131313";
export const customInputStyles = StyleSheet.create({
    errorText: {
        fontWeight: '400',
        fontSize: 8,
        lineHeight: 10,
        letterSpacing: -0.1,
        color: errorColor
    },
    label: {
        fontWeight: '400',
        fontSize: 8,
        lineHeight: 10,
        letterSpacing: -0.1,
        color: labelColor
    },
    errorLine: {
        position: 'absolute',
        bottom: 2,
        right: 10,
    },
    input: {
        flex: 1,
        height: '100%',
        letterSpacing: 0.7,
        fontSize: 16,
    },
    inputFrame: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 56,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: borderColor,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    placeholder: {
        position: 'absolute',
        fontSize: 8,
        fontWeight: '600',
        lineHeight: 10,
        textTransform: 'uppercase',
        top: 4,
    },
});