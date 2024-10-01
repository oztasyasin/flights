import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomHorizontalBar from '../../../../components/navigation/CustomHorizontalBar';
import FutureFlights from './FutureFlights';
import ExpiredFlights from './ExpiredFlights';
const ProfileTabs = createMaterialTopTabNavigator();
const tabs = [
    {
        key: 0,
        name: "Future Flights",
        component: FutureFlights,
    },
    {
        key: 1,
        name: "Expired Flights",
        component: ExpiredFlights,
    }
]
const Profile = () => {
    return (
        <ProfileTabs.Navigator
            sceneContainerStyle={{ backgroundColor: 'transparent' }}
            tabBar={props => <CustomHorizontalBar {...props} />}
        >
            {tabs?.map((item) => <ProfileTabs.Screen  {...item} />)}
        </ProfileTabs.Navigator>
    )
}

export default Profile