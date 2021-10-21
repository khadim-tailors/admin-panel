import axios from 'axios';
import { useEffect, useState } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import Loader from '../../common/Loader';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function VerticalBar() {
    const [options, setOptions] = useState(null);
    useEffect(() => {
        axios.get('https://us-central1-khadim-tailors.cloudfunctions.net/dashboards/getUsersBasedOnPlans').then(res=>{
            if(res.status){
                setOptions({
                    title: {
                        text: "Number of tailors using plans"
                    },
                    data: [{				
                        type: "column",
                        dataPoints: res.data.result
                    }]
                });
                console.log(options)
            }
        }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
            options ?  <CanvasJSChart options = {options} />  : 
             <Loader/>
            }
        </div>
    )
}

export default VerticalBar
