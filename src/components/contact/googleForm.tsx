import React from "react";

interface GoogleFormEmbedProps {
  formUrl: string;
  width?: string;
  height?: string;
  title?: string;
}

const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({
  formUrl,
  width = "640",
  height = "800",
  title = "Google Form",
}) => {
  return (
    <div
      className="google-form-container"
      style={{
        width: width,
        height: height,
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <iframe
        src={formUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title={title}
      >
        Loading...
      </iframe>
    </div>
  );
};

export default GoogleFormEmbed;
