import './search-panel.css';

const SearchPanel = () => {
  const searchText = "Поиск по записям...";
  return (
    <div className="search-panel">
      <input placeholder={searchText} />
    </div>
  );
};
export default SearchPanel;
