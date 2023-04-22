import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl, Image, StyleSheet} from 'react-native';
import {Stack, useRouter, useSearchParams} from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useCallback, useState } from 'react';
import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics} from '../../components';
import {COLORS, icons, SIZES} from '../../constants';
import useFetch from '../../hook/useFetch';

const SellerDetails = () => {
    const params= useSearchParams();
    const router = useRouter();
    const [index, setIndex] = useState(params.id);
    const { data, isLoading, error, refetch} = useFetch(`job-details/${index}`, {});
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      refetch()
      setRefreshing(false)
    }, []);
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
        options={{
            headerStyle:{backgroundColor: COLORS.lightWhite},
            headerShadowVisible:false,
            headerBackVisible:false,
            headerLeft:()=>(
                <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => router.back()}
                />
            ),
            headerRight:()=>(
                <ScreenHeaderBtn
                iconUrl={icons.share}
                dimension="60%"
                />
            ),
            headerTitle:''
        }}
        />
        <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
            }>
            {isLoading ? (
                <ActivityIndicator size="large"  color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong baby!</Text>
            ) : data.length ===0 ? (
                <Text>Are bhaiya koi data nahi mila!</Text>
            ) :(
                <View style={{padding: SIZES.medium, paddingBottom:100, flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                {data[index].images && data[index].images.coverart && (
              <Image
                source={{ uri: data[index].images.coverart }}
                style={stylis.image}
              />
            )}
                <Text style={stylis.trackTitle}>{data[index].title}</Text>
                <Text style={stylis.artistName}>{data[index].subtitle}</Text>
                </View>
            )}
            </ScrollView>
        </>
    </SafeAreaView> 
  )
}
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
      width: 200,
      height: 200,
      paddingRight: 50,
      textAlign:'center',
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
      textAlign:'center',
      color: '#222222',
    },
    artistName: {
      fontSize: 16,
      color: '#777777',
      textAlign:'center',

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

export default SellerDetails