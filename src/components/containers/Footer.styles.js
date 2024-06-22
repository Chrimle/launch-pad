import { StyleSheet } from "react-native";
import theme from "../../assets/theme.js";


const styles = StyleSheet.create({
    footer: {
        fontSize: theme.Fonts.Sizes.PARAGRAPH,
        color: theme.Colors.TERTIARY,
        backgroundColor: theme.Colors.SECONDARY,
        borderTopColor: theme.Colors.TERTIARY,
        borderTopWidth: '5px',
        borderTopStyle: 'double',
        padding: '0.5em',
        width: '100%',
        textAlign: 'center',
    },
    altText: {
        color: theme.Colors.NEUTRAL,
        fontStyle: 'italic',
    },
    linkText: {
        textDecorationLine: 'none',
        color: theme.Colors.TERTIARY,
        fontStyle: 'italic',
    }
});

export default styles;