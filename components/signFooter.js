import { StyleSheet, SafeAreaView, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SignFooter = () => {
    const navigation = useNavigation();
    return <>
        <SafeAreaView style={styles.footer}>
            <Text onPress={() => navigation.navigate("Login")} style={styles.active}>Login</Text>
            <Text onPress={() => navigation.navigate("Join")}>Join</Text>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    footer: {
        justifyContent: "space-around",
        flexDirection: "row",
        height: 70,
        backgroundColor: "#E9EBED",
    }
})