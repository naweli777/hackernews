import { useState } from "react";
import SearchTab from "../../components/SearchTab/SearchTab";

const Home = () => {
  const [search, setSearch] = useState("");

 
  const handleData = (e: any) => {
    console.log("child to parent");
    e.preventDefault();
    if(!search)
    {
        console.log("emoty")

    }
    else{
        console.log("here");
    }

    //API CALL IDHAR HOGA
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
