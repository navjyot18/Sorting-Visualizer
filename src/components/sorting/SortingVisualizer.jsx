import React, {useState, useEffect} from 'react';
import {MergesortingAlgorithms, BubbleSortingAlgorithms, demoSort, getInsertionSortAnimations,getSelectionSortAnimation} from '../sortingAlgorithms/sortingAlgorithms.js';
import {Button, ButtonGroup} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';
import './style.css';
import Slider from '@material-ui/core/Slider';




const useStyles = makeStyles({
	bar: {
		backgroundColor: '#34495e',
		height: '100px',
		marginTop: '20px'
	},

	title: {
		marginTop:'10px',
		padding: '20px'
	},

	grid: {
		marginTop:'-60px',
		alignItems: 'center',
		justifyContent:'space-evenly',
	}

})

function SortingVisualizer()
 {
	// body...
	const classes = useStyles();
	const NUMBER_OF_ARRAY_BARS = randomInteger(5,100);
	const [ANIMATION_SPEED_MS, setANIMATION_SPEED_MS] = React.useState(20);
	//const ANIMATION_SPEED_MS = 18;
	const [disabled, setDisabled] = useState(false);
	  const handleChange = (event, newValue) => 
	  {
	    setANIMATION_SPEED_MS(newValue);
	    console.log(ANIMATION_SPEED_MS)
	  };
	function randomInteger(min, max) 
	{
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// This is the main color of the array bars.
	const PRIMARY_COLOR = 'turquoise';

	// This is the color of array bars that are being compared throughout the animations.
	const SECONDARY_COLOR = 'black';
	const SECONDARY_COLOR_2 = 'blue'
	const [arr, setArr] = useState([]);
	useEffect(()=>
	{
		updateArray();
	},[]);

	const updateArray = ()=> 
	{
		const arr = [];
	    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++)
	    {
	      arr.push(Math.floor(Math.random() * (700 - 5 + 1) + 5));
	    }
		setArr(arr);
	}


	const mergeSort = ()=>
	{
        const animations = MergesortingAlgorithms(arr)

        for(let i = 0; i < animations.length; i++) {
            
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = i%3 !== 2

            if(isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]

                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style

                const color = i%3 === 0 ? SECONDARY_COLOR : 'turquoise'
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color    
                }, i * ANIMATION_SPEED_MS)
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                }, i * ANIMATION_SPEED_MS)
            }
        }

	}
    const insertionSort = ()=> {
    	//setDisabled(true)
    	console.log(arr)
        const animations = getInsertionSortAnimations(arr)
        console.log(animations)
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = i % 3 !== 2
          
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color1 = i%3 === 0 ? SECONDARY_COLOR : 'turquoise'
                const color2 = i%3 === 0 ? SECONDARY_COLOR_2 : 'turquoise'
          
                setTimeout(() => 
                {
                    barOneStyle.backgroundColor = color1
                    barTwoStyle.backgroundColor = color2
                }, i * ANIMATION_SPEED_MS)
            } 
            else 
            {
            
                setTimeout(() => 
                {
                    
                    const [barOneIdx, newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                }, i * ANIMATION_SPEED_MS)
            }
        }
        //setDisabled(false)
    }

	

	const selectionSort = ()=>
	{
		//console.log(arr)
	}

	const demo = ()=> 
	{
		const array = demoSort(arr);
		console.log(array);
		//let idx = arr.length-1;
		for(let i=0;i<array.length;i++)
		{
			//arrayBars dom object 
			const arrayBars = document.getElementsByClassName('array-bar');
			const flag = i%3 !== 2
			if(flag)
			{
				const [baridx1, baridx2] = array[i];
				const baridx1Style = arrayBars[baridx1].style;
				const baridx2Style = arrayBars[baridx2].style;
                const color1 = i%3 === 0 ? SECONDARY_COLOR : 'turquoise'
                const color2 = i%3 === 0 ? SECONDARY_COLOR_2 : 'turquoise'
				setTimeout(()=> 
				{
                    baridx1Style.backgroundColor = color1
                    baridx2Style.backgroundColor = color2 

				}, i*ANIMATION_SPEED_MS)
			}
			else
			{
				if(array[i].length===4)
				{
					setTimeout(()=>
					{
						const [barOneIdx, barTwoIdx, newHeight1, newHeight2] = array[i]
						const barOneStyle = arrayBars[barOneIdx].style
						const barTwoStyle = arrayBars[barTwoIdx].style
						barOneStyle.height = `${newHeight2}px`
						barTwoStyle.height = `${newHeight1}px`
					}, i*ANIMATION_SPEED_MS)	
				}
			}
		}

	}

	const BubbleSort = ()=>
	{
        const animations = BubbleSortingAlgorithms(arr)
        for(let i = 0; i < animations.length; i++) 
        {
            //array of each bar
            const arrayBars = document.getElementsByClassName('array-bar')
            if(animations[i] === null) continue

            //change color at each index i with remainder 2
            const isColorChange = i%3 !== 2
            if(isColorChange) 
            {
            	//destructuring index1 and index2
                const [barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                //color bars for comparision
                const color1 = i%3 === 0 ? SECONDARY_COLOR : 'turquoise'
                const color2 = i%3 === 0 ? SECONDARY_COLOR_2 : 'turquoise'
                setTimeout(() => 
                {
                    barOneStyle.backgroundColor = color1
                    barTwoStyle.backgroundColor = color2    
                }, i * ANIMATION_SPEED_MS)
            }
            else 
            {
		    
                if(animations[i].length === 4) 
                {
					setTimeout(() => {

						const [barOneIdx, barTwoIdx, newHeight1, newHeight2] = animations[i]
						const barOneStyle = arrayBars[barOneIdx].style
						const barTwoStyle = arrayBars[barTwoIdx].style
						barOneStyle.height = `${newHeight2}px`
						barTwoStyle.height = `${newHeight1}px`
						
				}, i * ANIMATION_SPEED_MS)
              }
           }
        }
       // finalColoredArray(arr);


		/*
		for (var i = 0; i < resultArray.length; i++)
		{
			const arrayBars = document.getElementsByClassName('array-bar');
			const barStyle = arrayBars[i].style;
			barStyle["height"] = `${resultArray[i]}px`;
			barStyle["background-color"] = SECONDARY_COLOR;
		}
		*/
	}

	return(
	  <div>
	      <AppBar 
	        style=
	        {{
	          pointerEvents: disabled ? "none" : "initial"
           	}}
	       className={classes.bar} position="static">
	      	<Typography className={classes.title}variant="h5">Sorting Visualizer </Typography>
	        <Toolbar className={classes.grid}>
	        	<Button onClick={()=>updateArray()} size="large" variant="contained">Generate new Array</Button>
				<ButtonGroup  size="large" aria-label="small outlined button group">
				  <Button onClick={()=>BubbleSort()} color="secondary" variant="text">Bubble Sort</Button>
				  <Button onClick={()=>insertionSort()} color="secondary" variant="text">Insertion Sort</Button>
				  <Button onClick={()=>mergeSort()} color="secondary" variant="text">Merge sort</Button>
			      <Typography style={{margin:'20px'}} id="continuous-slider" gutterBottom>
			        ANIMATION_SPEED
			      </Typography>	
				  <Slider color="secondary" style={{margin:'20px',width:'150px'}}value={ANIMATION_SPEED_MS} onChange={handleChange} aria-labelledby="continuous-slider" />	
				</ButtonGroup>
	        </Toolbar>
	      </AppBar>
		<div className="array-container">
	        {arr.map((value, idx) => (
	          <div
	            className="array-bar"
	            key={idx}
	            style={
	            	{
		              backgroundColor: PRIMARY_COLOR,
		              height: `${value}px`,
		              width: `${1000/arr.length}px`
	           		}
	        	}>
	           </div>
	        ))}
		</div>
	  </div>
	)
}
export default SortingVisualizer;
