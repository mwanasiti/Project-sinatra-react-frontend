import React from "react";
import {useState} from "react";
import userEvent from "@testing-library/user-event";



function Topics ({id,name}){
    return (  
        <div className="course">
            <form>
            <div class="card">
            <div class="card-body">
            <div className="details">
                <section>
                    <h3>{id}</h3>
                    <h3>Name:{name}</h3>
                </section>
                </div>

    
    
  </div>
</div>
            </form>
            

        </div>
    )
}


export default Topics;