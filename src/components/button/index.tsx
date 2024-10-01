import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CustomButtonProps } from './props'
import { customButtonStyles } from './styles'

const CustomButton: React.FC<CustomButtonProps> = ({ style, title, ...props }) => {
    return (
        <TouchableOpacity
            {...props}
            style={[customButtonStyles.frame, style]}>
            <Text style={customButtonStyles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton
