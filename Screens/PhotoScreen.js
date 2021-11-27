import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
  View,
} from "native-base";
import database from "../Utils/Firebase";
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from "react-native";

function PhotoScreen() {
  var [objects, setObjects] = useState({});

  useEffect(() => {
    database.ref("PhotoPost").on("value", (snapshot) => {
      const response = snapshot.val();
      const keys = Object.keys(response);
      const questWithKeys = keys.map((id) => {
        return { ...response[id], id };

      });
      setObjects(questWithKeys.reverse());
      
    });
  }, []);

  return (
    <View>
      <FlatList
        data={objects}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <View>
            <Box bg="#ffffff" shadow={2} maxWidth="100%" marginTop={2}>
              <Stack space={4} p={[4, 4, 8]}>
                <Heading size={["md", "lg", "md"]} noOfLines={2}>
                  Panchmeshalii Officials
                </Heading>
                {item.post_image ? (
                  <Image
                    source={{ uri: item.post_image }}
                    alt="not found"
                    resizeMode="cover"
                    height={200}
                  />
                ) : (
                  <Image display="none" />
                )}
                <Text
                  lineHeight={[5, 5, 7]}
                  noOfLines={[4, 4, 2]}
                  color="gray.700"
                >
                  {item.desc}
                </Text>
                <Text color="gray.400">
                  {item.postdate} • {item.posttime}
                </Text>
              </Stack>
              {/* <Image
                source={{ uri: item.post_image }}
                alt="not found"
                resizeMode="cover"
                height={200}
              />
              <Text
                bold
                position="absolute"
                color="white"
                top={0}
                m={[4, 4, 8]}
              >
                Panchmeshalii
              </Text>
              <Stack space={4} p={[4, 4, 8]}>
                <Text color="gray.400">
                  {item.postdate} • {item.posttime}
                </Text>
                <Heading size={["md", "lg", "md"]} noOfLines={2}>
                  Panchmeshalii Officials
                </Heading>
                <Text
                  lineHeight={[5, 5, 7]}
                  noOfLines={[4, 4, 2]}
                  color="gray.700"
                >
                  {item.desc}
                </Text>
              </Stack> */}
            </Box>
          </View>
        )}
      />
    </View>
  );
}

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <PhotoScreen />
      </Center>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  postImage: {
    width: 100,
    height: 100,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
