import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './components/Home';
import { Orders } from './components/Orders';
import { Profile } from './components/Profile';

import { HomeIcon } from './components/Icons/HomeIcon';
import { OrdersIcon } from './components/Icons/OrdersIcon';
import { ProfileIcon } from './components/Icons/ProfileIcon';
import { Text } from './components/Text';


const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            elevation: 0,
            borderRadius: 15,
            height: 75,
            ...styles
          }
        }}
        initialRouteName='Home'
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24
                }}
              >
                <HomeIcon color={focused ? '#D73035' : '#666'} />
                <Text
                  size={14}
                  color={focused ? '#D73035' : '#666'}
                >
                  Início
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Pedidos"
          component={Orders}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24
                }}
              >
                <OrdersIcon color={focused ? '#D73035' : '#666'} />
                <Text
                  size={14}
                  color={focused ? '#D73035' : '#666'}
                >
                  Pedidos
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 24
                }}
              >
                <ProfileIcon color={focused ? '#D73035' : '#666'} />
                <Text
                  size={14}
                  color={focused ? '#D73035' : '#666'}
                >
                  Perfil
                </Text>
              </View>
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#D73035',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});
