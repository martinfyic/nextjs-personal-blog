import { NextPage } from 'next';

export const HomePage: NextPage = () => {
	return (
		<main className='container mx-auto'>
			<div className='space-y-4'>
				<h1 className='text-center text-5xl'>NextJS 13 Blog</h1>
				<p className='text-center text-xl'>
					Welcome to a dynamic markdown blog using NextJS 13.
				</p>
			</div>
		</main>
	);
};

export default HomePage;
