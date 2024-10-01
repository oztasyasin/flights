export const apiPaths = {
    publicFlights: {
        get: `/flights`,
        destination: (iata: string) => `/destinations/${iata}`
    }
}