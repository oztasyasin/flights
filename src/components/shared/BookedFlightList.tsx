import { FlatListProps, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { BookedFlight } from '../../models'
import { isEmpty } from '../../helper'
import EmptyData from './EmptyData'

const BookedFlightList = (props: FlatListProps<BookedFlight>) => {
    return (
        <>
            {
                isEmpty(props?.data) ?
                    <EmptyData /> :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainerStyle}
                        {...props}
                    />
            }
        </>

    )
}

export default BookedFlightList

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingHorizontal: 16,
        width: '100%',
        paddingTop: 2,
        rowGap: 12,
        paddingBottom: 100
    }
})