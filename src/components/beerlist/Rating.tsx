import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { Beer, useRateBeerMutation } from '../../__generated__/graphql';

export interface RatingProps {
	id: string;
}

const Rating: React.FC<RatingProps> = ({ id }) => {
	const [rating, setRating] = useState<number>(1);

	const [rateBeerMutation] = useRateBeerMutation({
		variables: {
			beerId: id,
			rating: rating,
		},
	});

	const submitRating = () => {
		if (rating >= 1 && rating <= 5) {
			rateBeerMutation();
		}
	};

	return (
		<View>
			<View style={styles.container}>
				<Pressable
					style={styles.ratingImage}
					onPress={() => {
						if (rating > 1) {
							setRating(rating - 1);
						}
					}}
				>
					<AntDesign
						name='minus'
						size={20}
						color='red'
						style={styles.ratingPlusOrMinus}
					/>
				</Pressable>
				<Text>{rating}</Text>
				<Pressable
					style={styles.ratingImage}
					onPress={() => {
						if (rating < 5) {
							setRating(rating + 1);
						}
					}}
				>
					<AntDesign
						name='plus'
						size={20}
						color='green'
						style={styles.ratingPlusOrMinus}
					/>
				</Pressable>
			</View>
			<Pressable
				style={[styles.button, styles.rateButton]}
				onPress={() => submitRating()}
			>
				<Text style={styles.textStyle}>Rate Beer</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		height: 70,
		marginTop: 20,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	textStyle: {
		color: 'rgba(117, 56, 19, 255)',
		textAlign: 'center',
	},
	ratingImage: {
		margin: 'auto',
		marginLeft: 10,
		marginRight: 10,
	},
	ratingPlusOrMinus: {
		marginLeft: 10,
		marginRight: 10,
	},
	rateButton: {
		marginTop: -40,
		marginBottom: 40,
		backgroundColor: 'rgba(232, 205, 102, 255)',
	},
});

export default Rating;
