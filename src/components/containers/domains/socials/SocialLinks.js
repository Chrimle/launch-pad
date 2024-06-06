import { View } from 'react-native';
import HorizontalLinkButton from '../../../buttons/HorizontalLinkButton';
import Socials from './socials';

export default function SocialLinks() {

  return <View>
    {Socials().map(social =>
      <HorizontalLinkButton image={social.image} hoverImage={social.hoverImage} text={social.text} altText={social.altText} url={social.url} />
    )}
  </View>
}