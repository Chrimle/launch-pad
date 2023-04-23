import {useState} from 'react';
import styles from './styles.js';

export default function HorizontalLinkButton({image, altText, text, url}) {

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
            <img style={styles.icon} src={image} alt={altText}/>
            <text style={isHover ? {...styles.text, ...styles.textHover} : styles.text}>{text}</text>
        </a>
    );
  }
