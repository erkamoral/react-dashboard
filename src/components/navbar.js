import React from 'react';
import '../styles/styles_navbar.css';
import '../assets/styles.css'
import { Link , BrowserRouter as Router } from "react-router-dom";

//creats logo for base
class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <label  className="nav-link">
                    <span className="link-text text-yellow-400 logo-text">Malwation</span>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="angle-double-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="fa-angle-double-right fa-w-14 fa-5x"
                    >
                        <g className="fa-group">
                        <path
                            fill="#ede7f6"
                            d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                            className="fa-secondary"
                        ></path>
                        <path
                            fill="#ede7f6"
                            d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                            className="fa-primary"
                        ></path>
                        </g>
                    </svg>
                </label>
            </div>
        );
    }
}
// creates NavItem for render all navbar
class NavItem extends React.Component {
    render() {
        const {svg} = this.props;
        return (   
            <li className="nav-item" >
                <Router> 
                <Link to={svg.link_path}  style={{ textDecoration: 'none',  color: 'inherit'}} >
                <label className="nav-link">
                    <svg
                        aria-hidden={svg.aria_hidden}
                        focusable={svg.falsable}
                        data-prefix={svg.prefix}
                        data-icon={svg.dataIcon}
                        role={svg.role}
                        xmlns={svg.xmlns}
                        viewBox={svg.viewBox}
                        className={svg.svg_className}
                    >
                        <g className="fa-group">
                            <path
                                fill={svg.path_fill1}
                                d={svg.path_d1}
                                className={svg.path_className1}
                            ></path>
                            <path
                                fill={svg.path_fill2}
                                d={svg.path_d2}
                                className={svg.className2}
                            ></path>
                        </g>
                    </svg>
                    <span className="link-text text-yellow-400">
                        {svg.link_text}
                    </span>
                </label>
                </Link>
                </Router>
            </li>
        );
    }
}

