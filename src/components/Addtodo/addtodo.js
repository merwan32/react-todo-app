import React ,{ Component }from "react";
import './addtodo.css'


class Addtodo extends Component{
    state = {
        title :''
    }

    handelchange = (e) =>{
        this.setState({
            title:e.target.value
        })
    }

    handelsubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        e.target.value = ''
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelsubmit}>
                    <input type="text" placeholder="type your title here" id="title" onChange={this.handelchange}/>
                    <button>&#10549;</button>
                </form>
            </div>
        )
    }
}

export default Addtodo