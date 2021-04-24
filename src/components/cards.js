import React from 'react';
import '../styles/styles_cards.css';
import '../assets/styles.css'
import { faCoffee, faBug, faMask } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

library.add(faCoffee, faBug, faMask);

class Pie extends React.Component {
  render() {
    const {chart_data} = this.props;
    const {id} = this.props;
    let chart = new am4core.create(id, am4charts.PieChart);


    // Add data
    chart.data = chart_data
    
    // Set inner radius
    chart.innerRadius = am4core.percent(50);
    
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "rate";
    pieSeries.dataFields.category = "category";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    return (
      <div className="chartstyle" id={id}></div>
    );
  }
}


//Creates BoxItem class
class BoxItem extends React.Component {
    render() {
        const {box} = this.props;
        return (
            <div className="box rounded-3xl">
                <div className="grid grid-cols-3">
                    <div className="col-span-1 card-logo m-3">
                     <FontAwesomeIcon icon={box.icon} size="2x" color="7B43A1"/>
                    </div>
                    <div className="col-span-2 m-3">
                        <i>{box.text}</i>
                        <div>
                        </div>
                    </div>
                </div>
                <div>
                <Pie chart_data={box.chart_data} id={box.icon}/>
                </div>
            </div>
        );
    }
}

class CardComponent extends React.Component {
    state ={

      //creates box attributes
        box_list:[
            {
                icon: "coffee",
                text:"Operating Systems",
                chart_data: [ 
                    {
                      "category": "Windows",
                      "rate": 501.9
                    }, {
                      "category": "Linux",
                      "rate": 301.9
                    }, {
                        "category": "Ubuntu",
                        "rate": 200.9
                      }
                    ]
            },
            {
                icon: "bug",
                text:"Programming Languages",
                chart_data: [ 
                    {
                      "category": "Python",
                      "rate": 501.9
                    }, {
                      "category": "C#",
                      "rate": 301.9
                    }, {
                      "category": "C++",
                      "rate": 201.1
                    }, {
                      "category": "Java",
                      "rate": 165.8
                    }, {
                      "category": "SQL",
                      "rate": 139.9
                    }
                    ]

            },
            {
                icon: "mask",
                text:"Attacks",
                chart_data: [ 
                    {
                      "category": "SQL Injection",
                      "rate": 501.9
                    }, {
                      "category": "Mitre",
                      "rate": 301.9
                    }, {
                      "category": "Drive-by",
                      "rate": 201.1
                    }, {
                      "category": "Malware",
                      "rate": 165.8
                    }, {
                      "category": "MitM",
                      "rate": 139.9
                    }
                    ]
            },
        ]
    }
    
    render() {
        return(
            <div className="grid grid-cols-3">
                {this.state.box_list.map((box,key)=>(
                        <BoxItem key={key} box={box}/>
                    ))}
            </div>
        ) 
    }
}

export default CardComponent