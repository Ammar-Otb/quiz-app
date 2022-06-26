import { NavLink, Link } from "react-router-dom";
const Navbar = (props) => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark text-light">
				<div className="container-fluid">
					<a className="navbar-brand text-light" href="#">
						{props.siteName}
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
							{props.navItems.map((item) => {
								return (
									<li className="nav-item " key={item}>
										<Link to={`${item}`}>{item}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
