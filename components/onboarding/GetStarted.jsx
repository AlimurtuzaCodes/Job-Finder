import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Getstarted.style";
const GetStarted = ({handleOnPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.findText}>Find a perfect {"\n"}job match</Text>
        <Text style={styles.findSubText}>
          Finding your dream job is now much easier and faster like never before
        </Text>
      </View>
      <TouchableOpacity style={styles.getStartedBtn} onPress={handleOnPress}>
        <Text style={styles.getStartedBtnText}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetStarted;
