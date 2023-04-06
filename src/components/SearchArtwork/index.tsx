import { Icon, Text } from '@ui-kitten/components/ui';
import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { CustomInput } from '../Input';
import { styles } from './styles';
import { RootRouteProps } from '../../interfaces/collectionview.typing';

export default function SearchArtwork({
    id,
    setFilter,
    filter,
    filterAvailable,
    setFilterAvailable,
    rate
}: {
    id: string,
    setFilter: (value: string) => void,
    filter: string,
    filterAvailable: boolean,
    setFilterAvailable: (value: boolean) => void,
    rate?: number
}) {
  return (
    <View style={styles.searchView}>
        <View style={styles.title}>
            <Text category="h5" style={styles.title}> Collection
                <Text style={styles.id} category="h6">
                    #{id} 
                </Text>
            </Text>
        </View>
        
        {rate &&
            <View style={styles.flex}>
                <Icon fill={styles.rate.color} style={styles.rate} name='star'/>
                <Text style={styles.id} category="h6">
                    {rate.toFixed(1)}
                </Text>
            </View>
        }

        <TouchableOpacity style={styles.filterIcon} onPress={() => setFilterAvailable(!filterAvailable)}>
            <Icon fill='#FFB900' name={filterAvailable ? 'funnel' : 'funnel-outline'}/>
        </TouchableOpacity>
        {filterAvailable && 
            <CustomInput 
            placeholder="ex: CryptoPunks 3391" 
            label="Search by name"
            value={filter} 
            onChange={(value) => setFilter(value)}
        />}
        <Text category="h6"> Artworks </Text>
    </View>
  )
}
