import Photo from './Photo';
import {useTypewriter , Cursor} from 'react-simple-typewriter';
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import React from 'react';
import { Make_Active } from './Navbar';
import { useState, useEffect } from 'react';
import '../Who.css';
import { StyleSheet,css } from 'aphrodite';
const styles2=StyleSheet.create({
  Text_Big:{
    "@media  (min-width:751px) and (max-width:1400px)":{
      fontSize:'24px'
    },
    "@media  (min-width:501px) and (max-width:750px)":{
      fontSize:'20px'
    },
    "@media  (min-width:351px) and (max-width:500px)":{
      fontSize:'15px'
    },
    "@media  (min-width:251px) and (max-width:350px)":{
      fontSize:'11px'
    },
    "@media  (min-width:50px) and (max-width:250px)":{
      fontSize:'9px'
    }
  },
  Text_small:{
    "@media  (min-width:751px) and (max-width:1400px)":{
      fontSize:'18px'
    },
    "@media  (min-width:501px) and (max-width:750px)":{
      fontSize:'15px'
    },
    "@media  (min-width:351px) and (max-width:500px)":{
      fontSize:'13px'
    },
    "@media  (min-width:251px) and (max-width:350px)":{
      fontSize:'7px'
    },
    "@media  (min-width:50px) and (max-width:250px)":{
      fontSize:'5px'
    }
  },
  Moro:{
    "@media  (min-width:751px) and (max-width:1400px)":{
      height:'45px',
      width:'150px',
      borderRadius:'90px',
      fontSize:'17px'
    },
    "@media  (min-width:501px) and (max-width:750px)":{
      height:'35px',
      borderRadius:'30px',
      width:'120px',
      fontSize:'12px'
    },
    "@media  (min-width:351px) and (max-width:500px)":{
      height:'20px',
      borderRadius:'20px',
      width:'100px',
      fontSize:'9px'
    },
    "@media  (min-width:251px) and (max-width:350px)":{
      height:'15px',
      borderRadius:'15px',
      width:'70px',
      fontSize:'6px'
    },
    "@media  (min-width:50px) and (max-width:250px)":{
      height:'20px',
      borderRadius:'5px',
      fontSize:'4px',
      width:'20px'
    }
   },
   Text_Double:{
    "@media  (min-width:751px) and (max-width:1400px)":{
      fontSize:'30px'
    },
    "@media  (min-width:501px) and (max-width:750px)":{
      fontSize:'25px'
    },
    "@media  (min-width:351px) and (max-width:500px)":{
      fontSize:'20px'
    },
    "@media  (min-width:251px) and (max-width:350px)":{
      fontSize:'16px'
    },
    "@media  (min-width:50px) and (max-width:250px)":{
      fontSize:'13px'
    }
   }
});
export{styles2};
function Who(){
  const styles=StyleSheet.create({
    heading:{
      "@media(max-width:1000px)":{
        width:'0px'
      }
    }
    });
const [text]= useTypewriter({
  words:['Frontend Developer'],
  loop:{},
  typeSpeed:120,
});
    const nvigate= useNavigate();
  function x(){
    Make_Active("about");
    nvigate("about");

  }
  
    return(
    <>
         <div className="container   ">
         <div className='row d-flex justify-content-center justify-content-xl-start  ' > 
                   <div className='col-xl-6 col-lg-6 col-10   mt-xl-5 ml-md-5 mt-4 mt-xl-5'>
     <a className={`Text_Big ${css(styles2.Text_Big)}`} > Hello, my name is </a> <a className={`Name ${css(styles2.Text_Big)}`}> Nehad Shretah</a>
            <br/><a  className={`Text_Big ${css(styles2.Text_Big)}`} >I'm a </a> <a className={`demo ${css(styles2.Text_Big)}`}>{text}</a>
            <span className={`Text_Big ${css(styles2.Text_Big)}`} style={{fontSize:'30px'}}>
              <Cursor/>
            </span>
            <br/> <b className={`Text_Small  mt-5  ${css(styles2.Text_small)}`}  >I'm a Frontend Developer with  experience for 2 years </b>
             <b className={`Text_Small mb-5  ${css(styles2.Text_small)}`} >in developeing and createing website with React.Js </b>
              <br/>
              <div className={`d-flex justify-content-center  justify-content-md-start ms-xl-5 ms-lg-5 ms-md-5  ms-md-0   `}>
              <button   className={`More mt-4  ms-xl-5 ms-lg-5 ms-md-5 ms-md-0  ${css(styles2.Moro)} `} onClick={x}>More About Me</button>
              </div>
  </div>
<div className={`${css(styles.heading)} col-xl-5 col-lg-5 ms-auto`} id='ss'>
  <Photo />
  </div> 
</div>
    </div>
       <div>     
       </div>
    </>
    
    );}
export default Who;