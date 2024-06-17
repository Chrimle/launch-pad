import { View } from "react-native-web";
import Description from './domains/bodies/Description';
import SocialLinks from './domains/socials/SocialLinks';
import SocialMediaLinks from './domains/social-media/SocialMediaLinks';

export default function Body() {
    return <View>
        <Description />
        <SocialLinks />
        <SocialMediaLinks />
    </View>
}