import { useState } from "react";
import { Player } from "react-player";
import { Document, Page, pdfjs } from "react-pdf";
// import { Button } from "@/components/ui/button";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CoursePage = () => {
  const [selectedContent, setSelectedContent] = useState("video");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [progress, setProgress] = useState(0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setProgress(((pageNumber / numPages) * 100).toFixed(2));
  };

  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
    setProgress(((newPage / numPages) * 100).toFixed(2));
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-semibold mb-4">Course Content</h2>
        <ul>
          <li>
            <button
              className="w-full text-left p-2 hover:bg-gray-200"
              onClick={() => setSelectedContent("video")}
            >
              Video Lesson
            </button>
          </li>
          <li>
            <button
              className="w-full text-left p-2 hover:bg-gray-200"
              onClick={() => setSelectedContent("pdf")}
            >
              PDF Lesson
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        {selectedContent === "video" && (
          <div className="w-full aspect-video">
            <Player url="https://www.example.com/video.mp4" controls width="100%" height="100%" />
          </div>
        )}

        {selectedContent === "pdf" && (
          <div className="w-full flex flex-col items-center">
            <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
            <div className="flex mt-4 space-x-4">
              <button onClick={() => handlePageChange(pageNumber - 1)} disabled={pageNumber <= 1}>
                Previous
              </button>
              <p>
                Page {pageNumber} of {numPages} ({progress}%)
              </p>
              <button onClick={() => handlePageChange(pageNumber + 1)} disabled={pageNumber >= numPages}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;
