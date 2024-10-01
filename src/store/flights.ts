import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { BookedFlight, Destination, Flight, FlightStore } from '../models';

export const useFlightStore = create<FlightStore>()(
    persist(
        (set) => ({
            flights: [],
            bookedFlights: [],
            arivalFlights: [],
            destinations: [],
            departureFlights: [],
            updateFlights: (data: Flight[]) => set({ flights: data }),
            updateArivalFlights: (data: Flight[]) => set({ arivalFlights: data }),
            updateDepartureFlights: (data: Flight[]) => set({ departureFlights: data }),
            updateBookedFlights: (data: BookedFlight[]) => set({ bookedFlights: data }),
            reset: () => set({
                flights: [],
                bookedFlights: [],
                arivalFlights: [],
                destinations: [],
                departureFlights: [],
            }),

            addNewDestination: (data: Destination) =>
                set((state: FlightStore) => ({
                    destinations: [...state.destinations, data],
                })),

            addNewBookedFlight: (data: BookedFlight) =>
                set((state: FlightStore) => ({
                    bookedFlights: [...state.bookedFlights, data],
                })),

            updateBookedFlight: (updatedData: BookedFlight) =>
                set((state: FlightStore) => ({
                    bookedFlights: state.bookedFlights.map((flight: BookedFlight) =>
                        flight.id === updatedData.id ? updatedData : flight
                    ),
                })),

            deleteBookedFlight: (flightId: string) =>
                set((state: FlightStore) => ({
                    bookedFlights: state.bookedFlights.filter(
                        (flight: BookedFlight) => flight.id !== flightId
                    ),
                })),
        }),
        {
            name: 'flights-storage',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);