/* eslint-disable max-len */
import React from 'react';

interface ICameraIconProps {
  width?: string;
  height?: string;
}

const Component = ({ width = '20', height = '20' }: ICameraIconProps) => (
  <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0002 8.05327C9.2588 8.05415 8.54806 8.34911 8.02391 8.87342C7.49975 9.39773 7.20501 10.1086 7.20435 10.8499C7.20479 11.5914 7.49946 12.3023 8.02366 12.8267C8.54786 13.3511 9.25874 13.6459 10.0002 13.6466C10.7416 13.6459 11.4525 13.3511 11.9767 12.8267C12.5009 12.3023 12.7956 11.5914 12.796 10.8499C12.7954 10.1086 12.5006 9.39773 11.9765 8.87342C11.4523 8.34911 10.7416 8.05415 10.0002 8.05327Z"
      fill="#77777C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0001 15.2225C8.84106 15.2212 7.72988 14.7602 6.91032 13.9406C6.09076 13.1211 5.62975 12.0099 5.62843 10.8508C5.62953 9.69166 6.09044 8.58027 6.91003 7.76053C7.72961 6.94079 8.84092 6.47966 10.0001 6.47834C11.1593 6.47966 12.2706 6.94079 13.0902 7.76053C13.9097 8.58027 14.3707 9.69166 14.3718 10.8508C14.3704 12.0099 13.9094 13.1211 13.0899 13.9406C12.2703 14.7602 11.1591 15.2212 10.0001 15.2225M16.7609 4.28001H14.2993L13.3718 2.47251C13.2247 2.18637 13.0016 1.94631 12.727 1.77871C12.4523 1.61111 12.1368 1.52246 11.8151 1.52251H8.13759C7.80954 1.52247 7.48808 1.61464 7.20989 1.78851C6.9317 1.96238 6.70798 2.21094 6.56426 2.50584L5.70093 4.28001H3.23926C2.96342 4.2799 2.69025 4.33413 2.43537 4.43962C2.18049 4.54511 1.94889 4.69977 1.7538 4.89479C1.55871 5.0898 1.40395 5.32134 1.29836 5.57618C1.19277 5.83102 1.13843 6.10416 1.13843 6.38001V16.0475C1.13843 16.3234 1.19277 16.5965 1.29836 16.8513C1.40395 17.1062 1.55871 17.3377 1.7538 17.5327C1.94889 17.7277 2.18049 17.8824 2.43537 17.9879C2.69025 18.0934 2.96342 18.1476 3.23926 18.1475H16.7609C17.0368 18.1476 17.3099 18.0934 17.5648 17.9879C17.8197 17.8824 18.0513 17.7277 18.2464 17.5327C18.4415 17.3377 18.5962 17.1062 18.7018 16.8513C18.8074 16.5965 18.8618 16.3234 18.8618 16.0475V6.38001C18.8618 6.10416 18.8074 5.83102 18.7018 5.57618C18.5962 5.32134 18.4415 5.0898 18.2464 4.89479C18.0513 4.69977 17.8197 4.54511 17.5648 4.43962C17.3099 4.33413 17.0368 4.2799 16.7609 4.28001"
      fill="#77777C"
    />
  </svg>
);

export default Component;