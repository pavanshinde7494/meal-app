// import { createStackNavigator } from 'react-navigation-stack'
// // import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createAppContainer } from 'react-navigation'
// import CategoriesScreen from '../screens/CategoriesScreen'
// import CategoryMealsScreen from '../screens/CategoryMealScreen'
// import MealDetailScreen from '../screens/MealDetailScreen'
// import Colors from '../constants/Colors'

//  const MealsNavigator = createStackNavigator({
//     Categories : CategoriesScreen,
//     CategoryMeals : {
//         screen : CategoryMealsScreen,
//     },
//     MealDetail : MealDetailScreen
// } , {
//         initialRouteName : 'Categories',
//         mode : 'modal',   
//         defaultNavigationOptions : {
//             headerStyle : {
//                 backgroundColor : Colors.primary,
//             },
//             headerTitleStyle : {
//                 fontFamily : 'open-sans-bold'
//             },
//             headerTintColor : 'white',
//         }   
// });


// export default createAppContainer(MealsNavigator)


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FilterScreen from '../screens/FilterScreen'

import Colors from '../constants/Colors';
import { Text , Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

let Stack = createStackNavigator();


let config =  {
    headerStyle : {
        backgroundColor : Colors.primary,
    },
    headerTitleStyle : {
        fontFamily : 'open-sans-bold',
        textAlign : 'center'
    },
    headerTintColor : 'white',
}

function  MealsNavigator (){
    return (
        <Stack.Navigator 
            initialRouteName='Categories'  
            screenOptions={config}
        >
            <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options = {{
                    headerTitle : 'Meal Categories'
                }}
            />
            <Stack.Screen 
                name="CategoryMeal" 
                component={CategoryMealsScreen} 
                
            />
            <Stack.Screen 
                name="MealDetail" 
                component={MealDetailScreen}
                options = {{
                    headerRight : ()=>{
                        return (
                            <Ionicons 
                                name="ios-star" 
                                size={24} 
                                color="white" 
                                style={{marginHorizontal : 12}}
                                onPress={()=>{console.log('Pressed');}}
                            />
                        )
                    }
                }}
            />
        </Stack.Navigator>
    )
};




let FavNavigator = ()=>{
    return (
        <Stack.Navigator
            initialRouteName='Favorites'
            screenOptions={config}
        >
            <Stack.Screen 
                name='Favorites' 
                component={FavoritesScreen} 
                options={{
                    headerTitle : "Favourite List"
                }}
            />
            <Stack.Screen 
                name='MealDetail' 
                component={MealDetailScreen}
            />
        </Stack.Navigator>
    )
}


let Tab = createBottomTabNavigator();
let MTab = createMaterialBottomTabNavigator();


let TabScreenConfig = (Platform.OS == 'android') 
    ?
    ()=>{
        return (
            <MTab.Navigator 
                activeColor='white'
                shifting = {true}
                screenOptions={{ 
                    headerShown: false ,
                    // tabBarInactiveTintColor : ,
                    // tabBarActiveTintColor : Colors.accent ,
                    // tabBarInactiveBackgroundColor : ,
                    // tabBarActiveBackgroundColor :

                    // tabBarShowLabel : false
                  

                }}
            >
                <MTab.Screen 
                    name='MealsNavigator' 
                    component={MealsNavigator} 
                    
                    options={{
                        tabBarIcon : (tabInfo)=>{
                            return <Ionicons 
                                    name="ios-restaurant" 
                                    size={24} 
                                    color= {tabInfo.color}
                                />
                        },
                        tabBarLabel : (
                            <Text 
                                style={{
                                    fontFamily : 'open-sans'
                                }}
                            >
                                Meals
                            </Text>
                        ) ,
                        tabBarColor : Colors.accent,
                    }}
                />
                <MTab.Screen 
                    name='FavoritesScreen' 
                    component={FavNavigator}
                    options={{
                        tabBarIcon : (tabInfo)=>{
                            return <Ionicons 
                                    name="ios-star" 
                                    size={24} 
                                    color= {tabInfo.color}
                                />
                        },
                        tabBarLabel : (
                            <Text 
                                style={{
                                    fontFamily : 'open-sans'
                                }}
                            >
                                Favorite
                            </Text>
                        ) ,
                        tabBarColor : Colors.primary
                    }}
                />
            </MTab.Navigator>
        )
    } 
    :
    ()=>{
        return (
            <Tab.Navigator 
                screenOptions={{ 
                    headerShown: false ,
                    // tabBarInactiveTintColor : ,
                    tabBarActiveTintColor : Colors.accent ,
                    // tabBarInactiveBackgroundColor : ,
                    // tabBarActiveBackgroundColor :

                    tabBarShowLabel : false
                }}
            >
                <Tab.Screen 
                    name='MealsNavigator' 
                    component={MealsNavigator} 
                    options={{
                        tabBarIcon : (tabInfo)=>{
                            return <Ionicons 
                                    name="ios-restaurant" 
                                    size={24} 
                                    color= {tabInfo.color}
                                />
                        },
                        tabBarLabel : 'Pavan'
                    }}
                />
                <Tab.Screen 
                    name='FavoritesScreen' 
                    component={FavoritesScreen}
                    options={{
                        tabBarIcon : (tabInfo)=>{
                            return <Ionicons 
                                    name="ios-star" 
                                    size={24} 
                                    color= {tabInfo.color}
                                />
                        },
                        tabBarLabel : 'Favorite' ,
                    }}
                />
            </Tab.Navigator>
        )
}


let FilterNavigation = ()=>{
    return (
        <Stack.Navigator
            screenOptions={config}
            initialRouteName='Filters'
            
        >
            <Stack.Screen 
                name='Filters' 
                component={FilterScreen} 
            />

            
        </Stack.Navigator>
    )
}

let Drawer = createDrawerNavigator();

let MainNavigator = ()=>{
    return (
        <Drawer.Navigator
            initialRouteName='FavNavigator'
            screenOptions={{
                headerShown : false,
                drawerActiveTintColor : 'white',
                drawerActiveBackgroundColor :Colors.primary ,
                drawerLabelStyle : {
                    fontFamily : 'open-sans-bold'
                }
                
            }}
        > 
            <Drawer.Screen 
                name='FavNavigator'
                component={TabScreenConfig}
                options={{
                    drawerLabel : 'Home'
                }}
            />
            <Drawer.Screen
                name='Filters'
                component={FilterNavigation}
            />
           
        </Drawer.Navigator>
    )
}

export default MainNavigator
