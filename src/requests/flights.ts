import { apiPaths } from "."
import Api from "./Api"

export const GetFlights = async (params?: any) => {
    const defaultParams = {
        includedelays: false,
        page: 0,
        sort: '+scheduleTime'
    };

    const { queryKey, signal, ...filteredParams } = params || {};
    const requestParams = { ...defaultParams, ...filteredParams };

    return await Api.get(apiPaths.publicFlights.get, { params: requestParams, signal });
}