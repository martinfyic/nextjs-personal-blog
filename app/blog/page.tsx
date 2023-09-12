import { NextPage } from 'next';

import { PostPreview } from '@/components';
import { getAllPosts } from '@/lib';

const BlogPage: NextPage = () => {
	const posts = getAllPosts([
		'title',
		'date',
		'excerpt',
		'coverImage',
		'slug',
		'topic',
		'author',
	]);

	return (
		<div className='container mx-auto px-5'>
			<main className='w-3/4 mx-auto mb-12'>
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
};

export default BlogPage;
