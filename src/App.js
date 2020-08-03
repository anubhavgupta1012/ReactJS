import React ,{Component} from 'react';

class App extends Component{
constructor(){
    super();
this.state={ displayBio : true}
}
    // render(){
    //     let decs =this.state.displayBio?( 
    //         <div>
    //         <p>Hi This is Anubhav</p>
    //         <p>Java is my Tech </p>
    //         </div>):null;
    //     return(
    //                 <div>
    //                 <h1>Hi , This is the start of you are making billionaire</h1>
    //                 <p> This is the way you will learn things.</p>
    //                 {decs}
    //                 <p> Just keep Leaning</p>
    //                 </div>
    //     )
    //      }

    render(){
        return(
                    <div>
                    <h1>Hi , This is the start of you are making billionaire</h1>
                    <p> This is the way you will learn things.</p>
                    {
                        this.state.displayBio?( 
                            <div>
                            <p>Hi This is Anubhav</p>
                            <p>Java is my Tech </p>
                            </div>):null
                    }
                    <p> Just keep Leaning</p>
                    </div>
        )
         }
         
}
export default App;
