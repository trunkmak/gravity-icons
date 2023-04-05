import * as React from 'react';
import {SVGProps} from 'react';
const FileExclamation = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M12.5 12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h2.757a1.5 1.5 0 0 1 1.061.44l3.243 3.242a1.5 1.5 0 0 1 .439 1.06V12Zm.621-6.879A3 3 0 0 1 14 7.243V12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h2.757a3 3 0 0 1 2.122.879L13.12 5.12ZM8 5a.75.75 0 0 1 .75.75V8.5a.75.75 0 0 1-1.5 0V5.75A.75.75 0 0 1 8 5Zm1 6.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default FileExclamation;
