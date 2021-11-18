import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Beer, useRateBeerMutation } from '../../__generated__/graphql';
import { AntDesign } from '@expo/vector-icons';

interface BeerModalProps {
	beerItem: Beer;
}

const BeerModal: React.FC<BeerModalProps> = ({ beerItem }: {beerItem: Beer}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [rating, setRating] = useState<number>(0);

	const [rateBeerMutation] = useRateBeerMutation({
		variables: {
			beerId: beerItem.id,
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
			<Modal
				transparent={true}
				animationType='slide'
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}
				key={beerItem.id}
			>
				<View style={styles.modalStyle}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>
							{' '}
							Rating:{' '}
							{beerItem.rating
								? beerItem.rating.toPrecision(2) + ' / 5'
								: 'Not yet rated'}{' '}
						</Text>
						<Text style={styles.modalText}>
							{beerItem.name} is a(n) {beerItem.type}. It's a
							strong beer with an alcohol percentage of{' '}
							{(beerItem.abv * 100).toPrecision(2)} %. The beer is
							brewed by {beerItem.brand}, and{' '}
							{beerItem.rating
								? 'our users have given it a rating of ' +
								  beerItem.rating.toPrecision(2)
								: 'has not yet been rated' + '.'}
						</Text>
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
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<Pressable
				style={[styles.button, styles.buttonOpen, styles.modalStyle]}
				onPress={() => setModalVisible(true)}
			>
				<Text style={styles.textStyle}>{beerItem.type}</Text>
				<Text style={styles.boldTextStyle}>{beerItem.name}</Text>
				<Text style={styles.textStyle}>
					Rating:{' '}
					{beerItem.rating
						? beerItem.rating.toPrecision(2) + ' / 5'
						: 'Not yet rated'}
				</Text>
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
	modalStyle: {
		margin: 10,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: 'aliceblue',
	},
	buttonClose: {
		backgroundColor: 'rgba(232, 205, 102, 255)',
	},
	textStyle: {
		color: 'rgba(117, 56, 19, 255)',
		textAlign: 'center',
		//		fontFamily: 'Montserrat',  not a system font :(
	},
	boldTextStyle: {
		color: 'rgba(117, 56, 19, 255)',
		textAlign: 'center',
		fontWeight: 'bold',
		//		fontFamily: 'Montserrat',  not a system font :(
	},

	modalText: {
		marginBottom: 15,
		textAlign: 'center',
		color: 'rgba(117, 56, 19, 255)',
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
	},
	rateButton: {
		marginTop: -40,
		marginBottom: 40,
		backgroundColor: 'rgba(232, 205, 102, 255)',
	},
});

export default BeerModal;
