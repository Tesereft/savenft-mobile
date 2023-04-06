import React from 'react'
import { ScrollView, View } from 'react-native';
import { styles } from './styles';
import { IScrollResultsProps } from 'src/interfaces/scrollResults.typing';
import { NFTData } from 'src/components/NFT';
import { Spinner } from '@ui-kitten/components';

export default function ScrollResults({
    isLoading,
    filteredData,
    setSelected,
}: IScrollResultsProps ) {
  return (
    <ScrollView style={styles.layout}>
        <View style={styles.content}>
            {isLoading 
              ? (
                <View style={styles.loading}>
                <Spinner status='warning' size='medium'/>
                </View>
                ) 
              : filteredData.map((nft: INFTData, index) => (
                <NFTData {...nft} key={index} selected={nft.selected} onPress={
                  setSelected ? setSelected(nft.token_uri) : () => {}
                } />
            ))}
        </View>
    </ScrollView>
  )
}
