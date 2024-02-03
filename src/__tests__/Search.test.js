import React from "react";
import { render,screen} from "@testing-library/react"
import CardContainer from  "../components/CardContainer";
import Mock_DATA from "../mockData/mockRestList.json"
import { act } from "react-dom/test-utils";
// import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=> Promise.resolve({
    json: ()=> Promise.resolve(Mock_DATA)
}));
     
it("should cardcontainer render with search field" , async()=>{
 await act(()=>render(<CardContainer/>)) ;
    const search = screen.getByText("search");
    expect(search).toBeInTheDocument();
})