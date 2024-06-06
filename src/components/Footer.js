import { View } from 'react-native';
import styles from './StylesFooter.js';

export default function Footer() {

  return <View style={styles.footer}>
    <text>
      <text>Chrimle </text>
      <text>&copy; {new Date().getFullYear()} </text>
      <text>- All rights reserved</text>
      <br />
      <text style={styles.altText}>This website is original work - see </text>
      <a style={styles.linkText} href='https://github.com/Chrimle/launch-pad' target='_blank' rel="noreferrer">GitHub</a>
    </text>


  </View>
}