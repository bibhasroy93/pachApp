import * as React from "react";
import { Button, View, StyleSheet, Image } from "react-native";
import { Text, Avatar, Title, Caption } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ marginLeft: 15, flexDirection: "column" }}>
        <Title style={styles.title}>Panchmeshalii</Title>
        <Caption style={styles.caption}>Version 3.1</Caption>
      </View>
      <Avatar.Image source={require("../assets/icon.png")} size={200} />
      <Caption style={styles.caption1}>Ⓒ 2021 Panchmeshalii Inc.</Caption>
      <Caption style={styles.caption}>CONTACT</Caption>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={require("../assets/gmail.png")} />
        <View style={{ marginLeft: 15, flexDirection: "column" }}>
          <Caption style={styles.caption2}>panchmeshalii@gmail.com</Caption>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <Image source={require("../assets/linkedin.png")} />
        <View style={{ marginLeft: 15, flexDirection: "column" }}>
          <Caption style={styles.caption3}>/in/pratik-das-52b52a7b</Caption>
        </View>
      </View>
      <Caption style={styles.caption4}>App Developed by</Caption>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Image source={require("../assets/gmail.png")} />
        <View style={{ marginLeft: 15, flexDirection: "column" }}>
          <Caption style={styles.caption2}>butunroy@gmail.com</Caption>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 8 }}>
        <Image source={require("../assets/linkedin.png")} />
        <View style={{ marginLeft: 15, flexDirection: "column" }}>
          <Caption style={styles.caption3}>/in/bibhas-roy-97a79697</Caption>
        </View>
      </View>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 26,
    marginTop: 10,
    marginBottom: 3,
    fontWeight: "bold",
    alignItems: "center",
  },
  caption: {
    fontSize: 18,
    lineHeight: 18,
    marginBottom: 3,
    textAlign: "center",
  },
  caption1: {
    fontSize: 16,
    lineHeight: 28,
    marginTop: 5,
    textAlign: "center",
  },
  caption2: {
    fontSize: 14,
    lineHeight: 14,
    marginTop: 5,
    textAlign:"center",
  },
  caption3: {
    fontSize: 14,
    lineHeight: 14,
    marginTop: 5,
    textAlign: "center",
  },
  caption4: {
    fontSize: 18,
    lineHeight: 18,
    marginBottom: 3,
    marginTop: 20,
    textAlign: "center",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
