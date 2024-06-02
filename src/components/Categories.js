import sale from "../saleimage.jpg"
function Categories() {
    return (
        <div>
        <div className="categories">
        <p>development</p>
        <p>business</p>
        <p>IT & Software</p>
        <p>Personal Development</p>
        <p>Design</p>
        <p>Marketing</p>
    </div>
   

    <div className="saleimage">
        <img src={sale} alt="saleimage"></img>
        <div className="saleimage__offer">
            <h1>24 Hours Flash sale to save</h1>
            <p>Get top courses for just rs499/-</p>
        </div>
    </div>
    </div>
    )
}
export default Categories