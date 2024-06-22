import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: theme.Colors.ACCENT,
        padding: '0.5em',
        margin: '0.5em',
        marginTop: '1em',
        textDecorationLine: 'none',
    },
    containerHover: {
        backgroundColor: theme.Colors.ACCENT,
    },
    text: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: theme.Colors.COMPLEMENT,
        whiteSpace: 'nowrap',
        fontSize: theme.Fonts.Sizes.PARAGRAPH,
    },
    textHover: {
        color: theme.Colors.DOMINANT,
    },
});

export default styles;