type Props = {
  activeFilter: string;
  filterType: string;
  options: string[];
  handleFilter: (type: string, value: string) => void;
  getFilteredItemCount: (type: string, value: string) => number;
};

export default function EachFilter({
  activeFilter,
  filterType,
  options,
  handleFilter,
  getFilteredItemCount,
}: Props) {
  return (
    <div>
      <h4>{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</h4>
      <ul className="sub-menu">
        {options.map((value) => (
          <li
            key={value}
            data-type={filterType}
            className={activeFilter === value ? "active" : ""}
            onClick={() => handleFilter(filterType, value)}
          >
            <span>{value}</span>
            <span className="badge" id={value.toLowerCase()}>
              {getFilteredItemCount(filterType, value)}
            </span>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
