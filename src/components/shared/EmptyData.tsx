import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Placeholder } from 'phosphor-react-native'
import { themeColors } from '../../data/colors'
import { globalStyles } from '../../styles/global'

const EmptyData = () => {
    return (
        <View style={styles.container}>
            <Placeholder size={42} weight='bold' color={themeColors.subText} />
            <Text style={{ ...globalStyles.txt19_700_normal_057, color: themeColors.subText }}>Nothing to show</Text>
        </View>
    )
}

export default EmptyData

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
        opacity: 0.5
    }
})
