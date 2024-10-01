import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global';
import { AirplaneInFlight } from 'phosphor-react-native';
import Dashed from '../../components/svg/Dashed';
import { themeColors } from '../../data/colors';
import TicketSeperator from '../../components/svg/TicketSeperator';
import { absoluteFill, fullWidth, isIos } from '../../data';
import { formatDateTime } from '../../helper';
import Container from '../../components/container';
import { FlightInfoRow } from '../../components/cards/FlightCard';

const FlightDetail = ({ route, navigation }) => {
    const { bookedFlight } = route?.params;
    const { flight } = bookedFlight;
    const isArival = flight.flightDirection === 'A';
    const arivalPoint = isArival ? flight.route?.destinations?.[0] ?? 'AMS' : 'AMS';
    const departurePoint = isArival ? "AMS" : flight.route?.destinations?.[0] ?? 'AMS';

    return (
        <Container
            barStyle='dark-content'
            style={{
                padding: 16,
                backgroundColor: themeColors.containerColor
            }}
        >
            <View style={styles.frame}>
                <View style={styles.touchFrame}>
                    <View style={styles.topFrame}>
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
                    </View>
                    <View>
                        <TicketSeperator width={fullWidth} style={styles.seperator} />
                    </View>
                    <View style={styles.bottom}>
                        <View style={styles.infoRows}>
                            <FlightInfoRow label="Flight Number" value={flight.flightNumber} />
                            <FlightInfoRow end label="Flight Code" value={flight.flightName} />
                        </View>
                        <View style={styles.infoRows}>
                            <FlightInfoRow label="Seat Number" value={bookedFlight.seatNumber} />
                            <FlightInfoRow end label="Main Flight" value={flight.mainFlight} />
                        </View>
                        <View style={styles.infoRows}>
                            <FlightInfoRow label="Aircraft Registration" value={flight.aircraftRegistration} />
                            <FlightInfoRow end label="Airline Code" value={flight.airlineCode} />
                        </View>
                        <View style={styles.infoRows}>
                            <FlightInfoRow label="Departure" value={formatDateTime(flight.scheduleDateTime)} />
                            <View style={{ rowGap: 2, alignItems: 'flex-end' }}>
                                <Text style={globalStyles.txt19_700_normal_057}>€{49}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default FlightDetail

const styles = StyleSheet.create({
    sheetContent: {
        flex: 1,
        padding: 32,
        alignItems: 'center',
        rowGap: 16
    },
    backflow: {
        zIndex: 0,
        width: fullWidth,
        backgroundColor: 'rgba(18, 18, 18, 0.70)',
        display: 'none',
        ...absoluteFill
    },
    seat: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeColors.blue,
        borderRadius: 12
    },
    seatLine: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 130,
        marginTop: 12,
        gap: 10,
    },
    contentContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 16
    },
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
        height: isIos ? 315 : 335,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: themeColors.primariy0,
    }
});
