import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Image,
  ScrollView,
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

const SecondScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F5F5F6",
        justifyContent: "flex-start",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        paddingLeft: insets.left,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
          height: RFValue(60),
          position: "relative",
        }}
      >
        <View
          style={{
            width: RFValue(300),
            height: RFValue(50),
            justifyContent: "space-between",
            borderRadius: RFValue(70),
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: RFValue(20),
            marginHorizontal: RFValue(20),

            position: "relative",
          }}
        >
          <TextInput
            placeholder="Search for car"
            placeholderTextColor="black"
            style={{
              flex: 1,
              marginLeft: RFValue(10),
              fontSize: RFValue(14),
            }}
          />
          <TouchableOpacity>
            <FontAwesome name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: RFValue(20) }}
        style={{ marginTop: RFValue(40), height: "30%" }}
      >
        <View
          style={{
            flexDirection: "row",
            height: "35%",
            marginTop: RFValue(40),
          }}
        >
          <View
            style={{
              height: "100%",
              width: RFValue(150),
              backgroundColor: "#304FFE",
              position: "relative",
              marginLeft: RFValue(20),
              borderRadius: RFValue(20),
            }}
          >
            <Image
              source={require("../../assets/images/image 6.png")}
              style={{
                height: "60%",
                width: RFValue(150),
                resizeMode: "cover",
                right: RFValue(30),
                position: "absolute",
              }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                justifyContent: "flex-start",
                position: "absolute",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: RFValue(14),
                  fontFamily: "Poppins",
                }}
              >
                {" "}
                Standard
              </Text>
              <Text
                style={{
                  color: "white",
                  marginLeft: RFValue(15),
                  fontSize: RFValue(14),
                  fontFamily: "Poppins",
                }}
              >
                56
              </Text>
            </View>
          </View>
          <View
            style={{
              height: "100%",
              width: RFValue(150),
              backgroundColor: "#FFFFFF",
              position: "relative",
              marginLeft: RFValue(50),
              borderRadius: RFValue(20),
            }}
          >
            <Image
              source={require("../../assets/images/prestige.png")}
              style={{
                height: "60%",
                width: RFValue(150),
                resizeMode: "cover",
                right: RFValue(30),
                position: "absolute",
              }}
            />
          </View>

          <View
            style={{
              height: "100%",
              width: RFValue(150),
              backgroundColor: "#FFFFFF",
              position: "relative",
              marginLeft: RFValue(50),
              borderRadius: RFValue(20),
            }}
          >
            <Image
              source={require("../../assets/images/suv.png")}
              style={{
                height: "60%",
                width: RFValue(150),
                resizeMode: "cover",
                marginTop: RFValue(20),
                right: RFValue(40),
                position: "absolute",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SecondScreen;
