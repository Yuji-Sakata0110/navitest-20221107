import * as React from 'react';
import { Button, View, Text } from 'react-native';

function SignUpScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sign Up Screen</Text>
            <Button
                title="Go to home"
                onPress={() =>
                    navigation.navigate('Home')
                }
            />
        </View>
    );
}

export default SignUpScreen;