export const isEmpty = (data: any) => {
    return data == null || data === "" || data?.length == 0 || data === false
}