// import Users from "./Users"
import React, { Component } from 'react'
import UserClass from './UserClass'

// const About = () => {
//     return <div>
//         <h1>This is About Page</h1>
//         <h2>This is Namaste React</h2>
//         {/* <Users name="Akash"/> */}
//         <UserClass name="Akash Sharma" location="Haryana" />
//     </div>
// }
// export default About


export class About extends Component {

    constructor(props) {
        super(props)
    
    }
    componentDidMount() {
      
    }
    render() {
   
        return <div>
            <h1>This is About Page</h1>
            <h2>This is Namaste React</h2>
            <UserClass/>
        </div>
    }
}

export default About

