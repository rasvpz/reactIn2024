import { NAMED_EXPORT_EG } from "../utils/constant"

const bgStyle = {
    // width:"250px"
    }
    // css Object ends here
    
    
// const RestaurantCard = ({resName, Cuisines}) => 
    const RestaurantCard = (props) => {
        const{name, cuisines, cloudinaryImageId, avgRating} = props?.resData?.info
        return (
            <div className={NAMED_EXPORT_EG}>
            <img style={bgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_250,h_150/"+cloudinaryImageId} alt="rest-pic" />
                <h4 className="p-1 font-bold">{name}</h4>
                <p className="p-1">{cuisines.join(', ')}</p>
                <p className="p-1">{avgRating}</p>
            </div>

        )
    }
    export default RestaurantCard