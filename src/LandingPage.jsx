import React from 'react'
import battery from './battery.png'

const LandingPage = () => {
	return (
		<div className="Landing-Page flex-container">
			<Header />
			<Content />
    	</div>
	)
}

const Header = () => {
	return (
		<div className="header flex-container">
			<div className="title">SocialMediaSite</div>
			<ul className="page-titles flex-container">
				<li><button>Home</button></li>
				<li><button>Products</button></li>
				<li><button>Pricing</button></li>
				<li><button>Support</button></li>
			</ul>
			<div className="actions">
				<button className="secondary login">Login</button>
				<button className="sign">Sign Up</button>
			</div>
		</div>
	)
}

const Content = () => {
	return (
		<div className="content flex-container">
			<div className="half-page text">
				<div className="hero-header">Remote Your jobs, Build a career that fits your life</div>
				<div className="hero-sub">Take your collaboration to the next level with our features. We have all the features that help manage your team's work, plus sophisticated and intuitive interface features.</div>
				<div className="cta-buttons flex-container">
					<button className="main">Start Free Trial</button>
					<button className="secondary">Watch Video</button>
				</div>
			</div>
			<div className="half-page">
				<img src={battery} alt="film" />
			</div>
		</div>
	)
}

export default LandingPage
