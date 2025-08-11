import { ImageSliderType, sliderImages } from "@/constants";
import React from "react";
import { FlatList, Image, View } from "react-native";

const ImageSlider = () => {
  return (
    <View className="py-6">
      <FlatList
        data={sliderImages}
        renderItem={({ item }) => <SliderItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default ImageSlider;

const SliderItem = ({ item }: { item: ImageSliderType }) => {
  return (
    <View>
      <Image
        source={item.src as any}
        style={{ width: 300, height: 150 }}
        className="rounded-[25px]"
        resizeMode="cover"
      />
    </View>
  );
};
