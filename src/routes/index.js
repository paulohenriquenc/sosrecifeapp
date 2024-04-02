import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome, {} from '../pages/welcome'
import SignIn, {} from '../pages/SignIn'
import About from "../pages/About";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
            />

        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
            />
        
        <Stack.Screen
            name="About"
            component={About}
            options={{ headerShown: false }}
           />
       </Stack.Navigator>

    )
}