import { InputProps } from "src/interfaces/input.typing"
import { Input, Text } from "@ui-kitten/components/ui"
import { styles } from "./styles";

export const CustomInput = (props: InputProps) => (
    <>
    {props.label && <Text category="label" style={styles.label}>{props.label}</Text>}
    <Input
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChange}
        style={styles.input}
    />
    </>
)