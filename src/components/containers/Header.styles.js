import { StyleSheet } from "react-native";
import theme from "../../assets/theme.js";

const styles = StyleSheet.create({
    container: {
        padding: '1em',
        textAlign: 'center',
        backgroundColor: theme.Colors.TERTIARY,
        position: 'sticky',
        top: '0',
        zIndex: '1',
        boxShadow: '0em 0.25em 0.5em 0.1em',
    }
});

export default styles;