import React from 'react';
import { ScrollView, Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.11
import ModalDropdown from 'react-native-modal-dropdown';
import {CalendarList} from 'react-native-calendars';

const window = Dimensions.get('window');

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  }

  _dropdown_4_onSelect(idx, value) {
    // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
    //alert(`idx=${idx}, value='${value}'`);
    console.debug(`idx=${idx}, value='${value}'`);
  }

  render() {
    return (
    <View>
      <View style={{alignSelf: 'center', justifyContent: 'center',marginTop: 20}}>
        <ModalDropdown style = {{
          width: 80,
          height: 100,
          marginLeft: window.width-100,
          borderWidth: 0,
          borderRadius: 3,}}
          options={['Español',
          'English',
          'Русский']}
          defaultValue='Español'
          onSelect={(idx, value) => this._dropdown_4_onSelect(idx, value)}/>
      </View>
        <View>
          <Calendar
            // Initially visible month. Default = Date()
            current={'2012-03-01'}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={'2012-05-10'}
            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
            maxDate={'2012-05-30'}
            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {console.log('selected day', day)}}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {console.log('selected day', day)}}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'yyyy MM'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {console.log('month changed', month)}}
            // Hide month navigation arrows. Default = false
            hideArrows={true}
            // Replace default arrows with custom ones (direction can be 'left' or 'right')
            renderArrow={(direction) => (<Arrow />)}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            // Hide day names. Default = false
            hideDayNames={true}
            // Show week numbers to the left. Default = false
            showWeekNumbers={true}
            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
            onPressArrowLeft={substractMonth => substractMonth()}
            // Handler which gets executed when press arrow icon left. It receive a callback can go next month
            onPressArrowRight={addMonth => addMonth()}
          />
        </View>
    </View>
    )
  }
}
