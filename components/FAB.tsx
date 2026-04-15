import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface Props {
  label: string
  position?: 'left' | 'right' | 'center'
  bottomOffset?: number
  onPress?: () => void
  onLongPress?: () => void
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = 'right',
  bottomOffset = 20
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.floatingButton,
        position === 'left' && { left: 20, bottom: bottomOffset },
        position === 'right' && { right: 20, bottom: bottomOffset },
        position === 'center' && { alignSelf: 'center', bottom: bottomOffset },
        pressed && styles.pressed
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    backgroundColor: '#1ba0f9',
    padding: 20,
    borderRadius: 15,
    elevation: 3
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.9
  }
})
