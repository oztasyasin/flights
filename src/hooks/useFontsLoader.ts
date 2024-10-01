import { useEffect } from "react"
import * as SplashScreen from 'expo-splash-screen';
import {
    useFonts,
    Urbanist_100Thin,
    Urbanist_200ExtraLight,
    Urbanist_300Light,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
    Urbanist_800ExtraBold,
    Urbanist_900Black,
} from '@expo-google-fonts/urbanist';
import {
    PlusJakartaSans_200ExtraLight,
    PlusJakartaSans_300Light,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold
} from '@expo-google-fonts/plus-jakarta-sans'
SplashScreen.preventAutoHideAsync();

export const useFontsLoader = () => {
    const [loaded, error] = useFonts({
        "urbanist_100": Urbanist_100Thin,
        "urbanist_200": Urbanist_200ExtraLight,
        "urbanist_300": Urbanist_300Light,
        "urbanist_400": Urbanist_400Regular,
        "urbanist_500": Urbanist_500Medium,
        "urbanist_600": Urbanist_600SemiBold,
        "urbanist_700": Urbanist_700Bold,
        "urbanist_800": Urbanist_800ExtraBold,
        "urbanist_900": Urbanist_900Black,
        "jakarta_200": PlusJakartaSans_200ExtraLight,
        "jakarta_300": PlusJakartaSans_300Light,
        "jakarta_400": PlusJakartaSans_400Regular,
        "jakarta_500": PlusJakartaSans_500Medium,
        "jakarta_600": PlusJakartaSans_600SemiBold,
        "jakarta_700": PlusJakartaSans_700Bold,
        "jakarta_800": PlusJakartaSans_800ExtraBold
    });
    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error])
    return { loaded, error };
}