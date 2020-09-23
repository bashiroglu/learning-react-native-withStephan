import React from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/contex";

const SignIn = () => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SignIn</Text>
      <Button
        title="SignIn"
        onPress={() => {
          signIn();
        }}
      />
    </View>
  );
};

export default SignIn;
