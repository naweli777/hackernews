import axios from "axios";
import { useQuery } from "react-query";

const getNews =()=>
{
    return axios.get("https://hn.algolia.com/api/v1/search?query=test")
    .then((res)=>res.data)
}

const useNewsData =()=>
{
    return useQuery("hacker-news", getNews)
}

export default useNewsData;