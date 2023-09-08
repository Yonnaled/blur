import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blur',
  templateUrl: './blur.component.html',
  styleUrls: ['./blur.component.css']
})
export class BlurComponent implements OnInit {

  ngOnInit(): void {
    document.addEventListener('mousemove', this.onMouseUpdate, false)
    document.addEventListener('mouseenter', this.onMouseUpdate, false)
  }

  onMouseUpdate(e:any) {
    let constrain = 30;
    let x = e.pageX;
    let y = e.pageY;

    let percentX = x / window.innerWidth * 100;
    let percentY = y / window.innerHeight * 100;
    console.log(window.innerWidth + ' ' +percentX);

    let container = document.getElementById('container');
    let box = container!.getBoundingClientRect();

    let calcX = -(y - box.y - (box.height / 2)) / constrain;
    let calcY = (x - box.x - (box.width / 2)) / constrain;


    let t2 = `translateX(${percentX/8}px) translateY(${percentY/4}px)
    rotateY(${calcY}deg) rotateX(${calcX}deg) translateZ(100px) scale(1) `

    container!.style.transform = t2;


    /////////////////////////////////////////////////////////////////////////////////////
    const maxBlur = 43;

    let blurSpans = document.getElementsByTagName('span');
    for (let i=0; i<8; i++) {
      let blurValue:number;
      if (percentX>50){
        blurValue = maxBlur / (i*400+100) * percentX;
      }
      else{
        blurValue = maxBlur / (3300-i*400) * percentX;
      }
      blurSpans[i].style.backdropFilter= `blur(${blurValue}px)`;
    }

  }

}
