import { StyleSheet, KeyboardAvoidingView, Text, TextInput } from "react-native";
import { CustomButtonRound } from "../components/customBtn";
import { useState } from "react";
import { Logo } from "./LogoHead";
import { SignFooter } from "./signFooter";

export const SignForm = (props) => {
    const [alert, setAlert] = useState(""); // alert message

    return <>
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <Logo />
            <KeyboardAvoidingView style={styles.mainSection}>
                <Text style={styles.label}>{props.title}</Text>
                {
                    props.placeHolders.map((n, idx) => {
                        return <TextInput placeholder={n} style={styles.input} key={idx}></TextInput>
                    })
                }
                {alert ? <Text style={styles.alert}>{alert}</Text> : null}
                <CustomButtonRound text={props.title} />
            </KeyboardAvoidingView>
            <SignFooter />
        </KeyboardAvoidingView>
    </>
}

const styles = StyleSheet.create({
    mainSection: {
        marginTop: 0,
        flex: 1,
        alignItems: 'center',
        padding: 50,
    },

    label: {
        marginBottom: 20,
        fontFamily: "SUITE-Bold",
        fontSize: 30,
        fontWeight: 400,
        color: "#8D2540"
    },
    input: {
        marginTop: 20,
        padding: 10,
        width: "100%",
        textAlign: "center",
        backgroundColor: "#E9EBED",
        borderRadius: 15,
    },
    alert: {
        marginTop: 30,
        color: 'red'
    },
    navigate: {
        color: "#8D2540"
    }
})