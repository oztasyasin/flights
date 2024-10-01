import { CardStyleInterpolators } from "@react-navigation/stack";
import { Dimensions, Platform } from "react-native";
export const navigatorScreenOptions = {
    screenOptions: {
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: 'none',
    }
}
export const screen = Dimensions.get('screen');
export const fullHeight = screen.height;
export const fullWidth = screen.width;
export const isIos = Platform.OS === 'ios';

export const absoluteFill = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
}

export const onboardingContents = [
    {
        key: 0,
        title: "Discover\nFlights",
        image: "https://images.unsplash.com/photo-1567748534085-467f8a8a475d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlybGluZXMlMjB0aWNrZXR8ZW58MHwxfDB8fHwy",
        subTitle: "Easily explore and browse flights\nto destinations around the world"
    },
    {
        key: 1,
        title: "Track Flight\nStatus",
        image: "https://images.unsplash.com/photo-1692453624772-ef850ccc33b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpcmxpbmVzJTIwdGlja2V0fGVufDB8MXwwfHx8Mg%3D%3D",
        subTitle: "Monitor real-time flight status\nand plan your journey with ease"
    },
    {
        key: 2,
        title: "Quick and\nEasy Booking",
        image: "https://images.unsplash.com/photo-1532995092664-7027dcede29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFpcmxpbmVzJTIwdGlja2V0fGVufDB8MXwwfHx8Mg%3D%3D",
        subTitle: "Book your flight in seconds\nand enjoy a seamless travel experience"
    }
]

export const destinations = {
    "AMS": "Netherlands",
    "HER": "Greece",
    "IST": "Turkey",
    "LAX": "United States",
    "JFK": "United States",
    "CDG": "France",
    "FRA": "Germany",
    "DXB": "United Arab Emirates",
    "HND": "Japan",
    "SIN": "Singapore",
    "YVR": "Canada",
    "SYD": "Australia",
    "LHR": "United Kingdom",
    "MAD": "Spain",
    "BKK": "Thailand",
    "MUC": "Germany",
    "DEL": "India",
    "YYZ": "Canada",
    "BOM": "India",
    "ZRH": "Switzerland",
    "BRU": "Belgium",
    "SFO": "United States",
    "PVG": "China",
    "ICN": "South Korea",
}