const RestrauntCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  // const {name, cuisines, cloudinaryImageId, avgRating} = restaurant.info; //Destructuring of prop
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="mehfil"
      ></img>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h4>{avgRating} ⭐</h4>
    </div>
  );
};

export default RestrauntCard;
