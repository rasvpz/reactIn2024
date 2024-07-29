import  useRetaurantMenu from '../utils/useRetaurantMenu'
import  useCustomHookWithHigherOrderFun from '../utils/useCustomHookWithHigherOrderFun'
import RestaurantCategory from './RestaurantCategory';
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams(); // Get the id from the URL parameters
  const resById = useRetaurantMenu(resId)
  const myAllResMenuuData = useCustomHookWithHigherOrderFun()

  return (
    <>
      
      <ul className='text-center'>
        {resById.length > 0 ? (
          resById.map((restaurant) => (          
            
            <li key={restaurant.info.id} className='flex'>
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
        <div  className="mt-8">
          {
            myAllResMenuuData.map((category) => 
            (
              <RestaurantCategory data={category.card.card}/>
          ))}
        </div>  
        

    </>
  );
};

export default RestaurantMenu;
