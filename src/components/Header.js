import { Header } from "./styles"
import {BsMoon, BsSun} from "react-icons/bs"

const CountryHeader = ({theme, toggleTheme}) => {
	
	return(
		<Header>
			<div className="Home-nav">
				<h1>Where in the world ?</h1>
				
			qqq	<div className="mode">
					<span className="mode-icon" onClick={toggleTheme}>{theme === 'light' ? <BsMoon/> : <BsSun/>}</span>
					<h2>Dark Mode</h2>
				</div>
			</div>
		</Header>
	)
}

export default CountryHeader