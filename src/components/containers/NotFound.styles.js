import { StyleSheet } from "react-native";
import theme from "../../assets/theme.js";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: theme.Colors.PRIMARY,
        minHeight: '100vh',
        paddingVertical: '2em',
    },
    text: {
        color: theme.Colors.COMPLEMENT,
        fontSize: theme.Fonts.Sizes.HEADER,
        borderBottomColor: theme.Colors.ACCENT,
        borderBottomWidth: '0.2em',
        marginBottom: '0.5em',
    },
    descriptionText: {
        color: theme.Colors.COMPLEMENT,
        fontStyle: 'italic',
        fontSize: theme.Fonts.Sizes.PARAGRAPH,
    }
});

export default styles;