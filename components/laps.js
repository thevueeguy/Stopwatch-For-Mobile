import { View, Button } from "react-native";

const Lap = (props) => {
  function AddLaps() {
    props.setLaps([
      ...props.laps,
      [props.laps.length + 1, props.hour, props.min, props.sec, props.mili],
    ]);
  }
  return (
    <View style={props.style}>
      <Button onPress={AddLaps} title="Laps" color="transparent"></Button>
    </View>
  );
};

export default Lap;

