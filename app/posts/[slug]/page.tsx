import { getPostBySlug, markdownToHtml } from '@/lib';
import markdownStyles from './markdown-styles.module.css';
import { NextPage } from 'next';
import Image from 'next/image';

interface Props {
	params: { slug: string };
}
const PostPage: NextPage<Props> = async ({ params }) => {
	const post = getPostBySlug(params.slug, [
		'title',
		'author',
		'authorImage',
		'content',
		'coverImage',
		'topic',
	]);

	const content = await markdownToHtml(post.content || '');

	return (
		<div className='w-3/4 mx-auto'>
			<main>
				<div className='w-full h-16  dark:text-white'>
					<picture className='grid place-content-center mb-14'>
						<Image
							src={post.coverImage}
							alt={post.author}
							priority
							width={400}
							height={400}
							style={{ width: '100%' }}
						/>
					</picture>
					<h1 className='text-4xl font-semibold'>{post.title}</h1>
					<div className='flex flex-row justify-end items-end gap-2 my-4'>
						<p className='text-gray-400'>{post.author}</p>
						<Image
							className='rounded-full shadow'
							src={post.authorImage}
							alt={post.author}
							priority
							width={50}
							height={40}
						/>
					</div>
					<hr />
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
};

export default PostPage;
