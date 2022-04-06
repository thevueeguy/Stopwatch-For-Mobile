import { View, Button } from "react-native";

const Pause = (props) => {
  return (
    <View style={props.style}>
      <Button
        disabled={props.flag === 1 || props.flag === 3}
        onPress={() => {
          props.setFlag(3);
        }}
        title="Pause"
        color="transparent"
      ></Button>
    </View>
  );
};


export default Pause;
