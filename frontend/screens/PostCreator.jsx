import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ScreenWrapper from "../components/ScreenWrapper";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import LocationIcon from "react-native-vector-icons/MaterialIcons";

export default function PostCreator({ route }) {
  const { aspectRatio, uri } = route.params;
  console.log(route);
  const navigation = useNavigation();

  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState("");

  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleRemoveLocation = () => {
    setLocation("");
  };

  const createPost = () => {
    if (tags.length < 1) return alert("Atleast 1 tag is required");
    const body = {
      description,
      tags,
      location
    }
    console.log(body);
  };

  return (
    <ScreenWrapper>
      <Header />
      <View style={styles.container}>
        <View style={styles.imageContainer(aspectRatio[0] / aspectRatio[1])}>
          {/* Miniature version of the image */}
          <Image source={{ uri }} style={styles.image} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.fieldTitle}>Description</Text>
          <TextInput
            style={styles.inputBox}
            placeholder="Add description to your post..."
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            // textAlignVertical="top"
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              name="tag"
              size={20}
              color="#00ccff"
              style={{ marginTop: -5 }}
            />
            <Text style={styles.fieldTitle}>Tag People</Text>
          </View>
          <View style={styles.tagsContainer}>
            <ScrollView
              horizontal
              contentContainerStyle={styles.tagsScrollView}
            >
              {tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <AntDesign
                    name="minus"
                    size={12}
                    color="#00ccff"
                    style={styles.tagIcon}
                    onPress={() => handleRemoveTag(index)}
                  />
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.tagInputContainer}>
            <TextInput
              style={styles.tagInput}
              placeholder="Add tags..."
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onSubmitEditing={({ nativeEvent: { text } }) =>
                handleAddTag(text)
              }
            />
            {tag !== "" && (
              <AntDesign
                name="close"
                size={12}
                color="#00ccff"
                style={styles.tagIcon}
                onPress={() => setTag("")}
              />
            )}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <LocationIcon
              name="location-on"
              size={24}
              color="#00ccff"
              style={{ marginTop: -5 }}
            />
            <Text style={styles.fieldTitle}>Location</Text>
          </View>
          <View style={styles.tagsContainer}>
            <TextInput
              style={styles.tagInput}
              placeholder="Add location..."
              value={location}
              onChangeText={setLocation}
            />
            {location !== "" && (
              <AntDesign
                name="close"
                size={12}
                color="#00ccff"
                style={styles.tagIcon}
                onPress={handleRemoveLocation}
              />
            )}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={createPost}
          >
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  // Common styles
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#eaeaea",
  },
  fieldTitle: {
    color: "#00ccff",
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 8,
    // marginHorizontal: 5
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputBox: {
    borderWidth: 2,
    borderColor: "#00ccff",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 110,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#00ccff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  // Image container
  imageContainer: (ar) => ({
    width: "25%",
    aspectRatio: ar,
    marginBottom: 10,
    // backgroundColor: '#eaeaea',
  }),
  image: {
    flex: 1,
    borderRadius: 13,
  },
  // Tag input and tags container
  tagsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  tagInputContainer: {
    // marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  tagInput: {
    flex: 1,
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    marginRight: 8,
  },
  tagsScrollView: {
    flexGrow: 1,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "#fff",
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#d3d3d3",
    backgroundColor: "#f5f5f5",
  },
  tagIcon: {
    // backgroundColor: "red",
    // width: 25,
    // height: 25,
    padding: 5,
    // marginRight: 4,
  },
  tagText: {
    color: "#606060",
    fontSize: 12,
  },
});
