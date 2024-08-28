import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ToastAndroid, ScrollView } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../App";
import useRegisterViewModel from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from "./Styles";

export const RegisterScreen = () => {
  const {
    onChange,
    register,
    name,
    lastname,
    email,
    phone,
    password,
    confirmPassword,
    errorMessage
  } = useRegisterViewModel();

  useEffect(() => {
    if(errorMessage){
      ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    }
  },[errorMessage])

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/Logo.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/user_image.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>

      <View style={styles.form}>
        <ScrollView>
          <Text style={styles.formText}>REGISTRARSE</Text>

          <CustomTextInput
            image={require("../../../../assets/user.png")}
            keyboardType="default"
            onChangeText={onChange}
            placeholder="Nombres"
            property="name"
            value={name}
          />

          <CustomTextInput
            image={require("../../../../assets/my_user.png")}
            keyboardType="default"
            onChangeText={onChange}
            placeholder="Apellidos"
            value={lastname}
            property="lastname"
          />

          <CustomTextInput
            image={require("../../../../assets/email.jpg")}
            keyboardType="email-address"
            onChangeText={onChange}
            placeholder="Correo electronico"
            property="email"
            value={email}
          />

          <CustomTextInput
            image={require("../../../../assets/phone.png")}
            keyboardType="numeric"
            onChangeText={onChange}
            placeholder="Telefono"
            property="phone"
            value={phone}
          />

          <CustomTextInput
            image={require("../../../../assets/password.jpeg")}
            keyboardType="default"
            onChangeText={onChange}
            placeholder="Contraseña"
            property="password"
            value={password}
            secureTextEntry
          />

          <CustomTextInput
            image={require("../../../../assets/confirm_password.png")}
            keyboardType="default"
            onChangeText={onChange}
            placeholder="Confirmar Contraseña"
            property="confirmPassword"
            value={confirmPassword}
            secureTextEntry
          />

          <View style={{ marginTop: 30 }}>
            <RoundedButton text="Confirmar" onPress={register} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
