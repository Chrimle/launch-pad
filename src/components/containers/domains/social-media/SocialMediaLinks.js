import { View } from 'react-native';
import TextLinkButton from '../../../buttons/TextLinkButton';
import theme from '../../../../theme';
import SocialMedia from './SocialMedia';

export default function SocialMediaLinks() {

  return <View style={{ marginTop: '50px' }}>
    <text style={{ fontStyle: 'italic' }}>
      <text>Other</text>
      <text style={{ color: theme.PRIMARY_COLOR }}> Verified </text>
      <text>Socials</text>
    </text>

    <View style={{ flexDirection: 'row' }}>
      {SocialMedia().map(socialMediaLink =>
        <TextLinkButton text={socialMediaLink.text} url={socialMediaLink.url} hoverText={socialMediaLink.hoverText} />
      )}
    </View>
  </View>
}