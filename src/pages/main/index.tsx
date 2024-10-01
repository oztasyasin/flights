import React, { useEffect } from 'react'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { mainTabsRoutes } from './routes';
import CustomTabBar from '../../components/navigation/CustomTabBar';
import { themeColors } from '../../data/colors';
import GradientHeader from '../../components/shared/Header';
import { useFlightStore } from '../../store/flights';
const MainTab = createBottomTabNavigator();
const Main = () => {
    // const { reset } = useFlightStore()
    // useEffect(() => {
    //     reset();
    // }, [])

    return (
        <>
            <GradientHeader />
            <MainTab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: 'transparent',
                        elevation: 0,
                        borderTopWidth: 0,
                    },
                }}
                sceneContainerStyle={{
                    backgroundColor: themeColors.containerColor
                }}
                tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}
            >
                {mainTabsRoutes?.map((tab) => <MainTab.Screen options={{unmountOnBlur:true}} {...tab} />)}
            </MainTab.Navigator>
        </>

    )
}
export default Main
