import logoLinkedIn from '../../../../assets/images/logo-linkedin-blue.png';
import logoGitHub from '../../../../assets/images/logo-github-white.png';
import logoHoverGitHub from '../../../../assets/images/logo-github-black.png';
import logoStackOverflow from '../../../../assets/images/logo-stackoverflow-white.svg';
import logoHoverStackOverflow from '../../../../assets/images/logo-stackoverflow-black.svg';
import logoCodinGame from '../../../../assets/images/logo-codingame-white.png';
import logoHoverCodinGame from '../../../../assets/images/logo-codingame-black.png';
import logoHackerRank from '../../../../assets/images/logo-hackerrank-white.svg';
import logoHoverHackerRank from '../../../../assets/images/logo-hackerrank-black.svg';

export default function Socials() {

    return [
        {
            title: "My Profile on LinkedIn",
            url: "https://linkedin.com/in/chrimle",
            lightImage: logoLinkedIn,
            darkImage: logoLinkedIn,
        },
        {
            title: "My Profile on GitHub",
            url: "https://github.com/chrimle",
            lightImage: logoGitHub,
            darkImage: logoHoverGitHub,
        },
        {
            title: "My Profile on Stack Overflow",
            url: "https://stackoverflow.com/users/5424535/chrimle",
            lightImage: logoStackOverflow,
            darkImage: logoHoverStackOverflow,
        },
        {
            title: "My Profile on CodinGame",
            url: "https://www.codingame.com/profile/a77d3f05e778f45ddc96b8c5693bdf913730442",
            lightImage: logoCodinGame,
            darkImage: logoHoverCodinGame,
        },
        {
            title: "My Profile on HackerRank",
            url: "https://www.hackerrank.com/Chrimle",
            lightImage: logoHackerRank,
            darkImage: logoHoverHackerRank,
        },
    ];
}