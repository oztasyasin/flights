import { Dimensions, StyleSheet } from "react-native";

export const customTabBarStyles = StyleSheet.create({
    tabIndicator: {
        position: 'absolute',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 360,
        zIndex: -1
    },
    blurContainer: {
        flex: 1,
        flexDirection: 'row',
        columnGap: 4,
        padding: 4,
    },
    container: {
        position: 'absolute',
        bottom: 0,
        minWidth: Dimensions.get('window').width,
        alignItems: 'center',
        backgroundColor: 'transparent',
        height: 100,
        padding: 16,
        zIndex: 99,
        overflow: 'hidden'
    },
    frame: {
        flexDirection: 'row',
        height: 52,
        width: '100%',
        borderRadius: 360,
        shadowColor: 'rgba(31, 49, 63, 1)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
        overflow: 'hidden',
        elevation: 12,
    },
    tabs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        borderRadius: 360,
        columnGap: 6
    }
})


export const horizontailBarStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
    },
    frame: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
        borderRadius: 360,
        backgroundColor: "#ECEEF0",
        padding: 3,
        gap: 3,
        height: 34
    },
    indicatorFrame: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1
    },
    selectionIndicator: {
        position: 'absolute',
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 360,
        zIndex: -1,
        top: 3,
        shadowColor: 'rgba(31, 49, 63, 0.12)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 2,
    },
    tabs: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})