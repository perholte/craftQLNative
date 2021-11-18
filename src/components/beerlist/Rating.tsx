import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { Beer, useRateBeerMutation } from '../../__generated__/graphql';

const Rating = ({ beer }: { beer: Beer }) => {
	const [rating, setRating] = useState<number>(0);

	const [rateBeerMutation] = useRateBeerMutation({
		variables: {
			beerId: beer.id,
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
			<Text style={styles.ratingNumber}>{rating}</Text>
			<View style={styles.ratingStyle}>
				<View style={styles.beerStyles}>
					<Pressable
						style={styles.ratingImage}
						onPress={() => {
							if (rating < 5) {
								setRating(rating + 1);
							}
						}}
					>
						<Image
							source={require('../../../resources/beer-icon.png')}
							style={styles.image}
						/>
					</Pressable>
					<Pressable
						style={styles.ratingImage}
						onPress={() => {
							if (rating > 0) {
								setRating(rating - 1);
							}
						}}
					>
						<Image
							source={require('../../../resources/beer-icon.png')}
							style={styles.image}
						/>
					</Pressable>
				</View>
				<View style={styles.ratingUpOrDown}>
					<AntDesign
						name='plus'
						size={20}
						color='green'
						style={styles.ratingPlusOrMinus}
					/>
					<AntDesign
						name='minus'
						size={20}
						color='red'
						style={styles.ratingPlusOrMinus}
					/>
				</View>
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
	image: {
		marginTop: 10,
		marginBottom: 25,
		width: 25,
		height: 25,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	textStyle: {
		color: 'rgba(117, 56, 19, 255)',
		textAlign: 'center',
		//		fontFamily: 'Montserrat',  not a system font :(
	},

	ratingStyle: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 40,
		marginTop: 10,
	},
	ratingImage: {
		margin: 'auto',
		marginLeft: 10,
		marginRight: 10,
	},
	ratingUpOrDown: {
		display: 'flex',
		flexDirection: 'row',
		marginLeft: 10,
		marginRight: 10,
	},
	beerStyles: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: -20,
		paddingBottom: 0,
	},
	ratingPlusOrMinus: {
		marginLeft: 10,
		marginRight: 10,
	},
	ratingNumber: {
		margin: 20,
		fontSize: 20,
		color: 'rgba(117, 56, 19, 255)',
		alignSelf: 'center',
	},
	rateButton: {
		marginTop: -40,
		marginBottom: 40,
		backgroundColor: 'rgba(232, 205, 102, 255)',
	},
});

export default Rating;
