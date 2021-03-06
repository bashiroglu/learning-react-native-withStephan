import React from "react";

import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/contex";

const ProfileScreen = () => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen</Text>
      <Button
        title="SignOut"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default ProfileScreen;
