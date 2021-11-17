import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Beer } from '../../__generated__/graphql';

interface BeerModalProps {
	beerItem: Beer;
}

const BeerModal: React.FC<BeerModalProps> = ({
	beerItem,
}: {
	beerItem: Beer;
}) => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View>
			<Modal
				animationType='slide'
				transparent={true}
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
						<Image
							source={require('../../../resources/beer-icon.png')}
							style={styles.image}
						/>
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
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
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
});

export default BeerModal;
