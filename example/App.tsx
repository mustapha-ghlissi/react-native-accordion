/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  Accordion,
  AccordionItem,
} from '@mustapha-ghlissi/react-native-accordion';
import Icon from 'react-native-vector-icons/AntDesign';

function Profile() {
  return (
    <View style={styles.profileUser}>
      <Image
        source={{
          uri: 'https://gravatar.com/avatar/b8ab07d2bc64d2b00a27b30a5c957434',
        }}
        resizeMode="cover"
        style={styles.avatar}
      />
      <View>
        <Text style={styles.userName}>Mustapha Ghlissi</Text>
        <Text style={styles.userDetails}>Senior Developer</Text>
        <Text style={styles.userDetails}>+216 93 84 08 04</Text>
      </View>
    </View>
  );
}

function Settings() {
  return (
    <View style={styles.formSettings}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Current Password</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>New Password</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Confirm the new Password</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.formGroup}>
        <Button title="Save" />
      </View>
    </View>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <Accordion
        compact
        titleStyle={styles.titleStyle}
        contentContainerStyle={styles.contentContainerStyle}>
        <AccordionItem
          leftIcon="account-circle"
          title="My profile"
          subTitle="Mustapha GHLISSI">
          <Profile />
        </AccordionItem>
        <AccordionItem leftIcon="cogs" title="Settings">
          <Settings />
        </AccordionItem>
        <AccordionItem
          leftIcon={<Icon name="notification" size={26} color={'#000'} />}
          title="Notifications">
          <Text>We are cuurently working on this section.</Text>
        </AccordionItem>
      </Accordion>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFF',
  },
  profileUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  userDetails: {
    fontSize: 12,
    color: '#000',
  },
  userName: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 48,
  },
  formGroup: {
    gap: 5,
  },
  label: {
    color: '#000',
  },
  input: {
    height: 40,
    borderWidth: 0.6,
    borderColor: '#CECECE',
    borderRadius: 4,
  },
  titleStyle: {
    fontWeight: 'bold',
  },
  contentContainerStyle: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  formSettings: {
    gap: 10,
  },
});

export default App;
