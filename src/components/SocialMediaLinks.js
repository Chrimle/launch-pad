import {View} from 'react-native';
import TextLinkButton from './buttons/TextLinkButton';

const socialMediaLinks = [
    { text: "YouTube", url: "https://www.youtube.com/@Schrimle/featured" },
    { text: "Twitter", url: "https://twitter.com/Chrimle" },
    { text: "Instagram", url: "https://www.instagram.com/chrimle/" },
  ];


export default function SocialMediaLinks() {
    
    return <View style={{marginTop:'50px'}}>
      <text>Other Socials</text>
      <View style={{flexDirection:'row'}}>
        {socialMediaLinks.map(socialMediaLink =>
            <TextLinkButton text={socialMediaLink.text} url={socialMediaLink.url} />
          )}
      </View>
    </View>
  }