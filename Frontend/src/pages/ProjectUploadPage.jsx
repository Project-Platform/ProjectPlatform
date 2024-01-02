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
    <div className='flex items-center justify-center font-Arial m-0 p-0 bg-beige min-h-screen'>
      <section className="flex flex-col md:flex-row mx-auto p-8 md:p-12 bg-whitesmoke shadow-md rounded-8">
  <form
    action="#"
    method="post"
    encType="multipart/form-data"
    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
  >
    <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Idea Title (100 characters):</div>
    <TextArea label="Title" />

    <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Domain (AIML, Blockchain, etc):</div>
    <TextArea label="Domain" />

    <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Authors(s) Username:</div>
    <TextArea label="Authors" />

    <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Abstract (1500 characters):</div>
    <TextArea label="Abstract" />

    <div className="md:col-span-2 lg:col-span-1 bg-palevioletred text-blanchedalmond p-3 md:p-12 rounded-4 text-18 font-bold text-xl">Document (PDF or word format, up to 10MB):</div>
    <div className="translate y-50 md:col-span-2 lg:col-span-1"><input type="file" id="ideaTemplate" name="ideaTemplate" accept=".pdf" required className="p-6 md:p-8" /> </div>

    <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 gap-6 text-pale-pink">
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

    <div className="md:col-span-2 lg:col-span-2 grid grid-cols-1 gap-6 text-pale-pink">
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
    </div>
  );
}

export default ProjectUploadPage;

