import React, { useEffect } from "react"
import { View } from "react-native"
import { CollectionStackParamList } from "src/interfaces/route.typing";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, useRoute } from "@react-navigation/native";

import { CustomButton } from "src/components";
import { RootRouteProps } from "src/interfaces/collectionview.typing";
import { createCollectionAction, getCollectionAction } from "src/services/api";
import ScrollResults from "src/components/ScrollResults";
import SearchArtwork from "src/components/SearchArtwork";
import EmptyState from 'src/components/EmptyState';
import { useModal } from "src/context";
import { styles } from "./styles";

export const CollectionContainer = () => {
    const route = useRoute<RootRouteProps<'Create'>>();
    const navigation = useNavigation<StackNavigationProp<CollectionStackParamList>>();
    const [collection, setCollection] = React.useState<INFTData[]>([])
    const [isLoading, setLoading] = React.useState(false);
    const [hasSended, setSended] = React.useState(false);
    const [filter, setFilter] = React.useState('')
    const [filterAvailable, setFilterAvailable] = React.useState(false)
    const { showModal } = useModal();


    function setSelected(key: string) {
        return () => {
            setCollection((collection) => collection.map((nft: INFTData) => {
                if (nft.token_uri === key) {
                    return {
                        ...nft,
                        selected: !nft.selected
                    }
                }
                return nft
            }))
        }
    }

    let filteredData = collection.filter((nft: INFTData) => 
        nft.metadata.name
        .toLowerCase()
        .includes(filter.toLowerCase())
    )

    function createCollection() {
        setLoading((prev) => !prev);
        setSended((prev) => !prev);
        createCollectionAction(
            {
                address: route.params.address,
                nfts: collection.filter((nft: INFTData) => nft.selected)
            }
        ).then((id) => {
            navigation.navigate('Collection', {id: id})
            setLoading((prev) => !prev);
            setSended((prev) => !prev);
        }).catch((err) => {
            console.log(err)
            showModal("Error", "Error on creating collection \nError: " + err.message);
            setLoading((prev) => !prev);
            setSended((prev) => !prev);
        })
    }

    const renderLoading = async () => {
        setLoading((prev) => !prev);
        getCollectionAction(route.params.address).then((res) => {
            setCollection(res)
            setLoading((prev) => !prev);
        }).catch((err) => {
            showModal("Error", "Error loading collection \nError: " + err.message)
            setLoading((prev) => !prev);
        })
    }

    useEffect(() => {
        renderLoading();
    }, [])
    

    if(collection.length < 1 && !isLoading) {
        return (
            <EmptyState />
        )
    }

    return (
        <View style={styles.container}>
            <SearchArtwork
                id={route.params.address.slice(0, 5).concat('...')}
                setFilter={setFilter}
                filter={filter}
                filterAvailable={filterAvailable}
                setFilterAvailable={setFilterAvailable}
            />
            <ScrollResults
                isLoading={isLoading}
                filteredData={filteredData}
                setSelected={setSelected}
            />
            <View style={styles.searchView}>
                {!isLoading && 
                    <CustomButton option="active" 
                        text="Create collection" 
                        loading={hasSended} 
                        onPress={createCollection} 
                    />
                }
            </View>
        </View>
    )
}
