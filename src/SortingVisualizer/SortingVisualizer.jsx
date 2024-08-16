import React from 'react'; 
//import ArraySizeSlider from './ArraySizeSlider'; 
import { 
  getMergeSortAnimations, 
  getBubbleSortAnimations, 
  getHeapSortAnimations, 
  getInsertionSortAnimations, 
} from '../sortingAlgorithms/sortingAlgorithms.js'; 
import './SortingVisualizer.css'; 
 
let speed =50; 
//const NUMBER_OF_ARRAY_BARS = 50; 
const PRIMARY_COLOR = 'limegreen'; 
const SECONDARY_COLOR = 'red'; 
 
export default class SortingVisualizer extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      array: [], 
      arraySize: 20, 
      theme: 'light', 
    }; 
    this.resetArray = this.resetArray.bind(this); 
  } 
 
 
  componentDidMount() { 
    this.resetArray(); 
 
  } 
 
  // resetArray() { 
  //   const array = []; 
  //   for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) { 
  //     array.push(randomIntFromInterval(5, 500)); 
  //   } 
  //   this.setState({ array }); 
  // } 
   
  resetArray() { 
    const array = []; 
    for (let i = 0; i < this.state.arraySize; i++) { 
        array.push(randomIntFromInterval(5, 520)); 
    } 
    this.setState({ array }); 
} 
 
handleSliderChange = (event) => { 
  this.setState({ arraySize: Number(event.target.value) }, () => { 
      this.resetArray(); // Optionally reset array when the size changes 
  }); 
} 
 
