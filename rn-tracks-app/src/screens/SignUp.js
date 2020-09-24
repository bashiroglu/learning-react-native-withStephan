import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import Spacer from "../components/styles/Spacer";
import { Context as AuthContext } from "../context/authContext";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signUp } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>SignUp</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newValue) => setEmail(newValue)}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Spacer>
        <Button title="sign up" onPress={() => signUp({ email, password })} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // marginBottom:00,
  },
});

export default SignUp;
