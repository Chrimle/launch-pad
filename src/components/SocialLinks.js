import { View } from 'react-native';
import linkedin from '../images/logo-linkedin.png';
import github from '../images/logo-github-white.svg';
import stackoverflow from '../images/logo-stackoverflow-white.svg';
import hoverStackoverflow from '../images/logo-stackoverflow-black.svg';
import codingame from '../images/logo-codingame-white.png';
import hoverCodingame from '../images/logo-codingame-black.png';
import hackerrank from '../images/logo-hackerrank-white.svg';
import hoverHackerrank from '../images/logo-hackerrank-black.svg'
import HorizontalLinkButton from './buttons/HorizontalLinkButton';

const socialLinks = [
  { image: linkedin, altText: "My Profile on LinkedIn", text: "LinkedIn", url: "https://linkedin.com/in/chrimle" },
  { image: github, altText: "My Profile on GitHub", text: "GitHub", url: "https://github.com/chrimle" },
  { image: stackoverflow, hoverImage: hoverStackoverflow, altText: "My Profile on Stack Overflow", url: "https://stackoverflow.com/users/5424535/chrimle" },
  { image: codingame, hoverImage: hoverCodingame, altText: "My Profile on CodinGame", url: "https://www.codingame.com/profile/a77d3f05e778f45ddc96b8c5693bdf913730442" },
  { image: hackerrank, hoverImage: hoverHackerrank, altText: "My Profile on HackerRank", url: "https://www.hackerrank.com/Chrimle" },
];


export default function SocialLinks() {

  return <View>
    {socialLinks.map(socialLink =>
      <HorizontalLinkButton image={socialLink.image} hoverImage={socialLink.hoverImage} text={socialLink.text} altText={socialLink.altText} url={socialLink.url} />
    )}
  </View>
}