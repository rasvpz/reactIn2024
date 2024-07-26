import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchMe, setSearchMe] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.788949&lng=76.6542664&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantData(restaurants);
    setFilteredData(restaurants); // Set both original and filtered data
  };

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchMe(searchText);
    if (searchText) {
      const filtered = restaurantData.filter((res) => res?.info?.name.toLowerCase().includes(searchText));
      setFilteredData(filtered);
    } else {
      setFilteredData(restaurantData); // Reset to original data when search is cleared
    }
  };

  const handleFilter = () => {
    const avrageRatingData = restaurantData.filter((res) => res?.info?.avgRating > 4.3);
    setFilteredData(avrageRatingData);
  };

  return (
    filteredData?.length === 0 ? <Shimmer /> : 
    <div className="body">
      <div className="flex m-4">
        <div>
          <input className="ml-1 border border-black-900 mr-4 " 
            type="text" 
            value={searchMe} 
            onChange={handleSearch}
          />
        </div>
        <button  className="px-4 bg-green-100 filter-btn rounded-lg" onClick={handleFilter}>Top rated restaurant</button>
      </div>
      <div className="flex flex-wrap">
        {filteredData.map((restList) => (
         <Link key={restList.info.id} to={"/restaurants/"+restList.info.id}> <RestaurantCard resData={restList} id={restList.info.id} /></Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
