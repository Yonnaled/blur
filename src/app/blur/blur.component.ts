import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blur',
  templateUrl: './blur.component.html',
  styleUrls: ['./blur.component.css']
})
export class BlurComponent implements OnInit {

  ngOnInit(): void {
    document.addEventListener('mousemove', e => this.onMouseUpdate(this,e), false)
    document.addEventListener('mouseenter', e => this.onMouseUpdate(this, e), false)
    document.getElementById('bg-img')!.setAttribute('draggable', 'false');
  }

  onMouseUpdate(blurComp:BlurComponent, e:any) {
    let x = e.pageX;
    let y = e.pageY;
    blurComp.updateRotation(e,x,y);
    blurComp.updateBlur(e,x);
  }

  updateRotation(e:any,x:number,y:number) {
    let container = document.getElementById('container');

    let percentX = x / window.innerWidth * 100;
    let percentY = y / window.innerHeight * 100;
    let calcX = (percentX-50)/2.5 ;
    let calcY =  (percentY-50)/8;

    setTimeout(()=>{
      container!.style.transform=`translateX(${percentX/8}px) translateY(${percentY/4}px) translateZ(100px) scale(1) perspective(1000px) rotate3d(1, 0, 0, ${-calcY}deg) rotate3d(0, 1, 0, ${calcX}deg)`
    }, 120)


  }

  updateBlur(e: any,x:number) {
    let percentX = x / window.innerWidth * 100;

    let blurSpans = document.getElementsByTagName('span');

    for (let i=0; i<8; i++) {

      let blurValue:number;
      let distanceFromCenterPercent = percentX-50;
      console.log(distanceFromCenterPercent);

      if (distanceFromCenterPercent<0){
        blurValue = Math.max((distanceFromCenterPercent*(i+1))*(-0.02),1);
        setTimeout(()=>{
          blurSpans[i].style.backdropFilter= `blur(${blurValue}px)`;
          }, 120)
      }
      else{
        blurValue = Math.max((distanceFromCenterPercent*(i+1))*0.02,1);
        setTimeout(()=>{
          blurSpans[8-i-1].style.backdropFilter= `blur(${blurValue}px)`;
          }, 120)
      }

    }
  }
}
