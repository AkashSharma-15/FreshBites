
import UserContext from '../utils/UserContext'
import UserClass from './UserClass'
import React, { Component } from 'react'

class About extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>About Class Component</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {(data) => <h2>{data.loggedInUser}</h2>}
                    </UserContext.Consumer>
                </div>
                <h2>FreshBites</h2>
                <UserClass name="first" location="Haryana" />
            </div>
        )
    }
}

export default About



















// const About = () => {
//     return <div>
//         <h1>This is About Page</h1>
//         <h2>This is Namaste React</h2>
//         {/* <Users name="Akash"/> */}
//         <UserClass name="Akash Sharma" location="Haryana" />
//     </div>
// }
// export default About

