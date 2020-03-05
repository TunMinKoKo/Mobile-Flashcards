import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import DeckList from './DeckList'
//import AddCard from './AddCard'
import AddDeck from './AddDeck'
//import Quiz from './Quiz'
import DeckDetail from './DeckDetail'
import {
    createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer,
    createStackNavigator
} from 'react-navigation'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

const TabRouteConfigs = {
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
        }
    }
}

const TabNavigatorConfig = {
    tabBarOptions: {
        activeTintColor: Platform.OS === "ios"
            ? '#34435E'
            : '#fff',
        style: {
            height: 56,
            backgroundColor: Platform.OS === "ios"
                ? '#E6E6E6'
                : '#261E5F',
            shadowColor: "rgba(0, 0, 0, 0.24)",
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        },
    }
}

const Tabs =
    Platform.OS === "ios"
        ? createBottomTabNavigator(TabRouteConfigs, TabNavigatorConfig)
        : createMaterialTopTabNavigator(TabRouteConfigs, TabNavigatorConfig);

const TabsContainer = createAppContainer(Tabs)

const MainNavigator = createStackNavigator({
    Home: {
        screen: TabsContainer,
        navigationOptions: {
            header: null,
        }
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#34435E',
            }
        }
    },
    // AddCard: {
    //     screen: AddCard,
    //     navigationOptions: {
    //         title: 'Add Card',
    //         headerTintColor: '#fff',
    //         headerStyle: {
    //             backgroundColor: '#261E5F',
    //         }
    //     }
    // },
    // Quiz: {
    //     screen: Quiz,
    //     navigationOptions: {
    //         headerTintColor: '#fff',
    //         headerStyle: {
    //             backgroundColor: '#261E5F',
    //         }
    //     }
    // }
})

const Navigator = createAppContainer(MainNavigator)

export default Navigator
