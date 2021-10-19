import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-janken',
  templateUrl: './janken.component.html',
  styleUrls: ['./janken.component.css']
})
export class JankenComponent implements OnInit {

  /*
  じゃんけんのて
  0 グー
  1 チョキ
  2 パー
  */

 rsp(playerSelect: number):void{
   let result: number;
   let playerSelectHand: string;
   let comSelectHand: string;
   let resultString: string;
   let comSelect: number = Math.floor(Math.random()* 3);
   console.log(comSelect);
   console.log(playerSelect);


   /*
   勝ち負け
   0 負け
   1　あいこ
   2　勝ち
   */

  if(playerSelect === comSelect) {
    result = 1;
  } else {
    if(playerSelect === 0) {
      if(comSelect ===1) {
        result = 2;
      } else{
        result = 0;
      }
    } else if (playerSelect === 1) {
      if(comSelect === 2) {
        result = 2;
      } else {
        result = 0;
      }
    } else if (playerSelect === 2) {
      if(comSelect === 1) {
        result = 0;
      } else {
        result = 2;
      }
    }
  }
  console.log(result);

  if (playerSelect === 0) {
    playerSelectHand = 'グー';
  } else if (playerSelect === 1) {
    playerSelectHand = 'チョキ';
  } else {
    playerSelectHand = 'パー';
  }

  if (comSelect === 0) {
    comSelectHand = 'グー';
  } else if (comSelect === 1) {
    comSelectHand = 'チョキ';
  } else {
    comSelectHand = 'パー';
  }

  if (result == 0) {
    resultString = '負けです。勝てるまで勝負しよう';
  } else if (result === 1) {
    resultString = 'あいこです。もう一回勝負だ！';
  } else {
    resultString = '勝ちです！今日は勝ち逃げしよう⭐️'
  }

  document.getElementById('player').innerHTML = 'あなたは' + playerSelectHand + 'を選択しました';
  document.getElementById('computer').innerHTML = 'コンピュータは' + comSelectHand + 'を選択しました';
  document.getElementById('resultMsg').innerHTML = '結果は' + resultString;
}
constructor() { }
ngOnInit(): void {
}

}
