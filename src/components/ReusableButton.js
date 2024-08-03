const ReusableButton = ({onClick, label}) => {
    return (
        <button 
        onClick={onClick}
        className="px-2 py-1 mx-16 rounded-lg bg-black shadow-lg text-white"> 
        {label}
        </button>
    )
}
export default ReusableButton