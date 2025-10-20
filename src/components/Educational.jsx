import { useState } from "react";
import "../styles/Educational.css";

function Educatonal () {
    const[school , setSchool] = useState ("");
    const [title , setTitle ] = useState("");
    const [date , setDate ] = useState ("");
    const [isEditing , setIsEditing] = useState(true) ;

    const handleSubmit = (e) => {
       e.preventDefault();
       setIsEditing(false); 
    };

    const handleEdit = () => {
        setIsEditing (true) ;
    };

    return (
        <div className="educational-section">
            <h2>Educational Experience</h2>
        
                {isEditing ? (
                    <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder="School Name"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Title Of Study"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <input 
                    type="text"
                    placeholder="Date Of Study"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                    <button type="Submit">Submit</button>
                </form>
                ) : (
                    <div className="display-info">
                        <p><strong>School :</strong>{school}</p>
                        <p><strong>Title :</strong>{title}</p>
                        <p><strong>Date :</strong>{date}</p>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )
            }
            
        </div>
    );

}
export default Educatonal;