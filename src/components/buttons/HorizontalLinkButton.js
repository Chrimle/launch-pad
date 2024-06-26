import { useState } from 'react';
import styles from './HorizontalLinkButton.styles.js';

export default function HorizontalLinkButton({ image, hoverImage, title, url }) {

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
            title={title}
        >
            <img style={{ maxWidth: '250px' }} src={isHover ? hoverImage : image} alt={title} />
        </a>
    );
}
