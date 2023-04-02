interface FilterBarProps {
	tags: string[];
	onClearFilter: () => void;
}

const FilterBar = ({ tags, onClearFilter }: FilterBarProps) => {
	return (
		<div className="btn-group pb-3">
			<button type="button" className="btn btn-primary" onClick={onClearFilter}>
				Clear Filters
			</button>
			{tags.map((tag) => (
				<button
					type="button"
					key={tag}
					className="btn btn-outline-secondary text-capitalize">
					{tag}
				</button>
			))}
		</div>
	);
};

export default FilterBar;
