import "../globals.css";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-end">
      <Image
        source={require("../assets/images/welcome.jpg")}
        className="w-full h-full absolute"
        resizeMode="cover"
      />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: "100%", height: "25%" }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12"
      >
        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          className="flex items-center my-6"
        >
          <Text className="text-white text-4xl font-bold text-center">
            Best <Text className="text-[#ff004b]">Workouts</Text>
          </Text>
          <Text className="text-white text-4xl font-bold text-center">
            For You
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="bg-[#ff004b] mx-auto w-1/2 flex items-center justify-center py-4 px-2 rounded-full"
          >
            <Text className="text-white text-lg font-bold">LET'S GO</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
      <StatusBar style="dark" />
    </View>
  );
}
