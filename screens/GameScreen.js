import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	Alert
} from "react-native";

import Card from "../components/Card";

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const randNumber = Math.floor(Math.random() * (max - min) + min);

	if (randNumber === exclude) {
		return generateRandomNumber(min, max, exclude);
	}

	return randNumber;
};

const GameScreen = ({ userChoice, onGameOverProp }) => {
	const [currentGuess, setCurrentGuess] = React.useState(
		generateRandomNumber(1, 100, userChoice)
	);
	const [rounds, setRounds] = React.useState(0);
	const currentLow = React.useRef(1);
	const currentHigh = React.useRef(100);

	const nextGuessHandler = (direction) => {

		const conditions = (direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice);

		if (conditions) {
			Alert.alert('You are lying', 'Thou shall not lie...', [{ text: 'Cancel', style: 'destructive' }]);

			return;
		}

		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}

		const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess);

		setCurrentGuess(nextNumber);
		setRounds(curRounds => curRounds + 1);
	}

	React.useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOverProp(rounds);
		}
	}, [currentGuess, userChoice, onGameOverProp]);

	return (
		<View style={{
			flex: 1,
			maxWidth: '100%',
			padding: 10,
			alignItems: 'center',
		}}>
			<Text
				style={{ fontSize: 18, marginBottom: 5 }}>Opponent's Guess</Text>
			<Card style={styles.summaryContainer}>
				<Text
					style={{ fontSize: 18, marginBottom: 10 }}>{currentGuess}
				</Text>
				<View style={{
					flexDirection: 'row',
					width: '100%',
					justifyContent: 'space-between',
					paddingHorizontal: 10
				}}>
					<Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')} />
					<Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')} />
				</View>
			</Card>
		</View>
	);
};


const styles = StyleSheet.create({
	summaryContainer: {
		width: '100%',
		maxWidth: '100%',
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	}
});

export default GameScreen;
