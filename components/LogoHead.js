import { StyleSheet, KeyboardAvoidingView, Image } from "react-native"

export const Logo = () => {
    return <>
        <KeyboardAvoidingView style={styles.container}><Image source={require("../assets/HEARTFLUTTER_LOGO-removebg-preview.png")} style={styles.logo} /></KeyboardAvoidingView></>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexDirection: "column",
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 80,
        marginTop: 10,
    },
})