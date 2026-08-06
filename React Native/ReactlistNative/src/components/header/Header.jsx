import { Text, View } from "react-native-web"
import { Styles } from "./Styles"

export const Header = () => {
    return (
        <View style={Styles.header}>
            <Text style={Styles.headerTitle}>React List</Text>
        </View>
    )
}