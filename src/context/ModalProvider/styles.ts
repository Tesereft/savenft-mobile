import { Dimensions, StyleSheet } from "react-native";

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    warning: {
        position: "absolute",
        alignSelf: "center",
        width: width * 0.9,
        top: height * 0.1,   
        backgroundColor: '#160C28'
    },
    text: {
        color: "#000",
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.05,
        gap: 15,
    },
    footerControl: {
        marginHorizontal: 2,
        backgroundColor: '#FFB900',
        borderColor: '#FFB900',
    },
    headerContainer: {
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.05,
    }
});