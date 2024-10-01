import React from 'react'
import { ContainerProps } from './props'
import { Edge, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { containerStyles } from './styles';
import { StatusBar } from 'react-native';


const Container: React.FC<ContainerProps> = ({
    ignorebottom,
    ignoretop,
    style,
    children,
    barStyle,
    translucent,
    nopadding,
    statusBarColor
}) => {
    const { bottom } = useSafeAreaInsets();
    const bottomInset = bottom === 0 ? 33 : 0;
    const edges: Edge[] = [
        !ignoretop && 'top',
        !ignorebottom && 'bottom',
        'left',
        'right'
    ].filter(Boolean) as Edge[];
    return (
        <SafeAreaView
            style={[containerStyles.container, { paddingBottom: bottomInset, ...nopadding && { paddingHorizontal: 0 } }, style]}
            edges={edges}>
            <StatusBar backgroundColor={statusBarColor} translucent={translucent} barStyle={barStyle} />
            {children}
        </SafeAreaView>
    )
}

export default Container
