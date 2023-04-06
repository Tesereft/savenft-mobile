import { Dimensions, StyleSheet } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    layout: {
        overflow: 'scroll',
        maxHeight: height * .7,
    },
    content: {
        display: 'flex',
        width: width * 0.9,
        borderRadius: 5,
        marginBottom: height * .02,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 5,
    },
    loading: {
        height: height * .7,
        width: width * .9,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})