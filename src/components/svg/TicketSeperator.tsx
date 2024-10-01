import * as React from "react";
import Svg, { Line, Circle, SvgProps } from "react-native-svg";
const TicketSeperator = (props: SvgProps) => {
    const height = Boolean(props?.width) ? props.width / 378 * 24 : 24;
    return (
        <Svg
            viewBox="0 0 378 24"
            fill="none"
            width={props.width || 378}
            height={height}
            {...props}

        >
            <Line
                x1={11}
                y1={11.25}
                x2={366}
                y2={11.25}
                stroke="black"
                strokeOpacity={0.08}
                strokeWidth={1.5}
                strokeDasharray="6 6"
            />
            <Circle cx={12} cy={12} r={12} fill="#F5F9FA" />
            <Circle cx={366} cy={12} r={12} fill="#F5F9FA" />
        </Svg>
    )

};
export default TicketSeperator;
