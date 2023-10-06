import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function FacilitiesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Facilities!</Text>
    </View>
  );
}

function ContactUsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact Us!</Text>
    </View>
  );
}

function ListOfEmployeesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List of Employees!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Facilities" component={FacilitiesScreen} />
      <Tab.Screen name="Contact Us" component={ContactUsScreen} />
      <Tab.Screen name="List of Employees" component={ListOfEmployeesScreen} />
    </Tab.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
