import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
      <ActivityIndicator color="#2A9F85" />
    </View>
  );
}
