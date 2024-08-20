import './style.css';
import Logo from './images/React-logo.png';
import SvgLogo from './images/react.svg';

const App = () => {
	return (
		<>
			<h1>Hello</h1>
			<img src={Logo} alt="react-logo" width={300} height={200} />
			<img src={SvgLogo} alt="react-svg-logo" width={300} height={200} />
		</>
	);
};

export default App;
