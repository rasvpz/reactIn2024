const bgStyle = {
    // width:"250px"
    }
    // css Object ends here
    
    
// const RestaurantCard = ({resName, Cuisines}) => 
    const RestaurantCard = (props) => {
        const{name, cuisines, cloudinaryImageId, avgRating} = props?.resData?.info
        // console.log(props?.resData?.info?.id)
        return (
            <div className="res-card">
            <img style={bgStyle} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_250,h_150/"+cloudinaryImageId} alt="rest-pic" />
                <h4>{name}</h4>
                <p>{cuisines.join(', ')}</p>
                <p>{avgRating}</p>
            </div>
        )
    }
    export default RestaurantCard