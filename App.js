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
import printer from 'react-native-honeywell-printer-rp4a';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            printer.tagSize(400);

            /*             printer.text(250, 175, 'Batata | ', 50);
            printer.text(425, 175, 'R$3,00', 50);
            printer.text(250, 225, 'Refrigereante | ', 50);
            printer.text(625, 225, 'R$4,50', 50);
 */ printer.barCode(
              300,
              100,
              1234567,
            );

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
