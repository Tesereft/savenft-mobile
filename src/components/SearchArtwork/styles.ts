import { Dimensions, StyleSheet } from 'react-native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    searchView: {
        width: width * 0.8,
        marginHorizontal: width * .05,
        marginBottom: height * .02,
    },
    title: {
        paddingTop: 10,
    },
    id: {
        color: '#FFB900',
    },
    filterIcon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        width: 25,
        height: 25,
        top: height * .025,
    },
    rate: {
        color: '#FFB900',
        width: 15,
        height: 15,
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
});