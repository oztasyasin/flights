interface AircraftType {
    iataMain: string;
    iataSub: string;
}

interface PublicFlightState {
    flightStates: string[];
}

interface Route {
    destinations: string[];
    eu: string;
    visa: boolean;
}

interface FlightData {
    lastUpdatedAt: string;
    aircraftType: AircraftType;
    flightDirection: string;
    flightName: string;
    flightNumber: number;
    id: string;
    isOperationalFlight: boolean;
    mainFlight: string;
    prefixIATA: string;
    publicFlightState: PublicFlightState;
    route: Route;
    scheduleDateTime: string;
    scheduleDate: string;
    scheduleTime: string;
    serviceType: string;
    schemaVersion: string;
}

interface BookedFlight {
    id: string,
    flight: FlightData,
    seatNumber?: string,
    createDate?: string,
}

interface FlightStore {
    flights: FlightData[];
    bookedFlights: BookedFlight[];
    updateFlights: (data: FlightData[]) => void;
    addNewBookedFlight: (data: BookedFlight) => void;
    updateBookedFlight: (updatedData: BookedFlight) => void;
    deleteBookedFlight: (flightId: string) => void;
}