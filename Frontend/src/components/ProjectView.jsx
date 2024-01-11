import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Button } from "@material-tailwind/react";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ProjectView(props) {
  const newDate = new Date(props.date);
  const myArray = props.author;
  const arrayElementsWithSpaces = myArray.join(", ");
  const domArray = props.domain;
  const domainElementswithSpace = domArray.join(", ");
  //all of this is for the pdf renderring
  const [pdfData, setPdfData] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);


    const loadPdfData = async () => {
      try {
        // Assuming props.docs is a Uint8Array
        const pdfBlob = new Blob([new Uint8Array(props.docs.data)], {
          type: "application/pdf",
        });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        setPdfData(pdfUrl);
      } catch (error) {
        console.error("Error loading PDF data:", error);
      }
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
      setNumPages(numPages);
    };
  
    const goToPreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const goToNextPage = () => {
      if (currentPage < numPages) {
        setCurrentPage(currentPage + 1);
      }
    };

    useEffect(() => {
      loadPdfData();
    }, [props.docs]);
  

  return (
    <div className="min-h-screen">
      <h1 className="font-semibold text-5xl ml-[18vw] mt-[3vw] underline underline-offset-auto ">
        {props.title}
      </h1>
      <h2 className="font-medium text-lg ml-[18vw] mt-[1vw]">
        Authors: {arrayElementsWithSpaces}
      </h2>

      <h2 className="font-medium text-lg ml-[18vw]">
        Date:{" "}
        {`${newDate.getDate()}/${
          newDate.getMonth() + 1
        }/${newDate.getFullYear()}`}
      </h2>

      <h2 className="font-medium text-lg ml-[18vw]">
        Domain: {domainElementswithSpace}
      </h2>

      <p className="p-5 mx-60  text-xl ">{props.abstract}</p>
      <div className="ml-[17vw] mt-[1vw]">
        <Link to={props.githubLink}>GitHub Link</Link>
        <br />
        <Link to={props.youtubeLink}>Youtube Link</Link>
        <br />
        <div>
        {pdfData && (
            <div>
              <Document file={pdfData} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={currentPage} />
              </Document>
              <div>
                <Button onClick={goToPreviousPage} disabled={currentPage === 1}>Previous Page</Button>
                <span className="font-medium"> Page {currentPage} of {numPages} </span>
                <Button onClick={goToNextPage} disabled={currentPage === numPages}>Next Page</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
