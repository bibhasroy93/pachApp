import React,{useState} from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export function DrawerContent(props) {

    const[isDarkTheme,setIsDarkTheme]=useState(false);

    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme);
    }
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/panchmeshalii-83e52.appspot.com/o/profile_images%2FwRNWIAZmbjNyymICwpAlL8RwjSn2.jpg?alt=media&token=87540849-eedc-45f5-bfba-a83a351c6419",
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Bibhas Roy</Title>
                <Caption style={styles.caption}>butunroy@gmail.com</Caption>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {props.navigation.navigate('Home')}}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="book-open-variant" color={color} size={size} />
            )}
            label="Golpo"
            onPress={() => {props.navigation.navigate('Golpo')}}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="book-outline" color={color} size={size} />
            )}
            label="Kobita"
            onPress={() => {props.navigation.navigate('Kobita')}}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="camera-outline" color={color} size={size} />
            )}
            label="Photos"
            onPress={() => {props.navigation.navigate('Photos')}}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="alpha-b-box-outline" color={color} size={size} />
            )}
            label="Blog"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {props.navigation.navigate('Profile')}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="alert-circle-outline" color={color} size={size} />
            )}
            label="About"
            onPress={() => {props.navigation.navigate('About')}}
          />
        </Drawer.Section>

         <Drawer.Section title="Preferences">
           <TouchableRipple onPress={()=>{toggleTheme()}}>
               <View style={styles.preference}>
                   <Text>Dark Theme</Text>
                   <View pointerEvents="none">
                   <Switch value={isDarkTheme}/>
                   </View>
                   </View>
                   </TouchableRipple>  
             </Drawer.Section>       
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem label="Terms and Conditions" onPress={() => {}} />
          <DrawerItem label="Privacy Policy" onPress={() => {}} />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
