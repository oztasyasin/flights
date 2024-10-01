import Barcode from "../pages/common/Barcode";
import FlightDetail from "../pages/common/FlightDetail";
import SeatSelect from "../pages/common/SeatSelect";
import Onboarding from "../pages/launch/Onboarding";
import Main from "../pages/main";

export const routes = [
    {
        key: 0,
        name: 'Onboarding',
        component: Onboarding,
        options: {
            gestureEnabled: false
        }
    },
    {
        key: 2,
        name: 'Main',
        component: Main,
        options: {
            gestureEnabled: false
        }
    },
    {
        key: 3,
        name: 'Barcode',
        component: Barcode,
        options: {
            gestureEnabled: true
        }
    },
    {
        key: 4,
        name: "FlightDetail",
        component: FlightDetail,
        options: {
            gestureEnabled: true
        }
    },
    {
        key: 5,
        name: "SeatSelect",
        component: SeatSelect,
        options: {
            gestureEnabled: true
        }
    }
]