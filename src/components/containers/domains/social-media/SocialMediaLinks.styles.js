import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme";


const styles = StyleSheet.create({
    container: {
        margin: '25px',
    },
    header: {
        color: 'white',
        fontSize: '32pt',
        textAlign: 'center',
        borderBottomColor: theme.PRIMARY_COLOR,
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
    highlightedText: {
        color: theme.PRIMARY_COLOR
    },
});

export default styles;