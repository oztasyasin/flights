import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FlightCardProps, FlightInfoRowProps } from '../../models';
import { themeColors } from '../../data/colors';
import Animated, { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { globalStyles } from '../../styles/global';
import Dashed from '../svg/Dashed';
import { AirplaneInFlight, CaretDown, CaretUp } from 'phosphor-react-native';
import TicketSeperator from '../svg/TicketSeperator';
import { fullWidth, isIos } from '../../data';
import { formatDateTime } from '../../helper';

export const FlightInfoRow = (props: FlightInfoRowProps) => (
    <View style={{ rowGap: 2, ...props.end && { alignItems: 'flex-end' } }}>
        <Text style={{ ...globalStyles.txt11_400_normal_012, color: themeColors.subText }}>
            {props.label}
        </Text>
        <Text>{props.value}</Text>
    </View>
);
const heightValues = {
    max: isIos ? 218 : 228,
    min: 110
}
const FlightCard = (props: FlightCardProps) => {
    const isArival = props.flightDirection === 'A';
    const arivalPoint = isArival ? props.route?.destinations?.[0] ?? 'AMS' : 'AMS';
    const departurePoint = isArival ? "AMS" : props.route?.destinations?.[0] ?? 'AMS';
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const height = useSharedValue<number>(heightValues.min);
    const borderRadius = useSharedValue<number>(0);

    const toggleExpand = () => {
        height.value = withTiming(isExpanded ? heightValues.min : heightValues.max, {
            duration: 300,
            easing: Easing.inOut(Easing.ease),
        });
        borderRadius.value = withTiming(isExpanded ? 0 : 16, {
            duration: 300,
            easing: Easing.inOut(Easing.ease),
        });
        setIsExpanded(!isExpanded);
    };

    return (
        <Animated.View style={[styles.frame, { height, borderBottomLeftRadius: borderRadius, borderBottomRightRadius: borderRadius }]}>
            <View style={styles.touchFrame}>
                <TouchableOpacity onPress={() => props.onPress && props.onPress({ ...props })} disabled={isArival} style={styles.topFrame}>
                    <View style={styles.pointsFrame}>
                        <Text style={globalStyles.txt19_700_normal_057}>{departurePoint}</Text>
                        <Text style={{ ...globalStyles.txt14_500_21_028, color: themeColors.subText }}>{"Destination"}</Text>
                    </View>
                    <View style={styles.dashed}>
                        <View style={styles.iconFrame}>
                            <AirplaneInFlight size={20} weight='bold' color={themeColors.primariy0} />
                        </View>
                        <Dashed />
                    </View>
                    <View style={{ ...styles.pointsFrame, alignItems: 'flex-end' }}>
                        <Text style={globalStyles.txt19_700_normal_057}>{arivalPoint}</Text>
                        <Text style={{ ...globalStyles.txt14_500_21_028, color: themeColors.subText }}>{"Arival"}</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <TicketSeperator width={fullWidth} style={styles.seperator} />
                    <TouchableOpacity onPress={toggleExpand} style={styles.extendFrame}>
                        {isExpanded ? <CaretUp color={themeColors.subText} size={12} weight='bold' /> : <CaretDown color={themeColors.subText} size={12} weight='bold' />}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => props.onPress && props.onPress({ ...props })} disabled={isArival} style={styles.bottom}>
                    <View style={styles.infoRows}>
                        <FlightInfoRow label="Flight Number" value={props.flightNumber} />
                        <FlightInfoRow end label="Flight Code" value={props.flightName} />
                    </View>
                    <View style={styles.infoRows}>
                        <FlightInfoRow label="Departure" value={formatDateTime(props.scheduleDateTime)} />
                        <View style={{ rowGap: 2, alignItems: 'flex-end' }}>
                            {isArival ? (
                                <>
                                    <FlightInfoRow end label="Arrival" value={formatDateTime(props.estimatedLandingTime)} />
                                </>
                            ) : (
                                <Text style={globalStyles.txt19_700_normal_057}>€{49}</Text>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
}

export default FlightCard;

const styles = StyleSheet.create({
    bottom: {
        rowGap: 16,
        padding: 16,
        paddingTop: 12,
    },
    infoRows: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    extendFrame: {
        width: '100%',
        justifyContent: 'center',
        paddingTop: 18,
        alignItems: 'center',
        position: 'absolute',
        height: 60,
        marginTop: -18,
        zIndex: 10,
    },
    seperator: {
        left: -16,
    },
    iconFrame: {
        position: 'absolute',
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: themeColors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 4
    },
    dashed: {
        width: fullWidth,
        left: -16,
        position: 'absolute',
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pointsFrame: {
        rowGap: 4
    },
    topFrame: {
        flexDirection: 'row',
        width: '100%',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    touchFrame: {
        flex: 1,
    },
    frame: {
        width: '100%',
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: themeColors.primariy0,
    }
});
