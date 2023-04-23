import {View} from 'react-native';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import stackoverflow from '../images/stackoverflow.svg';
import HorizontalLinkButton from './buttons/HorizontalLinkButton';

const socialLinks = [
    { image: linkedin, altText: "Link to my LinkedIn-page.", text: "LinkedIn", url: "https://linkedin.com/in/chrimle"},
    { image: github, altText: "Link to my GitHub-page.", text: "GitHub", url: "https://github.com/chrimle"},
    { image: stackoverflow, altText: "Link to my StackOverflow-page.", text: "StackOverflow", url: "https://stackoverflow.com/users/5424535/chrimle"},
  ];


export default function SocialLinks() {
    
    return <View>
      {socialLinks.map(socialLink =>
          <HorizontalLinkButton image={socialLink.image} text={socialLink.text} altText={socialLink.altText} url={socialLink.url}/>
        )}
    </View>
  }