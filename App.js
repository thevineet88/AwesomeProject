/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import Greeting from './src/components/Greeting/Greeting'
import Box from './src/components/Box/Box'
import Main from './src/components/Main/Main'
//import FetchLocation from './src/components/FetchLocation/fetchLocation'

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,Image,Button
} from 'react-native';



import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// getUserLocationHandler = () => {
//   console.log('Button Pressed')
// }

const App = () => {
  let pic = {
    uri: 'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg'
  };
  return (
  //   <Fragment>
  //     <StatusBar barStyle="dark-content" />
  //     <SafeAreaView>
  //       <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={styles.scrollView}>
  //         <Header />
  //         {global.HermesInternal == null ? null : (
  //           <View style={styles.engine}>
  //             <Text style={styles.footer}>Engine: Hermes</Text>
  //           </View>
  //         )}
  //         <View style={styles.body}>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Step One</Text>
  //             <Text style={styles.sectionDescription}>
  //               Edit1 <Text style={styles.highlight}>App.js</Text> to change this
  //               screen and then come back to see your edits.
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>See Your Changes</Text>
  //             <Text style={styles.sectionDescription}>
  //               <ReloadInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Debug</Text>
  //             <Text style={styles.sectionDescription}>
  //               <DebugInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Learn More</Text>
  //             <Text style={styles.sectionDescription}>
  //               Read the docs to discover what to do next:
  //               This is the text 
  //             </Text>
  //           </View>
  //           <LearnMoreLinks />
  //         </View>
  //       </ScrollView>
  //     </SafeAreaView>
  //   </Fragment>
  
  // <View style={{flex: 1}}> 
  //<Main />
  <Box /> 
        //   {/* <Button title = 'btn 2' /> */}
        //   {/* <Button title='CLICK' /> */}
        // {/* <Box></Box> */}
        // {/* <FetchLocation onGetLocation={this.getUserLocationHandler} /> */}
       
  // </View>
      // </View>
   );
};

export default App;