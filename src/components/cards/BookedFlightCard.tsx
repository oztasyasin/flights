
import { useNavigation } from '@react-navigation/native';
import { BookedFlight, BookedFlightCardProps, Flight } from '../../models';
import FlightCard from './FlightCard';

const BookedFlightCard = (props: BookedFlightCardProps) => {

    const { navigate } = useNavigation();
    const handlePress = (flight: BookedFlight | Flight) => {
        navigate('FlightDetail', { bookedFlight: props });
    };
    return (
        <FlightCard onPress={() => handlePress(props.flight)} {...props.flight} />
    );
}

export default BookedFlightCard;