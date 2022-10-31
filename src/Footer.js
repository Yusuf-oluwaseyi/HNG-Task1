import zuri from './images/zuri.png';
import ingressive from './images/ingressive.png';
const Footer = () => {
    return ( 
        <div className="footer">
            <hr />
            <div className='zuri'>
            <img src={zuri} alt="" />
            <p>HNG internship 9 Frontend Task</p>
            <img src={ingressive} alt="" />
            </div>
        </div>
     );
}
 
export default Footer;