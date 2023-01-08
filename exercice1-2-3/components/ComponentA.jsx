import { Contacto } from '../clases/contacto';
import ComponentB from './ComponentB';

const ComponentA = () => {
	const defaultContact = new Contacto('Luis', 'Herdeth', 'luis.herdeth@gmail.com', 'true');

	return (
		<div>
			<h1>Component A</h1>
			<ComponentB task={defaultContact}></ComponentB>
		</div>
	);
};

export default ComponentA;
