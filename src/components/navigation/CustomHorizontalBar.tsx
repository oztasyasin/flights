import { Animated, View, TouchableOpacity, Dimensions } from 'react-native';
import { horizontailBarStyles } from './styles';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
const fullWidth = Dimensions.get('window').width;
function CustomHorizontalBar(props: MaterialTopTabBarProps) {
    const { state, descriptors, navigation, position } = props;
    return (
        <View style={horizontailBarStyles.container}>
            <View style={horizontailBarStyles.frame}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name, route.params);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const inputRange = state.routes.map((_, i) => i);
                    const opacity = position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(i => (i === index ? 1 : 0.3)),
                    });

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={horizontailBarStyles.tabs}
                        >
                            <Animated.Text style={{ opacity }}>
                                {label.toString()}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
                <View style={horizontailBarStyles.indicatorFrame}>
                    <Animated.View
                        style={[
                            horizontailBarStyles.selectionIndicator,
                            {
                                transform: [
                                    {
                                        translateX: position.interpolate({
                                            inputRange: state.routes.map((_, i) => i),
                                            outputRange: state.routes.map((_, i) => i !== 0 ? ((fullWidth - 41) / 2) + 6 : 0)
                                        })
                                    }
                                ],
                                width: (fullWidth - 48) / 2,
                            },
                        ]}
                    />
                </View>
            </View >
        </View>

    );
}

export default CustomHorizontalBar;