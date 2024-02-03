import { sum } from "../testCases/sum";

test("check sum" , ()=>{
    const res = sum(2,3);
    //Assertion
    expect(res).toBe(5);
});


test("check sum 2" , ()=>{
    const res = sum(100 ,100);
    //Assertion
    expect(res).toBe(200);
})