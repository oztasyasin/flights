import { RefreshControl } from "react-native";
import FlightCard from "../../../../components/cards/FlightCard";
import FlightList from "../../../../components/shared/FlightList";
import { useGetArivalFlights } from "../../../../hooks/flights";
import { Flight } from "../../../../models";
import { isEmpty } from "../../../../helper";
import { useNavigation } from "@react-navigation/native";

const ArivalFlights = () => {
    const { arivalFlights, isLoading, refetch } = useGetArivalFlights();
    const { navigate } = useNavigation();
    const handlePress = (flight: Flight) => {
        navigate("FlightDetail", { flight })
    }
    const renderFlight = ({ item }: { item: Flight }) => <FlightCard onPress={handlePress} {...item} />;

    return (
        <FlightList
            refreshControl={<RefreshControl onRefresh={refetch} refreshing={isLoading && isEmpty(arivalFlights)} />}
            data={arivalFlights}
            renderItem={renderFlight}
        />
    )
}

export default ArivalFlights
