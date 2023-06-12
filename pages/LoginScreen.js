import { Text, View, SafeAreaView, TextInput, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { request } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignForm } from "../components/signForm";

export default LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState(""); // alert message


    const placeHolders = ["이메일을 입력해줘", "비밀번호를 입력해줘"]

    return <>
        <SignForm title="로그인" placeHolders={placeHolders} navigate="회원가입"></SignForm>
    </>
}

