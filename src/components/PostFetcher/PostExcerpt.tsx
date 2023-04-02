import PostBody from './PostBody';
import PostFooter from './PostFooter';
import { PostType } from './Types';

interface PostExcerptProps {
	post: PostType;
	onReadMore: (id: number) => void;
	onFilter: (tag: string) => void;
}

const PostExcerpt = ({ post, onReadMore, onFilter }: PostExcerptProps) => {
	return (
		<div className="col">
			<div className="card h-100">
				<PostBody post={post}>
					<button className="btn btn-link" onClick={() => onReadMore(post.id)}>
						Read More
					</button>
				</PostBody>
				<PostFooter post={post} onFilter={(tag: string) => onFilter(tag)} />
			</div>
		</div>
	);
};

export default PostExcerpt;
