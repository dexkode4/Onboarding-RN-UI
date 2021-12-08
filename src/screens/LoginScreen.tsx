import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>OnboardingScreen</Text>
      <Button
        title="Click here"
        onPress={() => Alert.alert('button clicked')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
