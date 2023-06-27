# WeGoWhere Omise Application

## Set-up Omise public and private keys

You need to set your Omise public and private key in order to make the application work:

```sh
cp App/config/omise.config.tsx.sample App/config/omise.config.tsx
```

Then edit the file

```sh
vi App/config/omise.config.tsx
```

## Install node modules and pods

Then you need to install node modules and pods

```sh
npm install && cd ios && pod install && cd ..
```

## Run the application

### On Android

*Ensure your device is recognized by avd or that emulator is running before running the following command*

```sh
npm run android
```

### On iOS

```sh
npm run ios
```