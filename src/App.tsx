import React from 'react';
import Button from "./button/Button";
import { ReactComponent as Icon } from "./button/umbrella.svg";
import styles from "./App.module.css";

function App() {
	return (
		<div className={styles.App}>
			<div className={styles.col}>
				<Button>Primary</Button>
				<Button Icon={Icon}>Primary</Button>
				<Button disabled>Primary Disabled</Button>
				<Button Icon={Icon} disabled>Primary Disabled</Button>
			</div>
			<div className={styles.col}>
				<Button variant="secondary" >Secondary</Button>
				<Button variant="secondary" Icon={Icon}>Secondary</Button>
				<Button variant="secondary" disabled>Secondary Disabled</Button>
				<Button variant="secondary" Icon={Icon} disabled>Secondary Disabled</Button>
			</div>
		</div>
	);
}

export default App;
