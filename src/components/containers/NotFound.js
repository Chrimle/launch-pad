import { View, Text } from "react-native-web";
import styles from "./NotFound.styles.js";

export default function NotFound() {
    return <View style={styles.container}>
        <Text style={styles.text}>Page Not Found</Text>
        <Text style={styles.descriptionText}>Not quite sure how You got here...</Text>
    </View>
}