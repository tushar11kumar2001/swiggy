import Contact from "../components/Contact";
import { render , screen } from "@testing-library/react";
import "@testing-library/jest-dom"

// test("contact page should be loaded and heading  is render or not" , ()=>{
//     render(<Contact/>);
//       const heading = screen.getByRole("heading");
//       expect(heading).toBeInTheDocument();
//   }) 


test("contact page should be loaded and p tag is render or not" , ()=>{
  render(<Contact/>);
    const paragraph = screen.getByText("tushar kumar");
    expect(paragraph).toBeInTheDocument();
}) 

test("contact page should be loaded and heading by title attribute is render or not" , ()=>{
    render(<Contact/>);
      const heading = screen.getByTitle("location");
      expect(heading).toBeInTheDocument();
  }) 