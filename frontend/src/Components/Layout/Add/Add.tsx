import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Parts from "../../../Models/parts_model";
import Problem from "../../../Models/problem_model";
import Header from "../Header/Header";
import "./Add.css";

function Add(): JSX.Element {
    const[parts,setParts]=useState<Parts[]>([]);
    const { register, handleSubmit } = useForm<Problem>();
    const navigate = useNavigate();
    // const [problem,setProblems]=useState<Problem[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/problem/parts")
        .then(response=>setParts(response.data));
    },[])

    const send=async(newProblem:Problem)=>{
        try{
            axios.post("http://localhost:3001/problem/",newProblem)
            .then(res=>navigate("/"));
        }catch(err:any){
            console.log(err.message);
        }
    }

    return (
        <div className="Add">
            <Header/>

			<div className="Box">
                <form onSubmit={handleSubmit(send)}>
                    <h2>add problem</h2>

                    <label>name:</label>
                    <input type="text"  {...register("name")}/>

                    <label>address:</label>
                    <input type="text"  {...register("address")}/>

                    <label>tel:</label>
                    <input type="text"  {...register("tel")}/>

                    <label>part:</label>
                    <select  style={{ height: 30 }} {...register("part")}>
                        <option disabled value="">Select part...</option>
                        {parts.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>
                    
                    <label>description:</label>
                    <textarea rows={5} cols={38} {...register("description")}/>

                    <input type="submit" value="save problem" style={{ height: 50, backgroundColor: "lightgreen", borderRadius: 20 }} />

                </form>
            </div>

        </div>
    );
}

export default Add;
