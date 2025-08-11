import ExerciseList from "@/components/ExerciseList";
import { BodyPartType, ExerciseType } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ExercisesPage = () => {
  const [exercises, setExercises] = useState({});
  const [loading, setLoading] = useState(true);

  const params: BodyPartType = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    const fetchExercises = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${params.name}`,
          {
            headers: {
              "x-rapidapi-key": String(process.env.EXPO_PUBLIC_RAPID_API_KEY),
              "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            },
          }
        );

        const data: ExerciseType = await response.json();
        setExercises(data);
      } catch (error) {
        console.log("Error fetching exercises:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return (
    <View className="flex-1 bg-white">
      {loading && (
        <View className="absolute left-[47.5%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ActivityIndicator size="small" color="#ff004b" />
        </View>
      )}

      <View>
        <Image
          source={params.image as any}
          className="w-full h-96"
          resizeMode="cover"
        />

        <TouchableOpacity
          className="absolute top-10 left-4 bg-red-500 w-12 h-12 rounded-full flex items-center justify-center"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" color="white" size={25} />
        </TouchableOpacity>

        {/* exercises */}
        <View className="m-6">
          <Text className="text-2xl font-semibold capitalize">
            {params.name} exercises
          </Text>

          <ExerciseList data={exercises} />
        </View>
      </View>
    </View>
  );
};

export default ExercisesPage;
