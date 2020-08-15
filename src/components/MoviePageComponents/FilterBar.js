import React, { Component } from 'react';
import './FilterBar.css';



class FilterBar extends Component{


  

    render() {
        
        return (
                
            <div  className="FBContainer">
                <div className="FBbox" >
                  
                    <div className="FBFilter">Filter : 
                        <input type="checkbox" id="Language" name="Language" value="Bike"/>
                        <label for="Language"> Language</label>
                        <input type="checkbox" id="Popularity" name="Popularity" value="Car"/>
                        <label for="Popularity"> Popularity</label>
                    </div>            
                    <div className="FBdropdown">
                        <button className="FBdropbtn">Prefrences <i class="fa fa-angle-down"></i></button>
                        <button className="FBApplybtn">Apply</button>
                        <div className="FBdropdown-content">
                           
                            <input type="checkbox" id="Director" name="Director" value="Car"/>
                            <label for="Director"> Director</label><br/>
                            <input type="checkbox" id="Genre" name="Genre" value="Boat"/>
                            <label for="Genre"> Genre</label><br/>
                            <input type="checkbox" id="Actor" name="Actor" value="Bike"/>
                            <label for="Actor"> Actor</label><br/>
                            
                            

                        </div>
                    </div>
                </div>
            </div>

        );
      }

}


export default FilterBar;