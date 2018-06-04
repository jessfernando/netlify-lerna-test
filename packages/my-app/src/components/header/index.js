import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.less';
import shared from 'shared';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Preact App {shared.foo}</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Me</Link>
					<Link href="/profile/john">John</Link>
				</nav>
			</header>
		);
	}
}
