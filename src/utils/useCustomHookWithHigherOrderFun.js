import { useEffect, useState } from "react";

const useCustomHookWithHigherOrderFun = () => {
    const [recomndAnsSubMenus, setRecomndAnsSubMenus] = useState([]);
    
    useEffect(() => {
        fetchRecomendedandEtc();
      }, []);
    
      const fetchRecomendedandEtc = async () => {
        try {
          const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=405798&catalog_qa=undefined&submitAction=ENTER");
          const json = await data.json();
          const restaurants = json?.data;
          const categories = restaurants.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
          setRecomndAnsSubMenus(categories)

        } catch (error) {
          console.error("Failed to fetch data", error);
        }
      };
        return recomndAnsSubMenus
}

export default useCustomHookWithHigherOrderFun


