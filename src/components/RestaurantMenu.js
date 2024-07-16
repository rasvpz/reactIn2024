import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resById, setResById] = useState([]);
  const { resId } = useParams(); // Get the id from the URL parameters
  console.log('id', resId)

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

  return (
    <>
      
      <ul>
        {resById.length > 0 ? (
          resById.map((restaurant) => (          
            
            <li key={restaurant.info.id}>
              <h1>{restaurant.info.name}</h1>
              <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_250,h_150/"+restaurant?.info?.cloudinaryImageId} alt="rest-pic" />
              <ul>
                {restaurant.info.cuisines.map((cuisine, index) => (
                    
                <li key={index}>{cuisine}                     
                </li>
                ))}
              </ul>
            </li>
          ))
        ) : (
          <li>No restaurants found</li>
        )}
      </ul>
    </>
  );
};

export default RestaurantMenu;
