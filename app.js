// let boxes= document.querySelectorAll(".box");
// let resetBtn = document.querySelector("reset");
// let turnO = true;
//  const winpatern=[
//       [0,1,2],
//       [0,3,6],
//       [0,4,8],
//       [1,4,7],
//       [2,5,8],
//       [2,4,6],
//       [3,4,5],
//       [6,7,8]
//  ]
//    boxes.forEach((box)=>{
//       box.addEventListener('click',()=>{
//          if(turnO){
//             box.innerHTML="O";
//             turnO=false;
//          }else{
//             box.innerHTML="X";
//             turnO=true;
//          }
//          box.disabled=true;
//          checkWin();
//       })
//    })
   
//    checkWin=()=>{
//       for(let pattern of winpatern){
//          let pos1=boxes[pattern[0]].innerHTML
//          let pos2=boxes[pattern[1]].innerHTML
//          let pos3= boxes[pattern[2]].innerHTML
//           if(pos1 !="" && pos2!=""&& pos3!="" ){
//             if(pos1==pos2 && pos2==pos3){
//                console.log(pos1+" is the winner");
//                break;
//             }

//           }

          
//       }

//    }

let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let score0=document.querySelector("#scr0");
let scorex=document.querySelector("#scrx");
let turnO = true;
 const winpatern=[
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8]
 ]
   boxes.forEach((box)=>{
      box.addEventListener('click',()=>{
         if(turnO){
            box.innerHTML="O";
            turnO=false;
         }else{
            box.innerHTML="X";
            turnO=true;
         }
         box.disabled=true;
         checkWin();
        
      })
   })
   let bc=0;
   let xc=0;
   
   checkWin=()=>{
      for(let pattern of winpatern){

         let pos1=boxes[pattern[0]].innerHTML

         let pos2=boxes[pattern[1]].innerHTML

         let pos3= boxes[pattern[2]].innerHTML



          if(pos1 !="" && pos2!=""&& pos3!="" ){

            if(pos1==pos2 && pos2==pos3){

               console.log(pos1+" is the winner");

               let m=pos1;

               let winer=document.querySelector("#msg")

               winer.innerHTML=m+" is the winner";

               if(m=="O"){

                  winer.style.color="blue";
                  bc++;
                  score0.innerHTML= "Score O "+bc;

               }else if(m=="X"){

                  winer.style.color="red";
                  xc++;
                  scorex.innerHTML= "Score X "+xc;
               }

            boxes.forEach((box)=> box.disabled = true); 
            return; 
            }

          }
      }
   }
   resetBtn.addEventListener('click',()=>{
      boxes.forEach((box)=>{
      box.innerHTML="";
      box.disabled=false;  
   })
})


   let ng=document.querySelector("#ng");
   ng.addEventListener('click',()=>{
      let msg=document.querySelector("#msg");
      msg.innerHTML="new game started";
      boxes.forEach((box)=>{
         box.innerHTML="";
         box.disabled=false;
      })
})
