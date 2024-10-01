import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { WarningCircle, CheckCircle } from 'phosphor-react-native';
import { themeColors } from '../../data/colors';

const fullWidth = Dimensions.get('window').width;

const toasterColorMap: { [key: string]: string } = {
    success: 'green',
    error: 'red',
};

const iconProps = {
    size: 24,
    color: 'white',
};

const iconMap: { [key: string]: JSX.Element } = {
    success: <CheckCircle {...iconProps} weight='bold' />,
    error: <WarningCircle {...iconProps} weight='bold' />,
};

interface CustomToasterProps {
    type: 'success' | 'error';
    text2: string;
}

const CustomToaster: React.FC<CustomToasterProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.frame}>
                <View
                    style={{
                        ...styles.leftArea,
                        backgroundColor: toasterColorMap[props.type],
                    }}
                >
                    {iconMap[props.type]}
                </View>
                <Text
                    style={{
                        fontWeight: '400',
                        fontSize: 14,
                        lineHeight: 19.12,
                        maxWidth: fullWidth - 32 - 60 - 24,
                        marginLeft: 12,
                        color: themeColors.primaryText,
                    }}
                >
                    {props.text2}
                </Text>
            </View>
        </View>
    );
};

export default CustomToaster;

const styles = StyleSheet.create({
    leftArea: {
        height: '100%',
        aspectRatio: 1,
        backgroundColor: 'grey',
        borderRadius: 20,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
    },
    container: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    frame: {
        width: '100%',
        borderRadius: 20,
        borderBottomLeftRadius: 8,
        backgroundColor: 'white',
        height: 60,
        shadowColor: 'white',
        shadowOpacity: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
