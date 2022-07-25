import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CountDownText} from 'react-native-countdown-timer-text';

const Counter = ({navigation}) => {
  return (
    <View style={{backgroundColor:'black',}}>
      

      <CountDownText
        style={styles.cd}
        countType="date"
        auto={true}
        afterEnd={() => {}}
        timeLeft={1.728e+6}
        step={-1}
        startText="Stat"
        endText=""
        intervalText={(date, hour, min, sec) =>
          date + ':' + hour + ':' + min + ':' + sec
        }
        finishTime={435434343243}
      />
      {/* <Button title='click here'  onPress={}/> */}
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({

    cd:{
        backgroundColor:'red',
        alignSelf:'center',
        alignItem:'center',
        height:200,
    }
});
