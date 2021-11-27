import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import { Ionicons,AntDesign  } from '@expo/vector-icons';
import HomeScreen from "./Screens/HomeScreen";
import { DrawerContent } from "./Screens/DrawerContent";
import AboutScreen from "./Screens/AboutScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import GolpoScreen from "./Screens/GolpoScreen";
import KobitaScreen from "./Screens/KobitaScreen";
import PhotoScreen from "./Screens/PhotoScreen";
import LoginPage from "./Screens/LoginPage";
import GolpoFullScreen from "./Screens/GolpoFullScreen";
import KobitaFullScreen from "./Screens/KobitaFullScreen";

import VideoScreen from "./Screens/VideoScreen";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          title: "Login",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={MyDrawer}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GolpoFull"
        component={GolpoFullScreen}
        options={({ route }) => ({ title: route.params.golpo_name })}
      />

      <Stack.Screen
        name="KobitaFull"
        component={KobitaFullScreen}
        options={({ route }) => ({ title: route.params.golpo_name })}
      />

      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Golpo" component={GolpoScreen} />
      <Drawer.Screen name="Kobita" component={KobitaScreen} />
      <Drawer.Screen name="Photos" component={PhotoScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      {/* <Drawer.Screen name="GolpoFull" component={GolpoFullScreen} /> */}
    </Drawer.Navigator>
  );
}
export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  if (isLogin) {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}
// export default function App() {
//   return (
//     <NavigationContainer>
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={HomeScreen}
//       options={{
//         title: 'Home',
//         drawerIcon: ({focused, size}) => (
//            <Ionicons
//               name="home"
//               size={24}
//               color={focused ? '#7cc' : '#ccc'}
//            />
//         ),
//      }} />
//      <Drawer.Screen name="Golpo" component={GolpoScreen}
//       options={{
//         title: 'Golpo',
//         drawerIcon: ({focused, size}) => (
//            <AntDesign
//               name="book"
//               size={24}
//               color={focused ? '#7cc' : '#ccc'}
//            />
//         ),
//      }}/>
//      <Drawer.Screen name="Kobita" component={KobitaScreen}
//       options={{
//         title: 'Kobita',
//         drawerIcon: ({focused, size}) => (
//            <AntDesign
//               name="book"
//               size={24}
//               color={focused ? '#7cc' : '#ccc'}
//            />
//         ),
//      }}/>
//      <Drawer.Screen name="Photos" component={PhotoScreen}
//       options={{
//         title: 'Photos',
//         drawerIcon: ({focused, size}) => (
//            <AntDesign
//               name="camera"
//               size={24}
//               color={focused ? '#7cc' : '#ccc'}
//            />
//         ),
//      }}/>
//      <Drawer.Screen name="Video" component={VideoScreen}
//       options={{
//         title: 'Video',
//         drawerIcon: ({focused, size}) => (
//            <AntDesign
//               name="videocamera"
//               size={24}
//               color={focused ? '#7cc' : '#ccc'}
//            />
//         ),
//      }}/>
//       <Drawer.Screen name="Profile" component={ProfileScreen}
//       options={{
//         title: 'Profile',
//         drawerIcon: ({focused, size}) => (
//            <AntDesign
//               name="profile"
//               size={24}
//               color={focused ? '#7cc' : '#ccc'}
//            />
//         ),
//      }}/>
//       <Drawer.Screen name="About" component={AboutScreen}
//       options={{
//         title: 'About',
//         drawerIcon: ({focused, size}) => (
//            <AntDesign
//               name="exclamationcircleo"
//               size={24}
//               color={focused ? '#7cc' : '#ccc'}
//            />
//         ),
//      }}/>

//     </Drawer.Navigator>
//   </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
