import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThumbImg from './components/ThumbImg';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe_8K_qVr2rD7mzFgU5Gu0F2tGkhQ25weQQygNpals8MQlNbcZ'
    }
  }

  componentDidMount(){
    let thumbImg = document.querySelectorAll('.thumb-img .pic img');
    thumbImg.forEach((item) => {
      item.addEventListener('click', (ev) => {
        this.setState({ path: ev.target.src })
      })
    })
  }

  render() {
    const { path } = this.state;
    return (
      <div className="container">
        <div className="left">
          <ThumbImg path={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe_8K_qVr2rD7mzFgU5Gu0F2tGkhQ25weQQygNpals8MQlNbcZ'} />
          <ThumbImg path={'https://downloadwap.com/thumbs2/wallpapers/p2/2019/drawings/44/f4962e4813034253.jpg'} />
          <ThumbImg path={'https://i.pinimg.com/236x/ee/7e/49/ee7e49c14142e961e04338fc7f8a659e--chim-pest-control.jpg'} />
        </div>
        <div className="center">
          <div className="show-img">
            <div className="pic">
              <img src={path} alt=""></img>
            </div>
          </div>
        </div>
        <div className="right">
          <ThumbImg path={'https://www.vippng.com/png/full/201-2013416_black-cc-nhn-vt-trong-larva.png'} />
          <ThumbImg path={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFPsyTl-LC1RmQXUqgz6oOJtsaSAl8s5hLAVvCzEiOe6QxFCkl'} />
          <ThumbImg path={'https://i.pinimg.com/originals/54/5b/86/545b86044f23016841c21a3b822ca1d4.jpg'} />
        </div>
      </div>
    )
  }
}

export default App;
