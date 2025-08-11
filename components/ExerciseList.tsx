import { ExerciseType } from "@/constants";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

interface ExerciseListProps {
  data: ExerciseType | any;
}

const ExerciseList: React.FC<ExerciseListProps> = ({ data }) => {
  const router = useRouter();

  return (
    <FlatList
      data={data}
      numColumns={2}
      keyExtractor={(item) => item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 50,
        paddingTop: 20,
        gap: 20,
      }}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      renderItem={({ item, index }) => (
        <ExerciseCard item={item} index={index} router={router} />
      )}
    />
  );
};

export default ExerciseList;

interface ExerciseCardProps {
  item: ExerciseType;
  index: number;
  router: any;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ item, index, router }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(300)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        onPress={() =>
          router.push({ pathname: "/exerciseDetails", params: item })
        }
        className="flex py-3 space-y-2"
      >
        <Image
          source={{
            uri: item.gifUrl,
          }}
          resizeMode="cover"
          className="w-40 h-40 rounded-lg"
        />

        <Text className="text-base font-semibold">
          {" "}
          {item.name?.length > 20
            ? item.name.slice(0, 20) + "..."
            : item.name}{" "}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
