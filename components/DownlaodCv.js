import { Router } from "next/router";
import React from "react";
import { MdSimCardDownload } from "react-icons/md";

function DownlaodCv() {
	const handleDownload = () => {
		// Construct the full URL to the PDF file
		const baseUrl = window.location.origin;
		const pdfUrl = baseUrl + "/resume.pdf";

		// Create an anchor element to trigger the download
		const anchor = document.createElement("a");
		anchor.href = pdfUrl;
		anchor.target = "_blank"; // Open in a new tab
		anchor.download = "resume.pdf"; // Specify the file name
		anchor.rel = "noopener noreferrer";

		// Append the anchor to the document and simulate a click
		document.body.appendChild(anchor);
		anchor.click();

		// Clean up by removing the anchor element
		document.body.removeChild(anchor);
	};
	return (
		<a
			onClick={handleDownload}
			aria-label="CV"
			className="-ml-4 xl:ml-0 xl:-mt-2 relative group"
			href="/resume.pdf"
			// download="resume.pdf"
			target="_blank"
			rel="noopener noreferrer">
			<MdSimCardDownload />
			<div className="absolute pr-14 right-0 hidden xl:group-hover:flex -mt-6">
				<div className="bg-white relative flex text-primary items-center p-[6px] rounded">
					<div className="text-[12px] leading-none font-semibold capitalize text-center">
						Télécharger CV
					</div>
					<div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
				</div>
			</div>
		</a>
	);
}

export default DownlaodCv;
