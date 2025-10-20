import { useState } from "react";
import "../styles/GeneralInfo.css" ;

function GeneralInfo() {
    const [name , setName] = useState ("") ;
    const [email , setEmail] = useState ("") ;
    const [phone , setPhone] = useState("") ;
    const [isEditing , setIsEditing] = useState(true) ; 

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false) ; 
    };

    const handleEdit = () => {
        setIsEditing(true) ;
    };

    return (
        <div className="general-info">
            <h2>General Information</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    placeholder=" Full Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                    type="text"
                    placeholder="Email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                    </form>
                ) : (
                    <div className="display-info">
                        <p><strong>Name : </strong>{name}</p>
                        <p><strong> Emali :</strong>{email}</p>
                        <p><strong>Phone :</strong>{phone}</p>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                    )
            }

        </div>
    );

}

export default GeneralInfo;