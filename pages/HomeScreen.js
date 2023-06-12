import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

export default HomeScreen = ({ navigation }) => {
    const verify = () => {
        const accessToken = AsyncStorage.getItem("acceessToken");

        navigation.navigate("Login");
    }

    useEffect(() => {
        verify()
    })

    return (
        <SafeAreaView style={{ flex: 1 }}>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

})