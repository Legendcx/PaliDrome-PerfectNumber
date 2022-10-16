import React from "react";
import { useState } from "react";
// import "./Main.css"
import "./Main.scss";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from 'react-bootstrap/Form';


let lowNumber;
  let highNumber;
const Main = () => {
  const [numberPoli, setNumberPoli] = useState([]);
  const [numberPer, setNumberPer] = useState([]);

  const changelowNumber = (e) => {
    lowNumber = e.target.value;
    console.log(lowNumber);
  };
  const changehighNumber = (e) => {
    highNumber = e.target.value;
    console.log(highNumber);
  };

  const listPalindrome = () => {
    let array = [];
    for (let i = lowNumber; i < highNumber; i++) {
      if (String(i) === String(i).split("").reverse().join("")) {
        array.push(i);
      }
    }
    setNumberPoli(array);
    // return array
  };
  // console.log(listPalindrome());

  const listPerfect = () => {
    let array = [];
    for (let i = lowNumber; i < highNumber; i++) {
      let temp = 0;
      for (let j = 1; j <= i / 2; j++) {
        if (i % j === 0) {
          temp += j;
        }
      }
      if ((temp === i) & (temp !== 0)) {
        array.push(temp);
      }
    }
    setNumberPer(array);

    // console.log(array);
  };

  // console.log(listPerfect());

  return (
    <div className="container">
      <h1>Palindromic and Perfect Numbers</h1>
      <div className="explain">
        <p>
          <span>What is the palindromic numbers? </span> <br />A palindromic
          number is a number (such as 16461) that remains the same when its
          digits are reversed. In other words, it has reflectional symmetry
          across a vertical axis. The first 30 palindromic numbers (in
          decimal) are:0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77,
          88, 99, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202,
        </p>
        <hr />
        <p>
          <span>What is perfect numbers?</span> <br /> In number theory, a
          perfect number is a positive integer that is equal to the sum of its
          positive divisors, excluding the number itself. For instance, 6
          is a perfect number because has divisors 1, 2 and 3, and 1 + 2 + 3 =
          6, AND 28 is a perfect number because (1 + 2 + 4 + 7 + 14) = 28
        </p>
      </div>
      <div className="inputs">
        <input onChange={changelowNumber} placeholder="first number" />
        <input
          onChange={changehighNumber}
          type="number"
          placeholder="second number"
        />
      </div>
      <div className="buttons">
        <button onClick={listPalindrome}>Palindrome</button>
        <button onClick={listPerfect}>Perfect Number</button>
      </div>
      <div className="results">
        <div>
          {numberPoli.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div>
          {numberPer.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;


//  let firstNumber;
//  let secondNumber;


// const Main = () => {
//   const [numberPalid, setNumberPalid] =useState([]);
//   const [numberPerfect, setNumberPerfect] = useState([]);


 
//   const handleFirst = (e) =>{
//       firstNumber = e.target.value;
//       console.log(firstNumber);
//   }

//   const handleSecond = (e) =>{
//     secondNumber = e.target.value;
//     console.log(secondNumber);
//   }

//   const palidNum = () => {
//     let array = [];
//     for(let i = firstNumber; i < secondNumber; i++){
//       if(i === i.split("").reverse().join("")){
//         array.push(i);
//       }
//     }
//     setNumberPalid(array);
//   }

//   const perfectNum = () => {
//     let array = [];
//     for(let i= firstNumber; i < secondNumber; i++){
//       let temp = 0;
//       for(let b = 1; b <= i / 2; b++){
//         if(i % b ===0){
//           temp += b;
//         }

//       }
//       if((temp === i) & (temp !== 0)){
//         array.push(temp);
//       }
//     }
//     setNumberPerfect(array);
//   };

//   return (
//     <Container className="justify-content-center align-item-center">
//       <Container className="d-flex justify-content-center">
//       <Form.Control onChange={handleFirst} className="w-25 mx-3" size="lg" type="text" placeholder="First number" />
//       <Form.Control onChange={handleSecond} className="w-25" size="lg" type="text" placeholder="Second Number" />
//       </Container>

//       <Container className="d-flex justify-content-center mt-3 mb-3">
//         <Button onclick={palidNum} className="palidrom w-25 mx-3" variant="outline-danger" size="lg">Palindrom</Button>{' '}
//         <Button onclick={perfectNum} className="perfectNumber w-25" variant="outline-success">Perfect Number</Button>
//       </Container>

//       <Container className="d-flex justify-content-center">
      
//         <div className="block-example border border-dark w-25 h-75 mx-3">
//           {numberPalid.map((item, index)=> (
//             <p key={index}>{item}</p>
//           ))}
//         </div>
//       <div className="block-example border border-dark w-25 h-75%">
//         {numberPerfect.map((item, index) => (
//           <p key={index}>{item}</p>
//         ))}
//       </div>
     
//       </Container>
//     </Container>
//   );
// };

// export default Main;