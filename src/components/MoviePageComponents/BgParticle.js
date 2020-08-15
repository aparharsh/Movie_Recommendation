import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './BgParticle.css'


class BgParticle extends Component{


    render() {
        return (
            
            <div >
                <Particles className="full"
                 params={{
                    "particles": {

                        // "line_linked": {
            			// 	"shadow": {
            			// 		"enable": true,
            			// 		"color": "#3CA9D1",
            			// 		"blur": 5
            			// 	}
                        // },

                        "color":"#0077ff",
                        "rotate":1,
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 4
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onClick":{
                                "enable":true,
                                "mode":"push"
                            }
                        }
                    }
                }} 
                />
            </div>
            
        );
      }
}
export default BgParticle;