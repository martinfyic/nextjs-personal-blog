import { FC } from 'react';
import { NavLink } from './NavLink';

const PATH_LINKS = [
	{ href: '/', name: 'Home' },
	{ href: '/blog', name: 'Blog' },
	{ href: '/about', name: 'About' },
];

export const Navbar: FC = () => {
	return (
		<div className='bg-neutral-800'>
			<nav className='container py-2 mx-auto'>
				<ul className='flex space-x-6 text-lg justify-center'>
					{PATH_LINKS.map(({ href, name }) => {
						return (
							<li key={href}>
								<NavLink href={href}>{name}</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};
