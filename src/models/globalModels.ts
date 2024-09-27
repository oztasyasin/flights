// Main Flight List Model
interface FlightList {
    flights?: Flight[];
}


// Aircraft Type Model
interface AircraftTypeType {
    iataMain?: string;
    iataSub?: string;
}

// Baggage Claim Model
interface BaggageClaimType {
    belts?: string[];
}

// Check-in Allocations Model
interface CheckinAllocationsType {
    checkinAllocations?: CheckinAllocationType[];
    remarks?: RemarksType;
}

// Check-in Allocation Model
interface CheckinAllocationType {
    endTime?: string;
    rows?: RowsType;
    startTime?: string;
}

// Rows Model
interface RowsType {
    rows?: RowType[];
}

// Row Model
interface RowType {
    position?: string;
    desks?: DesksType;
}

// Desks Model
interface DesksType {
    desks?: DeskType[];
}

// Desk Model
interface DeskType {
    checkinClass?: CheckinClassType;
    position?: number;
}

// Check-in Class Model
interface CheckinClassType {
    code?: string;
    description?: string;
}

// Codeshares Model
interface CodesharesType {
    codeshares?: string[];
}

// Public Flight State Model
interface PublicFlightStateType {
    flightStates?: string[];
}

// Route Model
interface RouteType {
    destinations?: string[];
    eu?: 'S' | 'E' | 'N';
    visa?: boolean;
}

// Transfer Positions Model
interface TransferPositionsType {
    transferPositions?: number[];
}

// Remarks Model
interface RemarksType {
    remarks?: string[];
}



// Flight Model
interface Flight {
    lastUpdatedAt?: string;
    actualLandingTime?: string;
    actualOffBlockTime?: string;
    aircraftRegistration?: string;
    aircraftType?: AircraftTypeType;
    baggageClaim?: BaggageClaimType;
    checkinAllocations?: CheckinAllocationsType;
    codeshares?: CodesharesType;
    estimatedLandingTime?: string;
    expectedTimeBoarding?: string;
    expectedTimeGateClosing?: string;
    expectedTimeGateOpen?: string;
    expectedTimeOnBelt?: string;
    expectedSecurityFilter?: string;
    flightDirection?: 'A' | 'D';
    flightName?: string;
    flightNumber?: number;
    gate?: string;
    pier?: string;
    id?: string;
    isOperationalFlight?: boolean;
    mainFlight?: string;
    prefixIATA?: string;
    prefixICAO?: string;
    airlineCode?: number;
    publicEstimatedOffBlockTime?: string;
    publicFlightState?: PublicFlightStateType;
    route?: RouteType;
    scheduleDateTime?: string;
    scheduleDate?: string;
    scheduleTime?: string;
    serviceType?: string;
    terminal?: number;
    transferPositions?: TransferPositionsType;
    schemaVersion?: string;
}

// Booked Flight Model
interface BookedFlight {
    id: string,
    flight: Flight,
    seatNumber?: string,
    createDate?: string,
}

// Flight Store Model

interface FlightStore {
    flights: Flight[];
    bookedFlights: BookedFlight[];
    updateFlights: (data: Flight[]) => void;
    addNewBookedFlight: (data: BookedFlight) => void;
    updateBookedFlight: (updatedData: BookedFlight) => void;
    deleteBookedFlight: (flightId: string) => void;
}