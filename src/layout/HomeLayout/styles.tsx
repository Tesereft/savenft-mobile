import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#160C28'
    },
    pattern: {
        position: 'absolute',
        zIndex: -1,
        width: 550,
        height: 550,
        bottom: -150,
        right: -150
    },
    icon: {
        position: 'absolute',
        width: 250,
        height: 250,
        top: 125,
        left: -125,
        zIndex: -1
    }
});