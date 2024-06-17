import { StyleSheet } from "react-native";
import theme from "../../../../../theme";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        padding: '25px',
        margin: '10px',
        height: '50px',
        width: '250px',
        borderRadius: '5px',
    },
    containerHover: {
        backgroundColor: theme.PRIMARY_COLOR,
    },
    icon: {
        maxWidth: '250px',
    },
});

export default styles;