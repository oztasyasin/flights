import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { absoluteFill, fullWidth } from '../../data';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowCounterClockwise, ArrowLeft, Lightning, Recycle } from 'phosphor-react-native';
import { themeColors } from '../../data/colors';
import { useState } from 'react';
import { globalStyles } from '../../styles/global';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { FlashMode } from 'expo-camera/build/legacy/Camera.types';
import { useFlightStore } from '../../store/flights';
import { BookedFlight, QRScanResult } from '../../models';
import { renderToast } from '../../helper';

const basePadding = 24;
export default function Barcode() {
    const [permission, requestPermission] = useCameraPermissions();
    const { bookedFlights } = useFlightStore();

    const [QRData, setQRData] = useState<string | null>(null);
    const [flashMode, setFlashMode] = useState<FlashMode>(FlashMode.off);
    const { goBack, navigate } = useNavigation();
    const { top, bottom } = useSafeAreaInsets();
    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }
    const toggleFlash = () => {
        setFlashMode(
            flashMode === FlashMode.off
                ? FlashMode.on
                : FlashMode.off
        );
    };
    const handleRefreshQRData = () => setQRData(null);
    const handleBarCodeScanned = ({ type, data }: QRScanResult) => {
        setQRData(() => (data));
        const flight = bookedFlights?.find((bookedFlight: BookedFlight) => bookedFlight.flight.flightName === data);
        flight ? navigate("FlightDetail", { bookedFlight: flight }) : renderToast({ type: 'error', text2: `No recorded data was found for this flight number.` })
    };


    return (
        <View style={{ ...styles.container, }}>
            <View style={styles.cameraLayer}>
                <LinearGradient
                    style={{ ...styles.gradient, paddingTop: top + basePadding, paddingBottom: bottom + basePadding }}
                    colors={["rgba(19,19,19,1)", 'rgba(19,19,19,0)', 'rgba(19,19,19,1)']}
                >
                    <View style={styles.topFrame}>
                        <TouchableOpacity
                            onPress={goBack}
                            style={styles.buttonFrame}>
                            <ArrowLeft />
                        </TouchableOpacity>
                        <Text style={{ ...globalStyles.txt14_500_21_028, color: themeColors.primariy0 }}>Scan to search</Text>
                        <TouchableOpacity
                            onPress={toggleFlash}
                            style={styles.buttonFrame}>
                            <Lightning />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        {
                            QRData ?
                                <TouchableOpacity
                                    style={styles.tryAgainFrame}
                                    onPress={handleRefreshQRData}>
                                    <ArrowCounterClockwise weight='bold' color={themeColors.primariy0} />
                                    <Text style={{ ...globalStyles.txt19_700_normal_057, color: themeColors.primariy0 }} >Try Again</Text>
                                </TouchableOpacity> :
                                <LottieView
                                    autoPlay
                                    style={{
                                        width: fullWidth,
                                        height: fullWidth,
                                        left: -24,
                                        backgroundColor: 'transparent',
                                    }}
                                    source={require('../../data/animations/scannerAnimation.json')}
                                />
                        }

                    </View>

                </LinearGradient>
            </View>
            <CameraView
                flash={'on'}
                onBarcodeScanned={QRData ? undefined : handleBarCodeScanned}
                barcodeScannerSettings={{
                    barcodeTypes: ["qr"],
                }}
                style={styles.camera} />
        </View>
    );
}

const styles = StyleSheet.create({
    tryAgainFrame: {
        width: '100%',
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 8
    },
    buttonFrame: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: themeColors.primariy0
    },
    topFrame: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    gradient: {
        ...absoluteFill,
        paddingHorizontal: basePadding
    },
    cameraLayer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 10,
        top: 0,
        left: 0
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        ...absoluteFill
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
