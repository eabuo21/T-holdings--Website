import Reacr,  {useState} from "react"
import emailjs from "@emailjs/browser";

const Functions =()=>{
    const [name, setName] =useState ("");
    const [values, setValues] =useState("");
    const [llocation, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
  

    const handleSubmit =()=>{
        event. preventDefault ();
        stLoading (false);

    }


    emailjs
    .send (

    )

    return(
        <>
        <div className="heading-container ">

        </div>
        
        </>
    )
}

export default  Functions;