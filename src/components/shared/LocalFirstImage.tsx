"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type LocalFirstImageProps = Omit<ImageProps, "src"> & {
  localSrc: string;
  fallbackSrc: string;
};

export default function LocalFirstImage({
  localSrc,
  fallbackSrc,
  alt,
  ...props
}: LocalFirstImageProps) {
  const [hasLocalError, setHasLocalError] = useState(false);

  return (
    <Image
      {...props}
      src={hasLocalError ? fallbackSrc : localSrc}
      alt={alt}
      quality={100}
      onError={() => {
        if (!hasLocalError) {
          setHasLocalError(true);
        }
      }}
    />
  );
}
