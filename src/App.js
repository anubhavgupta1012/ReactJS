import React ,{Component} from 'react';

class App extends Component{
constructor(){
    super();
this.state={ displayBio : false }
this.displayBioToggler = this.displayBioToggler.bind(this);
}

displayBioToggler(){
    this.setState({displayBio :!this.state.displayBio});
}

render(){
        return(
                    <div>
                    <h1>Hi , This is Anubhav.</h1>
                    <p> I am a software Engineer.</p>
                    <p>I currently work for Daffodil Softwares. </p>
                    {
                        this.state.displayBio?( 
                            <div>
                            <p>I am 23 years old.</p>
                            <p>Java is my Tech </p>
                            <p>I need to learn the things. </p>
                            <button onClick = {this.displayBioToggler}>Read Less</button>
                            </div>):(
                            <button onClick = {this.displayBioToggler}>Read More</button>                            
                            )
                    }
                    </div>
        )
         }
         
}
export default App;
