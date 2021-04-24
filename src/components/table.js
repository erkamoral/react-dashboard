import React from 'react';
import ReactDOM from 'react-dom'
import '../styles/styles_table.scss';
import '../assets/styles.css'
import * as Icons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import themida from '../assets/img/Themida.png'
import mitre from '../assets/img/mitre.png'
import ddos from '../assets/img/ddos.png'
import sql from '../assets/img/sql.png'

//for usage all icons
const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fab" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)

var store = {
    headerOffset: null
  };
  //table attributes
  let data = [
    {
      operating: "windows",//icon-name
      coding: "python",
      protect: themida,//image-name
      attack: mitre,
      tecnique_list: ["431234","431234","422323"],
      statu: "Completed",
      created: "Kağan IŞILDAK"
    },
    {
      operating: "linux",
      coding: "python",
      protect: themida,
      attack: ddos,
      tecnique_list: ["431234"],
      statu: "Completed",
      created: "Mehmet Erkam ORAL"
    },
    {
      operating: "ubuntu",
      coding: "python",
      protect: themida,
      attack: sql,
      tecnique_list: ["431234","432412"],
      statu: "In Progress",
      created: "Deli VAHİT"
    }            
  ];
  //headers
  let cols = [
    {
      icon: "OPERATING SYSTEM",
    },
    {
      icon: "LANGUAGE",
    },
    {
      icon: "PROTECTION",
    },
    {
      icon: "ATTACK",
    },    
    {
        icon: "TECHNIQUES",
    },
    {
        icon: "STATUS",
    },
    {
        icon: "CREATED BY",
    }
  ]
  //creates item for each technique
  class TechniqueItem extends React.Component {

    render() {
        const {techtext} = this.props;
        return (
            <div className="technique">{techtext}</div>
        );
    }
}
//creates item for each statu by status property
class StatusItem extends React.Component {
    render() {
        let statu_class = "bg-green-300"
        const {status} = this.props;
        console.log(status)
        if (status === "In Progress") {
            statu_class = "bg-yellow-300"
        }
        return (
            <div className={'rounded-3xl w-24 text-center text-white ' + statu_class}>{status}</div>
        );
    }
}
  //creates each rowItem
  class RowItem extends React.Component {
    
    constructor() {
      super();
      
      this.state = {
        open: false
      }
    }  
    
    toggleRow(e) {
      console.log('toggleRow');
      
      this.setState({open: !this.state.open});
    }
    
    
    render(){
      
      let classes = '';
      if (this.state.open) {
        classes = 'open';
      }

      return (
        <li onClick={this.toggleRow.bind(this)} className={classes}>
          <div className="heading">
            <div className="col">
            <FontAwesomeIcon icon={['fab' ,this.props.operating]} size="2x" color="7B43A1"/></div>
            <div className="col">
            <FontAwesomeIcon icon={['fab' ,this.props.coding]} size="2x" color="7B43A1"/>
            </div>
            <div className="col">
            <img src={this.props.protect} style={{maxWidth: "200px"}} alt="Logo" />
            </div>
            <div className="col">
            <img src={this.props.attack} style={{maxWidth: "100px"}} alt="Logo"/>
            </div> 
            <div className="col">
            {this.props.tecnique_list.map((tecnique,key)=>(
                <TechniqueItem techtext={tecnique} key={key} />
            ))}
            </div>
            <div className="col">
                <StatusItem status={this.props.statu} /> 
            </div>
            <div className="col" style={{fontFamily:"monospace"}}>{this.props.created}</div> 
          </div>
          <RowContent open={this.state.open}/>
          {this.props.children}
        </li>
      )
    }
    
  };
  
  //cretes rowcontent for details
  class RowContent extends React.Component {
    
    clicker() {
      
    }
    
    render(){
        var title = String.raw`
        Buraya detay gelecek.
        ███    ███  █████  ██      ██     ██  █████  ████████ ██  ██████  ███    ██ 
        ████  ████ ██   ██ ██      ██     ██ ██   ██    ██    ██ ██    ██ ████   ██ 
        ██ ████ ██ ███████ ██      ██  █  ██ ███████    ██    ██ ██    ██ ██ ██  ██ 
        ██  ██  ██ ██   ██ ██      ██ ███ ██ ██   ██    ██    ██ ██    ██ ██  ██ ██ 
        ██      ██ ██   ██ ███████  ███ ███  ██   ██    ██    ██  ██████  ██   ████ 
                                                                                    
                                                                                                                                                                                                                    
                                                                                                                                           
   `;
      
      let jsxhtml = (<div className="content" onClick={this.clicker.bind(this)}>
          {this.props.children}
        </div>);
      
      if (this.props.open) {
        jsxhtml = (<div className="content open" onClick={this.clicker.bind(this)}>
          <pre>{title}</pre>
          {this.props.children}
        </div>);
      }
      
      return (
        <div>
        {jsxhtml}
          </div>
      )
    }
    
  };
  
  
  class Table extends React.Component {
    constructor() {
      super();
      
      this.state = {
        headerOffset: null,
        headerFixed: true
      }
    }

    componentDidMount() {

      store.headerOffset = ReactDOM.findDOMNode(this.refs.header).getBoundingClientRect().top;  

    }
    
    render(){
      
      let columns = this.props.columns.map((item, inx) => {
        return (<HeaderColumn {...item} />);
      });    
      
      //go through the rows
      let rows = this.props.data.map((item, inx) => {
        return (<RowItem {...item}></RowItem>);
      });
      
      let classes = 'header'; 
      if (this.props.headerFixed) {
        classes = 'header fixed';
      }
      
     return (<div className="table">
            {this.props.children} 
         <div className={classes} ref="header">{columns}<div className="shadow"></div></div>
            <ul>{rows}</ul>
           </div>); 
    }
    
  }
  
  class HeaderColumn extends React.Component {
    
    render(){
     return (<div className="hcol">{this.props.icon}</div>); 
    }
    
  }
  
  
  class TableComponent extends React.Component{
    constructor() {
      super();
      
      this.state = {
        tableHeader: null,
        tableHeaderFixed: false
      }
      
    }
    
    handleScroll(e) {
      let scrollTop = e.srcElement.body.scrollTop;
      
      if (scrollTop >= store.headerOffset) {
        this.setState({
          tableHeaderFixed: true
        });
      } else {
        this.setState({
          tableHeaderFixed: false
        });
      }
    }
    
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }  
    
    render(){
      
      return (
        <div className="container">
          <Table data={data} columns={cols} headerFixed={this.state.tableHeaderFixed} scrollFn=''/>
        </div>
      )
    }
    
  };
  
  export default TableComponent