import React from "react";
import illustration from '../imgs/undraw_selecting_1lx3.svg';
import Form from './contact.form';

export default() =>(
    <header className="bg-purple-600">
        <div className="container mx-auto p-12 max-w-4xl ">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className=" font-bold text-purple-700 text-6xl">Hola Soy Daniel</h1>
                    <p className="text-xl font-light">Creo Paginas web revolucionarias</p>
                </div>
                <img src={illustration} alt="Hombre seleccionando elemento de un grid" style={{height:"300px"}}></img>
            </div>
            <Form/>
        </div>
    </header>
)