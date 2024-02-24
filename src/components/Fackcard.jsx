const Shimmar = () => {
  const arr = [0,1,2,3,4,5,6,7];
  return (
    // <div className="w-1/2 bg-slate-50 mx-auto p-10 text-lg relative top-20">
    //   <h1>
    //     If you are able to see this page , it means yours browser have not CORS
    //     EXTENSION
    //   </h1>
    //   <p>
    //     <span className="bg-[red]">Cross-Origin Resource Sharing (CORS)</span>{" "}
    //     allows web pages to request resources from other domains securely.
    //   </p>
    //   <p>
    //     This problem is happening because, in this project I used{" "}
    //     <mark>Swiggy live API</mark>
    //   </p>
    //   <p>
    //     I requested to you pls install CORS extension and then see my project
    //   </p>
    //   <a
    //     href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
    //     className="text-blue-700 text-xl font-bold border-b-2 border-blue-700"
    //   >
    //     Click Me
    //   </a>
    // </div>

    <div className="relative flex gap-10 flex-wrap justify-center top-20 w-1/2  mx-auto   sm:w-4/5">
      {arr.map((e,i)=>{ return (<div key={i} className="h-72 flex flex-col flex-wrap w-64 bg-slate-200 font-Comforter hover:scale-95 shadow-sm rounded-lg p-2 gap-3">
      <p className="h-1/2 rounded-lg w-full bg-white"></p>
      <h1 className="text-lg font-semibold h-12 rounded-lg bg-white"></h1>
      <h2 className="font-semibold h-12 rounded-lg bg-white"></h2>
   
    </div>)})}
   
    </div>
  );
};

export default Shimmar;
