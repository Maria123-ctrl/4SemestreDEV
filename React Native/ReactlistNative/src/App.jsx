import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./Styles"
import { Text, View } from "react-native";

function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={Styles.safeArea}>
                <View style={Styles.container}>
                    <Text>My App</Text>
                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}



export default App