import "./SearchTab";

interface SearchProps {
  handleData: (e: any) => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
const SearchTab = (props: SearchProps) => {
  const { handleData, search, setSearch } = props;

  const handleChange = (e: any) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="search">Search for stuff</label>
        <input
          id="search"
          type="search"
          placeholder="Search..."
          autoFocus
          required
          value={search}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleData}>
          Go
        </button>
      </form>
    </div>
  );
};

export default SearchTab;
