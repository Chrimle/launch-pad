import { StyleSheet } from "react-native";
import theme from "../../assets/theme";

const styles = StyleSheet.create({
    container: {
        padding: '1em',
        textAlign: 'center',
        backgroundColor: theme.PRIMARY_COLOR,
        position: 'sticky',
        top: '0',
        zIndex: '1'
    }
});

export default styles;