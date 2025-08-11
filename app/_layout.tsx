import { Stack } from "expo-router";
import "../globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="exercises"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
