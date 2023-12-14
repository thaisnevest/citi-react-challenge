import React from "react";
import { LogoCiti, Image } from "../../assets"
import { Typography, TextField, Button } from "@mui/material";


export default function Desafio() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between"}}>

            <div style={{width: "1440px", height: "900px", background: "#F8FAFC"}}>
                <div style={{ width: "72px", height: "39px", marginTop: "48px", marginLeft: "112px"}}> 
                    <img src={LogoCiti.src}></img>
                </div>
                <div style={{width: "384px", height: "427px", display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "121px", marginLeft: "112px"}}>
                    <Typography variant="h4" style={{color:"#1E293B"}}>Acesse a plataforma</Typography>
                    <p style={{marginTop: "16px"}}>Faça login ou registre-se para começar a construir <br /> seus projetos ainda hoje.</p>
                    <Typography color={"#1E293B"} style={{marginTop: "40px", fontSize: "14px"}}>E-mail</Typography>
                    <TextField placeholder="Digite seu e-mail" style={{color: "#94A3B8", fontSize: "14px", width: "384px"}}></TextField>
                    <Typography style={{ marginTop: "20px", fontSize: "14px" }} color={"#1E293B"}>Senha</Typography>
                    <TextField placeholder="Digite sua senha" style={{color:"#94A3B8", fontSize: "14px", width: "384px"}}></TextField>
                    <Button variant="contained" style={{marginTop: "32px", height: "56px", width: "384px", backgroundColor: "#51E678", fontSize: "16px", borderRadius: "4px"}}>Entrar</Button>
                </div>
            </div>

            <div style={{width: "738px", height: "911px"}}>
                <img src={Image.src}/>
            </div>

        </div>
        
    );
}
