import { ReactNode } from 'react';

import { PostType } from './Types';

interface PostBodyProps {
	post: PostType;
	children: ReactNode;
}

const PostBody = ({ post, children }: PostBodyProps) => {
	return (
		<div className="card-body">
			<h3 className="card-title">{post.title}</h3>
			<p>{post.body}</p>
			{children}
		</div>
	);
};

export default PostBody;
