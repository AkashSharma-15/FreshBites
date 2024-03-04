import React from "react"
class UserClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "abc",
                login: "yxz",
                avatar_url: "https://fer.com"
            }
        }
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/AkashSharma-15")
        const json = await data.json()
        this.setState({
            userInfo: json
        })
        console.log(this.state.userInfo)
    }

    componentDidUpdate() {
        console.log('componentdidUpdate')
    }

    componentWillUnmount() {
        console.log('componentwillUnmount')
    }
    render() {

        const { name, login, avatar_url } = this.state.userInfo
        return (
            <div className="user-card">
                <h2>Name : {name}</h2>
                <h3>Login {login} </h3>
                <img src={avatar_url} alt="" />
                <h4>Contact : 9671245704</h4>
            </div>
        )
    }
}

export default UserClass