class Nav extends React.Component {
   state={
       //navitems attributes
        svg_list:[
            {
                aria_hidden:"true",
                falsable:"false",
                prefix:"fas",
                dataIcon:"plus",
                role:"img",
                xmlns:"http://www.w3.org/2000/svg",
                viewBox:"0 0 576 512",
                svg_className:"fa-plus fa-w-18 fa-9x",
                path_fill1:"#ede7f6",
                path_d1:"M 416 208 H 272 V 64 c 0 -17.67 -14.33 -32 -32 -32 h -32 c -17.67 0 -32 14.33 -32 32 v 144 H 32 c -17.67 0 -32 14.33 -32 32 v 32 c 0 17.67 14.33 32 32 32 h 144 v 144 c 0 17.67 14.33 32 32 32 h 32 c 17.67 0 32 -14.33 32 -32 V 304 h 144 c 17.67 0 32 -14.33 32 -32 v -32 c 0 -17.67 -14.33 -32 -32 -32 Z",
                path_className1:"fa-secondary",
                path_fill2:"#ede7f6",
                path_d2:"M 416 208 H 272 V 64 c 0 -17.67 -14.33 -32 -32 -32 h -32 c -17.67 0 -32 14.33 -32 32 v 144 H 32 c -17.67 0 -32 14.33 -32 32 v 32 c 0 17.67 14.33 32 32 32 h 144 v 144 c 0 17.67 14.33 32 32 32 h 32 c 17.67 0 32 -14.33 32 -32 V 304 h 144 c 17.67 0 32 -14.33 32 -32 v -32 c 0 -17.67 -14.33 -32 -32 -32 Z",
                className2:"fa-primary",
                link_text:"Create",
                link_path:"create"
            },
            {
                aria_hidden:"true",
                falsable:"false",
                prefix:"fas",
                dataIcon:"compass",
                role:"img",
                xmlns:"http://www.w3.org/2000/svg",
                viewBox:"0 0 512 512",
                svg_className:" fa-compass fa-w-16 fa-5x",
                path_fill1:"#ede7f6",
                path_d1:"M 347.94 129.86 L 203.6 195.83 a 31.938 31.938 0 0 0 -15.77 15.77 l -65.97 144.34 c -7.61 16.65 9.54 33.81 26.2 26.2 l 144.34 -65.97 a 31.938 31.938 0 0 0 15.77 -15.77 l 65.97 -144.34 c 7.61 -16.66 -9.54 -33.81 -26.2 -26.2 Z m -77.36 148.72 c -12.47 12.47 -32.69 12.47 -45.16 0 c -12.47 -12.47 -12.47 -32.69 0 -45.16 c 12.47 -12.47 32.69 -12.47 45.16 0 c 12.47 12.47 12.47 32.69 0 45.16 Z M 248 8 C 111.03 8 0 119.03 0 256 s 111.03 248 248 248 s 248 -111.03 248 -248 S 384.97 8 248 8 Z m 0 448 c -110.28 0 -200 -89.72 -200 -200 S 137.72 56 248 56 s 200 89.72 200 200 s -89.72 200 -200 200 Z",
                path_className1:"fa-secondary",
                path_fill2:"#ede7f6",
                path_d2:"M 347.94 129.86 L 203.6 195.83 a 31.938 31.938 0 0 0 -15.77 15.77 l -65.97 144.34 c -7.61 16.65 9.54 33.81 26.2 26.2 l 144.34 -65.97 a 31.938 31.938 0 0 0 15.77 -15.77 l 65.97 -144.34 c 7.61 -16.66 -9.54 -33.81 -26.2 -26.2 Z m -77.36 148.72 c -12.47 12.47 -32.69 12.47 -45.16 0 c -12.47 -12.47 -12.47 -32.69 0 -45.16 c 12.47 -12.47 32.69 -12.47 45.16 0 c 12.47 12.47 12.47 32.69 0 45.16 Z M 248 8 C 111.03 8 0 119.03 0 256 s 111.03 248 248 248 s 248 -111.03 248 -248 S 384.97 8 248 8 Z m 0 448 c -110.28 0 -200 -89.72 -200 -200 S 137.72 56 248 56 s 200 89.72 200 200 s -89.72 200 -200 200 Z",
                className2:"fa-primary",
                link_text:"Track",
                link_path:"track"
            },
            {
                aria_hidden:"true",
                falsable:"false",
                prefix:"far",
                dataIcon:"credit-card",
                role:"img",
                xmlns:"http://www.w3.org/2000/svg",
                viewBox:"0 0 640 512",
                svg_className:"  fa-credit-card fa-w-20 fa-5x",
                path_fill1:"#ede7f6",
                path_d1:"M 527.9 32 H 48.1 C 21.5 32 0 53.5 0 80 v 352 c 0 26.5 21.5 48 48.1 48 h 479.8 c 26.6 0 48.1 -21.5 48.1 -48 V 80 c 0 -26.5 -21.5 -48 -48.1 -48 Z M 54.1 80 h 467.8 c 3.3 0 6 2.7 6 6 v 42 H 48.1 V 86 c 0 -3.3 2.7 -6 6 -6 Z m 467.8 352 H 54.1 c -3.3 0 -6 -2.7 -6 -6 V 256 h 479.8 v 170 c 0 3.3 -2.7 6 -6 6 Z M 192 332 v 40 c 0 6.6 -5.4 12 -12 12 h -72 c -6.6 0 -12 -5.4 -12 -12 v -40 c 0 -6.6 5.4 -12 12 -12 h 72 c 6.6 0 12 5.4 12 12 Z m 192 0 v 40 c 0 6.6 -5.4 12 -12 12 H 236 c -6.6 0 -12 -5.4 -12 -12 v -40 c 0 -6.6 5.4 -12 12 -12 h 136 c 6.6 0 12 5.4 12 12 Z",
                path_className1:"fa-secondary",
                path_fill2:"#ede7f6",
                path_d2:"M 527.9 32 H 48.1 C 21.5 32 0 53.5 0 80 v 352 c 0 26.5 21.5 48 48.1 48 h 479.8 c 26.6 0 48.1 -21.5 48.1 -48 V 80 c 0 -26.5 -21.5 -48 -48.1 -48 Z M 54.1 80 h 467.8 c 3.3 0 6 2.7 6 6 v 42 H 48.1 V 86 c 0 -3.3 2.7 -6 6 -6 Z m 467.8 352 H 54.1 c -3.3 0 -6 -2.7 -6 -6 V 256 h 479.8 v 170 c 0 3.3 -2.7 6 -6 6 Z M 192 332 v 40 c 0 6.6 -5.4 12 -12 12 h -72 c -6.6 0 -12 -5.4 -12 -12 v -40 c 0 -6.6 5.4 -12 12 -12 h 72 c 6.6 0 12 5.4 12 12 Z m 192 0 v 40 c 0 6.6 -5.4 12 -12 12 H 236 c -6.6 0 -12 -5.4 -12 -12 v -40 c 0 -6.6 5.4 -12 12 -12 h 136 c 6.6 0 12 5.4 12 12 Z",
                className2:"fa-primary",
                link_text:"Credits",
                link_path:"credits"
            },
            {
                aria_hidden:"true",
                falsable:"false",
                prefix:"fad",
                dataIcon:"ticket-alt",
                role:"img",
                xmlns:"http://www.w3.org/2000/svg",
                viewBox:"0 0 512 512",
                svg_className:"  fa-ticket-alt fa-w-16 fa-7x",
                path_fill1:"#ede7f6",
                path_d1:"M 128 160 h 320 v 192 H 128 V 160 Z m 400 96 c 0 26.51 21.49 48 48 48 v 96 c 0 26.51 -21.49 48 -48 48 H 48 c -26.51 0 -48 -21.49 -48 -48 v -96 c 26.51 0 48 -21.49 48 -48 s -21.49 -48 -48 -48 v -96 c 0 -26.51 21.49 -48 48 -48 h 480 c 26.51 0 48 21.49 48 48 v 96 c -26.51 0 -48 21.49 -48 48 Z m -48 -104 c 0 -13.255 -10.745 -24 -24 -24 H 120 c -13.255 0 -24 10.745 -24 24 v 208 c 0 13.255 10.745 24 24 24 h 336 c 13.255 0 24 -10.745 24 -24 V 152 Z",
                path_className1:"fa-secondary",
                path_fill2:"#ede7f6",
                path_d2:"M 128 160 h 320 v 192 H 128 V 160 Z m 400 96 c 0 26.51 21.49 48 48 48 v 96 c 0 26.51 -21.49 48 -48 48 H 48 c -26.51 0 -48 -21.49 -48 -48 v -96 c 26.51 0 48 -21.49 48 -48 s -21.49 -48 -48 -48 v -96 c 0 -26.51 21.49 -48 48 -48 h 480 c 26.51 0 48 21.49 48 48 v 96 c -26.51 0 -48 21.49 -48 48 Z m -48 -104 c 0 -13.255 -10.745 -24 -24 -24 H 120 c -13.255 0 -24 10.745 -24 24 v 208 c 0 13.255 10.745 24 24 24 h 336 c 13.255 0 24 -10.745 24 -24 V 152 Z",
                className2:"fa-primary",
                link_text:"Tickets",
                link_path:"tickets"
            },
            {
                aria_hidden:"true",
                falsable:"false",
                prefix:"fas",
                dataIcon:"briefcase",
                role:"img",
                xmlns:"http://www.w3.org/2000/svg",
                viewBox:"0 0 576 512",
                svg_className:"  fa-briefcase fa-w-18 fa-7x",
                path_fill1:"#ede7f6",
                path_d1:"M 320 336 c 0 8.84 -7.16 16 -16 16 h -96 c -8.84 0 -16 -7.16 -16 -16 v -48 H 0 v 144 c 0 25.6 22.4 48 48 48 h 416 c 25.6 0 48 -22.4 48 -48 V 288 H 320 v 48 Z m 144 -208 h -80 V 80 c 0 -25.6 -22.4 -48 -48 -48 H 176 c -25.6 0 -48 22.4 -48 48 v 48 H 48 c -25.6 0 -48 22.4 -48 48 v 80 h 512 v -80 c 0 -25.6 -22.4 -48 -48 -48 Z m -144 0 H 192 V 96 h 128 v 32 Z",
                path_className1:"fa-secondary",
                path_fill2:"#ede7f6",
                path_d2:"M 320 336 c 0 8.84 -7.16 16 -16 16 h -96 c -8.84 0 -16 -7.16 -16 -16 v -48 H 0 v 144 c 0 25.6 22.4 48 48 48 h 416 c 25.6 0 48 -22.4 48 -48 V 288 H 320 v 48 Z m 144 -208 h -80 V 80 c 0 -25.6 -22.4 -48 -48 -48 H 176 c -25.6 0 -48 22.4 -48 48 v 48 H 48 c -25.6 0 -48 22.4 -48 48 v 80 h 512 v -80 c 0 -25.6 -22.4 -48 -48 -48 Z m -144 0 H 192 V 96 h 128 v 32 Z",
                className2:"fa-primary",
                link_text:"Management",
                link_path:"management"
            }
        ]
    }
    render() {
        return (
            <div className="nav-bar">
                <div className="navbar-nav">
                    <Logo/>
                    {this.state.svg_list.map((svg,key)=>(
                        <NavItem key={key} svg={svg}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default Nav