import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.sese.recebimentos",
  appName: "SESE RECEBIMENTO",
  webDir: "mobile-web",
  server: {
    url: "https://recebimentonline-30fe7.web.app",
    cleartext: false,
    allowNavigation: [
      "recebimentonline-30fe7.web.app",
      "recebimentonline-30fe7.firebaseapp.com",
    ],
  },
  backgroundColor: "#07111c",
  android: {
    backgroundColor: "#07111c",
    allowMixedContent: false,
  },
  ios: {
    backgroundColor: "#07111c",
    contentInset: "automatic",
    scrollEnabled: true,
  },
};

export default config;
