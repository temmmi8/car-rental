import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={[style.container]} onPress={onPress}>
      <Text style={style.text}> {text} </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: RFValue(300),
    height: RFValue(50),
    marginTop: RFValue(30),
    borderRadius: RFValue(74),
    marginHorizontal: RFValue(100),
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default Button;
