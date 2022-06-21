import 'expo-dev-client'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text } from '@xi/design-system.text'
import { useColor } from '@xi/design-system.theme'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'

// export { default } from './.storybook/.ondevice/Storybook'

const Stack = createNativeStackNavigator()

const HomeScreen = () => {
  const color = useColor()

  return (
    <View style={[styles.container, { backgroundColor: color.background.default }]}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
