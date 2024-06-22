import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme.js";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: theme.Colors.TERTIARY,
        padding: '0.5em',
        margin: '0.5em',
        marginTop: '1em',
        textDecorationLine: 'none',
    },
    containerHover: {
        backgroundColor: theme.Colors.TERTIARY,
    },
    text: {
        flex: 1,
        verticalAlign: 'center',
        textAlign: 'center',
        color: theme.Colors.NEUTRAL,
        whiteSpace: 'nowrap',
        fontSize: theme.Fonts.Sizes.PARAGRAPH,
    },
    textHover: {
        color: theme.Colors.PRIMARY,
    },
});

export default styles;