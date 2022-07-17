import { useState } from "react";
import SearchTab from "../../components/SearchTab/SearchTab";
import useNewsData from "../../hooks/useNewsData";
const Home = () => {
  const [search, setSearch] = useState("");

  const{isLoading, data} = useNewsData();

  const handleData = (e: any) => {
    console.log("child to parent");
    e.preventDefault();
    if (!search) {
      console.log({data});
    } else {
      console.log("empty");
    }
  };
  return (
    <div>
      <SearchTab
        handleData={handleData}
        setSearch={setSearch}
        search={search}
      />
    </div>
  );
};

export default Home;
