import { StyleSheet } from "react-native";
import theme from "../../../../../theme";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: theme.PRIMARY_COLOR,
        backgroundColor: 'black',
        padding: '10px',
        margin: '5px',
        marginTop: '15px',
        borderRadius: '5px',
        textDecorationLine: 'none',
    },
    containerHover: {
        backgroundColor: theme.PRIMARY_COLOR,
    },
    text: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: theme.PRIMARY_COLOR,
        whiteSpace: 'nowrap'
    },
    textHover: {
        color: theme.SECONDARY_COLOR,
    },
});

export default styles;