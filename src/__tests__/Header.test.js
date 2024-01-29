import Header from "../components/Header"
import { render , screen } from "@testing-library/react"
import "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../redux/appStore";
import { BrowserRouter } from "react-router-dom";

test("loading of header" , ()=>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
})

test("loading of Our Grocery in Header" , ()=>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );


    const our_grocery = screen.getByText("Our Grocery");
    expect(our_grocery).toBeInTheDocument();

})

test("loading of About in Header" , ()=>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );


    const heading = screen.getByRole("heading",{name:"About"});
    expect(heading).toBeInTheDocument();

})

test("loading of cart - 0 in Header" , ()=>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );


    const cart = screen.getByText("Cart - 0");
    expect(cart).toBeInTheDocument();

})

test("loading of cart in Header" , ()=>{
    render(
    <BrowserRouter>
    <Provider store = {appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );


    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();

})