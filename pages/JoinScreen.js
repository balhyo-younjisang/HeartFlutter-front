import { Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Button, Image } from "react-native";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { request } from "../utils";
import { SignForm } from "../components/signForm";

export default JoinScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");

    const [alert, setAlert] = useState(""); // alert message

    const placeHolders = ["사용할 이메일을 입력해줘", "비밀번호를 입력해줘!", "비밀번호를 확인할게", "사용할 이름은?"]
    return (
        <>
            <SignForm title="회원가입" placeHolders={placeHolders} navigate="로그인"></SignForm>
        </>
    );
}
