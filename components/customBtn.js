import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const CustomButtonRound = (props) => {
    return <>
        <TouchableOpacity style={[styles.button]} onPress={props.event}>
            <Text style={styles.value}>{props.text}</Text>
        </TouchableOpacity >
    </>
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    value: {
        backgroundColor: "#8D2540",
        padding: 15,
        color: "white",
        width: 250,
        textAlign: "center",
        borderRadius: 20
    }
})
