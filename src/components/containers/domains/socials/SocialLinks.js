import { View } from 'react-native';
import HorizontalLinkButton from '../../../buttons/HorizontalLinkButton';
import Socials from './Socials';

export default function SocialLinks() {

  return <View>
    {Socials().map(social =>
      <HorizontalLinkButton image={social.lightImage} hoverImage={social.darkImage} title={social.title} url={social.url} />
    )}
  </View>
}