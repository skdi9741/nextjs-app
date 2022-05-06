import { Header, Image } from "semantic-ui-react";
import Gnb from "./Gnb";


export default function Top(){
    return (
        <div>
            <div style={{display:"flex", justifyContent : "center", paddingTop : 20}}>
                <div style={{flex:"100px 0 0"}}>
                    <img src="/images/logo_2.png" alt="logo" style={{display:"block", height : 256}} />
                </div>
                <Header as="h2"></Header>
            </div>
            <Gnb />
        </div>
        
    );
};

