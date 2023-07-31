import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Octicons";

import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
        <ScrollView >
          <SafeAreaView >
            <View style={styles.header}>
              <Text style={styles.heading}>Highon</Text>

              <TouchableOpacity
                style={styles.Btn}
                onPress={() => navigation.navigate('camera')}
              >
                <Icon name="diff-added" size={23} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.Btn}
                // onPress={}
              >
                <Icon name="search" size={23} />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    width: "75%",
    fontSize: 28,
    textAlign: "center",
    // paddingBottom: 5,
    // marginTop: 25,
    // marginBottom: 20,
    // color: "#fff",
    // backgroundColor: "#fb9",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    // paddingVertical: 5,
    backgroundColor: "#fff",
  },
  Btn: {
    // backgroundColor: "#fff",
    // marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    // backgroundColor: "red",
    // width: 30,
    // height: 50,
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 10,
    alignSelf: "center",
    // marginVertical: 20,
    // elevation: 5,
  }
})