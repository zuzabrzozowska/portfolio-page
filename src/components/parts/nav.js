import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = ({ location }) => {
	const isOn = (url) => location && location.pathname === url;
	const onProject = location.pathname.includes('/project/');
	const onHome = isOn('/');
	const mobile = window.innerWidth < 768;
	const [ showNav, setShowNav ] = useState(mobile || !onHome);
	const [ transparent, setTransparent ] = useState(onProject);
	const [showMenu, setShowMenu] = useState(false)

	useEffect(() => {
		setShowNav(!(onHome && !mobile)); // dont show Nav on home
		setTransparent(onProject && !mobile);
		setShowMenu(false)

		const handleScroll = () => {
			if (!onHome || mobile) return;
			window.scrollY === 0 && setShowNav(false);
			window.scrollY > 50 && setShowNav(true);
		};

		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, [location]);

	return (
		<nav className={`page-padding ${showNav ? '' : 'd-none'} ${transparent ? 'bg-transparent' : ''}`}>
			<Link to="/" className="text-cursive text-small pb-2" style={{ color: 'var(--pink)' }}>
				zuzanna
				<br />
				brzozowska
			</Link>
			{mobile ? (
				<div className="p-1 mt-2">
					<div onClick={() => setShowMenu(!showMenu)}>
						<span className="btn-menu__bars" />
						<span className="btn-menu__bars" />
						<span className="btn-menu__bars" />
					</div>
					<div className={`box ${showMenu ? "box--slide-from-right" : ""}`}>
						<li className="box-item">
							<Link to="/" className="text-uppercase text-medium position-relative">
								<span>work</span>
								{(isOn('/') || onProject) && <div className="nav-img nav-circle" />}
							</Link>
						</li>
						<li className="box-item">
							<Link to="/about" className="text-uppercase text-medium position-relative">
								<span>about</span>
								{isOn('/about') && <div className="nav-img nav-line" />}
							</Link>
						</li>
					</div>
				</div>
			) : (
				<div className="links pb-3 pt-3">
					<Link to="/" className="text-uppercase text-medium position-relative">
						<span className="mr-5">work</span>
						{(isOn('/') || onProject) && <div className="nav-img nav-circle" />}
					</Link>
					<Link to="/about" className="text-uppercase text-medium position-relative">
						<span>about</span>
						{isOn('/about') && <div className="nav-img nav-line" />}
					</Link>
				</div>
			)}
		</nav>
	);
};

export default withRouter(Nav);
