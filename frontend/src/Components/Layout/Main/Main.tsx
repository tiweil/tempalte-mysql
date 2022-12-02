import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Problem from "../../../Models/problem_model";
import Header from "../Header/Header";
import "./Main.css";

function Main(): JSX.Element {
    const[problems,setProblems]=useState<Problem[]>([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/problem/")
        .then(response=>setProblems(response.data));
    },[])
    return (
        <div className="Main">'
            <Header/>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>address</th>
                        <th>tel</th>
                        <th>part</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {problems.map((item)=>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.address}</td>
                            <td>{item.tel}</td>
                            <td>{item.part}</td>
                            <td>{item.description}</td>
                            <td><button onClick={()=>{
                                axios.delete(`http://localhost:3001/problem/${item.id}`);
                                setProblems(problems.filter(singleProblem=>singleProblem.id !== item.id));
                            }}>❌</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Main;
