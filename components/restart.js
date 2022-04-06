import { View, Button } from "react-native";

const Restart = (props) => {
  function Reset() {
    props.setHour(0);
    props.setMin(0);
    props.setSec(0);
    props.setMili(0);
    props.setFlag(0);
    props.setLaps([]);
  }
  return (
    <View style={props.style}>
      <Button
        disabled={props.flag === 2 || props.flag === 1}
        onPress={Reset}
        title="Restart"
        color="transparent"
      ></Button>
    </View>
  );
};

export default Restart;
