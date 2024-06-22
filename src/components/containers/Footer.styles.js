import { StyleSheet } from "react-native";
import theme from "../../assets/theme.js";


const styles = StyleSheet.create({
    footer: {
        fontSize: theme.Fonts.Sizes.PARAGRAPH,
        color: theme.Colors.ACCENT,
        backgroundColor: theme.Colors.DOMINANT,
        borderTopColor: theme.Colors.ACCENT,
        borderTopWidth: '5px',
        borderTopStyle: 'double',
        padding: '0.5em',
        width: '100%',
        textAlign: 'center',
    },
    altText: {
        color: theme.Colors.COMPLEMENT,
        fontStyle: 'italic',
    },
    linkText: {
        textDecorationLine: 'none',
        color: theme.Colors.ACCENT,
        fontStyle: 'italic',
    }
});

export default styles;