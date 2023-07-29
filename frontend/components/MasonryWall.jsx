import { View, FlatList, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import MediaCard from './MediaCard'; 


const MasonryList = ({posts}) => {

  const renderMediaCard = ({ item }) => {
    return <MediaCard post={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post._id}
        numColumns={2} 
        renderItem={renderMediaCard}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default MasonryList;
