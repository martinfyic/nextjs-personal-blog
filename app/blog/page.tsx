import { PostPreview } from '@/components';
import { getAllPosts } from '@/lib';

export default function Blog() {
	const posts = getAllPosts(['title', 'date', 'excerpt', 'coverImage', 'slug']);

	return (
		<div className='container mx-auto px-5'>
			<main>
				<h1 className='text-center text-3xl'>All Posts</h1>

				<div className='h-12'></div>

				<div className='grid md:grid-cols-2 grid-cols-1 lg:gap-32 gap-8'>
					{posts.map((post, idx) => (
						<div key={idx}>
							<PostPreview post={post} />
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
