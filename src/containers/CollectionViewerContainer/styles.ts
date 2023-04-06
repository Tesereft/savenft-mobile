import { Dimensions, StyleSheet } from "react-native";
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        width: width * 0.9,
        maxHeight: height,
        backgroundColor: 'rgba(38, 27, 57, 1)',
        marginTop: height * .07,
        marginVertical: height * .05,
        borderRadius: 5,
    },
    shareLabel: {
        color: '#FFB900',
        paddingTop: 5,
    },
    copiedLabel: {
        color: '#12892e',
        position: 'absolute',
        top: height * -.03,
        width: width * .12,
    },
    actionsView: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 25,
    },
    action: {
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 35,
        height: 35,
        color: '#FFB900',
    }
});
