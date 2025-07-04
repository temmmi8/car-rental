import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
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

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require("../../assets/images/background.png")}
      resizeMode="cover"
      style={{
        alignItems: "center",
        flex: 1,
      }}
    >
      <LinearGradient
        colors={[
          "rgb(59, 6, 250)",
          "rgba(55, 82, 244, 0.6)",
          "rgba(51, 32, 219, 0.86)",
        ]}
        style={{ flex: 1 }}
      >
        <SafeAreaView
          style={{
            flex: 1,
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
                  Forgot Password
                </Text>
              </TouchableOpacity>
              <Button
                onPress={() => {
                  router.navigate("/explore");
                }}
                text={"LOG IN"}
                style={{ alignItems: "center" }}
              />
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default HomeScreen;
