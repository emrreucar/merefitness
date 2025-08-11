import BodyParts from "@/components/BodyParts";
import ImageSlider from "@/components/ImageSlider";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomePage = () => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-white space-y-5 px-5">
      {/* Header Start */}
      <View className="flex-row items-start justify-between mt-6">
        <View className="flex flex-col gap-2">
          <Text className="text-4xl font-bold">READY TO</Text>
          <Text className="text-4xl font-bold text-[#ff004b]">WORKOUT</Text>
        </View>

        <View className="flex flex-col items-center justify-center gap-3">
          <Image
            source={require("../assets/images/avatar.png")}
            className="w-16 h-16 rounded-full"
          />

          <View className="bg-gray-300 rounded-full p-2">
            <Ionicons name="notifications-sharp" size={24} color="gray" />
          </View>
        </View>
      </View>
      {/* Header End */}

      <ImageSlider />
      <View className="flex-1 items-center justify-center">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
