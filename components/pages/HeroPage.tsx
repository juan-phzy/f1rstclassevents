"use client";

import { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const HeroPage = () => {
	useEffect(() => {
		const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
		if (canvas) {
			const app = new Application(canvas);
			app.load('https://prod.spline.design/2Hu63dtVShvfUhqH/scene.splinecode');
		}
	}, []);

	return (
		<section className="hero-container">
			<div className="hero-content">
				<div className="hero-title">
					<span>Welcome to</span>
					<span>F1rst Class Events</span>
					<span className="mt-2 text-left text-2xl hidden md:block">
						Book Your Next Big Event & Let&apos;s Party!
					</span>
				</div>

				<div className="hero-3d">
					<canvas id="canvas3d" style={{ width: '100%', height: '100%', pointerEvents: 'none' }}></canvas>
				</div>

				<div className="hero-text md:hidden">
					<span>Book Your Next</span>{" "}
					<span>Big Event & Let&apos;s Party!</span>
				</div>
			</div>
		</section>
	);
};

export default HeroPage;
