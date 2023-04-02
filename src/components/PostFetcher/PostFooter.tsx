import { PostType } from './Types';

interface PostFooterProps {
	post: PostType;
	onFilter: (tag: string) => void;
}

const PostFooter = ({ post, onFilter }: PostFooterProps) => {
	return (
		<div className="card-footer">
			<div className="btn-group btn-group-small">
				{post.tags.map((tag) => (
					<button
						key={tag}
						type="button"
						className="btn btn-outline-secondary text-capitalize"
						onClick={() => onFilter(tag)}>
						{tag}
					</button>
				))}
			</div>
		</div>
	);
};

export default PostFooter;
