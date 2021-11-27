import * as React from 'react';
import { Button, View,Text} from 'react-native';
import { Title } from 'react-native-paper';

function KobitaFullScreen({ route }) {

  /* 2. Get the param */
  const { golpo_id,golpo_name,golpo_writer} = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Title>KobitaID</Title>
        <Text>golpo_id: {JSON.stringify(golpo_id)}</Text>
        
      </View>
    );
  }

  export default KobitaFullScreen;