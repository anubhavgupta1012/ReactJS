import React, {Component} from 'react';

class App extends Component{
constructor(){
    super();
this.state={ displayBio : false }
this.displayBioToggler = this.displayBioToggler.bind(this);
}

displayBioToggler(){
    this.setState({displayBio : !this.state.displayBio});
    /*this.state.displayBio = !this.state.displayBio;  //bad practice in react
    Never directly modify the state
    because render() is called every time when setState() is called and In direct modification render method is 
    not called again to show the changes*/
}

render(){
        return(
                    <div>
                    <h1>Hi , This is Anubhav.</h1>
                    <p> I am a software Engineer.</p>
                    <p>I currently work for Daffodil Softwares. </p>
                    {
                        this.state.displayBio ? (
                            <div>
                                <p>I am 23 years old.</p>
                                <p>Java is my Tech </p>
                                <p>I need to learn the things. </p>
                                <button onClick={this.displayBioToggler}>Read Less</button>
                            </div>) : (
                            <button onClick={this.displayBioToggler}>Read More</button>
                            /* <button onClick = {this.displayBioToggler()}>Read More</button>
                              it is not called this way because it means that we are calling the method irrespective of clicking
                             so a recursive calling same method get produced. so we vaoid this  */
                        )
                    }
                    </div>
        )
         }
         
}
export default App;
