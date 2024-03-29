import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Menu, Container, Image, Icon } from 'semantic-ui-react';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ token }) => (
	<React.Fragment>
		<Head>
			<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/manifest.json" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="theme-color" content="#ffffff" />
			<link rel="stylesheet" type="text/css" href="/nprogress.css" />
		</Head>
		<Menu fixed="top" size="tiny" borderless>
			<Container>
			<Link href="/" passHref>
					<Menu.Item position="left" name="X">
					<Image src="/logo_black.png" />
					</Menu.Item>
				</Link>
				<Link href="/" prefetch passHref>
					<Menu.Item as="a" header>
					<Image src="/logo_land.png" />
					</Menu.Item>
				</Link>
				{token ? (
					<Link href="/myaccount" passHref>
						<Menu.Item>MY ACCOUNT</Menu.Item>
					</Link>
				) : (
					[
						// <Link href="/register" passHref prefetch key="register">
						//   <Menu.Item>REGISTER</Menu.Item>
						// </Link>,

						// <Link href="/login" passHref prefetch key="login">
						// 	<Menu.Item>LOGIN</Menu.Item>
						// </Link>
					]
				)}
				<Link href="/cart" passHref>
					<Menu.Item position="right" name="cart">
						<Icon name="cart plus" size="big" />
					</Menu.Item>
				</Link>
			</Container>
		</Menu>
	</React.Fragment>
);
