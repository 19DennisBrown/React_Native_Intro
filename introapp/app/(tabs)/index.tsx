import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.stepContainer}  >
      <ThemedText>React native</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({

  stepContainer: {
    textAlign:'center',
    gap: 8,
    marginBottom: 8,
  },

});
