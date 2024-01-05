// import React, { useState } from 'react';
// import TextArea from '../components/TextArea';
// import { TagsInput } from "react-tag-input-component";
// import { Button } from "@material-tailwind/react";

// function ProjectUploadPage() {
//   // const [PCisMouseOver, PCsetMouse] = useState(false);
//   // const [UpisMouseOver, UpsetMouse] = useState(false);
//   const [Author, changeAuthor] = useState([]);
//   const [Domain, changeDomain] = useState([]);

//   // function PChandleMouseOver() {
//   //   PCsetMouse(true);
//   // }

//   // function PChandleMouseOut() {
//   //   PCsetMouse(false);
//   // }

//   // function UphandleMouseOver() {
//   //   UpsetMouse(true);
//   // }

//   // function UphandleMouseOut() {
//   //   UpsetMouse(false);
//   // }

//   return (
//     <div className="font-Arial m-0 p-0 bg-beige">
//       {/* <header className="bg-black text-white p-8 md:p-12 text-center">
//         <h1 className="mt-3 mb-0 text-xl md:text-2xl"> Project Upload</h1>
//       </header> */}
//       <div className='mt-16 font-Arial '>
//         <h1 className="flex items-center justify-center mt-3 mb-0 text-xl md:text-5xl text-bold"> Project Upload</h1>
//       </div>
//     <div className='flex items-center justify-center font-Arial m-0 p-0 bg-beige '>
//       <section className="flex flex-col md:flex-row mx-auto p-8 md:p-12 bg-whitesmoke shadow-md rounded-8">
//   <form
//     action="#"
//     method="post"
//     encType="multipart/form-data"
//     className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
//   >
//     <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Idea Title (100 characters):</div>
//     <TextArea label="Title" />

//     <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Domain (AIML, Blockchain, etc):</div>
//     <TagsInput
//         value={Author}
//         onChange={changeAuthor}
//         name="Authors"
//         placeHolder="Enter Author Name:"
//       />

//     <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Authors(s) Username:</div>
//     <TagsInput
//         value={Domain}
//         onChange={changeDomain}
//         name="Domain"
//         placeHolder="Enter Domain:"
//       />

//     <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Abstract (1500 characters):</div>
//     <TextArea label="Abstract" />

//     <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Document (PDF or word format, up to 500Kb):</div>
//     <Button variant="gradient" className="flex items-center mt-5" size="lg" style={{ height: '5rem' }}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={2}
//           stroke="currentColor"
//           className="h-5 w-5"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
//           />
//         </svg>
//            Upload Files
//       </Button>
//       <div className='flex flex-col items-center justify-center'>
//   <div className="mb-4">
//     <Button variant="filled" size="lg">Plagiarism Checker</Button>
//   </div>
//   <p></p>
//   <div className="mb-4">
//     <Button variant="filled" size="lg">Upload Project</Button>
//   </div>
// </div>

//   </form>
// </section>
// </div>
//     </div>
//   );
// }

// export default ProjectUploadPage;

// import React, { useState } from 'react';
// import TextArea from '../components/TextArea';
// import { TagsInput } from "react-tag-input-component";
// import { Button } from "@material-tailwind/react";

// function ProjectUploadPage() {
//   const [Author, changeAuthor] = useState([]);
//   const [Domain, changeDomain] = useState([]);

//   return (
//     <div className="font-Arial m-0 p-0 bg-beige">
//       <div className='mt-16 font-Arial'>
//         <h1 className="flex items-center justify-center mt-3 mb-0 text-xl md:text-5xl text-bold"> Project Upload</h1>
//       </div>
//       <div className='flex items-center justify-center font-Arial m-0 p-0 bg-beige'>
//         <section className="flex flex-col md:flex-row mx-auto p-8 md:p-12 bg-whitesmoke shadow-md rounded-8">
//           <form
//             action="#"
//             method="post"
//             encType="multipart/form-data"
//             className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
//           >
//             {/* ... other form elements ... */}
//             <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Idea Title (100 characters):</div>
//     <TextArea label="Title" />

//     <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Domain (AIML, Blockchain, etc):</div>
//     <TagsInput
//         value={Author}
//         onChange={changeAuthor}
//         name="Authors"
//         placeHolder="Enter Author Name:"
//       />

//     <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Authors(s) Username:</div>
//     <TagsInput
//         value={Domain}
//         onChange={changeDomain}
//         name="Domain"
//         placeHolder="Enter Domain:"
//       />

//     <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Abstract (1500 characters):</div>
//     <TextArea label="Abstract" />

//     <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">Document (PDF or word format, up to 500Kb):</div>
//             <Button variant="gradient" className="flex items-center mt-5" size="lg" style={{ height: '5rem' }}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={2}
//                 stroke="currentColor"
//                 className="h-5 w-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
//                 />
//               </svg>
//               Upload Files
//             </Button>

//             <div className="flex items-center mt-4 flex-col md:flex-row">
//               <div className="mb-2 md:mr-2">
//                 <Button variant="filled" size="lg">Plagiarism Checker</Button>
//               </div>
//               <div className="mb-2">
//                 <Button variant="filled" size="lg">Upload Project</Button>
//               </div>
//             </div>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default ProjectUploadPage;

import React, { useState } from "react";
import TextArea from "../components/TextArea";
import { TagsInput } from "react-tag-input-component";
import { Button } from "@material-tailwind/react";

function ProjectUploadPage() {
  const [Author, changeAuthor] = useState([]);
  const [Domain, changeDomain] = useState([]);

  return (
    <div className="font-Arial m-0 p-0 bg-beige">
      <div className="mt-16 font-Arial">
        <h1 className="flex items-center justify-center mt-3 mb-0 text-xl md:text-5xl text-bold">
          {" "}
          Project Upload
        </h1>
      </div>
      <div className="flex items-center justify-center font-Arial m-0 p-0 bg-beige">
        <section className="flex flex-col md:flex-row mx-auto p-4 md:p-8 bg-whitesmoke shadow-md rounded-8">
          <form
            action="#"
            method="post"
            encType="multipart/form-data"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center"
          >
            <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">
              Idea Title (100 characters):
            </div>
            <TextArea label="Title" />

            <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">
              Domain (AIML, Blockchain, etc):
            </div>
            <TagsInput
              value={Author}
              onChange={changeAuthor}
              name="Authors"
              placeHolder="Enter Author Name:"
            />

            <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">
              Authors(s) Username:
            </div>
            <TagsInput
              value={Domain}
              onChange={changeDomain}
              name="Domain"
              placeHolder="Enter Domain:"
            />

            <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">
              Abstract (1500 characters):
            </div>
            <TextArea label="Abstract" />

            <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-2 md:p-12 rounded-4 text-18 font-bold text-xl">
              Document (PDF or word format, up to 500Kb):
            </div>
            <Button
              variant="gradient"
              className="flex items-center mt-5 mx-auto"
              size="lg"
              style={{ height: "5rem" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              Upload Files
            </Button>
              <div className="flex jmt-4 flex-col md:flex-row mx-auto col-span-2">
                <div className="mb-2 md:mr-2 display-block">
                  <Button variant="filled" size="lg">
                    Plagiarism Checker
                  </Button>
                </div>
                <br />
                <div className="mb-2">
                  <Button variant="filled" size="lg">
                    Upload Project
                  </Button>
                </div>
              </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ProjectUploadPage;
