import { Dimensions, StyleSheet } from 'react-native';

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

        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: width * 0.6,
        height: height * 0.3,
    },
    text: {
        color: '#F1C72B',
        width: width * 0.6,
        textAlign: 'center',
    },
    button: {
        padding: width * 0.05,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: width * 0.05,
    },
    icon: {
        width: width * 0.1,
        height: height * 0.05,
    }
})