import * as React from "react";
import { SVGProps } from "react";
export const BlobSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={550}
    height={550}
    viewBox="0 0 200 200"
    {...props}
  >
    <path
      fill="#6EE0F7"
      d="M136.1 56.3c10.8 9.6 19.5 21 26.9 36.5 7.4 15.5 13.4 35.2 7.2 49.5-6.2 14.4-24.6 23.4-42 25.6-17.4 2.1-33.8-2.6-51.1-7.7-17.4-5.1-35.7-10.5-43.3-22.5-7.7-12.1-4.7-30.9-2.6-51 2.2-20.2 3.4-41.6 14.7-51.2 11.4-9.5 32.7-7.1 49.8-2 17 5.2 29.7 13.1 40.4 22.8Z"
    />
  </svg>
);

export const BlogSvgI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={500}
    height={500}
    viewBox="0 0 200 200"
    {...props}
  >
    <path
      fill="#6EE0F7"
      d="M149.9 53.3c14.2 11 24.7 28.8 22 44-2.7 15.2-18.6 27.7-32.7 41.6-14.2 13.8-26.7 29-43.6 33.5-16.9 4.4-38.3-2-46.9-15.8-8.7-13.9-4.6-35.3.5-51.5C54.3 88.8 60.4 77.6 69 66.7c8.6-10.9 19.8-21.6 34.3-24.9 14.6-3.4 32.4.6 46.6 11.5Z"
    />
  </svg>
);

export const DividerSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    {...props}
  >
    <path
      d="M985.66 92.83C906.67 72 823.78 31 743.84 14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84 11.73-114 31.07-172 41.86A600.21 600.21 0 0 1 0 27.35V120h1200V95.8c-67.81 23.12-144.29 15.51-214.34-2.97Z"
      className="shape-fill"
    />
  </svg>
);
