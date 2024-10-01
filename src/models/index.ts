import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ComponentType } from "react";

export interface FlightList {
    flights?: Flight[];
}


export interface AircraftTypeType {
    iataMain?: string;
    iataSub?: string;
}

export interface BaggageClaimType {
    belts?: string[];
}

export interface CheckinAllocationsType {
    checkinAllocations?: CheckinAllocationType[];
    remarks?: RemarksType;
}

export interface CheckinAllocationType {
    endTime?: string;
    rows?: RowsType;
    startTime?: string;
}

export interface RowsType {
    rows?: RowType[];
}

export interface RowType {
    position?: string;
    desks?: DesksType;
}

export interface DesksType {
    desks?: DeskType[];
}

export interface DeskType {
    checkinClass?: CheckinClassType;
    position?: number;
}

export interface CheckinClassType {
    code?: string;
    description?: string;
}

export interface CodesharesType {
    codeshares?: string[];
}

export interface PublicFlightStateType {
    flightStates?: string[];
}

export interface RouteType {
    destinations?: string[];
    eu?: 'S' | 'E' | 'N';
    visa?: boolean;
}

export interface TransferPositionsType {
    transferPositions?: number[];
}

export interface RemarksType {
    remarks?: string[];
}

export interface Flight {
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

export interface FlightCardProps extends Flight {
    onPress?: (data: Flight | BookedFlight) => void
}

export interface BookedFlight {
    id: string,
    flight: Flight,
    seatNumber?: string,
    createDate?: string,
}

export interface BookedFlightCardProps extends BookedFlight {
    onPress?: (data: Flight | BookedFlight) => void
}

export interface RouteOptions {
    gestureEnabled: boolean;
}


export interface RouteModel {
    key: number;
    name: string;
    component: ComponentType<any>;
    options?: RouteOptions;
}


type RootStackParamList = {
    Onboarding: undefined;
    Home: undefined;
};

type OnboardingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Onboarding'
>;

export interface PageProps {
    navigation: OnboardingScreenNavigationProp;
}


interface PublicName {
    dutch?: string;
    english?: string;
}

export interface Destination {
    city?: string;
    country?: string;
    iata?: string;
    publicName?: PublicName;
}


export interface FlightStore {
    flights: Flight[];
    departureFlights: Flight[];
    arivalFlights: Flight[];
    destinations: Destination[];
    bookedFlights: BookedFlight[];
    updateFlights: (data: Flight[]) => void;
    updateArivalFlights: (data: Flight[]) => void;
    updateDepartureFlights: (data: Flight[]) => void;
    addNewBookedFlight: (data: BookedFlight) => void;
    addNewDestination: (data: Destination) => void;
    updateBookedFlight: (updatedData: BookedFlight) => void;
    deleteBookedFlight: (flightId: string) => void;
    updateBookedFlights: (data: BookedFlight[]) => void;
    reset: () => void
}

export interface FlightHooksProps {
    fetchParams?: any;
    updateFunction: (data: Flight[]) => void;
}

export interface FlightInfoRowProps {
    label: string;
    value?: string | number;
    end?: boolean;
}

export interface RenderToastProps {
    type?: 'success' | 'error';
    text1?: string | undefined | null;
    text2?: string | undefined | null;
}

export type NavigationProps<T extends keyof RootStackParamList> = {
    navigation: StackNavigationProp<RootStackParamList, T>;
    route: RouteProp<RootStackParamList, T>;
};

export interface QRScanResult {
    type: string;
    data: string;
}