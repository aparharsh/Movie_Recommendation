import React, { Component } from 'react';
import '../Testing/AnimatingBg.css';
import Particles from 'react-particles-js';


class AnimatingBg extends Component{


    render() {
        return (
            
            <div className="full">
                <Particles
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
                >hiiii</Particles>
            <div className="box"></div>
            </div>
            
        );
      }
}
export default AnimatingBg;