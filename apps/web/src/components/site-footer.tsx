import { Link } from 'react-router';
import { Instagram, Phone } from 'lucide-react';

function TikTok({ size = 20 }: { size?: number }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
		>
			<path d="M16 4v9.5a3.5 3.5 0 1 1-3.5-3.5" />
			<path d="M16 4a4 4 0 0 0 4 4" />
		</svg>
	);
}

export function SiteFooter() {
	return (
		<>
			<footer className="site-footer">
				<div>
					<Link to="/" className="footer-brand">Velvet Roll Co.</Link>
					<p>A little theatre. A little luxury.<br />A dessert experience to remember.</p>
					<a
						href="https://www.instagram.com/velvet_roll_co"
						target="_blank"
						rel="noreferrer"
						aria-label="Instagram @velvet_roll_co"
						style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
					>
						<Instagram size={20} /> @velvet_roll_co
					</a>
					<a
						href="https://www.tiktok.com/@velvet_roll_co"
						target="_blank"
						rel="noreferrer"
						aria-label="TikTok @velvet_roll_co"
						style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}
					>
						<TikTok size={20} /> @velvet_roll_co
					</a>
				</div>
				<div>
					<small>YOUR CELEBRATION</small>
					<Link to="/packages">Our packages</Link>
					<Link to="/find-my-package">Find my package</Link>
					<Link to="/quote">Get a quote</Link>
				</div>
				<div>
					<small>LET’S TALK</small>
					<a href="mailto:velvetrollco@gmail.com">velvetrollco@gmail.com</a>
					<a
						href="tel:+447871831084"
						aria-label="Call 07871 831084"
						style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
					>
						<Phone size={18} /> 07871 831084
					</a>
					<p>Glasgow & surrounding areas</p>
					<Link to="/contact">Contact us</Link>
				</div>
				<div className="footer-bottom">
					<span>© 2026 Velvet Roll Co.</span>
					<Link to="/privacy">Privacy & cookies</Link>
				</div>
			</footer>
			<div className="mobile-cta">
				<Link to="/quote">Get a Quote</Link>
				<Link to="/find-my-package">Find My Package</Link>
			</div>
		</>
	);
}
