// import React, { useState } from 'react';
// import TextArea from '../components/TextArea';

// function ProjectUploadPage() {
//     const [PCisMouseOver, PCsetMouse] = useState(false);
//     const [UpisMouseOver, UpsetMouse] = useState(false);
//     function PChandleMouseOver(){
//         PCsetMouse(true);
//     }
//     function PChandleMouseOut(){
//         PCsetMouse(false);
//     }
//     function UphandleMouseOver(){
//         UpsetMouse(true)
//     }
//     function UphandleMouseOut(){
//         UpsetMouse(false);
//     }
//     return (
//         <div className="font-Arial m-0 p-0 bg-beige">
//             <header className="bg-black text-white p-20 text-center">
//                 <h1 className="mt-3 mb-0 text-2xl"> Project Upload</h1>
//             </header>
//             {/* grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-20 */}
//             <section className="flex flex-auto  grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-20 max-w-800 mx-auto p-20 bg-whitesmoke shadow-md rounded-8">
//                 <form action="#" method="post" enctype="multipart/form-data" className="grid grid-cols-[1fr,3fr] gap-10">
//                     <div className="bg-palevioletred text-blanchedalmond p-10 rounded-4 text-18 font-bold text-xl">Idea Title (100 characters):</div>
//                     <TextArea label="Title"/>

//                     <div className="bg-palevioletred text-blanchedalmond p-10 rounded-4 text-18 font-bold text-xl">Domain (AIML,Blockchain,etc):</div>
//                     <TextArea label="Domain"/>

//                     <div className="bg-palevioletred text-blanchedalmond p-10 rounded-4 text-18 font-bold text-xl">Authors(s) Username:</div>
//                     <TextArea label="Authors"/>
//                     {/* <div className="bg-palevioletred text-blanchedalmond p-10 rounded-4 text-18 font-bold">Idea Description (50000 characters):</div>
//                     <TextArea id="ideaDescription" name="ideaDescription" rows="5" maxLength="50000" required /> */}

//                     <div className="bg-palevioletred text-blanchedalmond p-10 rounded-4 text-18 font-bold text-xl">Abstract (1500 characters):</div>
//                     <TextArea label="Abstract" className=""/>

//                     <div className="bg-palevioletred text-blanchedalmond p-10 rounded-4 text-18 font-bold text-xl">Document (PDF or word format, up to 10MB):</div>
//                     <div className="translate y-50"><input type="file" id="ideaTemplate" name="ideaTemplate" accept=".pdf" required /> </div>

//                     {/* <div className="bg-palevioletred text-blanchedalmond p-10 rounded-4 text-18 font-bold">Thumbnail (up to 5MB):</div>
//                     <input type="file" id="thumbnail" name="thumbnail" accept="image/*" required /> */}

//                     {/* <div className="bg-palevioletred text-blanchedalmond p-10 rounded-4 text-18 font-bold">External Link (Youtube, Github) - (Optional):</div>
//                     <input type="url" id="externalLink" name="externalLink" placeholder="https://example.com" /> */}

//                     {/* <div className="bg-palevioletred text-blanchedalmond p-10 rounded-4 text-18 font-bold">Mentors:</div>
//                     <input type="text" id="men" name="men" maxLength="100" required /> */}

//                     <div className="col-span-2 grid grid-cols-[1fr,auto] gap-0 text-pale-pink">
//                         <button className="p-10 bg-lightseagreen text-black border-2 rounded-4 cursor-pointer text-16 transition-all shadow-md border-black hover:shadow-lg hover:border-black" onMouseOver={PChandleMouseOver} onMouseOut={PChandleMouseOut} style={{backgroundColor: PCisMouseOver? "black" : "white", color: PCisMouseOver? "white":"black"}}>PLAGIARISM CHECKER</button>
//                     </div>
//                     <button className="p-10 bg-lightseagreen text-black border-2 rounded-4 cursor-pointer text-16 transition-all shadow-md border-black hover:shadow-lg hover:border-black" type="submit" onMouseOver={UphandleMouseOver} onMouseOut={UphandleMouseOut} style={{backgroundColor: UpisMouseOver? "black" : "white", color: UpisMouseOver? "white":"black"}}>UPLOAD PROJECT</button>
//                 </form>
//             </section>

