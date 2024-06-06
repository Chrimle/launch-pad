import logoLinkedIn from '../../../../images/logo-linkedin.png';
import logoGitHub from '../../../../images/logo-github-white.svg';
import logoStackOverflow from '../../../../images/logo-stackoverflow-white.svg';
import logoHoverStackOverflow from '../../../../images/logo-stackoverflow-black.svg';
import logoCodinGame from '../../../../images/logo-codingame-white.png';
import logoHoverCodinGame from '../../../../images/logo-codingame-black.png';
import logoHackerRank from '../../../../images/logo-hackerrank-white.svg';
import logoHoverHackerRank from '../../../../images/logo-hackerrank-black.svg';

export default function Socials() {

    return [
        {
            text: "LinkedIn",
            altText: "My Profile on LinkedIn",
            url: "https://linkedin.com/in/chrimle",
            image: logoLinkedIn,
        },
        {
            text: "GitHub",
            altText: "My Profile on GitHub",
            url: "https://github.com/chrimle",
            image: logoGitHub,
        },
        {
            altText: "My Profile on Stack Overflow",
            url: "https://stackoverflow.com/users/5424535/chrimle",
            image: logoStackOverflow,
            hoverImage: logoHoverStackOverflow,
        },
        {
            altText: "My Profile on CodinGame",
            url: "https://www.codingame.com/profile/a77d3f05e778f45ddc96b8c5693bdf913730442",
            image: logoCodinGame,
            hoverImage: logoHoverCodinGame,
        },
        {
            altText: "My Profile on HackerRank",
            url: "https://www.hackerrank.com/Chrimle",
            image: logoHackerRank,
            hoverImage: logoHoverHackerRank,
        },
    ];
}