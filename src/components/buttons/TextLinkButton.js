import {useState} from 'react';
import styles from './StylesTextLinkButton.js';

export default function TextLinkButton({text, url}) {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };

    return (
        <a 
            style={isHover ? {...styles.container, ...styles.containerHover} : styles.container} 
            href={url}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <text style={isHover ? {...styles.text, ...styles.textHover} : styles.text}>{text}</text>
        </a>
    );
  }
