import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import LibraryScreen from '../screens/Library/LibraryScreen';
import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();


const MainBottomTab = createBottomTabNavigator();

const MainNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainBottomTab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Search':
                iconName = 'search';
                break;
              case 'Library':
                iconName = 'ellipsis-horizontal';
                break;
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#ff6347',
          showLabel: true,
          style: {
            backgroundColor: "#212121",
          },
        }}>
        <MainBottomTab.Screen
          name="Home"
          component={HomeScreen}></MainBottomTab.Screen>
        <MainBottomTab.Screen
          name="Search"
          component={SearchScreen}></MainBottomTab.Screen>
        <MainBottomTab.Screen
          name="Library"
          component={LibraryScreen}></MainBottomTab.Screen>
      </MainBottomTab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
