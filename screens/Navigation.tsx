import * as React from 'react';
import { Button, View, Text } from 'react-native';
// navi navigation system import
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from './SignUpScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

// 各NativeOsのナビゲーションシステムを呼び出して利用できるようにする。
const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Welcom"
                onPress={() => { navigation.navigate('Welcome') }}
            />
        </View>
    );
}

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='SignIn' component={SignInScreen} />
                <Stack.Screen name='SignUp' component={SignUpScreen} />
                <Stack.Screen name='Welcome' component={WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;