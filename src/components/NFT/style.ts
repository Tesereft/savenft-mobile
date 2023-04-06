import { Dimensions, StyleSheet } from "react-native";

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: (width * .3),
        backgroundColor: 'transparent',
        marginVertical: 10,
        position: 'relative',
    },
    image: {
        width: (width * .30),
        height: (height * .15),
        resizeMode: 'cover',
        borderRadius: 5,
        backgroundColor: '#FFB900'
    },
    icon: {
        width: 50,
        height: 50,
        color: '#FFB900',
        zIndex: 1,
    },
    iconView: {
        position: 'absolute',
        zIndex: 1,
        width: (width * .301),
        height: (height * .15),

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 5,
    },
    artwork: {
        alignItems: 'center',
        zIndex: -1,
    },
});