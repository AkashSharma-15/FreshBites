import { useState } from "react"

const Users = (props) => {
    const [count, setCount] = useState(0)
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>

            <button onClick={() => {
                setCount(count + 1);
            }}>inc</button>
            <h2>Name :{props.name}</h2>
            <h3>Location : Haryana</h3>
            <h4>Contact : 9671245704</h4>
        </div>
    )
}

export default Users
