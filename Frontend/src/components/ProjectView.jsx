import { Link } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button, Spinner } from "@material-tailwind/react";
import AlertBox from "./AlertBox";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
  // State to toggle PDF visibility
  const [showPdf, setShowPdf] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    }finally {
      // Set loading to false once the PDF data is loaded (whether successful or not)
      setIsLoading(false);
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

  // Function to toggle PDF visibility
  const togglePdfDisplay = () => {
    setShowPdf(!showPdf);
  };

  //confirmation alert for pdf download
  const [message, setMessage] = useState(null);

  //for pdf download
  const downloadPdf = () => {
    // Create a link element
    const link = document.createElement("a");

    // Set the link's properties
    link.href = pdfData;
    link.download = props.title || "defaultFileName.pdf"; // Use the passed filename or a default

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link after downloading
    document.body.removeChild(link);

    // Show download alert
    setMessage({ type: "info", message: `Downloading '${props.title}' PDF.` });
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner className="h-12 w-12" />
      </div>
    );
  }else{
    return (
    <div className="mt-4">
      {message && (
        <AlertBox
          type={message.type}
          message={message.message}
          onClose={setMessage}
        />
      )}
      <h1 className="font-semibold flex flex-wrap place-content-center text-xl sm:text-2xl md:text-3xl lg:text-4xl underline underline-offset-auto">
        {props.title}
      </h1>
      <h2 className="font-medium text-base sm:text-lg ml-4 sm:ml-8 md:ml-12 lg:ml-[17vw] mt-2 sm:mt-4 md:mt-[1vw]">
        Authors:
        <Link to={`/profile/${props.author[0]}`} className="text-blue-500">
       {arrayElementsWithSpaces}
       </Link>
      </h2>
      <h2 className="font-medium text-base sm:text-lg ml-4 sm:ml-8 md:ml-12 lg:ml-[17vw] mt-2">
        Date:{" "}
        {`${newDate.getDate()}/${
          newDate.getMonth() + 1
        }/${newDate.getFullYear()}`}
      </h2>
      {/* className="font-medium text-lg ml-[17vw]" */}
      <h2 className="font-medium text-base sm:text-lg ml-4 sm:ml-8 md:ml-12 lg:ml-[17vw] mt-2">
        Domain: {domainElementswithSpace}
      </h2>
      {/* className="p-5 mx-60   text-xl " */}
      <p className="p-5 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60 text-xl">
        {props.abstract}
      </p>
      <div className="p-5 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60 mt-[1vw]">
        <div className="flex gap-2">
          { props.githubLink &&
          <div className="flex gap-2">
            Github Repository
            <Link to={props.githubLink}>
              <FaGithub className="w-7 h-7 mx-1" />{" "}
            </Link>
          </div>
  }
     { props.youtubeLink &&
          <div className="flex gap-2">
            Youtube Video
            <Link to={props.youtubeLink}>
              <FaYoutube className="w-7 h-7 mx-1" />
            </Link>
          </div>
  }
        </div>
        <br />
        <Button onClick={togglePdfDisplay}>
          {showPdf ? "Hide PDF" : "Show PDF"}
        </Button>
        <Button onClick={downloadPdf} className="mx-2">
          Download PDF
        </Button>
      </div>

      <div className="flex flex-col items-center mt-4">
        {showPdf && pdfData && (
          <div className="flex flex-col items-center">
            <Document
              file={pdfData}
              onLoadSuccess={onDocumentLoadSuccess}
              className="outline"
            >
              <Page pageNumber={currentPage} />
            </Document>
            {/* </div> */}
            <div className="mt-4 flex space-x-4">
              <Button onClick={goToPreviousPage} disabled={currentPage === 1}>
                Previous Page
              </Button>
              <span className="font-medium">
                {" "}
                Page {currentPage} of {numPages}{" "}
              </span>
              <Button
                onClick={goToNextPage}
                disabled={currentPage === numPages}
              >
                Next Page
              </Button>
            </div>
          </div>
        )}
      </div>
      {/* </div> */}
    </div>
  );}
}
