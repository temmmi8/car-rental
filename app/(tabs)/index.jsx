import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Button from "../../component2/button";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      style={{
        resizeMode: "contain",
        alignItems: "center",
        height: RFValue(641),
        opacity: RFValue(10),
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#3752F4",
          justifyContent: "flex-start",
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        }}
      >
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            marginTop: RFValue(40),
          }}
        >
          <Image
            style={{
              marginTop: RFValue(10),
              height: RFValue(100),
              width: RFValue(122),
              resizeMode: "contain",
            }}
            source={require("../../assets/images/icon.png")}
          />
          <Text
            style={{
              fontSize: RFValue(40),
              fontWeight: "bold",
              color: "white",
            }}
          >
            driveit
          </Text>
          <View
            style={{
              marginTop: RFValue(40),
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <TextInput
              style={{
                backgroundColor: "white",
                width: RFValue(300),
                height: RFValue(50),
                borderRadius: RFValue(74),
                paddingHorizontal: RFValue(30),
                marginHorizontal: RFValue(100),
              }}
            />
            <TextInput
              style={{
                backgroundColor: "white",
                width: RFValue(300),
                height: RFValue(50),
                marginTop: RFValue(30),
                borderRadius: RFValue(74),
                paddingHorizontal: RFValue(30),
                marginHorizontal: RFValue(100),
              }}
            />
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  alignSelf: "center",
                  marginTop: RFValue(10),
                }}
              >
                Forgot Passworddd
              </Text>
            </TouchableOpacity>
            <Button text={"LOG IN"} style={{ alignItems: "center" }} />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
