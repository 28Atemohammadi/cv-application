import { useState } from "react";
import "../styles/Practical.css";

function Practical(){
    const[company , setCompany] = useState("");
    const[position , setPosition] = useState("");
    const[main ,setMain] = useState("") ;
    const[dateFram , setDateFram] = useState("") ;
    const[dateUntil , setDateUntil] = useState ("") ;
    const[isEditing , setIsEditing ] = useState(true) ;
    
    const handleSubmit = (e) => {
        e.preventDefault () ;
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <div className="practical-experience">
            <h2>Practical Experience</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder="Company Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    />
                    <input 
                    type="text"
                    placeholder="Position Title"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    />
                    <input 
                    type="text"
                    placeholder="Main Responsibilities"
                    value={main}
                    onChange={(e) => setMain(e.target.value)}
                    />
                    <input 
                    type="text"
                    placeholder="Date From"
                    value={dateFram}
                    onChange={(e) => setDateFram(e.target.value)}
                    />
                    <input 
                    type="text"
                    placeholder="Date Until"
                    value={dateUntil}
                    onChange={(e) => setDateUntil(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className="display-info">
                    <p><strong>Company Name :</strong>{company}</p>
                    <p><strong>Position Title :</strong>{position}</p>
                    <p><strong>Main Responsibilities :</strong>{main}</p>
                    <p><strong>Date From :</strong>{dateFram}</p>
                    <p><strong>Date Until :</strong>{dateUntil}</p>
                    <button onClick={handleEdit}>Edit</button>

                </div>
            )}
        </div>
    );


}
export default Practical;