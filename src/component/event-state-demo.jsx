import React, {Component} from 'react';

class Greet extends Component {
    render() {
        if (this.props.isLogin) {
            return <div>Login</div>
        } else {
            return <div>Logout</div>
        }
    }
}

class Button extends Component {
    render() {
        if (this.props.isLogin) {
            return <button onClick={this.props.click}>点击Logout</button>
        } else {
            return <button onClick={this.props.click}>点击Login</button>
        }
    }
}

class LogControl extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: true
        };
    }
    handleClick(){
        this.setState(prevState=>({
            isLogin:!prevState.isLogin
        }))
    }
    render() {
        return (
            <div>
                <Greet isLogin={this.state.isLogin}/>
                <Button isLogin={this.state.isLogin} click={this.handleClick.bind(this)}/>
            </div>
        )

    }
    componentDidMount() {}


}

export default LogControl;