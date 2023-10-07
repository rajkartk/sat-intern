import { View, Text, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function DateTime() {

    const [datePicker, setDatePicker]=useState(false);
    const [timePicker, setTimePicker]=useState(false);
    const [selectDate, setSelectDate]=useState('select date');
    const [selectTime, setSelectTime]=useState('select time');

    const showDatePicker=()=>{
        setDatePicker(true);
    };

    const hideDatePicker=()=>{
        setDatePicker(false);
    };

    const handleDateConfirm = date=>{
        // console.warn('A date has been picked: ',date);
        const dt = new Date(date); // date as object
        const x=dt.toISOString().split('T'); // converted into string
        const x1=x[0].split("-")
        setSelectDate(x1[2] + '/' + x1[1] + '/' + x1[0] )
        hideDatePicker();
    }
    
    const showTimePicker=()=>{
        setTimePicker(true);
    };
    
    const hideTimePicker=()=>{
        setTimePicker(false);
    }
    
    const handleTimeConfirm = date=>{
        const dt= new Date(date);
        const x=dt.toLocaleTimeString().split(" ");

        setSelectTime(x);
        hideTimePicker();
    }
    
  return (
    <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}} >
        <TouchableOpacity onPress={()=>{showDatePicker();}} >
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
                    <Image source={require('../Image/calendar1.png')} style={{width:30,height:30}} />
                <Text style={{color:"black"}} >{selectDate}</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{showTimePicker()}} >
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
           
                <Image source={require('../Image/time1.png')} style={{width:30,height:30}} />
     
            <Text style={{color:"black"}} >{selectTime}</Text>
        </View>
        </TouchableOpacity>

        <DateTimePickerModal
            isVisible={datePicker}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
        />

        <DateTimePickerModal
            isVisible={timePicker}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
        />

    </View>
  )
}