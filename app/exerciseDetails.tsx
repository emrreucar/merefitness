import { ExerciseType } from "@/constants";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const exerciseDetails = () => {
  const params: ExerciseType = useLocalSearchParams();
  const router = useRouter();
  console.log("Exercise Details Params:", params);

  return (
    <View>
      <View className="bg-neutral-200 shadow-2xl rounded-b-[40px]">
        <Image
          source={{
            uri: params.gifUrl,
          }}
          className="w-full h-72 rounded-b-[40px]"
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-4 right-4"
      >
        <AntDesign name="closecircle" size={30} color="#f43f5e" />
      </TouchableOpacity>

      {/* details */}
      <ScrollView
        className="flex flex-col gap-4 m-2"
        contentContainerStyle={{
          paddingBottom: 60,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Animated.Text
          entering={FadeInDown.duration(300).delay(100).springify()}
          className="capitalize font-semibold text-2xl"
        >
          {params.name}
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.duration(300).delay(200).springify()}
        >
          Equipment <Text className="font-semibold">{params.equipment}</Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.duration(300).delay(300).springify()}
        >
          Secondary Muscles{" "}
          <Text className="font-semibold"> {params.secondaryMuscles} </Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.duration(300).delay(400).springify()}
        >
          Target <Text className="font-semibold"> {params.target} </Text>
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.duration(300).delay(500).springify()}
          className="text-2xl font-semibold capitalize"
        >
          Instructions
        </Animated.Text>

        {params.instructions
          .split(",")
          .map((instruction: any, index: number) => (
            <Animated.Text
              entering={FadeInDown.duration(300)
                .delay(600 + index * 100)
                .springify()}
              key={index}
            >
              {instruction}
            </Animated.Text>
          ))}
      </ScrollView>
    </View>
  );
};

export default exerciseDetails;
