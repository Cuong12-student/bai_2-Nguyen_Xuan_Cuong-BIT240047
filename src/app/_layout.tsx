import { DarkTheme, DefaultTheme, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { Stack } from "expo-router";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }}>
        {/* Màn hình chính chứa các tab (đóng vai trò là Screen 1) */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="explore" options={{ headerShown: false }} />
        {/* Màn hình Screen 2 */}
        <Stack.Screen name="screen2" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
