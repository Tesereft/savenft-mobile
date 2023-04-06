import { Button, Spinner } from "@ui-kitten/components/ui"
import { ButtonProps } from "src/interfaces/button.typing"
import { View } from "react-native"
import { styles } from "./styles";

export const CustomButton = (props: ButtonProps) => {
    const isActive = props.option.startsWith('active') ? styles.active : styles.inactive;
    const isTranslation = props.translation ? styles.languages : null;
    
    const styling = {
        ...styles.button,
        ...isActive,
        ...isTranslation
    }

    return (
    <Button style={styling} onPress={props.onPress}>
        {props.loading ?
        (
        <View style={styles.controlContainer}>
            <Spinner size="small" status='control'/>
        </View>
        )
        : props.text
        }
    </Button>
)}
