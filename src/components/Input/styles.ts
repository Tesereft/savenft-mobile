import { Dimensions, StyleSheet } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    label: {
        width: width * .6,
        color: '#FFB900',
        paddingTop: 10
    },
    input: {
        borderColor: '#FFB900',
        borderRadius: 3,
        paddingVertical: 10,
    },
})