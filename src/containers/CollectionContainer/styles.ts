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
    },
    searchView: {
        width: width * 0.8,
        marginHorizontal: width * .05,
        marginBottom: height * .02,
    },
});
