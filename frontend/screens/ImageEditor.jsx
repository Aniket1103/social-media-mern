import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";

export default function ImageEditor({ route }) {
  console.log("ImageEditor route", route);

  const [aspectRatio, setAspectRatio] = useState([1,1]);
  const navigation = useNavigation();

  const OPTIONS = [
    [1, 1],
    [4, 5],
    [16, 9],
  ];

  function getRatio([wt, ht], size){
    switch(`${wt}:${ht}`){
      case "1:1": 
        return {w: size*50, h: size*50}
      case "16:9": 
        if(size > 2) {
          return {w: size*64, h: size*36}
        }
        return {w: size*48, h: size*27}
      case "4:5":
        return {w: size*40, h: size*50}
      default: 
        return {w: size*50, h: size*50}
    }
  }

  return (
    <ScreenWrapper>
      <Header />
      <View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: route.params.image }} style={styles.image(getRatio(aspectRatio, 4.6))} />
        </View>
        <View style={styles.aspectRatioOptions}>
          <Text
            style={{
              margin: 5,
              fontSize: 15,
              color: "grey",
              fontWeight: "bold",
            }}
          >
            Aspect Ratio
          </Text>
          <View style={styles.optionsContainer}>
            {OPTIONS.map((option, i) => {
              return (
                <TouchableOpacity key={i} style={styles.optionBtn} onPress={() => setAspectRatio(option)}>
                  <View style={styles.optionShape(getRatio(option, 1))} />
                  <Text style={{color: "grey", fontWeight: "bold", margin: 1}}>
                    {option[0]}:{option[1]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View
          style={{justifyContent: "center", alignItems: "center"}}
        >
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("PostCreator", {aspectRatio, uri: route.params.image})}>
            <Text style={{color: "#fff", fontSize: 15, fontWeight: "bold"}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 300,
    backgroundColor: "#eaeaea",
  },
  image: ({w, h}) => ({
    width: w,
    height: h,
    borderRadius: 13,
  }),
  aspectRatioOptions: {
    alignItems: "center",
    backgroundColor: "#eaeaea",
    height: 150,
    marginVertical: 50,
  },
  optionsContainer: {
    flexDirection: "row",
    margin: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#00ccff"
  },
  optionBtn: {
    margin: 2,
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  optionShape: ({w, h}) => ({
    borderWidth: 2,
    borderColor: "#D3D3D3",
    backgroundColor: "#FFF",
    borderRadius: 5,
    width: w,
    height: h,
  }),
});
