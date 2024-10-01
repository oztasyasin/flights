import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Container from '../../components/container'
import { globalStyles } from '../../styles/global'
import { Image } from 'expo-image';
import FillGradient from '../../components/shared/FillGrediant';
import { themeColors } from '../../data/colors';
import CustomButton from '../../components/button';
import { onboardingContents } from '../../data';
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import MultiStepProgressBar from '../../components/progress/MultiStepProgressBar';
import { PageProps } from '../../models';


const Onboarding = (props: PageProps) => {
    const [step, setStep] = useState<number>(0);
    const pagerRef = useRef<PagerView>(null)
    const handleButtonPress = () => {
        step < onboardingContents.length - 1 ?
            goToNextPage() :
            props.navigation.navigate('Main');
    }
    const goToNextPage = () => {
        if (pagerRef.current) {
            const nextPage = step + 1;
            pagerRef.current.setPage(nextPage);
        }
    };

    const handlePageChange = (event: PagerViewOnPageSelectedEvent) => {
        const pageIndex = event.nativeEvent.position;
        setStep(pageIndex);
    };
    return (
        <Container
            statusBarColor={'transparent'}
            translucent
            barStyle='light-content'>
            <Image
                transition={500}
                style={styles.image}
                source={onboardingContents[step].image}
            />
            <PagerView
                ref={pagerRef}
                onPageSelected={handlePageChange}
                style={styles.pagerView}>
                {
                    onboardingContents?.map((item) =>
                        <View key={item.key} style={styles.textFrame}>
                            <Text style={{
                                ...globalStyles.txt40_600_60_12,
                                color: themeColors.primariy0
                            }}>
                                {item.title}
                            </Text>
                            <Text style={{
                                ...globalStyles.txt16_400_26_016,
                                color: themeColors.primariy0
                            }}>
                                {item.subTitle}
                            </Text>
                        </View>)
                }
            </PagerView>
            <MultiStepProgressBar
                max={3}
                current={step + 1} />
            <CustomButton
                onPress={handleButtonPress}
                title={step < onboardingContents.length - 1 ? 'Next' : 'Get Started'} />
            <FillGradient />
        </Container>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    },
    textFrame: {
        rowGap: 20,
        flex: 1,
        justifyContent: 'flex-end',
    },
    image: {
        zIndex: -1,
        ...StyleSheet.absoluteFillObject
    }
})
