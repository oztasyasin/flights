import {
    StyleProp,
    TextInputProps,
    TextStyle,
    ViewStyle
} from "react-native";

export interface CustomInputProps extends TextInputProps {
    containerStyle?: StyleProp<ViewStyle>,
    labelStyle?: StyleProp<TextStyle>,
    errorTextStyle?: StyleProp<TextStyle>
    error?: {
        type?: string;
        message?: string;
        ref?: any;
    },
}

