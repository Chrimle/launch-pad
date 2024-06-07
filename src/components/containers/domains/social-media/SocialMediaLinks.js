import { Text, View } from 'react-native';
import TextLinkButton from '../../../buttons/TextLinkButton';
import theme from '../../../../theme';
import SocialMedia from './SocialMedia';
import styles from './styles/style-SocialMediaLinks';

export default function SocialMediaLinks() {

  return <View style={styles.container}>
    <Text style={styles.header}>Other <text style={{ color: theme.PRIMARY_COLOR }}>Verified</text> Socials</Text>
    <View style={styles.buttonsContainer}>
      {SocialMedia().map(socialMediaLink =>
        <TextLinkButton text={socialMediaLink.text} url={socialMediaLink.url} hoverText={socialMediaLink.hoverText} />
      )}
    </View>
  </View>
}