import {
    Animated,
    Dimensions,
    NativeSyntheticEvent,
    Text,
    StyleSheet,
    TextInput,
    TextInputFocusEventData,
    View
} from 'react-native';
import React, {
    useEffect,
    useRef,
    useState
} from 'react';
import { isEmpty } from '../../helper';
import { borderColor, customInputStyles, errorColor } from './styles';
import { CustomInputProps } from './props';

const fullWidth = Dimensions.get('window').width;

const CustomInput: React.FC<CustomInputProps> = ({
    error,
    containerStyle,
    labelStyle,
    errorTextStyle,
    autoCorrect = false,
    textContentType = 'oneTimeCode',
    ...restProps }) => {

    const left = useState(new Animated.Value(-150))[0];
    const right = useState(new Animated.Value(-fullWidth))[0];
    const frameRef = useRef<View>();
    const inputRef = useRef<TextInput>();
    const containerStyleProps = StyleSheet.flatten(containerStyle);
    const errorTextStypeProps = StyleSheet.flatten(errorTextStyle);
    const baseBorderColor = containerStyleProps?.borderColor ? containerStyleProps?.borderColor.toString() : borderColor;
    const baseErrorColor = errorTextStypeProps?.color ? errorTextStypeProps.color.toString() : errorColor;

    const updateFrameStyle = (borderColor: string) => {
        if (frameRef.current) {
            frameRef.current.setNativeProps({
                style: {
                    ...customInputStyles.inputFrame,
                    borderColor,
                },
            });
        }
    };

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        changeLabelLeft(16);
        updateFrameStyle(error ? baseErrorColor : baseBorderColor);
        changePlaceholder(true);
        restProps?.onFocus && restProps?.onFocus(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        if (isEmpty(restProps.value)) {
            changeLabelLeft(-150);
        }
        updateFrameStyle(error ? baseErrorColor : baseBorderColor);
        changePlaceholder(!isEmpty(restProps.value));
        restProps.onBlur && restProps?.onBlur(e);
    };

    const changePlaceholder = (hide: boolean) => {
        if (inputRef.current) {
            inputRef.current.setNativeProps({
                placeholder: hide ? null : restProps.placeholder,
            });
        }
    };

    const changeLabelLeft = (value: number) => {
        Animated.timing(left, {
            toValue: value,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const changeErrorRight = (value: number) => {
        Animated.timing(right, {
            toValue: value,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        if (restProps.value?.length === 1) changeLabelLeft(16);
    }, [restProps.value]);

    useEffect(() => {
        isEmpty(error) ? changeErrorRight(-fullWidth) : changeErrorRight(12);
    }, [error]);

    return (
        <View ref={frameRef} style={[{ ...customInputStyles.inputFrame, ...error && { borderColor: baseErrorColor } }, containerStyle]}>
            <Animated.View style={{ ...customInputStyles.placeholder, left }}>
                <Text style={[customInputStyles.label, labelStyle]}>
                    {restProps.placeholder}
                </Text>
            </Animated.View>
            <TextInput
                ref={inputRef}
                style={customInputStyles.input}
                {...restProps}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            {error && (
                <Animated.View style={{ ...customInputStyles.errorLine, right }}>
                    <Text style={[customInputStyles.errorText, errorTextStyle]}>{error.message}</Text>
                </Animated.View>
            )}
        </View>
    )
}

export default CustomInput;