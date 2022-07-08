
import '../App.css';
import { Link } from 'react-router-dom';
function Contents()
{
    
    return (

        <div className = "content">
            
             <div className="pant">
              <Link to= "/pant" style ={{textDecoration: "none"}} > <div className="pant1">Pant</div></Link>
             </div>
             <div className="shirt">
              <Link to="/shirt" style ={{textDecoration:"none"}} >  <div className="shirt1">Shirt</div></Link>
             </div>
             <div className="shoes">
              <Link to="/shoes" style ={{textDecoration:"none"}}> <div className="sport1">Shoes</div></Link> 
             </div>
            
        </div>

    )  
} 
export default Contents;