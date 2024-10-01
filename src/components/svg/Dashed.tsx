import * as React from "react";
import Svg, { Line, Rect, Defs, LinearGradient, Stop, SvgProps } from "react-native-svg";
const Dashed = (props: SvgProps) => (
    <Svg
        width={185}
        height={8}
        viewBox="0 0 185 8"
        fill="none"
        {...props}
    >
        <Line
            y1={4.25}
            x2={185}
            y2={4.25}
            stroke="#1EA1FF"
            strokeWidth={1.5}
            strokeDasharray="6 6"
        />
        <Rect width={75} height={8} fill="url(#paint0_linear_682_1229)" />
        <Rect
            width={75}
            height={8}
            transform="matrix(-1 0 0 1 185 0)"
            fill="url(#paint1_linear_682_1229)"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_682_1229"
                x1={0}
                y1={4}
                x2={75}
                y2={4}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="white" />
                <Stop offset={1} stopColor="white" stopOpacity={0} />
            </LinearGradient>
            <LinearGradient
                id="paint1_linear_682_1229"
                x1={0}
                y1={4}
                x2={75}
                y2={4}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="white" />
                <Stop offset={1} stopColor="white" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default Dashed;
