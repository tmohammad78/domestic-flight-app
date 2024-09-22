# Domestic Flight App

This is simple App, to test micro frontend multi repo with native federation.

We are exposing our application like this:

```
module.exports = withNativeFederation({
  name: "domestic",
  exposes: {
    "./domesticFlight": "./src/app.tsx",
    "./flightUtils": "./src/utils.tsx"
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      includeSecondaries: false,
    }),
  },
});

```

We are using this micro app in the our host/container/shell/fragment.
This is the Host application: https://github.com/tmohammad78/mfe-native-federation