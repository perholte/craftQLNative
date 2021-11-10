import * as React from 'react';
import { Header, Image } from 'react-native-elements';

const CustomHeader = () => {
	return (
		<Header
			backgroundColor='rgba(117,56,19,255)'
			leftComponent={
				<Image
					source={require('../../../resources/beer-icon.png')}
					style={{ width: 25, height: 25 }}
				/>
			}
			rightComponent={{
				text: 'CraftQL',
				style: { color: 'rgba(220,179,53,255)' },
			}}
		/>
	);
};
export default CustomHeader;
