import { View, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, images, SIZES } from "../constants";
import GetStarted from "../components/onboarding/GetStarted";

const Home = () => {
  const router = useRouter();

  const handleOnPress = () => {
    router.replace("homepage");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#F3F5F9" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <View
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F3F5F9",
        }}
      >
        <Image
          source={images.onboarding}
          resizeMode="contain"
          style={{ width: "90%", height: "60%" }}
        />
        <GetStarted handleOnPress={handleOnPress} />
      </View>
    </SafeAreaView>
  );
};
export default Home;
