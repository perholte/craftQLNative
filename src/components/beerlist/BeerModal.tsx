import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';

const BeerModal = () => {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.centeredView}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}> Rating: 3/5 </Text>
						<Image
							source={require('../../resources/apple-touch-icon.png')}
							style={styles.image}
						/>
						<Text style={styles.modalText}>
							#002 American I.P.A. is a American IPA. It's a
							strong beer with an alcohol percentage of 7.1 %. The
							beer is brewed by Lazy Monk Brewing, and our users
							have given it a rating of 2.8.
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
				style={[styles.button, styles.buttonOpen]}
				onPress={() => setModalVisible(true)}
			>
				<Text style={styles.textStyle}>Tuborg</Text>
				<Text style={styles.boldTextStyle}>Tuborg Pilsner</Text>
				<Text style={styles.textStyle}>Rating: 3/5</Text>
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
	centeredView: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 5,
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

/*
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 22,
		height: 100,
		width: '90%',
        */
