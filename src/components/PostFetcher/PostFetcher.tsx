import axios from "axios";
import { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import FullPost from "./FullPost";
import PostExcerpt from "./PostExcerpt";
import { PostType } from "./Types";

const rootUrl = "https://dummyjson.com/posts";

const PostFetcher = () => {
	const [excerpts, setExcerpts] = useState<{ [key: number]: PostType }>({});
	const [filteredExcerpts, setFilteredExcerpts] = useState<{
		[key: number]: PostType;
	}>({});
	const [posts, setPosts] = useState<{ [key: number]: PostType }>({});
	const [activeFilters, setActiveFilters] = useState<string[]>([]);

	const ids = Object.values(filteredExcerpts).map((excerpt) => excerpt.id);
	const isFiltered = Object.keys(excerpts).length !== Object.keys(filteredExcerpts).length;

	useEffect(() => {
		axios
			.get(rootUrl)
			.then((response) => {
				const responseExerpts = Object.fromEntries(
					response.data.posts
						.map((post: PostType) => ({
							...post,
							body: post.body.split(".")[0],
						}))
						.map((post: PostType) => [post.id, post])
				);

				setExcerpts(responseExerpts);
				setFilteredExcerpts(responseExerpts);
			})
			.catch((error) => console.error(error));
	}, []);

	const handleReadMore = (id: number) => {
		axios
			.get(`${rootUrl}/${id}`)
			.then((response) => {
				setPosts((prevPosts) => ({
					...prevPosts,
					[response.data.id]: response.data,
				}));
			})
			.catch((error) => console.error(error));
	};

	const handleCollapse = (id: number) => {
		const postsCopy = { ...posts };
		delete postsCopy[id];
		setPosts(postsCopy);
	};

	const handleFilter = (tag: string) => {
		setActiveFilters((prev) => [...prev, tag]);
		setFilteredExcerpts(
			Object.fromEntries(
				Object.entries(filteredExcerpts).filter((excerpt) => excerpt[1].tags.includes(tag))
			)
		);
	};

	const handleClearFilter = () => {
		setActiveFilters([]);
		setFilteredExcerpts(excerpts);
	};

	const getExcerpt = (id: number) => (
		<PostExcerpt
			key={id}
			post={excerpts[id]}
			onReadMore={handleReadMore}
			onFilter={handleFilter}
		/>
	);
	const getPost = (id: number) => (
		<FullPost key={id} post={posts[id]} onCollapse={handleCollapse} onFilter={handleFilter} />
	);

	return (
		<>
			<h2>Posts</h2>
			{isFiltered && <FilterBar tags={activeFilters} onClearFilter={handleClearFilter} />}
			<div className="row row-cols-1 row-cols-md-2 g-4">
				{ids.map((id) => (id in posts ? getPost(id) : getExcerpt(id)))}
			</div>
		</>
	);
};

export default PostFetcher;