//              {/* <footer className="text-center mb- p-10 bg-white-800 text-white fixed bottom-0 w-full">
//                 &copy; 2023 Project Pinnacle All rights reserved.
//             </footer>  */}
//         </div>
//     );
// }

// export default ProjectUploadPage;

import React, { useState } from 'react';
import TextArea from '../components/TextArea';

function ProjectUploadPage() {
  const [PCisMouseOver, PCsetMouse] = useState(false);
  const [UpisMouseOver, UpsetMouse] = useState(false);

  function PChandleMouseOver() {
    PCsetMouse(true);
  }

  function PChandleMouseOut() {
    PCsetMouse(false);
  }

  function UphandleMouseOver() {
    UpsetMouse(true);
  }

  function UphandleMouseOut() {
    UpsetMouse(false);
  }

  return (
    <div className="font-Arial m-0 p-0 bg-beige">
      <header className="bg-black text-white p-8 md:p-12 text-center">
        <h1 className="mt-3 mb-0 text-xl md:text-2xl"> Project Upload</h1>
      </header>

      <section className="flex flex-col md:flex-row mx-auto p-8 md:p-12 bg-whitesmoke shadow-md rounded-8">
        <form
          action="#"
          method="post"
          encType="multipart/form-data"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <div className="col-span-2 md:col-span-1 lg:col-span-2 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Idea Title (100 characters):</div>
          <TextArea label="Title"  />

          {/* className="flex p-6 md:p-8 col-span-2 md:col-span-1 lg:col-span-2 w-full md:w-auto" */}

          <div className="col-span-2 md:col-span-1 lg:col-span-2 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Domain (AIML, Blockchain, etc):</div>
          <TextArea label="Domain" className="p-6 md:p-8 col-span-2 md:col-span-1 lg:col-span-2 w-full md:w-auto" />

          <div className="col-span-2 md:col-span-1 lg:col-span-2 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Authors(s) Username:</div>
          <TextArea label="Authors" className="p-6 md:p-8 col-span-2 md:col-span-1 lg:col-span-2 w-full md:w-auto" />

          <div className="col-span-2 md:col-span-1 lg:col-span-2 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Abstract (1500 characters):</div>
          <TextArea label="Abstract" className="p-6 md:p-8 col-span-2 md:col-span-1 lg:col-span-2 w-full md:w-auto" />

          <div className="col-span-2 md:col-span-1 lg:col-span-2 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Document (PDF or word format, up to 10MB):</div>
          <div className="translate y-50 col-span-2"><input type="file" id="ideaTemplate" name="ideaTemplate" accept=".pdf" required className="p-6 md:p-8" /> </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-1 grid grid-cols-1 gap-6 text-pale-pink">
            <button
              className="p-6 md:p-8 bg-lightseagreen text-black border-2 rounded-4 cursor-pointer text-base md:text-16 transition-all shadow-md border-black hover:shadow-lg hover:border-black"
              onMouseOver={PChandleMouseOver}
              onMouseOut={PChandleMouseOut}
              style={{
                backgroundColor: PCisMouseOver ? 'black' : 'white',
                color: PCisMouseOver ? 'white' : 'black',
              }}
            >
              PLAGIARISM CHECKER
            </button>
          </div>

          <div className="col-span-2 md:col-span-2 lg:col-span-1 grid grid-cols-1 gap-6 text-pale-pink">
            <button
              className="p-6 md:p-8 bg-lightseagreen text-black border-2 rounded-4 cursor-pointer text-base md:text-16 transition-all shadow-md border-black hover:shadow-lg hover:border-black"
              type="submit"
              onMouseOver={UphandleMouseOver}
              onMouseOut={UphandleMouseOut}
              style={{
                backgroundColor: UpisMouseOver ? 'black' : 'white',
                color: UpisMouseOver ? 'white' : 'black',
              }}
            >
              UPLOAD PROJECT
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ProjectUploadPage;
