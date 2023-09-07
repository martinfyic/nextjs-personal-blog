import { getPostBySlug, markdownToHtml } from '@/lib';
import markdownStyles from './markdown-styles.module.css';

export default async function Post({ params }: { params: { slug: string } }) {
	const post = getPostBySlug(params.slug, ['title', 'author', 'content']);

	const content = await markdownToHtml(post.content || '');

	return (
		<div className='w-3/4 mx-auto'>
			<main>
				<div className='w-full h-16  dark:text-white'>
					<h1 className='text-4xl font-semibold'>{post.title}</h1>
					<p className='text-gray-400'>{post.author}</p>
					<div
						className={markdownStyles['markdown']}
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
			</main>
			<div
				id='page-bottom-spacer'
				className='h-16'
			/>
		</div>
	);
}
