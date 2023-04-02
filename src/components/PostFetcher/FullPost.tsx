import PostBody from "./PostBody";
import PostFooter from "./PostFooter";
import { PostType } from "./Types";

interface PostProps {
	post: PostType;
	onCollapse: (id: number) => void;
	onFilter: (tag: string) => void;
}

const FullPost = ({ post, onCollapse, onFilter }: PostProps) => {
	return (
		<div className="col">
			<div className="card h-100">
				<PostBody post={post}>
					<button
						type="button"
						className="btn btn-link"
						onClick={() => onCollapse(post.id)}>
						Collapse
					</button>
				</PostBody>
				<PostFooter post={post} onFilter={(tag: string) => onFilter(tag)} />
			</div>
		</div>
	);
};

export default FullPost;
