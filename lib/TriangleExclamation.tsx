import * as React from 'react';
import {SVGProps} from 'react';
const TriangleExclamation = (props: SVGProps<SVGSVGElement>) => (
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
            d="M7.134 2.994 2.217 11.5a1 1 0 0 0 .866 1.5h9.834a1 1 0 0 0 .866-1.5L8.866 2.993a1 1 0 0 0-1.732 0Zm3.03-.75c-.962-1.665-3.366-1.665-4.328 0L.919 10.749c-.964 1.666.239 3.751 2.164 3.751h9.834c1.925 0 3.128-2.085 2.164-3.751l-4.917-8.505ZM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2A.75.75 0 0 1 8 5Zm1 5.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </svg>
);
export default TriangleExclamation;
