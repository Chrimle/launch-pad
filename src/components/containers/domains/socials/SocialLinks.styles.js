import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme.js";


const styles = StyleSheet.create({
    container: {
        margin: '25px',
    },
    header: {
        color: theme.Colors.COMPLEMENT,
        fontSize: theme.Fonts.Sizes.HEADER,
        textAlign: 'center',
        borderBottomColor: theme.Colors.TERTIARY,
        borderBottomWidth: '5px'
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
});

export default styles;