import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.medium,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 26,
  },
  textContainer: {
    width: "100%",
    textAlign: "left",
  },
  findText: {
    fontFamily: FONT.bold,
    fontSize: 26,
    color: COLORS.primary,
  },
  findSubText: {
    marginTop: SIZES.small,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },

  getStartedBtn: {
    width: "100%",
    backgroundColor: "#FE7654",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
  },
  getStartedBtnText: {
    fontSize: SIZES.medium,
    color: "#FFFFFF",
    fontFamily: FONT.bold,
  },
});

export default styles;
