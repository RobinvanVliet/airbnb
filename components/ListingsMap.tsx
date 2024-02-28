import React from "react"
import { View, StyleSheet } from "react-native"
import MapView, { Marker} from "react-native-maps";
import { defaultStyles } from "@/constants/Styles";
import { ListingGeo } from "@/interfaces/listingGeo";


import { PROVIDER_GOOGLE } from "react-native-maps/lib/ProviderConstants";
import { useRouter } from "expo-router";

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 37.33,
  longitude: -122,
  latitudeDelta: 9,
  longitudeDelta: 9,
};

const ListingsMap = ({listings}: Props) => {  
  const router = useRouter();

  const onMarkerSelected = (item: ListingGeo) => {
    router.push(`/listing/${item.properties.id}`);
  }

  return (
    <View style={[defaultStyles.container, {marginTop: 50}]}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject} 
        showsUserLocation 
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
      >
        {listings.features.map((item: ListingGeo) => (
          <Marker 
            onPress={() => onMarkerSelected(item)}
            key={item.properties.id}
            coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude
            }}
          >
          </Marker>
        ))}
        
      </MapView>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
});

export default ListingsMap;
