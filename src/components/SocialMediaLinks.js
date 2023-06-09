import {View} from 'react-native';
import TextLinkButton from './buttons/TextLinkButton';
import theme from '../theme';

const socialMediaLinks = [
    { text: "YouTube", url: "https://www.youtube.com/@Schrimle/featured" },
    { text: "Twitter", url: "https://twitter.com/Chrimle" },
    { text: "Instagram", url: "https://www.instagram.com/chrimle/" },
  ];


export default function SocialMediaLinks() {
    
    return <View style={{marginTop:'50px'}}>
      <text style={{fontStyle:'italic'}}>
        <text>Other </text>
        <text style={{color:theme.PRIMARY_COLOR}}>Verified</text>
        <text> Socials</text>
      </text>
      
      <View style={{flexDirection:'row'}}>
        {socialMediaLinks.map(socialMediaLink =>
            <TextLinkButton text={socialMediaLink.text} url={socialMediaLink.url} />
          )}
      </View>
    </View>
  }