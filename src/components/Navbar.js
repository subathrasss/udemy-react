function Navbar() {
    return (

        <div className="navbar">
            <div className="navbar__s1">
                <h1 className="navbar__s1__title">Udemy</h1>
            </div>
            <div className="navbar__s2"><i class="fa-solid fa-magnifying-glass"></i>
                <input placeholder="search for anything here tech,business,art..."></input>
            </div>

            <div className="navbar__s3">
                <p>Courses</p>

                <div className="mylearning">
                    <p >My learning</p>
                    <div className="mylearning__popup">
                        <p>yet you did not purchase anything</p></div>
                </div>
                <i className="fa-solid fa-cart-shopping"></i>
                <i className="fa-solid fa-bell"></i>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="navbar__s4">

                <i class="fa-sharp fa-solid fa-bars"></i>
            </div>
            </div>)
}
            export  default Navbar