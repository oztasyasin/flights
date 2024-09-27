import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';


export const useFlightStore = create<FlightStore>()(
    persist(
        (set) => ({
            flights: [],
            bookedFlights: [],
            updateFlights: (data: FlightData[]) => set({ flights: data }),

            addNewBookedFlight: (data: BookedFlight) =>
                set((state: FlightStore) => ({
                    bookedFlights: [...state.bookedFlights, data],
                })),

            updateBookedFlight: (updatedData: BookedFlight) =>
                set((state: FlightStore) => ({
                    bookedFlights: state.bookedFlights.map((flight) =>
                        flight.id === updatedData.id ? updatedData : flight
                    ),
                })),

            deleteBookedFlight: (flightId: string) =>
                set((state: FlightStore) => ({
                    bookedFlights: state.bookedFlights.filter(
                        (flight) => flight.id !== flightId
                    ),
                })),
        }),
        {
            name: 'flights-storage',
            storage: createJSONStorage(() => AsyncStorage)
        }
    )
);