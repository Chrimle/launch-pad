import { View, Text } from "react-native-web";
import styles from "./NotFound.styles.js";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFound() {
    const [seconds, setSeconds] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        setInterval(() => setSeconds(seconds - 1), 1000)
        if (seconds <= 0) {
            navigate("/");
        }
    })

    return <View style={styles.container}>
        <Text style={styles.text}>Page Not Found</Text>
        <Text style={styles.descriptionText}>Not quite sure how You got here...</Text>
        <Text style={styles.descriptionText}>Redirecting You to the Home-page in {seconds} seconds...</Text>
    </View>
}