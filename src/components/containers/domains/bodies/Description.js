import { View } from 'react-native';
import theme from '../../../../theme';
import styles from './styles/DescriptionStyles';

export default function Description() {

    return <View style={styles.text}>
        <text>Welcome!</text>
        <text>My name is Chris and this is my newly launched website!</text>
        <text><br /></text>
        <text>Here, I will first add all my social links</text>
        <text>(like a linktree if you wish)</text>
        <text>I will then start expanding this page, making it a portfolio.</text>
        <text>Last, but not least, I wish to share and keep the many hobby projects I've worked on in a centralized place.</text>
        <text><br /></text>
        <text>This isn't much, but I've got to start somewhere!</text>
        <text style={{ color: theme.PRIMARY_COLOR }}>Cheers, <br /> Christopher Molin</text>
    </View>
}