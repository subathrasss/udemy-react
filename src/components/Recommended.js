import c1 from "../c1.jpg"
import c2 from "../c2.jpg"
import c3 from "../c3.jpg"
import c4 from "../c4.jpg"
function Recommended (){
    return (
<div className="recommended">
<h1 className="recommended__title">Recommended for you</h1>
<p>Pick the best fit</p>
<div className="recommended__container">

    <div className="course-card">
        <img src={c1} alt="c1"></img>
        <h3>2023 Python Data Visualisation Master class</h3>
        <p>col Steele</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={c2} alt="c2"></img>
        <h3>2023 Web Development</h3>
        <p>col Steele</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={c3} alt="c3"></img>
        <h3>Master UI/UX designing with Figma</h3>
        <p>col Steele</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
    <div className="course-card">
        <img src={c4} alt="c4"></img>
        <h3>Basic to advanced Prog with EMC</h3>
        <p>col Steele</p>
        <p>4.9⭐⭐⭐</p>
        <p>449<del>1999</del></p>
    </div>
</div>
</div>
    )
}
export default Recommended