import { Asset } from "expo-asset";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Linking,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";
import { WebView } from "react-native-webview";

const trainerModule = require("./assets/rhythm-trainer.html");
const privacyUrl = "https://suite.sapiverpress.co.uk/app/sapiver-rhythm/privacy/";

const privacyLinkScript = `
(() => {
  const head = document.querySelector('.sheet-head');
  const close = document.getElementById('close');
  if (!head || !close || document.getElementById('sapiverPrivacyLink')) return;

  const button = document.createElement('button');
  button.id = 'sapiverPrivacyLink';
  button.type = 'button';
  button.textContent = 'Privacy';
  button.setAttribute('aria-label', 'Open Sapiver Rhythm privacy policy');
  button.style.marginLeft = 'auto';
  button.style.border = '1px solid #dce0eb';
  button.style.borderRadius = '999px';
  button.style.background = '#fff';
  button.style.color = '#6336d8';
  button.style.padding = '8px 11px';
  button.style.fontWeight = '750';
  close.style.marginLeft = '8px';

  button.addEventListener('click', () => {
    window.ReactNativeWebView?.postMessage('open-privacy');
  });

  head.insertBefore(button, close);
})();
true;
`;

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
            injectedJavaScript={privacyLinkScript}
            onMessage={(event) => {
              if (event.nativeEvent.data === "open-privacy") {
                void Linking.openURL(privacyUrl).catch(() => undefined);
              }
            }}
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
