import { StyleSheet } from "react-native";
import theme from "../../assets/theme";


const styles = StyleSheet.create({
    footer: {
        fontSize: '16pt',
        color: theme.PRIMARY_COLOR,
        backgroundColor: theme.SECONDARY_COLOR,
        borderTopColor: theme.PRIMARY_COLOR,
        borderTopWidth: '5px',
        borderTopStyle: 'double',
        padding: '5px',
        width: '100%',
        textAlign: 'center',
    },
    altText: {
        color: 'ghostwhite',
        fontStyle: 'italic',
    },
    linkText: {
        textDecorationLine: 'none',
        color: theme.PRIMARY_COLOR,
        fontStyle: 'italic',
    }
});

export default styles;