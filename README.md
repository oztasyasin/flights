
# Flight App

Users in this app can list departure and arrival flights, and they can also make bookings for upcoming departure flights.

If you want to test the application without cloning the repository, after installing the Expo Go application, if your device is Android, you can test it by scanning the QR code from within the Expo Go application, or if it's iOS, you can directly scan the QR code from your phone's own camera application.

![APP QR](https://raw.githubusercontent.com/oztasyasin/walmateImages/refs/heads/main/appQR.png)

## Features

- **Flight Listings**: Users can browse a list of departure and arrival flights, with the ability to filter and view flight details.
- **Flight Booking**: Users can book upcoming departure flights directly through the app, ensuring convenient access to future travel plans.
- **QR Code Scanning**: Users can scan a QR code to instantly access detailed information about their booked flights, including flight number, departure time, and status.
- **Booking Management**: Users can view and manage their bookings, keeping track of both upcoming and past flights.

## Setup and Installation

1. Clone the repository:

```sh
git https://github.com/oztasyasin/flights.git
```

2. Navigate to the project directory:

```sh
cd flights
```

3. Install dependencies:

```sh
yarn
```

4. Start the Expo development server:

```sh
npx expo start
```

5. Follow the instructions to run the app on an emulator or physical device.

## Environment Variables

The app uses environment variables for configuration. Create a `.env` file in the root of your project and add the following variables:

```env
EXPO_PUBLIC_API_URL=https://api.schiphol.nl/public-flights
EXPO_PUBLIC_API_KEY=bd7455874baee2dee0529f33532386ff
EXPO_PUBLIC_APPLICATION_ID=1037bc3a
EXPO_PUBLIC_RESOURCE_VERSION=v4
```

## Contact

For any questions or feedback, please contact [oztas.yasinn@gmail.com](mailto:oztas.yasinn@gmail.com).

