import { styles2 } from './who';
import { css } from 'aphrodite';
import '../Who.css';
function Porjects(){
return(
    <>
    <div className="container  mt-3">
    <div className='row '>
       <a className={`Text_Big  ${css(styles2.Text_Double)}`}>
    My Projects
        </a>
        </div>
        <div className='row'>
        <div className='col-1 '>
          <div className='Big_Line'></div>
        </div>
       </div>
       <div className='row '>
        <div className='col-1'>
          <div className='Small_Line'></div>
        </div>
       </div>
       <div className="row mt-4 ms-4">
        <a className='Text_Small' style={{fontSize:"20px"}}>Age Caluclautor :</a>
       </div>
       <div className="row mt-2">
        <div className="col-8">
          <img className="Age_Cal" />
        </div>

       </div>
    </div>
    </>
);
}
export default Porjects;