import { StyleSheet, Text, View, Button } from "react-native";

import { useState } from "react";

const Start = (props) => {
  function handlePress() {
    props.setFlag(2);
  }
  return (
    <View style={props.style}>
      <Button
        disabled={props.flag === 2}
        onPress={handlePress}
        title="Start"
        color="transparent"
      ></Button>
    </View>
  );
};


export default Start;
