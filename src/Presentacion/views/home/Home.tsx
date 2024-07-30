import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import RoundedButton from "../../components/RoundedButton";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useHomeViewModel } from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from './Styles'

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { email, password, onChange } = useHomeViewModel();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/Logo.jpg")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../../assets/logo2.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <CustomTextInput
          image={require("../../../../assets/email.jpg")}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => onChange("email", text)}
          property="email"
        />
        <CustomTextInput
          image={require("../../../../assets/password.jpeg")}
          placeholder="Contraseña"
          keyboardType="default"
          secureTextEntry
          value={password}
          onChangeText={(text) => onChange("password", text)}
          property="password"
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="ENTRAR"
            onPress={() => {
              console.log(`Email: ${email}`);
              console.log(`Password: ${password}`);
            }}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};