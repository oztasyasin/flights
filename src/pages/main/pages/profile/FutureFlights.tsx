import React from 'react'
import { useFlightStore } from '../../../../store/flights'
import { BookedFlight } from '../../../../models';
import BookedFlightCard from '../../../../components/cards/BookedFlightCard';
import BookedFlightList from '../../../../components/shared/BookedFlightList';

const FutureFlights = () => {
    const { bookedFlights } = useFlightStore();
    const now = new Date();
    const futureItems = bookedFlights.filter(item => {
        const scheduleDateTime = item.flight.scheduleDateTime;
        if (scheduleDateTime) {
            return new Date(scheduleDateTime.toString()) > now;
        }
        return false;
    });

    const renderFlight = ({ item }: { item: BookedFlight }) => <BookedFlightCard {...item} />;

    return (
        <BookedFlightList
            data={futureItems}
            keyExtractor={(item: BookedFlight, index: number) => `${item.id}_${index}`}
            renderItem={renderFlight}
        />
    )
}

export default FutureFlights
