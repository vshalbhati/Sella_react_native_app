import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ActivityIndicatorBase, TextInput, Button, Image, StyleSheet } from 'react-native'
import {useRouter} from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS, SIZES} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

  const Nearbyjobs = ({navigation}) => {
  const router = useRouter();
  const isLoading=false;
  const error = false;

  const [chartTracks, setChartTracks] = useState([]);

  useEffect(() => {
    const fetchChartTracks = async () => {
      try {
        const response = await fetch('https://shazam.p.rapidapi.com/charts/track', {
          headers: {
            'x-rapidapi-host': 'shazam.p.rapidapi.com',
            // 'x-rapidapi-key': '4c281832ccmsh01bafa44beb87fap18e2c5jsn1b8f0b733086'
          }
        });
        const data = await response.json();
        setChartTracks(data.tracks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChartTracks();
  }, []);

  return (
    <View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Sellers</Text>
          <TouchableOpacity>
            <Text style={styles.headerBtn} >Show all</Text>
          </TouchableOpacity>
      </View>

<View style={styles.cardsContainer}>
<FlatList
        data={chartTracks}
        renderItem={({ item }) => (
          <TouchableOpacity
           style={stylis.item}
           onPress={() => router.push(`/job-details/${chartTracks.indexOf(item)}`)}
          >
            {item.images && item.images.coverart && (
              <Image
                source={{ uri: item.images.coverart }}
                style={stylis.image}
              />
            )}
            <View style={stylis.textContainer}>
              <Text style={stylis.trackTitle}>{item.title}</Text>
              <Text style={stylis.artistName}>{item.subtitle}</Text>
            </View>
            <View style={stylis.playButton}>
              <Image source={require("../../../assets/images/play.png")} style={stylis.playIcon} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={stylis.list}
        showsHorizontalScrollIndicator={false}
      />
    </View>
    </View>
  );
};

const stylis = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 16,
    paddingTop: 40,
    overflow: 'hidden',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222222',
  },
  list: {
    columnGap: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 16,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  trackTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222222',
  },
  artistName: {
    fontSize: 16,
    color: '#777777',
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  playIcon: {
    width: 24,
    height: 24,
  },
});

export default Nearbyjobs