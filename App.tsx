import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const trainer = require("./assets/rhythm-trainer.html");

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
        <WebView
          source={trainer}
          style={styles.webview}
          originWhitelist={["*"]}
          javaScriptEnabled
          domStorageEnabled
          allowFileAccess
          allowFileAccessFromFileURLs
          mediaPlaybackRequiresUserAction={false}
          overScrollMode="never"
          bounces={false}
          setSupportMultipleWindows={false}
          androidLayerType="hardware"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#090b25",
  },
  webview: {
    flex: 1,
    backgroundColor: "#f5f6fc",
  },
});
