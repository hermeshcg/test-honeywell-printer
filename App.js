/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import printer from 'react-native-honeywell-printer-rp4a';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            printer.tagSize(100);

            /*  printer.barCode(10, 100, 1234567); */
            printer.text(125, 175, 'teste', 50);
            console.log(printer.showCode());

            printer.bluetoothShow().then(res => console.log(res));

            printer.printerCode();
          }}>
          <Text>Teste</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#000000',
  },
  button: {
    color: '#fff',
    backgroundColor: '#ccff00',
    padding: 16,
    borderRadius: 8,
  },
});

export default App;
