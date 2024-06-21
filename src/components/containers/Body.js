import { View } from "react-native-web";
import Description from './domains/bodies/Description';
import SocialLinks from './domains/socials/SocialLinks';
import SocialMediaLinks from './domains/social-media/SocialMediaLinks';
import styles from "./Body.styles";

export default function Body() {
    return <View style={styles.container}>
        <Description />
        <SocialLinks />
        <SocialMediaLinks />
    </View>
}