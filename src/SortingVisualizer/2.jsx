import React from 'react';
import { getMergeSortAnimations, getBubbleSortAnimations, getHeapSortAnimations, getInsertionSortAnimations } from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      arraySize: 10,
      theme: 'light',
      speed: 50, // Add speed to state
    };
    this.resetArray = this.resetArray.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this); // Bind method
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.arraySize; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({ array });
  }

  handleSliderChange = (event) => {
    this.setState({ arraySize: Number(event.target.value) }, () => {
      this.resetArray();
    });
  }

  handleSpeedChange(event) {
    this.setState({ speed: event.target.value });
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
        }, i * (101 - this.state.speed));
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
          arrayBars[barIdx].childNodes[0].textContent = newHeight;
        }, i * (101 - this.state.speed));
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
        }, i * (101 - this.state.speed));
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
          arrayBars[barIdx].childNodes[0].textContent = newHeight;
        }, i * (101 - this.state.speed));
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
        }, i * (101 - this.state.speed));
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
          arrayBars[barIdx].childNodes[0].textContent = newHeight;
        }, i * (101 - this.state.speed));
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
        }, i * (101 - this.state.speed));
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          arrayBars[barIdx].style.height = `${newHeight}px`;
          arrayBars[barIdx].childNodes[0].textContent = newHeight;
        }, i * (101 - this.state.speed));
      }
    }
  }

  render() {
    const { array } = this.state;
    const { theme } = this.state;
    return (
      <div className="array-container">
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
          <nav className="navbar">
            <h1>Sorting Visualizer</h1>
            <button onClick={this.toggleTheme}>
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
          </nav>

          <div className="array">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                  width: `${100 / array.length}%`,
                }}
              >
                <span className="bar-value">{value}</span>
              </div>
            ))}
          </div>

          <header>
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.insertionSort()}>Insertion Sort</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <div className="speedcontrol">
              <div className="speed-control">
                <label htmlFor="speedRange">Adjust Speed:</label>
                <input
                  type="range"
                  id="speedRange"
                  min="1"
                  max="100"
                  value={this.state.speed}
                  onChange={this.handleSpeedChange}
                  className="slider"
                />
              </div>
            </div>
            <div className="speedcontrol">
              <label>Array Size: {this.state.arraySize}</label>
              <input
                type="range"
                min="10"
                max="200"
                value={this.state.arraySize}
                onChange={this.handleSliderChange}
              />
            </div>
          </header>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