toggleTheme = () => { 
  this.setState(prevState => ({ 
      theme: prevState.theme === 'light' ? 'dark' : 'light' 
  })); 
} 
 
 
 
 
  mergeSort() { 
    const animations = getMergeSortAnimations(this.state.array); 
    this.animateMergeSort(animations); 
  } 
 
  bubbleSort() { 
    const animations = getBubbleSortAnimations(this.state.array); 
    this.animateBubbleSort(animations); 
  } 
 
  heapSort() { 
    const animations = getHeapSortAnimations(this.state.array); 
    this.animateHeapSort(animations); 
  } 
 
  insertionSort() { 
    const animations = getInsertionSortAnimations(this.state.array); 
    this.animateInsertionSort(animations); 
  } 
 
  animateMergeSort(animations) { 
    const arrayBars = document.getElementsByClassName('array-bar'); 
    for (let i = 0; i < animations.length; i++) { 
      const isColorChange = i % 3 !== 2; 
      if (isColorChange) { 
        const [barOneIdx, barTwoIdx] = animations[i]; 
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR; 
        setTimeout(() => { 
          arrayBars[barOneIdx].style.backgroundColor = color; 
          arrayBars[barTwoIdx].style.backgroundColor = color; 
        }, i * (101 - speed)); 
      } else { 
        setTimeout(() => { 
          const [barIdx, newHeight] = animations[i]; 
          arrayBars[barIdx].style.height = `${newHeight}px`; 
          // Update the value span 
        arrayBars[barIdx].querySelector('.bar-value').textContent = newHeight; 
        }, i * (101 - speed)); 
      } 
    } 
  } 
 
  animateBubbleSort(animations) { 
    const arrayBars = document.getElementsByClassName('array-bar'); 
    for (let i = 0; i < animations.length; i++) { 
      const isColorChange = i % 4 < 2; 
      if (isColorChange) { 
        const [barOneIdx, barTwoIdx] = animations[i]; 
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR; 
        setTimeout(() => { 
          arrayBars[barOneIdx].style.backgroundColor = color; 
          arrayBars[barTwoIdx].style.backgroundColor = color; 
        }, i * (101 - speed)); 
      } else { 
        setTimeout(() => { 
          const [barIdx, newHeight] = animations[i]; 
          arrayBars[barIdx].style.height = `${newHeight}px`; 
          // Update the value span 
        arrayBars[barIdx].querySelector('.bar-value').textContent = newHeight; 
        }, i * (101 - speed)); 
      } 
    } 
  } 
 
  animateHeapSort(animations) { 
    const arrayBars = document.getElementsByClassName('array-bar'); 
    for (let i = 0; i < animations.length; i++) { 
      const isColorChange = i % 4 < 2; 
      if (isColorChange) { 
        const [barOneIdx, barTwoIdx] = animations[i]; 
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR; 
        setTimeout(() => { 
          arrayBars[barOneIdx].style.backgroundColor = color; 
          arrayBars[barTwoIdx].style.backgroundColor = color; 
        }, i *(101 - speed) );//ANIMATION_SPEED_MS 
      } else { 
        setTimeout(() => { 
          const [barIdx, newHeight] = animations[i]; 
          arrayBars[barIdx].style.height = `${newHeight}px`; 
          // Update the value span 
        arrayBars[barIdx].querySelector('.bar-value').textContent = newHeight; 
        }, i * (101 - speed)); 
      } 
    } 
  } 
 
  animateInsertionSort(animations) { 
    const arrayBars = document.getElementsByClassName('array-bar'); 
    for (let i = 0; i < animations.length; i++) { 
      const isColorChange = i % 3 !== 2; 
      if (isColorChange) { 
        const [barOneIdx, barTwoIdx] = animations[i]; 
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR; 
        setTimeout(() => { 
          arrayBars[barOneIdx].style.backgroundColor = color; 
          arrayBars[barTwoIdx].style.backgroundColor = color; 
        }, i * (101 - speed)); 
      } else { 
        setTimeout(() => { 
          const [barIdx, newHeight] = animations[i]; 
          arrayBars[barIdx].style.height = `${newHeight}px`; 
          // Update the value span 
        arrayBars[barIdx].querySelector('.bar-value').textContent = newHeight; 
        }, i * (101 - speed)); 
      } 
    } 
  } 
 
 
  render() { 
    const { array } = this.state; 
    const { theme } = this.state; 
        return ( 
      <div className="array-container"> 
          
          
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}> 
                {/* Simple Navigation Bar */} 
                <nav className="navbar"> 
                    <h1>Sorting Visualizer</h1> 
                    <button onClick={this.toggleTheme}> 
                        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode 
                    </button>   
                </nav> 
               
 
        {array.map((value, idx) => ( 
          <div className="array-bar" 
            key={idx} 
            style={{ 
              backgroundColor: PRIMARY_COLOR, 
              height: `${value}px`, 
              //position: 'relative', // Ensure the value is positioned relative to the bar 
            }}> 
               <span className="bar-value" style={{ 
                          padding: '2px', 
                        fontSize: '12px' 
    }}> 
      <span className="bar-value">{value}</span> 
    </span> 
        </div> 
        ))} 
         
        <header> 
        <button onClick={() => this.resetArray()}>Generate New Array</button> 
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button> 
        <button onClick={() => this.insertionSort()}>Insertion Sort</button> 
        <button onClick={() => this.mergeSort()}>Merge Sort</button> 
        <button onClick={() => this.heapSort()}>Heap Sort</button> 
        <button class="speedcontrol"> 
                      <lable>Array Size: {this.state.arraySize}</lable> 
                       <input  
                         type="range"  
                         min="20"  
                         max="100"  
                         value={this.state.arraySize}  
                         onChange={this.handleSliderChange}  
                   /></button> 
                   <button class="speedcontrol"><div className="speed-control"> 
                      <label htmlFor="speedRange">Adjust Speed:</label> 
                        <input 
                          type="range" 
                          id="speedRange" 
                          min="1" 
                          max="100" 
                          defaultValue={speed} 
                          onChange={(event) => speed = event.target.value} // Update global speed variable 
                          className="slider" 
                        /> 
                        </div> 
                    </button> 
        </header> 
        </div> 
      </div> 
    ); 
  } 
} 
 
function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min); 
}