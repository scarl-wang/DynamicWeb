import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";

const SearchPage = () => {
  return (
    <div className="h-screen flex flex-col bg-orange-100">
      <Header />
      <Search></Search>
      <Footer />
    </div>
  );
};

export default SearchPage;
