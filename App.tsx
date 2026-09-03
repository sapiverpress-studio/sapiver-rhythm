import { Asset } from "expo-asset";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const trainerModule = require("./assets/rhythm-trainer.html");

export default function App() {
  const [trainerUri, setTrainerUri] = useState<string | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    Asset.fromModule(trainerModule)
      .downloadAsync()
      .then((asset) => {
        if (!active) return;
        const uri = asset.localUri ?? asset.uri;
        if (!uri.startsWith("file://")) {
          throw new Error(`Expected a local trainer file, received ${uri}`);
        }
        setTrainerUri(uri);
      })
      .catch((error: unknown) => {
        if (active) {
          setLoadError(
            error instanceof Error ? error.message : "Unable to load the trainer",
          );
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
        {trainerUri ? (
          <WebView
            source={{ uri: trainerUri }}
            style={styles.webview}
            originWhitelist={["file://*"]}
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
        ) : (
          <View style={styles.loading}>
            {loadError ? (
              <Text style={styles.errorText}>Unable to open Sapiver Rhythm: {loadError}</Text>
            ) : (
              <ActivityIndicator size="large" color="#6d35df" />
            )}
          </View>
        )}
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
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f6fc",
  },
  errorText: {
    maxWidth: 320,
    padding: 24,
    color: "#11152f",
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
  },
});
