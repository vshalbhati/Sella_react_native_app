import {useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ActivityIndicatorBase, TextInput, Button, Image } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES} from '../../../constants';

const jobTypes =["Cement","Karesar","Rodi","Patthar","Concrete"];


const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Cement');
  const isLoading=false;
  const error = false;

  const [query, setQuery] = useState('');
  const [songs, setSongs] = useState([]);

  const searchSongs = async () => {
    try {
      const response = await fetch(`https://shazam.p.rapidapi.com/search?term=${query}`, {
        headers: {
          'x-rapidapi-host': 'shazam.p.rapidapi.com',
          'x-rapidapi-key': '214e8ae2c7msh30ed631ddab79dcp1bf6a4jsn61fe676cb1cc'
        }
      });
      const data = await response.json();
      setSongs(data.tracks.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello BRO!</Text>
        <Text style={styles.welcomeMessage}>Find your seller</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            onChangeText={text => setQuery(text)}
            value={query}
            placeholder="what are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={searchSongs}>
          <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
        data={jobTypes}
        renderItem={({ item}) =>(
          <TouchableOpacity
          style={styles.tab(activeJobType, item)} 
          onPress={()=>{
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}
          >
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        />
              <FlatList
        data={songs}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={{ uri: item.track.images.coverart }}
              style={{ width: 50, height: 50 }}
            />
            <Text>{item.track.title}</Text>
          </View>
        )}
        keyExtractor={item => item.track.key}
        horizontal
      />
      </View>
    </View>
  )
}

export default Welcome