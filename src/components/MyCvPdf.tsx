import React from "react";

import PDFViewer from "pdf-viewer-reactjs";

const MyCvPdf = () => {
  const styleImg ={ width: "100%"}
  return (
    <img
      style={styleImg}
      src="/assets/images/cv_nml.png"
      alt="myCV"
    />
  );
};

export default MyCvPdf;
