import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Octicons";

import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Header({route}) {
  const navigation = useNavigation();
  console.log("route", route)
  return (
    <View>
        <ScrollView >
          <SafeAreaView >
            <View style={styles.header}>
              {/* <Text style={styles.heading}>
                Highon
              </Text> */}
              <View style={{flex: 1, width: 200, height: 40}}>
                <Image style={styles.icon} source={{uri : "https://ci3.googleusercontent.com/mail-sig/AIorK4yLVkJ-qzIPwBPdxNKbBdHHs6kRs0zsyRnuS3k8UUz7S21YxkmOXdzCxwJ0n_4cYTBWJ7OpMD0"}} />
              </View>

              <TouchableOpacity
                style={styles.Btn}
                onPress={() => navigation.navigate('camera', {action: "createPost"})}
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
  icon : {
    width: 81,
    height: 39,
    marginLeft: 21
    // resizeMode: "cover"
    // zIndex:2

  },
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
    alignItems: "center",
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