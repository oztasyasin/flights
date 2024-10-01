import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { globalStyles } from '../../styles/global';
import { AirplaneInFlight } from 'phosphor-react-native';
import Dashed from '../../components/svg/Dashed';
import { themeColors } from '../../data/colors';
import TicketSeperator from '../../components/svg/TicketSeperator';
import { absoluteFill, fullWidth } from '../../data';
import { formatDateTime, isEmpty, renderToast } from '../../helper';
import Container from '../../components/container';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import CustomButton from '../../components/button';
import { useFlightStore } from '../../store/flights';
import { FlightInfoRow } from '../../components/cards/FlightCard';
import { useNavigation } from '@react-navigation/native';

const SeatSelect = ({ route }) => {
    const { flight } = route?.params;
    const navigation = useNavigation();
    const [selectedSeat, setSelectedSeat] = useState<string>("");
    const isArival = flight.flightDirection === 'A';
    const { addNewBookedFlight, bookedFlights } = useFlightStore();
    const arivalPoint = isArival ? flight.route?.destinations?.[0] ?? 'AMS' : 'AMS';
    const departurePoint = isArival ? "AMS" : flight.route?.destinations?.[0] ?? 'AMS';
    const bottomSheetRef = useRef<BottomSheet>(null);
    const overlayRef = useRef<View>(null);
    const openSheet = () => {
        overlayRef?.current?.setNativeProps({
            style: {
                display: 'flex'
            }
        })
        bottomSheetRef?.current?.snapToIndex(0);
    }
    const closeSheet = () => {
        setSelectedSeat("");
        overlayRef?.current?.setNativeProps({
            style: {
                display: 'none'
            }
        })
        bottomSheetRef?.current?.close();
    }

    const handleApprove = () => {
        closeSheet();
        addNewBookedFlight({
            id: bookedFlights ? (bookedFlights?.length + 1).toString() : "0",
            flight: flight,
            seatNumber: selectedSeat,
            createDate: new Date().toISOString()
        })
        renderToast({ type: 'success', text2: "Seat has been booked successfully" })
        navigation.navigate('Profile');
    }

    useEffect(() => {
        !isEmpty(selectedSeat) && openSheet();
    }, [selectedSeat])

    return (
        <Container
            barStyle='dark-content'
            style={{ paddingHorizontal: 16, backgroundColor: themeColors.containerColor }}
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
                            <FlightInfoRow label="Departure" value={formatDateTime(flight.scheduleDateTime)} />
                            <View style={{ rowGap: 2, alignItems: 'flex-end' }}>
                                <Text style={globalStyles.txt19_700_normal_057}>€{49}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ ...globalStyles.txt16_600_24_032, textAlign: 'center' }} >Select Seat</Text>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.contentContainerStyle}
                    >
                        {['A', 'B'].map((item) => (
                            <View key={item}>
                                <Text style={{ ...globalStyles.txt15_400_normal_045, textAlign: 'center' }} >{item}</Text>
                                <View key={item} style={styles.seatLine}>
                                    {Array.from({ length: 30 }).map((_, i) => (
                                        <TouchableOpacity onPress={() => setSelectedSeat(`${item}${i + 1}`)} style={styles.seat} key={i}>
                                            <Text style={{ ...globalStyles.txt16_600_24_032, color: themeColors.primariy0 }}>
                                                {i + 1}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <BottomSheet
                ref={bottomSheetRef}
                onClose={closeSheet}
                backdropComponent={() => <Pressable onPress={closeSheet} ref={overlayRef} style={styles.backflow} />}
                backgroundStyle={{ backgroundColor: themeColors.primariy0 }}
                style={{ borderRadius: 24 }}
                index={-1}
                enablePanDownToClose
                snapPoints={[350]}
            >
                <BottomSheetView style={styles.sheetContent}>
                    <View style={styles.seat}>
                        <Text style={{ ...globalStyles.txt16_600_24_032, color: themeColors.primariy0 }}>
                            {selectedSeat}
                        </Text>
                    </View>
                    <View style={{ alignItems: 'center', rowGap: 6 }}>
                        <Text style={{ ...globalStyles.txt19_700_normal_057, color: themeColors.primaryText }}>
                            {"Are Your Sure?"}
                        </Text>
                        <Text style={{ ...globalStyles.txt16_400_26_016, color: themeColors.subText, textAlign: 'center' }}>
                            {"You may not be able to update this after seat selection. Do you confirm the selected seat?"}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', columnGap: 12 }}>
                        <CustomButton
                            style={{ backgroundColor: 'red' }}
                            onPress={closeSheet}
                            title={"Decline"} />
                        <CustomButton
                            onPress={handleApprove}
                            title={"Approve"} />
                    </View>
                </BottomSheetView>
            </BottomSheet>
        </Container>
    )
}

export default SeatSelect

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
        flex: 1,
        borderRadius: 16,
        overflow: 'hidden',
        backgroundColor: themeColors.primariy0,
    }
});
