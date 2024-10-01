import { Compass, IconWeight, Signpost, User } from "phosphor-react-native";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from "expo-blur";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useEffect } from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomTabProps } from "./props";
import { themeColors } from "../../data/colors";
import { customTabBarStyles } from "./styles";
const selectedColor = themeColors.primary500;
const themeGrey = 'grey'
const screen = Dimensions.get('window');
const { width } = screen;
const getIconProps = (isFocused: boolean) => {
    return {
        color: isFocused ? selectedColor : themeGrey,
        weight: isFocused ? "bold" as IconWeight : "regular" as IconWeight,
        size: 24
    }
}
type IconKeys = "Home" | "Profile";
const iconMap: Record<IconKeys, (isFocused: boolean) => JSX.Element> = {
    Home: (isFocused: boolean) => <Signpost {...getIconProps(isFocused)} />,
    Profile: (isFocused: boolean) => <User {...getIconProps(isFocused)} />
};
const Tab = (props: BottomTabProps) => {
    const { route, index, state, descriptors, navigation } = props
    const { options } = descriptors[route.key];
    const label =
        options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
                ? options.title
                : route.name;

    const isFocused = state.index === index;
    const maxSize = (width - 44) / 2;
    const animatedWidth = useSharedValue(isFocused ? maxSize : 0);
    useEffect(() => {
        if (isFocused) {
            animatedWidth.value = withSpring(maxSize);
        }
        else {
            animatedWidth.value = withSpring(0);
        }
    }, [isFocused]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: animatedWidth.value,
        };
    });
    const onPress = () => {
        const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
        }
    };

    return (

        <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={customTabBarStyles.tabs}>
            {iconMap[label as "Home" | "Profile"](isFocused)}
            <Animated.View style={[customTabBarStyles.tabIndicator, { ...index === 0 ? { left: 0 } : { right: 0 } }, animatedStyle]} />
            {isFocused && <Text>
                {label.toString()}
            </Text>}
        </TouchableOpacity>
    );
}
const CustomTabBar = (props: BottomTabBarProps) => {
    const { state, descriptors, navigation, insets } = props;
    return (
        <>
            <View style={customTabBarStyles.container}>
                <LinearGradient
                    colors={[
                        'rgba(18, 18, 18, 0.06)',
                        'rgba(18, 18, 18, 0.06)',
                        'rgba(255, 255, 255, 0.50)'
                    ]}
                    style={customTabBarStyles.frame}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                >
                    <BlurView
                        intensity={30} style={customTabBarStyles.blurContainer}>
                        {state.routes.map((route, index) =>
                            <Tab
                                key={index}
                                navigation={navigation}
                                state={state}
                                descriptors={descriptors}
                                index={index}
                                insets={insets}
                                route={route} />)}
                    </BlurView>
                </LinearGradient>
            </View>
        </>
    );
};

export default CustomTabBar;