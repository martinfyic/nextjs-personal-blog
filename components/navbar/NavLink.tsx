import { FC, ReactNode } from 'react';
import Link from 'next/link';

interface Props {
	href: string;
	children: ReactNode;
}

export const NavLink: FC<Props> = ({ href, children }) => {
	return (
		<Link
			className='hover:text-gray-300 hover:underline'
			href={href}
		>
			{children}
		</Link>
	);
};
