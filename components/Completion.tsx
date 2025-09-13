"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import {animated,useSpring} from '@react-spring/web';
interface NumberProp{
n:number
}
const NumberN:React.FC<NumberProp>=({n})=>
{
const {number}=useSpring({
  from:{number:0},
  number:n,
  delay:200,
  // config:{mass:1,tension:20,friction:10}
})
return(<animated.span  className="font-bold text-3xl">{number.to((n)=>n.toFixed(0))}</animated.span>
);
}

function Completion() {
    const data=[
        {
            text:"Projects Completed",
            quantity:5
        },
        {
            text:"Coding Days",
            quantity:300
        },
        {
            text:"Certificates Recieved",
            quantity:4
        },
        {
            text:"Hackathons",
            quantity:1
        },
        {
            text:"Awards Recieved",
            quantity:0
        }];
  return (
    <div className="flex flex-row mt-25 pt-20 pb-30 justify-evenly flex-wrap space-y-10">
        {data.map((d,index)=>
        <motion.div key={index} initial={{scale:0.9}} whileInView={{scale:1,transition:{duration:1,repeat:Infinity}}}    className="flex flex-col space-y-2 justify-center items-center">
            <button className="px-2 py-2 w-30 h-30 hover:shadow-md hover:shadow-white hover:bg-black hover:text-white hover:border-2 hover:border-white hover:scale-108 rounded-full bg-white text-black">
              <NumberN n={d.quantity}  />
             </button>
          <span className="text-white text-3xl">{d.text}</span>
        </motion.div>
        )}
    </div>
  )
}

export default Completion
