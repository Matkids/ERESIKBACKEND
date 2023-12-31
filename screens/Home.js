import React from 'react';
import { Heading, Center, Image, Text, Box, Divider, Stack, Flex, HStack, VStack, Button } from "native-base";
import { SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from "native-base";
import { Header } from '../components';
const LaundryScreen = () => {
  return (
    <>
      <Header title={"HOME"} />
      <Center flex={1}>
      </Center>
      <Box alignItems="center" p="5" position='absolute' top={40} left={25} right={25}>
        <Box w="80" rounded="lg" bg="muted.100" borderColor="primary.800" borderWidth="2">
          <Stack p="4" space={3}>
            <HStack space={2}>
              <HStack space={2} alignItems="center">
                <Avatar
                  bg="green.500"
                  source={{
                    uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  }}
                ></Avatar>
                <Text>ADMIN</Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
        <HStack space={3} justifyContent="center">
        <VStack space="2.5" mt="4" px="8">
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Button size="20" bg="primary.400" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
            }} shadow={"3"}>
              Icon 1
            </Button>
            <Text>Catatan</Text>
            <Button bg="primary.400" size="20" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
            }} shadow={"3"}>
              Icon 2
            </Button>
            <Text>Catatan</Text>
            <Button size="20" bg="primary.400" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
            }} shadow={"3"}>
              Icon 3
            </Button>
            <Text>Catatan</Text>
          </Stack>
        </VStack>
        <VStack space="2.5" mt="4" px="8">
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Button size="20" bg="primary.400" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
            }} shadow={"3"}>
              Icon 1
            </Button>
            <Text>Catatan</Text>
            <Button bg="primary.400" size="20" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
            }} shadow={"3"}>
              Icon 2
            </Button>
            <Text>Catatan</Text>
            <Button size="20" bg="primary.400" rounded="sm" _text={{
              color: "warmGray.50",
              fontWeight: "medium"
            }} shadow={"3"}>
              Icon 3
            </Button>
            <Text>Catatan</Text>
          </Stack>
        </VStack>
        

        </HStack>
      </Box>

    </>
  );
};


export default LaundryScreen;