import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Tarot } from './src/components/Tarot';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tarot />
    </GestureHandlerRootView>
  );
}
