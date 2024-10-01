import { FlatListProps, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Flight } from '../../models'

const FlightList = (props: FlatListProps<Flight>) => {
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
            {...props}
        />
    )
}

export default FlightList

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: 16,
        width: '100%',
        paddingTop: 2,
        rowGap: 12,
        paddingBottom: 100
    }
})