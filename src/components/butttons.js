
// import React from "react";
// import { useState, useRef, Overlay, Tooltip } from "react";
// import { Button } from "react-bootstrap";
// import { render } from "react-dom";



// export const WorkButton = () => {
//     const [show, setShow] = useState(false);
//     const target = useRef(null);
  
//     return (
//       <>
//         <Button ref={target} onClick={() => setShow(!show)}>
//           Click me!
//         </Button>
//         <Overlay target={target.current} show={show} placement="right">
//           {(props) => (
//             <Tooltip id="overlay-example" {...props}>
//               My Tooltip
//             </Tooltip>
//           )}
//         </Overlay>
//       </>
//     );
//   }
//   render(<WorkButton />);