import { useNavigation } from "@react-navigation/native"
import { Flight } from "../../../../models";
import FlightList from "../../../../components/shared/FlightList";
import { RefreshControl } from "react-native";
import { isEmpty } from "../../../../helper";
import FlightCard from "../../../../components/cards/FlightCard";
import { useGetDepartureFlights } from "../../../../hooks/flights";

const DepartureFlights = () => {
    const { navigate } = useNavigation();
    const handlePress = (flight: Flight) => {
        navigate('SeatSelect', { flight })
    }
    const { departureFlights, refetch, isLoading } = useGetDepartureFlights();
    const renderFlight = ({ item }: { item: Flight }) => <FlightCard onPress={handlePress} {...item} />;
    return (
        <FlightList
            refreshControl={<RefreshControl onRefresh={refetch} refreshing={isLoading && isEmpty(departureFlights)} />}
            data={departureFlights}
            renderItem={renderFlight}
        />
    )
}

export default DepartureFlights
