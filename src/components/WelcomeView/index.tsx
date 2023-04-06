import { View } from "react-native"
import { styles } from "./styles"
import { Layout, Text } from "@ui-kitten/components/ui"
import { CustomInput } from "../Input"
import { CustomButton } from "../Button"
import { IWelcomeProps } from "../../interfaces/welcome.typings"

export const WelcomeView = ({
    value,
    setValue,
    searchCollection,
    isLoading
}: IWelcomeProps) => {
    return (
        <Layout style={styles.layout}>
            <Text category="h6" style={styles.greetings}>Welcome to SaveNFTs</Text>
            <Text category="h3" style={styles.objective}>Search a collection</Text>
            <Text category="s1" style={styles.description}>
                Save your favorite NFTs in a collection and share it with your friends.
            </Text>
            <CustomInput 
                label="Collection address" 
                placeholder="0x..." 
                value={value} 
                onChange={nextValue => setValue(nextValue)} 
            />
            <CustomButton text="Search" 
            option="active"
            onPress={searchCollection} 
            loading={isLoading}
            />
        </Layout>
    )
}