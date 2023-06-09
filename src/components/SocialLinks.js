import {View} from 'react-native';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';
import stackoverflow from '../images/stackoverflow.svg';
import codingame from '../images/codingame.svg';
import hackerrank from '../images/hackerrank.svg';
import HorizontalLinkButton from './buttons/HorizontalLinkButton';

const socialLinks = [
    { image: linkedin, altText: "Link to my LinkedIn-page.", text: "LinkedIn", url: "https://linkedin.com/in/chrimle"},
    { image: github, altText: "Link to my GitHub-page.", text: "GitHub", url: "https://github.com/chrimle"},
    { image: stackoverflow, altText: "Link to my StackOverflow-page.", text: "StackOverflow", url: "https://stackoverflow.com/users/5424535/chrimle"},
    { image: codingame, altText: "Link to my Codingame-page.", text: "CodinGame", url: "https://www.codingame.com/profile/a77d3f05e778f45ddc96b8c5693bdf913730442"},
    { image: hackerrank, altText: "Link to my HackerRank-page.", text: "HackerRank", url: "https://www.hackerrank.com/Chrimle"},
  ];


export default function SocialLinks() {
    
    return <View>
      {socialLinks.map(socialLink =>
          <HorizontalLinkButton image={socialLink.image} text={socialLink.text} altText={socialLink.altText} url={socialLink.url}/>
        )}
    </View>
  }