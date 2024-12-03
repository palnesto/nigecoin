// import React from 'react';
// import styled from 'styled-components';

// // Define the button style with gradient border
// const GradientButton = styled.button`
//   padding: 10px 20px;
//   border: 3px solid transparent;
//   background-image: linear-gradient(white, white), linear-gradient(to right, #ff7e5f, #feb47b);
//   background-origin: border-box;
//   background-clip: content-box, border-box;
//   border-radius: 5px;
//   color: #fff;
//   font-size: 16px;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const Button = ({ text, onClick }) => {
//   return (
//     <GradientButton onClick={onClick}>
//       {text}
//     </GradientButton>
//   );
// };

// export default Button;


import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className='gradient-button'
      onClick={onClick}
      // className="relative px-6 py-2 font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 border-4 border-transparent 
      //           rounded-lg group hover:scale-105 transition-all ease-in-out duration-300"
    >
      {/* <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg -z-10"></span> */}
      <span className="relative z-10">{text}</span>
    </button>
  );
};
 


