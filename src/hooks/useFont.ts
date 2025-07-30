// src/hooks/useFonts.ts
import * as Font from 'expo-font';

export async function loadFonts() {
  await Font.loadAsync({
    'Montserrat-ExtraBoldItalic': require('../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
  });
}
