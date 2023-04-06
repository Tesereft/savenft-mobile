import { useNavigation } from "@react-navigation/core"
import { StackNavigationProp } from '@react-navigation/stack';
import React from "react"
import { RootStackParamList } from "src/interfaces/route.typing"
import { WelcomeView } from "src/components/WelcomeView";

export const HomescreenContainer = () => {
    const [value, setValue] = React.useState('')
    const [isLoading, setLoading] = React.useState(false)
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    function searchCollection() {
        if(value.length < 42) return;

        setLoading((prev) => !prev);
        navigation.navigate('Create', {address: value})

        setTimeout(() => {
            setLoading((prev) => !prev);
        }, 1000);
    }

    return (
        <WelcomeView 
            value={value}
            setValue={setValue}
            searchCollection={searchCollection}
            isLoading={isLoading}
        />
    )
}

