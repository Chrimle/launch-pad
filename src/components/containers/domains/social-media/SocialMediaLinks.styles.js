import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme";


const styles = StyleSheet.create({
    container: {
        margin: '25px',
    },
    header: {
        color: theme.Colors.COMPLEMENT,
        fontSize: theme.Fonts.Sizes.HEADER,
        textAlign: 'center',
        borderBottomColor: theme.Colors.ACCENT,
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
        color: theme.Colors.ACCENT,
    },
});

export default styles;