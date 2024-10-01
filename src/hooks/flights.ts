import { GetFlights } from "../requests/flights";
import { useFlightStore } from "../store/flights";
import { AxiosResponse } from "axios";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlightHooksProps } from "../models";
import { renderToast } from "../helper";
export const useGetFlights = (params: FlightHooksProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const isFocused = useIsFocused();
    const handleSuccess = (res: AxiosResponse) => params.updateFunction(res.data?.flights);
    const handleError = () => {
        renderToast({ type: 'error', text2: "There was a problem while fetching the data" });
    }
    const fetchData = async () => {
        try {
            setIsLoading(() => (true))
            const res = await GetFlights(params.fetchParams)
            handleSuccess(res);
        } catch (error) {
            handleError();
        } finally {
            setIsLoading(() => (false))
        }
    }
    useEffect(() => {
        isFocused && fetchData();
    }, [isFocused])

    return { isLoading, refetch: fetchData }
}

export const useGetArivalFlights = () => {

    const { arivalFlights, updateArivalFlights } = useFlightStore();
    const { isLoading, refetch } = useGetFlights({
        updateFunction: updateArivalFlights,
        fetchParams: { flightDirection: "A" }
    });

    return { arivalFlights, isLoading, refetch }
}

export const useGetDepartureFlights = () => {

    const { departureFlights, updateDepartureFlights } = useFlightStore();
    const { isLoading, refetch } = useGetFlights({
        updateFunction: updateDepartureFlights,
        fetchParams: { flightDirection: "D" }
    });

    return { departureFlights, isLoading, refetch }
}