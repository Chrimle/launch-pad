import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme";


const styles = StyleSheet.create({
    text: {
        backgroundColor: '#353535',
        marginBottom: '15px',
        marginHorizontal: '25px',
        paddingHorizontal: '30px',
        paddingVertical: '15px',
        fontFamily: theme.Fonts.HANDWRITTEN,
        fontSize: '3vmin',
        textAlign: 'left',
        borderWidth: '1px',
        borderColor: theme.PRIMARY_COLOR,
        borderRadius: '15px',
        color: 'white',
    },
    highlightedText: {
        color: theme.PRIMARY_COLOR,
    }
});

export default styles;