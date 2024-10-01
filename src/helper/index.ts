import Toast from "react-native-toast-message";
import { RenderToastProps } from "../models";

export const isEmpty = (data: any) => {
    return data == null || data === "" || data?.length == 0 || data === false
}

export const formatDate = (dateStr?: string) => {
    if (!dateStr) {
        return ""
    }
    const date = new Date(dateStr);
    const formattedDate = new Intl.DateTimeFormat('en-EN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).format(date);

    return formattedDate;
}

export const formatDateTime = (dateStr?: string) => {
    if (!dateStr) {
        return "";
    }

    const date = new Date(dateStr);

    const formattedDate = new Intl.DateTimeFormat('en-EN', {
        day: 'numeric',
        month: 'short',
    }).format(date);

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // 0'ı 12 olarak göster
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

    return `${formattedDate}, ${formattedTime}`;
};


export const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const renderToast = (props: RenderToastProps) => {
    const defaultProps = {
        type: "success",
        text1: null,
        text2: null
    }
    const newProps = {
        ...defaultProps,
        ...props
    }
    Toast.show({
        type: newProps.type,
        text1: newProps.text1,
        text2: newProps.text2
    });
}
