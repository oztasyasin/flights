import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

export interface CustomButtonProps extends TouchableOpacityProps {
    title?: string,
    style?: StyleProp<ViewStyle>
}