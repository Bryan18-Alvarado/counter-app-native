import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FAB from './components/FAB'

export default function App() {
  const [teamA, setTeamA] = useState(0)
  const [teamB, setTeamB] = useState(0)

  const incrementA = () => setTeamA((prev) => prev + 1)
  const decrementA = () => setTeamA((prev) => (prev > 0 ? prev - 1 : prev))

  const incrementB = () => setTeamB((prev) => prev + 1)
  const decrementB = () => setTeamB((prev) => (prev > 0 ? prev - 1 : prev))

  const reset = () => {
    setTeamA(0)
    setTeamB(0)
  }

  const getColor = (team: 'A' | 'B') => {
    if (teamA === teamB) return '#48494a'

    return team === 'A'
      ? teamA > teamB
        ? 'green'
        : 'red'
      : teamB > teamA
        ? 'green'
        : 'red'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcador del Juego</Text>

      <View style={styles.scoreContainer}>
        <Text style={[styles.score, { color: getColor('A') }]}>A: {teamA}</Text>
        <Text style={[styles.score, { color: getColor('B') }]}>B: {teamB}</Text>
      </View>

      <FAB
        label="+1 A"
        onPress={incrementA}
        position="right"
        bottomOffset={60}
      />
      <FAB
        label="-1 A"
        onPress={decrementA}
        position="right"
        bottomOffset={140}
      />

      <FAB
        label="+1 B"
        onPress={incrementB}
        position="left"
        bottomOffset={60}
      />
      <FAB
        label="-1 B"
        onPress={decrementB}
        position="left"
        bottomOffset={140}
      />

      <FAB label="Reset" onPress={reset} position="center" bottomOffset={180} />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef3f7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  scoreContainer: {
    flexDirection: 'row',
    gap: 20
  },
  score: {
    fontSize: 50,
    fontWeight: 'bold'
  }
})
