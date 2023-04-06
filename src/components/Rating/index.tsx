import { Icon, Text } from "@ui-kitten/components";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export const StarRate = ({ onChange, editable }: {  onChange: (rate: number) => void; editable: boolean }) => {
    const [starRating, setStarRating] = useState(0);

    function changeStarRating(rate: number) {
        if(!editable) return;
        onChange(rate);
        setStarRating(rate)
    }

    return (
        <View style={styles.container}>
            <View style={styles.stars}>
            <TouchableOpacity onPress={() => changeStarRating(1)}>
                <Icon name="star" 
                fill={starRating >= 1 ? "#FFB900" : "#999"}
                style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeStarRating(2)}>
                <Icon name="star" 
                fill={starRating >= 2 ? "#FFB900" : "#999"}
                style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeStarRating(3)}>
                <Icon name="star" 
                style={styles.icon}
                fill={starRating >= 3 ? "#FFB900" : "#999"}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeStarRating(4)}>
                <Icon name="star" 
                style={styles.icon}
                fill={starRating >= 4 ? "#FFB900" : "#999"}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeStarRating(5)}>
                <Icon name="star" 
                style={styles.icon}
                fill={starRating >= 5 ? "#FFB900" : "#999"}
                />
            </TouchableOpacity>
            </View>
            <Text category="c2" style={styles.label}>
                {editable ? "Rate this collection" : "Thanks for rating!"}
            </Text>
        </View>
    );
  }
  