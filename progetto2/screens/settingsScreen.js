import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export function SettingsScreen() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Impostazioni</Text>
      <View style={styles.settingItem}>
        <Text>Notifiche Push</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
export default SettingsScreen;
