import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme";


const styles = StyleSheet.create({
    text: {
        backgroundColor: theme.Colors.DOMINANT,
        marginBottom: '15px',
        marginHorizontal: '25px',
        paddingHorizontal: '30px',
        paddingVertical: '15px',
        fontFamily: theme.Fonts.HANDWRITTEN,
        fontSize: theme.Fonts.Sizes.PARAGRAPH,
        textAlign: 'left',
        borderWidth: '1px',
        borderColor: theme.Colors.ACCENT,
        borderRadius: '15px',
        color: theme.Colors.COMPLEMENT,
    },
    highlightedText: {
        color: theme.Colors.ACCENT,
    }
});

export default styles;