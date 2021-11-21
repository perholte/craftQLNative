import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

interface IScrollToTopProps {
	onClick: () => void;
}

const ScrollToTop: FC<IScrollToTopProps> = (props: IScrollToTopProps) => {
	return (
		<AntDesign
			style={styles.button}
			onPress={props.onClick}
			name={'arrowup'}
			size={48}
			color={'#753813'}
		/>
	);
};

const styles = StyleSheet.create({
	button: {
		zIndex: 1,
		borderRadius: 1000,
	},
});

export default ScrollToTop;
