import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {add,sub,mul,divide} from "./calculator";

ReactDOM.render(
   <div><ul className=lists>
      <li>{add(3,5)}</li>
      <li>{sub(5,3)}</li>
      <li>{mul(2,6)}</li>
      <li>{divide(3,3)}</li>
   </ul></div>
   ,document.getElementById("root"));
 