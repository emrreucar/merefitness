import { bodyParts } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  PixelRatio,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const GAP = 12; // kartlar arası boşluk
const PADDING_H = 0; // yatay padding

const BodyParts = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const available = width - insets.left - insets.right - PADDING_H * 2 - GAP;

  const CARD_WIDTH = PixelRatio.roundToNearestPixel(available / 2);

  return (
    <View>
      <Text className="text-3xl font-bold">Exercises</Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 50,
          paddingHorizontal: PADDING_H,
        }}
        columnWrapperStyle={{ gap: GAP }}
        renderItem={({ item, index }) => (
          <BodyPartCard
            item={item}
            index={index}
            router={router}
            cardWidth={CARD_WIDTH}
          />
        )}
      />
    </View>
  );
};

export default BodyParts;

type CardProps = {
  item: { name: string; image: any };
  router: ReturnType<typeof useRouter>;
  index: number;
  cardWidth: number;
};

const BodyPartCard = ({ item, index, router, cardWidth }: CardProps) => {
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 120)
        .springify()
        .damping(12)}
      style={{ width: cardWidth }}
      className="mb-3"
    >
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        className="h-[190px] rounded-3xl overflow-hidden justify-end"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          className="absolute inset-0 w-full h-full"
        />

        <LinearGradient
          colors={["transparent", "#18181b"]}
          className="absolute left-0 right-0 bottom-0 h-[40%]"
        />

        <Text className="text-white text-lg font-semibold text-center py-2">
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
