import { Text, View, StyleSheet } from 'react-native';
const Timer = (props) => {
    function Double(x)
    {
        return Math.floor(Number(x)/10)<1?('0'+x):x
    }

    return (  
        <View style={styles.timer} >
            <Text style={styles.text} >{Double(props.hour)} : </Text>
            <Text style={styles.text} >{Double(props.min)} : </Text>
            <Text style={styles.text} >{Double(props.sec)} : </Text>
            <Text style={styles.text} >{Double(props.mili)} </Text>
        </View>);
}

const styles = StyleSheet.create({
    timer: {
        display: 'inline-block',
        color: 'white',
        marginTop: 150,
        marginBottom: 50
    },
    text: {
        color : 'white',
        fontSize : 35,
        marginTop : 10,
    }
  });

export default Timer;