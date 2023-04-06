import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';
import { Icon, Text } from '@ui-kitten/components/ui'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '@/interfaces/route.typing';

export default function EmptyState() {
    const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

    const handleBack = () => {
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <Text category='h4' style={styles.text}>Oops</Text>
            <Image source={require("../../../assets/empty.png")} style={styles.image} />
            <Text category='h4' style={styles.text}>Nothing has been found here</Text>

            <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Icon style={styles.icon} fill={styles.text.color} name='arrow-back-outline' />
                <Text category='h6' style={styles.text}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}
