import { Animated, Pressable, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { customInputStyles, errorColor } from './styles'
import { CustomTimePickerProps } from './props'
import { fullWidth } from '../../data'
import { formatDate, isEmpty } from '../../helper'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { CalendarDots } from "phosphor-react-native";
const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
    error,
    containerStyle,
    labelStyle,
    minimumDate,
    maximumDate,
    errorTextStyle,
    onTimeChange,
    ...restProps }) => {
    const [isDatePickerVisible, setIsDatePickerVisible] = useState<boolean>(false);
    const left = useState<Animated.Value>(new Animated.Value(-150))[0];
    const right = useState<Animated.Value>(new Animated.Value(-fullWidth))[0];
    const errorTextStypeProps = StyleSheet.flatten(errorTextStyle);
    const baseErrorColor = errorTextStypeProps?.color ? errorTextStypeProps.color.toString() : errorColor;

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

    const closeModal = () => setIsDatePickerVisible(() => { return false });

    const openModal = () => setIsDatePickerVisible(() => { return true });

    const handleConfirm = (e: Date) => {
        onTimeChange && onTimeChange(e.toISOString()?.split('T')[0]);
        closeModal();
    }

    useEffect(() => {
        !isEmpty(restProps.value) && changeLabelLeft(16);
    }, [restProps.value]);

    useEffect(() => {
        isEmpty(error) ? changeErrorRight(-fullWidth) : changeErrorRight(12);
    }, [error]);

    return (
        <>
            <Pressable
                onPress={openModal}
                style={[{ ...customInputStyles.inputFrame, ...error && { borderColor: baseErrorColor } }, containerStyle]}>
                <Animated.View style={{ ...customInputStyles.placeholder, left }}>
                    <Text style={[customInputStyles.label, labelStyle]}>
                        {restProps.placeholder}
                    </Text>
                </Animated.View>
                <Text style={{ ...customInputStyles.input, height: 'auto', ...!restProps.value && { color: 'red' } }}>{formatDate(restProps?.value) || restProps.placeholder}</Text>
                {error && (
                    <Animated.View style={{ ...customInputStyles.errorLine, right }}>
                        <Text style={[customInputStyles.errorText, errorTextStyle]}>{error.message}</Text>
                    </Animated.View>
                )}
                <CalendarDots />
            </Pressable>
            <DateTimePickerModal
                minimumDate={minimumDate}
                maximumDate={maximumDate}
                isVisible={isDatePickerVisible}
                mode={'date'}
                onConfirm={handleConfirm}
                onCancel={closeModal}
            />
        </>
    )
}

export default CustomTimePicker
