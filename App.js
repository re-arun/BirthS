import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import Counter from './counter';
let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
let payload = epochTimeSeconds + 'some message';

const rnBiometrics = new ReactNativeBiometrics();

rnBiometrics
  .createSignature({
    promptMessage: 'put your finger ',

    payload: payload,
  })
  .then(resultObject => {
    const {success, signature} = resultObject;

    if (success) {
      console.log(signature);
      verifySignatureWithServer(signature, payload);
    }
  });
function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'black'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Counter" component={DetailsScreen} />
        <Stack.Screen name="Home" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({});
