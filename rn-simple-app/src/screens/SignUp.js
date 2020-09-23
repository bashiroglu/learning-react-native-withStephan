import React from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/contex";

const SignUp = () => {
  const { signUp } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SignUp</Text>
      <Button
        title="SignUp"
        onPress={() => {
          signUp();
        }}
      />
    </View>
  );
};

export default SignUp;
