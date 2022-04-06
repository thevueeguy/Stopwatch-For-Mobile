import { StyleSheet, Text, View, FlatList } from "react-native";
import Timer from "./components/timer.js";
import Start from "./components/start.js";
import Pause from "./components/pause.js";
import Lap from "./components/laps.js";
import Restart from "./components/restart.js";
import { useState, useEffect } from "react";

export default function App() {
  const [hour, setHour] = useState("0");
  const [min, setMin] = useState("0");
  const [sec, setSec] = useState("0");
  const [mili, setMili] = useState("0");
  const [flag, setFlag] = useState(0);
  const [laps, setLaps] = useState([]);

  function Double(x) {
    return Math.floor(Number(x) / 10) < 1 ? "0" + x : x;
  }

  useEffect(() => {
    if (flag !== 2) return;
    let timerID = setInterval(() => {
      if (Number(mili) !== 100) setMili((mili) => Number(mili) + 1);
      else {
        if (Number(sec) !== 60) setSec((sec) => Number(sec) + 1);
        else {
          if (Number(min) !== 60) setMin((min) => Number(min) + 1);
          else {
            setHour((hour) => Number(hour) + 1);
            setMin(0);
          }
          setSec(0);
        }
        setMili(0);
      }
    }, 7);

    return () => clearInterval(timerID);
  }, [flag, mili, hour, sec, min]);

  return (
    <View style={styles.container}>
      <View>
        <Timer hour={hour} min={min} sec={sec} mili={mili}></Timer>
      </View>
      <Start style={styles.btn} flag={flag} setFlag={setFlag}></Start>
      <Pause style={styles.btn} flag={flag} setFlag={setFlag}></Pause>

      <Restart
        style={styles.btn}
        flag={flag}
        setHour={setHour}
        setMili={setMili}
        setMin={setMin}
        setSec={setSec}
        setLaps={setLaps}
        setFlag={setFlag}
      ></Restart>

      <Lap
        style={styles.btn}
        hour={hour}
        min={min}
        mili={mili}
        sec={sec}
        setLaps={setLaps}
        laps={laps}
      ></Lap>

      <View style={styles.lapContainer}>
        <Text style={styles.heading}>Added Laps</Text>
        <FlatList
          data={laps}
          key={laps.length}
          renderItem={({ item }) => (
            <Text style={styles.text}>
              {item[0]}.    {Double(item[1])} : {Double(item[2])} :{" "}
              {Double(item[3])} : {Double(item[4])}
            </Text>
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundImage: "url(https://www.teahub.io/photos/full/4-45224_1080x1920-7024-art-wallpaper-iphone-7-plus.jpg)",
    flex: 1,
    margin: 10,
    backgroundSize: 'cover',
  },
  num: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    justifyContent: "center",
    marginTop: 100,
    fontSize: 30,
  },

  button: {
    marginTop: 25,
    marginVertical: 12,
    marginHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "black",
    width: 100,
  },
  text: {
    marginHorizontal: "auto",
    color: "black",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  btn: {
    marginTop: 20,
    width: 150,
    border: "1px solid white",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  lapContainer: {
    backgroundColor: "white",
    marginTop: 30,
    width: 200,
    borderRadius: 10,
    marginBottom: 30
  },
  heading: {
    marginHorizontal: "auto",
    marginBottom: 10,
    color: "white",
    fontSize: 20,
    marginTop: 10,
    color: "red",
  },
});
