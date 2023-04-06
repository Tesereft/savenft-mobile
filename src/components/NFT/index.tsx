import { Icon } from "@ui-kitten/components/ui";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

const ArtWork = (props: INFTData) => {
    return (
        <View {...props} style={styles.artwork}>
            <Image source={{
                uri: props.metadata.image
            }} style={styles.image}
             />
        </View>
  )
};
  
export const NFTData = (nft: INFTData & { selected: boolean, onPress: () => void}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={nft.onPress}>
            {nft.selected 
            ? (
                <>
                <View style={styles.iconView}>
                    <Icon style={styles.icon} 
                    fill={styles.icon.color} 
                    name='star'/>
                </View>
                <ArtWork {...nft}/>
                </>
            ) 
            : <ArtWork {...nft}/>
            }
      </TouchableOpacity>
    )
}
