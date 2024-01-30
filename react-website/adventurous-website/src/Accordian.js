import React, { useState } from 'react'
import Forms from './Forms'

const Accordian = () => {
  const [add,setAdd] = useState(0);
  return (
      <div>
        <button className='btn btn-outline-primary mx-auto d-block mt-5' onClick={()=>setAdd(add+1)}>ADD</button>
        
      </div>
  )
}

export default Accordian



//     <div>
//         <div className='d-flex container'>
//             <div className="my-2 col  ">Date</div>
//               <div className="my-2 col  ">Amount</div>
//               <div className="my-2 col  ">Gold rate</div>
//               <div className="my-2 col  ">Per gram</div>
//         </div>
//         <div class="accordion container accordion-flush" id="accordionExample">
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="headingOne">
//       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//       <div className="col  my-2">5 Dec 2022</div>
//               <div className="col  my-2">5100</div>
//               <div className="col  my-2">Rs. 15500</div>
//               <div className="col  my-2">3.309g</div>
//       </button>
//     </h2>
//     <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//       <div class="accordion-body">
//       <div className="d-flex justify-content-around my-1 acc-custom ">
//             <button
//               className="due-b4"
//               data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                   data-bs-whatever="@mdo"
//             >
//               View Details
//             </button>
//             <p className="d-receipt">
//               Download Receipt
//             </p>
//           </div>            </div>
//     </div>
//   </div>
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="headingTwo">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//       <div className="my-2 col  ">5 Dec 2022</div>
//               <div className="my-2 col  ">5100</div>
//               <div className="my-2 col  ">Rs. 15500</div>
//               <div className="my-2 col  ">3.309g</div>
//       </button>
//     </h2>
//     <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//       <div class="accordion-body">
//       <div className="d-flex justify-content-around my-1 acc-custom ">
//             <button
//               className="due-b4"
//               data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                   data-bs-whatever="@mdo"
//             >
//               View Details
//             </button>
//             <p className="d-receipt">
//               Download Receipt
//             </p>
//           </div>        </div>
//     </div>
//   </div>
//   <div class="accordion-item">
//     <h2 class="accordion-header" id="headingThree">
//       <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//       <div className="my-2 col  ">5 Dec 2022</div>
//               <div className="my-2 col  ">5100</div>
//               <div className="my-2 col  ">Rs. 15500</div>
//               <div className="my-2 col  ">3.309g</div>
//       </button>
//     </h2>
//     <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//       <div class="accordion-body">
//       <div className="d-flex justify-content-around my-1 acc-custom ">
//             <button
//               className="due-b4"
//               data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                   data-bs-whatever="@mdo"
//             >
//               View Details
//             </button>
//             <p className="d-receipt">
//               Download Receipt
//             </p>
//           </div>        </div>
//     </div>
//   </div>
// </div>
// <div
//         class="modal fade"
//         id="exampleModal"
//         tabindex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog modal-dialog-centered">
//           <div class="modal-content">
//             <div className="modal-container">
//               <table1>
//                 <div
//                   data-bs-dismiss="modal" aria-label="Close"
//                   className="close-icon1 float-end"
//                 >
//                   X
//                 </div>
//                 <div className="mt-3" id="table-pop-up">
//                   <div className="d-flex justify-content-between">
//                     <h1 id="caption">Paid date</h1>
//                     <h1 id="td2">5 Dec 2022</h1>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <h1 id="caption">Amount</h1>
//                     <h1 id="td2">Rs. 15500</h1>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <h1 id="caption">Weight</h1>
//                     <h1 id="td2">2.947 g</h1>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <h1 id="caption">No of Installment</h1>
//                     <h1 id="td2">11</h1>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <h1 id="caption">Total Amount</h1>
//                     <h1 id="td2">Rs. 170500</h1>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <h1 id="caption"> Total Weight</h1>
//                     <h1 id="td2">31.947 g</h1>
//                   </div>
//                   <div className="d-flex justify-content-between">
//                     <h1 id="caption"> Transaction Id</h1>
//                     <h1 id="td2">113033791993</h1>
//                   </div>
//                   <button
//                     data-bs-dismiss="modal" aria-label="Close"
//                     className="popup-btn"
//                   >
//                     OK
//                   </button>
//                 </div>
//               </table1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>