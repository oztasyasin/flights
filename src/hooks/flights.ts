import { useQuery } from "react-query";
import { GetFlights } from "../requests/flights";
import { useFlightStore } from "../store/flights";
import { AxiosResponse } from "axios";

export const useGetFlights = () => {
    const { flights, updateFlights } = useFlightStore();
    const handleSuccess = (res: AxiosResponse) => updateFlights(res.data?.body?.flights);
    const handleError = () => {

    }
    const { refetch, isLoading } = useQuery(['getFlights'], GetFlights, {
        onSuccess: handleSuccess,
        onError: handleError,
    });
    return { flights, isLoading, refetch }
}