import { View, Text } from 'react-native';
import Socials from './assets/Socials.json';
import styles from './SocialLinks.styles';
import SocialButton from './SocialButton';

export default function SocialLinks() {

  return <View style={styles.container}>
    <Text style={styles.header}>My Socials</Text>
    <View style={styles.buttonsContainer}>
      {Socials.map(social =>
        <SocialButton image={social.lightImage} hoverImage={social.darkImage} title={social.title} url={social.url} />
      )}
    </View>
  </View>
}