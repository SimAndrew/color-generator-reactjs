import { useState } from 'react';
import Form from './Form.jsx';
import ColorList from './ColorList.jsx';
import Values from 'values.js';

const App = () => {
	const [colors, setColors] = useState(new Values('#2b5b73').all(10));

	return (
		<main>
			<Form />
			<ColorList colors={colors} />
		</main>
	);
};

export default App;
