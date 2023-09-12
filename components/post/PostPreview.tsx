import Image from 'next/image';
import Link from 'next/link';
import DateFormatter from '../DateFormatter';

type Items = {
	[key: string]: string;
};

export default function PostPreview({ post }: { post: Items }) {
	return (
		<div className='w-full mx-auto group'>
			<Link href={`/posts/${post.slug}`}>
				<Image
					alt={`cover image for ${post.title}`}
					src={post.coverImage}
					width={400}
					height={400}
					style={{ width: '100%' }}
				/>
				<div className='mt-4 space-y-2'>
					<p className='font-semibold text-xl group-hover:underline'>
						{post.title}
					</p>
					<DateFormatter dateString={post.date} />
					<p className='text-slate-400 font-semibold text-sm opacity-70'>
						Autor: {post.author}
					</p>
					<p>{post.excerpt}</p>
				</div>
			</Link>
		</div>
	);
}
