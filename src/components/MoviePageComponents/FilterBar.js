import React, { Component } from 'react';
import './FilterBar.css';



class FilterBar extends Component{


  

    render() {
        // console.log('filterbar',this.props.fdata.Language)
        
        return (
                
            <div  className="FBContainer">
                <div className="FBbox" >
                  
                    <div className="FBFilter">Filter : 
                        <input type="checkbox" id="Language" name="Language" checked={this.props.fdata.Language} onChange={this.props.changeC} value="Language"/>
                        <label htmlFor="Language"> Language</label>
                        <input type="checkbox" id="Popularity" name="Popularity" checked={this.props.fdata.Popularity} onChange={this.props.changeC} value="Popularity"/>
                        <label htmlFor="Popularity"> Popularity</label>
                    </div>            
                    <div className="FBdropdown">
                        <button className="FBdropbtn">Prefrences <i className="fa fa-angle-down"></i></button>
                        <button className="FBApplybtn">Apply</button>
                        <div className="FBdropdown-content">
                           
                            <input type="checkbox" id="Director" name="Director" checked={this.props.fdata.Director} onChange={this.props.changeC} value="Director"/>
                            <label htmlFor="Director"> Director</label><br/>
                            <input type="checkbox" id="Genre" name="Genre" checked={this.props.fdata.Genre} onChange={this.props.changeC} value="Genre"/>
                            <label htmlFor="Genre"> Genre</label><br/>
                            <input type="checkbox" id="Actor" name="Actor" checked={this.props.fdata.Actor} onChange={this.props.changeC} value="Actor"/>
                            <label htmlFor="Actor"> Actor</label><br/>
                            
                            

                        </div>
                    </div>
                </div>
            </div>

        );
      }

}


export default FilterBar;