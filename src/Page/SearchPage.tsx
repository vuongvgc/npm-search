import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RepositoriesList from "../components/RepositoriesList";
import Footer from "../components/Footer";
const SearchPage: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <RepositoriesList />
      <Footer />
    </div>
  );
};
export default SearchPage;
