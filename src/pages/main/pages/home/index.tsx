import React from 'react'
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import ArivalFlights from './ArivalFlights';
import DepartureFlights from './DepartureFlights';
import CustomHorizontalBar from '../../../../components/navigation/CustomHorizontalBar';
const HomeTabs = createMaterialTopTabNavigator();
const tabs = [
    {
        key: 0,
        name: "Arival Flights",
        component: ArivalFlights,
    },
    {
        key: 1,
        name: "Departure Flights",
        component: DepartureFlights,
    }
]
const Home = () => {
    return (
        <HomeTabs.Navigator
            sceneContainerStyle={{ backgroundColor: 'transparent' }}
            tabBar={(props: MaterialTopTabBarProps) => <CustomHorizontalBar {...props} />}
        >
            {tabs?.map((item) => <HomeTabs.Screen  {...item} />)}
        </HomeTabs.Navigator>
    )
}

export default Home