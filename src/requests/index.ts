export const apiPaths = {
    publicFlights: {
        get: `/flig`,
        getById: (id: string) => `/flight/${id}`
    }
}