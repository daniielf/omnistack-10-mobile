import React, { useEffect, useState } from 'react';

import styles from './Styles';
import { SafeAreaView, View, Text, Image} from 'react-native';

const ProfilePage = () => {
  const [user, setUser] = useState({name: 'fake', bio: 'fake', profile_url: '', techs: ''});
  return ( 
    <SafeAreaView>
      <View style={styles.contentView}>
        <Image style={styles.avatarImage} source={{uri: user ? user.profile_url : ''}} />
        <Text style={styles.userName} >{ user? user.name : ''}</Text>
        <Text style={styles.contentText}>{ user? user.bio : ''}</Text>
        <Text style={styles.contentText}>{ user? user.techs : ''}</Text>
        <Text style={styles.contentText}>Github: { user? 'www.github.com/' + user.name : ''}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfilePage;