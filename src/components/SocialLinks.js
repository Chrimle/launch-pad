import {View} from 'react-native';
import linkedin from '../images/logo-linkedin.png';
import github from '../images/logo-github-white.svg';
import stackoverflow from '../images/stackoverflow.svg';
import codingame from '../images/logo-codingame-white.png';
import hoverCodingame from '../images/logo-codingame-black.png';
import hackerrank from '../images/hackerrank.svg';
import HorizontalLinkButton from './buttons/HorizontalLinkButton';

const socialLinks = [
    { image: linkedin, altText: "Link to my LinkedIn-page.", text: "LinkedIn", url: "https://linkedin.com/in/chrimle"},
    { image: github, altText: "Link to my GitHub-page.", text: "GitHub", url: "https://github.com/chrimle"},
    { image: stackoverflow, altText: "Link to my StackOverflow-page.", text: "StackOverflow", url: "https://stackoverflow.com/users/5424535/chrimle"},
  { image: codingame, hoverImage: hoverCodingame, altText: "Link to my Codingame-page.", url: "https://www.codingame.com/profile/a77d3f05e778f45ddc96b8c5693bdf913730442" },
    { image: hackerrank, altText: "Link to my HackerRank-page.", text: "HackerRank", url: "https://www.hackerrank.com/Chrimle"},
  ];


export default function SocialLinks() {
    
    return <View>
      {socialLinks.map(socialLink =>
        <HorizontalLinkButton image={socialLink.image} hoverImage={socialLink.hoverImage} text={socialLink.text} altText={socialLink.altText} url={socialLink.url} />
        )}
    </View>
  }