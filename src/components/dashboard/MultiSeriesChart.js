import React from 'react'
import CanvasJSReact from '../../assets/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MultiSeriesChart() {
    const options = {
        animationEnabled: true,	
        title:{
            text: "Number of New Customers"
        },
        axisY : {
            title: "Number of Customers"
        },
        toolTip: {
            shared: true
        },
        data: [{
            type: "spline",
            name: "customers",
            showInLegend: true,
            dataPoints: [
                { y: 28, label: "Jan" },
                { y: 45, label: "Feb" },
                { y: 98, label: "Mar" },
                { y: 65, label: "Apr" },
                { y: 122, label: "May" },
                { y: 150, label: "Jun" },
                { y: 146, label: "Jul" },
                { y: 149, label: "Aug" },
                { y: 153, label: "Sept" },
                { y: 158, label: "Oct" },
                { y: 154, label: "Nov" },
                { y: 150, label: "Dec" }
            ]
        },
        {
            type: "spline",
            name: "tailors",
            showInLegend: true,
            dataPoints: [
                { y: 15, label: "Jan" },
                { y: 32, label: "Feb" },
                { y: 61, label: "Mar" },
                { y: 95, label: "Apr" },
                { y: 162, label: "May" },
                { y: 165, label: "Jun" },
                { y: 172, label: "Jul" },
                { y: 168, label: "Aug" },
                { y: 175, label: "Sept" },
                { y: 170, label: "Oct" },
                { y: 165, label: "Nov" },
                { y: 169, label: "Dec" }
            ]
        }]
    }
    return (
        <div>
            <CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
        </div>
    )
}

export default MultiSeriesChart
