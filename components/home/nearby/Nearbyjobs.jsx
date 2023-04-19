import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, ActivityIndicatorBase, TextInput, Button, Image, StyleSheet } from 'react-native'
import {useRouter} from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS, SIZES} from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const Nearbyjobs = () => {
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
            'x-rapidapi-key': '214e8ae2c7msh30ed631ddab79dcp1bf6a4jsn61fe676cb1cc'
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
            <Text style={styles.headerBtn}>Show all</Text>
          </TouchableOpacity>
      </View>

      {/* <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary}/>
        ) : error ?(
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
          data={[1,2,3,4]}
          renderItem={({item})=>(
            <NearbyJobCard
            item={item}
            />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{columnGap:SIZES.medium}}
          horizontal
          />
        )}
      </View> */}

<View style={styles.cardsContainer}>
      <FlatList
        data={chartTracks}
        renderItem={({ item }) => (
          <View style={stylis.item}>
            {item.images && item.images.coverart && (
              <Image
                source={{ uri: item.images.coverart }}
                style={stylis.image}
              />
            )}
            <Text style={stylis.title}>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
        contentContainerStyle={stylis.list}
        horizontal
      />
    </View>
    </View>
  );
};

const stylis = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5FCFF',
    scrollbar: {
      display: 'none'
    }
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
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

export default Nearbyjobs