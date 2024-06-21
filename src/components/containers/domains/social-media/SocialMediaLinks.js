import { Text, View } from 'react-native';
import SocialMedias from './assets/SocialMedias.json';
import styles from './SocialMediaLinks.styles';
import SocialMediaButton from './SocialMediaButton';

export default function SocialMediaLinks() {
  return <View style={styles.container}>
    <Text style={styles.header}>Other <text style={styles.highlightedText}>Verified</text> Socials</Text>
    <View style={styles.buttonsContainer}>
      {SocialMedias.map(socialMedia =>
        <SocialMediaButton text={socialMedia.text} url={socialMedia.url} hoverText={socialMedia.hoverText} />
      )}
    </View>
  </View>
}