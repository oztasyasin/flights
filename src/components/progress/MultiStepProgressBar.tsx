import { Animated, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fullWidth } from '../../data';
import { progressBarStyles } from './style';
import { ProgressBarProps, ProgresStepProps } from './props';

const ProgressBarStep = (props: ProgresStepProps) => {
    const width = useState<Animated.Value>(new Animated.Value(0))[0];

    useEffect(() => {
        const toValue = props.isSelected ? props.stepWidth : 0;
        Animated.timing(width, {
            toValue,
            duration: 500,
            useNativeDriver: false,
        }).start(() => {
        });
    }, [props.isSelected])

    return (
        <View style={progressBarStyles.barStepContainer}>
            <Animated.View style={{ ...progressBarStyles.progress, width: width }} />
        </View>
    )
}

const MultiStepProgressBar = (props: ProgressBarProps) => {
    const barWidth = fullWidth - 48;
    const gap = 14;
    const totalGap = (props.max - 1) * gap;
    const stepWidth = (barWidth - totalGap) / props.max;
    return (
        <View style={progressBarStyles.container}>
            {Array.from({ length: props.max })?.map((_, i) => <ProgressBarStep key={i} stepWidth={stepWidth} isSelected={props.current > i} />)}
        </View>
    )
}

export default MultiStepProgressBar