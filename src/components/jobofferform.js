import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Jobofferform() {
    const navigate = useNavigate()
    const url = 'http://localhost:8000/offer'
    const [price ,setPrice] = useState('');
    const [category_id, setCategory_id] = useState('');
    const [client_id, setClient_id]= useState('');
    const[sitter_id,setSitter_id]=useState("");

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            price:price,
            category_id:category_id,
            client_id:client_id,
            sitter_id:sitter_id,

        }
        console.log(data)
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res.json())
            if (!res.ok) setError(" failed. Try again")
            if (res.ok) {
                setSuccess("Filled Successfully")
                setPrice('');
                setCategory_id("");
                setClient_id("");
                setSitter_id("");
                navigate("/sitter-dashboard");
            }
        })
    }

    return (
        <div className="col-sm-6">
            <h2 className="mb-3">JOB OFFER FORM</h2>
            {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
            {success ? <div className="alert alert-success" role="alert">{success}</div> : null}
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="category_id"
                        value={category_id}
                        onChange={(e) => setCategory_id(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="client_id"
                        value={client_id}
                        onChange={(e) => setClient_id(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="sitter_id"
                        value={sitter_id}
                        onChange={(e) => setSitter_id(e.target.value)}
                        required
                    />
                </div>



                <button type="submit" className="btn btn-danger">Submit</button>
            </form>
            <div style={{ paddingTop: '25px' }}>
            <button  onClick={() => { navigate('/sitters-dashboard') }}type="submit" className="btn btn-danger">Return to Dashboard</button>
            </div>
        </div>
    )
}
