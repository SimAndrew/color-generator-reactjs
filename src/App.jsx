import { useState } from 'react';
import Form from './Form.jsx';
import ColorList from './ColorList.jsx';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
	const [colors, setColors] = useState(new Values('#2b5b73').all(10));

	const addColor = (color) => {
		try {
			const newColors = new Values(color).all(10);
			setColors(newColors);
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<main>
			<Form addColor={addColor} />
			<ColorList colors={colors} />
			<ToastContainer position="top-center" />
		</main>
	);
};

export default App;
