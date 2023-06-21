import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, images, SIZES } from "../../../constants";
import ScreenHeaderBtn from "../../common/header/ScreenHeaderBtn";

const jobTypes = ["Full-time", "Part-time", "Intern"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.userName}>Hello Candidate</Text>
          <Text style={styles.welcomeMessage}>Find your perfect job</Text>
        </View>
        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you Looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ justifyContent:"space-between",width:"100%",paddingHorizontal:10 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
