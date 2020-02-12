import React, { useEffect, useState } from 'react';

import styles from './Styles';
import { SafeAreaView, View, Text, Image, Linking} from 'react-native';

const ProfilePage = () => {
  const [user, setUser] = useState({name: 'fake', bio: 'fake', avatar_url: '', techs: '', github_url: 'daniielf'});

  
  function openGithub() {
    Linking.openURL('http://www.github.com/' + user.github_url).catch((err) => {
      console.log('Err', err);
    });
  }

  return ( 
    <View style={styles.pageContent}>
      {
        user && user.avatar_url ? 
        <Image style={styles.avatarImage} source={{uri: user.avatar_url}} /> 
        :
        <Image style={styles.avatarImage} source={{uri: 'https://lh3.googleusercontent.com/proxy/9fwCgK_jfSaBuy6OXgE_0NbolLcErJcvVRHFbrXtGVc40XCQeylHlvgOLMuMXo1pTSjn2DewgSKwfS1oL14x68uATXmkj2k6AxRFGXPy__SWPIRdg7CobmM' }} />
      }
      <Text style={styles.userName} >{ user? user.name : ''}</Text>
      <Text style={styles.contentText}>{ user? user.bio : ''}</Text>
      <Text style={styles.contentText}>{ user? user.techs : ''}</Text>

      <Text onPress={openGithub} style={styles.contentTextLink}>{ user? 'OPEN GITHUB PROFILE': ''}</Text>
    </View>
  );
};

export default ProfilePage;