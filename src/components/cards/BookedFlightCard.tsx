
import { useNavigation } from '@react-navigation/native';
import { BookedFlight, BookedFlightCardProps, Flight } from '../../models';
import FlightCard from './FlightCard';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
    FlightDetail: { bookedFlight: BookedFlightCardProps };
};

type FlightDetailScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'FlightDetail'
>;
const BookedFlightCard = (props: BookedFlightCardProps) => {
    const { navigate } = useNavigation<FlightDetailScreenNavigationProp>();
    const handlePress = (flight: BookedFlight | Flight) => {
        navigate('FlightDetail', { bookedFlight: props })
    }
    return (
        <FlightCard onPress={handlePress} {...props.flight} />
    );
}

export default BookedFlightCard;