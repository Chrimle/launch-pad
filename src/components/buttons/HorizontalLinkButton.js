import { useState } from 'react';
import styles from './StylesHorizontalLinkButton.js';

export default function HorizontalLinkButton({ image, hoverImage, altText, text, url }) {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <a
            style={isHover ? { ...styles.container, ...styles.containerHover } : styles.container}
            href={url}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img style={text != null ? styles.icon : { maxWidth: '250px' }} src={isHover && hoverImage != null ? hoverImage : image} alt={altText} />
            {text != null && <text style={isHover ? { ...styles.text, ...styles.textHover } : styles.text}>{text}</text>}
        </a>
    );
}
