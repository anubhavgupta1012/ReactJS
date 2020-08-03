import React from 'react';
import ReactDOM from 'react-dom';

import App  from './App';


ReactDOM.render(<App />,document.getElementById('anu'));

class Tech{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }

    work(){
        console.log("Hey there I am gonaa Use ",
        this.name,
        " tech and it is ",
        this.type,
        " type of Technology ");
    }
}
// const tech1=;
new Tech("Java","Backend").work();
// const tech2=;
new Tech("React","Frontend").work();

class Technologies extends Tech{
    constructor(name,type,popularity){
        super(name,type);
        this.popularity=popularity;
            }

popularityM(){
    console.log("Popularity of ",this.name," is",this.popularity);
        }
}
const technology= new Technologies("Postgres","SQL",".9");
technology.work();
technology.popularityM();