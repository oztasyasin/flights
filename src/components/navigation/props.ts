import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

interface Route {
    key: string;
    name: string;
    params?: object;  // Optional parameters
}

export interface BottomTabProps extends BottomTabBarProps {
    index: number,
    route: Route
}