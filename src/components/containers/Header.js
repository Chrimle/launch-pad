import { View } from "react-native-web";
import Title from "./domains/headers/Title";
import SubTitle from "./domains/headers/SubTitle";
import styles from "./Header.styles";


export default function Header() {
    return <View style={styles.container}>
        <Title />
        <SubTitle />
    </View>
}