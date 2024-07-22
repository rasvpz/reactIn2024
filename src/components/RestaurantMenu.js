import  useRetaurantMenu from '../utils/useRetaurantMenu'
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Get the id from the URL parameters
  const resById = useRetaurantMenu(resId)


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
