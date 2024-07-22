import { useEffect, useState } from "react";

const useRetaurantMenu = (resId) => {
    const [resById, setResById] = useState([]);
    
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        try {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.788949&lng=76.6542664&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
          // Filter restaurants by id
          const filteredRestaurants = restaurants.filter((rest) => rest?.info?.id.toString() === resId);
          console.log("filteredRestaurants", filteredRestaurants)
    
          setResById(filteredRestaurants);
        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      };
    //   notethe retun in custom hook
        return resById
}

export default useRetaurantMenu


