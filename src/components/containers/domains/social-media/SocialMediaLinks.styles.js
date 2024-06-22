import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme.js";


const styles = StyleSheet.create({
    container: {
        margin: '25px',
    },
    header: {
        color: theme.Colors.NEUTRAL,
        fontSize: theme.Fonts.Sizes.HEADER,
        textAlign: 'center',
        borderBottomColor: theme.Colors.TERTIARY,
        borderBottomWidth: '5px',
        whiteSpace: 'noWrap',
    },
    buttonsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '25px',
        width: 'auto',
    },
    highlightedText: {
        color: theme.Colors.TERTIARY,
    },
});

export default styles;