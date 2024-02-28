import React from "react";
import { View, StyleSheet} from 'react-native';

const SafeAreaView = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff'
  }})
export default SafeAreaView;
