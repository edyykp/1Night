import React, {useEffect} from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Svg, { G, Path } from 'react-native-svg';

const paths = [
  "M10.13,30.23v-3.47c1.21-0.9,2.44-1.78,3.68-2.62c1.24-0.85,2.63-1.76,4.16-2.75c1.53-0.99,3.11-1.93,4.74-2.84c1.63-0.9,3.49-1.83,5.57-2.79c1.85,2.26,2.77,4.42,2.77,6.48c0,1.13-0.29,2.39-0.86,3.77c-0.57,1.38-1.35,2.96-2.34,4.74c-0.99,1.78-2.23,4.01-3.71,6.69c-3.97,7.37-6.93,13.44-8.9,18.23c-1.97,4.78-2.95,8.04-2.95,9.76c0,0.14,0.12,0.69,0.35,1.65c0.23,0.96,0.35,1.68,0.35,2.16c0,0.82-0.28,1.26-0.83,1.31c-0.55,0.06-1.34-0.11-2.34-0.51c-2.59-1.07-4.32-2.09-5.19-3.05c-0.87-0.96-1.31-2.2-1.31-3.73c0-2.74,1.19-6.99,3.58-12.74c1.21-2.91,2.62-5.8,4.23-8.68s3.4-5.79,5.37-8.74c1.97-2.95,3.82-5.67,5.57-8.15C18.28,26.27,14.3,28.03,10.13,30.23z",
  "M62.77,49.71c-5.92,5.53-8.87,9.38-8.87,11.56c0,1.21,0.59,1.82,1.76,1.82c0.97,0,2.24-0.43,3.81-1.29s4.01-2.39,7.34-4.59v2.92c-4.77,3.95-8.44,6.8-10.99,8.55c-2.55,1.75-4.64,2.62-6.25,2.62c-2.76,0-4.13-1.52-4.13-4.57c0-0.9,0.17-1.79,0.5-2.67c0.34-0.87,0.8-1.79,1.39-2.73c0.59-0.95,1.49-2.3,2.7-4.06c1.21-1.76,2.6-3.76,4.18-5.99c-1.92,0.82-4.32,2.44-7.21,4.87c-1.88,1.52-3.48,2.97-4.79,4.34c-1.31,1.37-2.71,2.89-4.21,4.57c-1.5,1.68-2.59,2.81-3.28,3.39c-0.69,0.58-1.39,0.87-2.09,0.87c-1.08,0-2.07-0.95-2.97-2.84c-0.91-1.89-1.36-4.09-1.36-6.6c0-1.55,0.21-2.77,0.63-3.64c0.42-0.87,1.25-2.12,2.5-3.73c2.32-2.99,4.32-5.19,6-6.58c1.68-1.4,3.29-2.1,4.84-2.1c1.08,0,1.94,0.16,2.6,0.47c0.66,0.31,0.98,0.79,0.98,1.44c0,0.28-0.1,0.58-0.3,0.89c-0.2,0.31-0.43,0.59-0.68,0.85c-0.25,0.25-0.78,0.75-1.59,1.48c-5.31,4.94-7.97,8.14-7.97,9.61c0,0.82,0.32,1.23,0.96,1.23c0.4,0,1.18-0.54,2.34-1.63c1.16-1.09,2.65-2.51,4.49-4.28c1.83-1.76,4-3.6,6.5-5.52c2.5-1.92,5.35-3.77,8.55-5.55c1.78-1.04,3.26-1.57,4.44-1.57c0.54,0,1.07,0.62,1.59,1.86c0.52,1.24,0.78,2.5,0.78,3.77C64.94,47.49,64.21,48.44,62.77,49.71z",
  "M90.6,57.37v3.09c-3.26,3.53-6.3,6.19-9.13,7.98c-2.82,1.79-5.23,2.69-7.21,2.69c-2.76,0-4.81-1.21-6.15-3.64c-1.34-2.43-2.02-5.08-2.02-7.96c0-1.1,0.13-2.15,0.4-3.15c0.27-1,0.59-1.83,0.96-2.48c0.37-0.65,1.06-1.67,2.07-3.05c4.77-6.24,9.14-9.36,13.11-9.36c2.05,0,3.08,0.66,3.08,1.99c0,0.9-0.66,2.31-1.99,4.23c-1.33,1.92-2.51,3.29-3.55,4.11c-2.92,2.37-4.83,4.02-5.72,4.95c-0.89,0.93-1.34,1.99-1.34,3.17c0,1.02,0.45,1.86,1.36,2.54c0.91,0.68,2.08,1.02,3.53,1.02c1.58,0,3.32-0.49,5.22-1.46C85.11,61.07,87.57,59.51,90.6,57.37z M87.17,38.45c-0.84,0-1.64-0.27-2.4-0.8c-0.76-0.54-1.13-1.21-1.13-2.03c0-1.24,0.71-2.62,2.12-4.15s2.87-2.29,4.39-2.29c1.01,0,1.85,0.26,2.52,0.78c0.67,0.52,1.01,1.28,1.01,2.27c0,1.21-0.69,2.55-2.07,4.02C90.23,37.71,88.75,38.45,87.17,38.45z",
    "M130.23,60.21l-16.74,11.56c-4.71,6.83-8.99,11.93-12.86,15.3c-3.87,3.37-6.74,5.06-8.62,5.06c-1.01,0-1.51-0.52-1.51-1.57c0-2.03,1.23-4.63,3.68-7.79c0.97-1.24,2.09-2.46,3.35-3.64c1.26-1.19,2.45-2.21,3.58-3.07c1.12-0.86,2.61-1.93,4.46-3.22s3.11-2.17,3.78-2.65c3.36-5.76,5.78-10.16,7.26-13.21c-3.16,2.82-5.92,5.14-8.27,6.94c-2.35,1.81-4.51,3.2-6.48,4.17c-1.97,0.97-3.74,1.46-5.32,1.46c-1.71,0-3.29-1.15-4.74-3.45c-1.45-2.3-2.17-4.66-2.17-7.09c0-1.13,0.31-2.31,0.93-3.56c0.62-1.24,1.6-2.57,2.92-3.98c1.33-1.41,3.02-2.86,5.07-4.34c2.05-1.48,4.45-2.93,7.21-4.34c5.21-2.74,9.26-4.11,12.15-4.11c2.15,0,3.23,0.66,3.23,1.99c0,1.83-2.34,3.63-7.01,5.38c-2.86,1.04-5.69,2.43-8.49,4.15s-5.08,3.55-6.81,5.48c-1.73,1.93-2.6,3.68-2.6,5.23c0,0.76,0.22,1.37,0.66,1.82c0.44,0.45,1.01,0.68,1.71,0.68c1.18,0,2.52-0.45,4.03-1.36c1.51-0.9,3.75-2.5,6.71-4.78c1.34-1.04,3.13-2.73,5.37-5.06c2.24-2.33,4.08-4.11,5.55-5.33c1.46-1.23,2.78-1.84,3.96-1.84c0.67,0,1.22,0.18,1.64,0.53c0.42,0.35,0.63,0.87,0.63,1.55c0,1.3-0.62,3.18-1.84,5.65c-1.23,2.47-3.44,6.51-6.63,12.13l12.2-7.45V60.21z",
    "M167.58,57.37v2.67c-2.92,2.51-5.45,4.57-7.59,6.16c-2.13,1.59-4,2.8-5.6,3.62s-2.95,1.23-4.06,1.23c-2.62,0-3.93-1.3-3.93-3.89c0-2.09,0.81-4.51,2.44-7.26s3.97-5.99,7.03-9.72c-1.51,0.71-2.94,1.52-4.29,2.43c-1.34,0.92-2.54,1.88-3.58,2.88c-1.04,1-1.92,1.86-2.62,2.56c-2.19,2.06-4.29,4.17-6.3,6.33s-3.38,3.56-4.08,4.21c-0.71,0.65-1.38,0.97-2.02,0.97c-2.62,0-3.93-2.71-3.93-8.13c0-1.78,0.32-3.74,0.96-5.88c0.64-2.14,2.35-4.98,5.14-8.51c5.88-7.39,10.92-13.44,15.1-18.14s7.65-8.26,10.41-10.67c2.76-2.41,4.6-3.59,5.55-3.53c1.18,0.08,2.12,0.28,2.85,0.59c0.72,0.31,1.08,0.66,1.08,1.06c0,0.71-0.58,1.87-1.74,3.49c-1.16,1.62-3.15,4.16-5.97,7.6c-3.06,3.64-5.23,6.2-6.5,7.68c-1.28,1.48-3.18,3.58-5.72,6.31c-2.54,2.72-4.86,5.15-6.96,7.28c-2.1,2.13-4.5,4.44-7.18,6.92v5.08c4.5-4.21,8.4-7.65,11.7-10.33c3.29-2.68,6.08-4.71,8.37-6.08c2.29-1.37,3.96-2.05,5.04-2.05c1.01,0,1.95,0.5,2.82,1.5c0.87,1,1.31,1.83,1.31,2.48c0,0.28-0.17,0.63-0.5,1.06c-2.42,2.43-4.34,4.44-5.77,6.03s-2.53,3.02-3.3,4.28c-0.77,1.26-1.16,2.34-1.16,3.24c0,1.33,0.76,1.99,2.27,1.99C158.46,62.83,162.04,61.01,167.58,57.37z",
    "M185.28,35.4h2.17c1.78-2.68,3.39-4.58,4.84-5.69c1.45-1.11,3.09-1.67,4.94-1.67c1.85,0,2.77,0.35,2.77,1.06c0,0.34-0.72,1.26-2.17,2.75c-1.45,1.5-2.54,2.75-3.28,3.77c1.14,0.11,2.16,0.21,3.05,0.3c0.89,0.08,1.59,0.16,2.09,0.21c-1.92,2.99-4.32,6.05-7.21,9.19c-0.94-0.06-1.73-0.11-2.37-0.15s-1.29-0.08-1.94-0.13c-0.66-0.04-1.46-0.09-2.4-0.15c-1.81,2.46-3.34,4.65-4.56,6.58c-1.23,1.93-2.17,3.7-2.82,5.31c-0.66,1.61-0.98,3.13-0.98,4.57c0,1.95,0.92,2.92,2.77,2.92c1.28,0,2.95-0.57,5.02-1.71c2.07-1.14,4.83-2.9,8.29-5.27v2.84c-9.08,8.27-15.78,12.4-20.12,12.4c-1.51,0-2.73-0.49-3.66-1.48c-0.92-0.99-1.39-2.26-1.39-3.81c0-1.04,0.26-2.29,0.78-3.73c0.52-1.44,1.45-3.61,2.8-6.52c-0.47,0.34-0.92,0.67-1.34,1c-0.42,0.33-0.81,0.62-1.16,0.89c-0.35,0.27-0.73,0.55-1.13,0.85c-0.4,0.3-0.81,0.6-1.21,0.91v-2.92c3.53-2.48,7.8-6.84,12.81-13.08c-0.5-0.03-0.98-0.05-1.41-0.06c-0.44-0.01-0.96-0.02-1.56-0.02c-1.98,0-3.46,0.11-4.44,0.34c-0.4,0.08-0.78,0.18-1.13,0.28c-0.35,0.1-0.6,0.15-0.73,0.15c-0.13,0-0.2-0.08-0.2-0.25c0-0.93,0.69-2.33,2.07-4.19c1.11-1.58,2.16-2.75,3.15-3.51c0.99-0.76,2.2-1.28,3.63-1.55C180.68,35.53,182.69,35.4,185.28,35.4z"
];
export default function App({navigation}) {

  let state = {
    fadeAnimation: new Animated.Value(0),
  };

  const fadeIn = () => {
    Animated.timing(state.fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start(function onComplete() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Welcome' }],
          });
    });
  };

  useEffect(() => {
    fadeIn();
  }, [state]);

  return (
    <View style={styles.container}>
      {/* <LottieView
        autoPlay
        loop={true}
        speed={1}
        source={require('../assets/loader.json')}
        style={styles.heart}
      /> */}
      <Animated.View style={{opacity:state.fadeAnimation}}>
      <Svg viewBox="0 0 200 100" width={500} height={100}>
          <G>
            {paths.map((d,key) => (<Path d={d} strokeWidth={0.25} key={key} strokeMiterlimit={10} fill="#ff0048"/>))}
          </G>
       
      </Svg>
      </Animated.View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heart: {
    height:100
  }
});