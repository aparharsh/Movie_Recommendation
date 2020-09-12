import React, { Component } from 'react';
import './FilterBar.css';



class FilterBar extends Component{

    constructor(props){
        super(props);
        this.state={
            lang : false,
            popu : false,
            dir : false,
            gen : false,
            act : false
        }
    }

    submit = () =>{
        
        fetch('/filter',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
                title : this.props.data.data.moviePage.title,
                cast : this.state.act ? 1 : 0,
                director : this.state.dir ? 1 : 0,
                genre : this.state.gen ? 1 : 0,
                language : this.state.lang ? 1 : 0,
                popularity : this.state.popu ? 1 : 0
            })
        }).then(response => response.json())
        .then(d => this.props.fSet(d))

        this.setState({
            lang : false,
            popu : false,
            dir : false,
            gen : false,
            act : false
        });
    }

    render() {
        
        return (
                
            <div  className="FBContainer">
                <div className="FBbox" >
                  
                    <div className="FBFilter">Filter : 
                        <input type="checkbox" id="Language" name="Language" checked={this.state.lang} onChange={ (e)=>this.setState({lang : e.target.checked}) } value="Language"/>
                        <label htmlFor="Language"> Language</label>
                        <input type="checkbox" id="Popularity" name="Popularity" checked={this.state.popu} onChange={(e)=>this.setState({popu : e.target.checked})} value="Popularity"/>
                        <label htmlFor="Popularity"> Popularity</label>
                    </div>            
                    <div className="FBdropdown">
                        <button className="FBdropbtn">Prefrences <i className="fa fa-angle-down"></i></button>
                        <button className="FBApplybtn" onClick={this.submit}>Apply</button>
                        <div className="FBdropdown-content">
                           
                            <input type="checkbox" id="Director" name="Director" checked={this.state.dir} onChange={(e)=>this.setState({dir : e.target.checked})} value="Director"/>
                            <label htmlFor="Director"> Director</label><br/>
                            <input type="checkbox" id="Genre" name="Genre" checked={this.state.gen} onChange={(e)=>this.setState({gen : e.target.checked})} value="Genre"/>
                            <label htmlFor="Genre"> Genre</label><br/>
                            <input type="checkbox" id="Actor" name="Actor" checked={this.state.act} onChange={(e)=>this.setState({act : e.target.checked})} value="Actor"/>
                            <label htmlFor="Actor"> Actor</label><br/>
                            
                            

                        </div>
                    </div>
                </div>
            </div>

        );
      }

}


export default FilterBar;