import * as React from 'react';
import { Button, View, Text } from 'react-native';

function WelcomeScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcom Screen</Text>
            <Button
                title="Go to Sign in"
                onPress={() =>
                    navigation.navigate('SignIn')
                }
            />
            <Button
                title="Go to SignUp"
                onPress={() =>
                    navigation.navigate('SignUp')
                }
            />
        </View>
    );
}

export default WelcomeScreen;