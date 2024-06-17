import { Text, View } from 'react-native';
import SocialMedia from './SocialMedia';
import styles from './styles/SocialMediaLinksStyles';
import theme from '../../../../theme';
import SocialMediaButton from './SocialMediaButton';

export default function SocialMediaLinks() {
  return <View style={styles.container}>
    <Text style={styles.header}>Other <text style={{ color: theme.PRIMARY_COLOR }}>Verified</text> Socials</Text>
    <View style={styles.buttonsContainer}>
      {SocialMedia().map(socialMediaLink =>
        <SocialMediaButton text={socialMediaLink.text} url={socialMediaLink.url} hoverText={socialMediaLink.hoverText} />
      )}
    </View>
  </View>
}