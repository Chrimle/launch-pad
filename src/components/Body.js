import { View } from "react-native-web";
import Description from './Description';
import SocialLinks from './containers/domains/socials/SocialLinks';
import SocialMediaLinks from './containers/domains/social-media/SocialMediaLinks';

export default function Body() {
    return <View>
        <Description />
        <SocialLinks />
        <SocialMediaLinks />
    </View>
}