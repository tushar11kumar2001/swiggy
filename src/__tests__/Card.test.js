import "@testing-library/jest-dom"
import Card , {withPromotedLabel}from "../components/Card"
import MOCK_DATA from "../mockData/cardmaok.json";
import { render , screen } from "@testing-library/react";
 
const PromotedCardComponent = withPromotedLabel(Card);
it("loading card" , ()=>{
    render(<Card restData = {MOCK_DATA}/>);
    const name = screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
})

it("loading higher order component" , ()=>{
    render(<PromotedCardComponent restData = {MOCK_DATA}/>);
    const promoted = screen.getByText("Promoted");
    expect(promoted).toBeInTheDocument();
})



