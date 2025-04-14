
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function Image({
  className,
  src,
  alt,
  fallback = "/placeholder.svg",
  ...props
}: ImageProps) {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <img
      className={cn("object-cover", className)}
      src={error ? fallback : src}
      alt={alt || "Image"}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
}
