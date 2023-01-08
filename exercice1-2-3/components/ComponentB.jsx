// import { Contacto } from '../clases/contacto';
const ComponentB = ({ task }) => {
	return (
		<div>
			<hr />
			<h1>Name: {task.name}</h1>
			<h2>Lastname: {task.lastname}</h2>
			<h3>Email: {task.email}</h3>
			<h4>Contacto:{task.conect ? 'Contact ONLINE' : 'Contact OFFLINE'}</h4>
		</div>
	);
};
// ComponentB.propTypes = {
// 	task: PropTypes.instanceOf(Contacto),
// };
export default ComponentB;
