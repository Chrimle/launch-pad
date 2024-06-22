import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme.js";


const styles = StyleSheet.create({
    text: {
        backgroundColor: theme.Colors.SECONDARY,
        marginBottom: '15px',
        marginHorizontal: '25px',
        paddingHorizontal: '30px',
        paddingVertical: '15px',
        fontFamily: theme.Fonts.HANDWRITTEN,
        fontSize: theme.Fonts.Sizes.PARAGRAPH,
        textAlign: 'left',
        borderWidth: '1px',
        borderColor: theme.Colors.TERTIARY,
        borderRadius: '15px',
        color: theme.Colors.NEUTRAL,
    },
    highlightedText: {
        color: theme.Colors.TERTIARY,
    }
});

export default styles;