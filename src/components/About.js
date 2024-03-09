const About = () => {
    return (
        <div className="w-6/12  my-4 mx-auto shadow-xl hover:shadow-2xl  ">
            <div className="p-20">
                <h1 className="text-2xl font-bold text-orange-600">About Us</h1>
                <p className="  text-orange-400 font-bold">
                    Welcome to FreshBites, the ultimate destination for seamless and delightful food delivery experiences. Founded on the principle of elevating the way people enjoy their favorite cuisines, we've curated a diverse selection of restaurants, from neighborhood gems to popular chains, all accessible at your fingertips through our intuitive platform. With a relentless focus on reliability and quality, we guarantee timely deliveries without compromising on the freshness and integrity of your meals. At FreshBites, we're not just delivering food; we're delivering satisfaction, convenience, and culinary delight, one order at a time. Join us on this gastronomic adventure and let us bring the flavors of the world to your doorstep.
                </p>

            </div>

        </div>)
}
export default About



// import UserContext from '../utils/UserContext'
// import UserClass from './UserClass'
// import React, { Component } from 'react'

// class About extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//                 <h1>About Class Component</h1>
//                 <div>
//                     LoggedIn User
//                     <UserContext.Consumer>
//                         {(data) => <h2>{data.loggedInUser}</h2>}
//                     </UserContext.Consumer>
//                 </div>
//                 <h2>FreshBites</h2>
//                 <UserClass name="first" location="Haryana" />
//             </div>
//         )
//     }
// }

// export default About

