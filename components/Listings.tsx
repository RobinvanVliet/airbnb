import { defaultStyles } from "@/constants/Styles";
import { Listing } from "@/interfaces/listings";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react"
import { Button, FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import Animated, { FadeInRight, FadeOutLeft, Easing } from 'react-native-reanimated';


interface Props {
  listings: any[];
  category: string;
}

const Listings = ({listings: items, category}: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);
  
  useEffect(()=>{
    console.log('RELOAD LISTINGS', items.length);

    setTimeout(()=>{
      setLoading(false);
    }, 200)
  },[category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        {/* <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}> */}
        <Animated.View style={styles.listing} entering={FadeInRight}>
          <Animated.Image source={{ uri: item.medium_url }} style={styles.image} />
          <TouchableOpacity style={{ position: 'absolute', right: 30, top: 30 }}>
            <Ionicons name="heart-outline" size={24} color="#000" />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontFamily: 'mon-sb' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Ionicons name="star" size={16} />
              <Text style={{ fontFamily: 'mon-sb' }}>{item.review_scores_rating / 20}</Text>
            </View>
          </View>
          <Text style={{ fontFamily: 'mon' }}>{item.room_type}</Text>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Text style={{ fontFamily: 'mon-sb' }}>€ {item.price}</Text>
            <Text style={{ fontFamily: 'mon' }}>night</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  )

  return (
    <View style={[defaultStyles.container, { marginTop: 20 }]}>
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : items}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  listing: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 20,
  }
});

export default Listings;
