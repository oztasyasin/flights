import { ReactNode } from "react";
import { ColorValue, StatusBarStyle, StyleProp, ViewStyle } from "react-native";

export interface ContainerProps {
    style?: StyleProp<ViewStyle>,
    ignorebottom?: boolean,
    ignoretop?: boolean,
    headerType?: string,
    title?: string,
    children?: ReactNode,
    barStyle?: StatusBarStyle,
    translucent?: boolean,
    statusBarColor?: ColorValue,
    jc?: 'flex-end' | 'flex-start' | 'center',
    nopadding?: boolean
}