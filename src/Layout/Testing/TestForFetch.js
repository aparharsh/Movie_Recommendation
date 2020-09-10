import React, { Component } from 'react';
// import axios from './AxiosBaseUrl';
import '../Testing/TestForFetch.css';
import MovieState from '../../States/MovieState';
import Slider from 'infinite-react-carousel';

const settings =  {
    autoplay: false,
    centerMode: true,
    duration: 300,
    overScan: 1,
    slidesToShow: 4
};



class TestForFetch extends Component{

    constructor(props){
        super(props);

        this.state={
            ...MovieState,
            dat:'',
           name: 'saurabh',
           enNo: '0373',
           branch: 'me',
           arr: ['1', 'two', '3']
        }

    }

    componentWillMount(){
        // fetch('http://127.0.0.1:5000/recom')
        //    .then(response => response.json())
        //    .then(data => this.setState({dat:data}));
        // fetch('http://127.0.0.1:5000/recom',{
        //     method:'POST',
        //     headers:{'Content-type':'application/json'},
        //     body:JSON.stringify({title:'Avatar'})
        // }).then(response => response.json())
        // .then(d => console.log('dhgfgh',d))

        console.log('dagain')
    }

    clickhandler(){
        console.log('clicked');
         fetch('http://127.0.0.1:5000/recom',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({title:'Avatar'})
        }).then(response => response.json())
        .then(d => console.log('fetched',d))
    }
   

    render() {

      console.log('stateDat',this.state.dat);
        return (
           <div>
               <div>test for fetch</div>
               <button onClick={this.clickhandler}>Click</button>
               
           </div>
        );
      }
}
export default TestForFetch;