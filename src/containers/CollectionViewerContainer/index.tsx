import React, { useEffect } from "react"
import { TouchableOpacity, View } from "react-native"
import * as Clipboard from 'expo-clipboard';

import { Icon, Text } from "@ui-kitten/components/ui";
import { useRoute } from "@react-navigation/native";

import { Collection } from "src/interfaces/collection.typing";
import { RootRouteProps } from "src/interfaces/collectionview.typing";

import { StarRate } from "src/components";
import SearchArtwork from 'src/components/SearchArtwork/index';
import ScrollResults from 'src/components/ScrollResults/index';
import { loadCollectionAction, rateACollectionAction } from 'src/services/api';
import { styles } from "./styles";
import EmptyState from 'src/components/EmptyState/index';
import { useModal } from "src/context";


export const CollectionViewerContainer = () => {
    const route = useRoute<RootRouteProps<'Collection'>>();
    const [collection, setCollection] = React.useState<Collection>({} as Collection);
    const [isLoading, setLoading] = React.useState(false);
    const [ratable, setRatable] = React.useState(true);

    const [filter, setFilter] = React.useState('')
    const [filterAvailable, setFilterAvailable] = React.useState(false)
    const [copied, setCopied] = React.useState(false)
    const { showModal } = useModal();

    const nftList = collection.nfts || [];

    const copyToDashboard = () => {
        setCopied(true)

        Clipboard
        .setStringAsync(`exp://192.168.0.103:19000/--/collection?id=${route.params.id}`);
        
        setTimeout(() => {
            setCopied(false)
        }, 1000)
    }

    let filteredData = nftList.filter((nft: INFTData) => 
        nft.metadata.name
        .toLowerCase()
        .includes(filter.toLowerCase())
    )

    const renderLoading = () => {
        setLoading((prev) => !prev);

        loadCollectionAction(route.params.id).then((res) => {
            setCollection(res)
        }).catch((err) => {
            showModal("Error", "Error loading collection.\nError: " + err.message);
        });
        
        setLoading((prev) => !prev);
    }

    useEffect(() => {
        renderLoading();
    }, [])
    
    function changeRate(rateNumber: number){
        setLoading((prev) => !prev);
        rateACollectionAction(
            {
                collectionId: parseInt(route.params.id),
                rate: rateNumber
            }
        ).then(() => {
            setRatable(false);
            setLoading((prev) => !prev);
        }).catch((err) => {
            showModal("Error", "Error on rating collection\nError: " + err.message)
            setRatable(false);
            setLoading((prev) => !prev);
        });
    }

    if(nftList.length < 1 && !isLoading) {
        return (
            <EmptyState />
        )
    }

    return (
        <View style={styles.container}>
           <SearchArtwork
                id={route.params.id}
                setFilter={setFilter}
                filter={filter}
                filterAvailable={filterAvailable}
                setFilterAvailable={setFilterAvailable}
                rate={collection.rate}
            />

            <ScrollResults
                isLoading={isLoading}
                filteredData={filteredData}
            />
            
            <View style={styles.actionsView}>
                <StarRate onChange={changeRate} editable={ratable}/>
                <TouchableOpacity onPress={copyToDashboard} style={styles.action}>
                    {copied && 
                        <Text category="c2" style={styles.copiedLabel}>Copied!</Text>
                    }
                    <Icon
                        style={styles.icon}
                        fill={styles.icon.color}
                        name='external-link-outline'
                    />
                    <Text category="c2" style={styles.shareLabel}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
