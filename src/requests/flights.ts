import { apiPaths } from "."
import Api from "./Api"

export const GetFlights = async () => {
    return await Api.get(apiPaths.publicFlights.get);
}

export const GetFlightsById = async (id: string) => {
    return await Api.get(apiPaths.publicFlights.getById(id));
}