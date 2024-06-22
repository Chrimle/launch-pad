import { StyleSheet } from "react-native";
import theme from "../../assets/theme";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: theme.BACKGROUND_COLOR,
        minHeight: '100vh',
        paddingVertical: '2em',
    },
    text: {
        color: 'white',
        fontSize: '2em',
        borderBottomColor: theme.PRIMARY_COLOR,
        borderBottomWidth: '0.2em',
        marginBottom: '0.5em',
    },
    descriptionText: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: '1em'
    }
});

export default styles;