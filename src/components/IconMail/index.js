/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import styles from './styles.module.css';

function IconMail({width = 18.5, height = 18.5}) {
  return (
    <svg
    width={width}
    height={height}
    aria-hidden="true"
    viewBox="0 -10 100 90"
    className={styles.iconPresentation}>
    <g>
      <path
      fill="currentColor"
      d="M89,82.11c-1,.49-2,1.2-2,2.16s1.44,1.81,3.31,1.14a3.19,3.19,0,0,0,.48-.19A9.2,9.2,0,0,0,95,81.52a10,10,0,0,0,1.35-5.36L96.55,67,97,48.66l.33-18.34.07-4.59,0-2.37a10.24,10.24,0,0,0-.56-3.19,10.57,10.57,0,0,0-10-7.14c-24.5-.31-48.81-.49-73.48-.46A11.12,11.12,0,0,0,3.11,20.39a11.92,11.92,0,0,0-.49,3.35v6.88L2.74,49,2.89,67.3,3,76.47a10.9,10.9,0,0,0,1.71,6.12,10.57,10.57,0,0,0,8.22,4.82c1.22.06,1.65,0,2.52,0L20,87.34l9.17-.15,18.34-.34L84.21,86h0c1.52,0,2.73-.79,2.73-1.72s-1.21-1.69-2.73-1.73h-.43l-36.66-.86-18.34-.34-9.17-.14L15,81.12l-1.14,0a4.67,4.67,0,0,1-.74,0,3.56,3.56,0,0,1-1-.33A123.68,123.68,0,0,0,35.63,54.44l.4.42,2.5,2.58a34.49,34.49,0,0,0,2.93,2.81,14.34,14.34,0,0,0,17.9-.13c1.35-1.17,2-1.91,2.86-2.79l2.51-2.58.28-.3A123.6,123.6,0,0,0,89.62,81.7a4.43,4.43,0,0,1-.65.41ZM9.64,76.81v-.76l.1-9.17L9.9,48.54,10,30.19V26.57c5.31,6,10.64,12,16.11,17.85l6.09,6.4A123.57,123.57,0,0,0,9.64,76.81Zm49.9-27L57,52.29a31.32,31.32,0,0,1-2.29,2.15,7.23,7.23,0,0,1-4.4,1.46,7.31,7.31,0,0,1-4.38-1.52c-.49-.38-1.5-1.4-2.32-2.2L41,49.68,30.53,39.76q-9.81-9.15-19.94-18A3.62,3.62,0,0,1,13.9,20c24.4,0,49.06-.17,73.23-.47a4.2,4.2,0,0,1,3.35,1.81Q80.07,30.43,70,39.86Zm8.91,1,6.2-6.52c5.65-6,11.16-12.2,16.63-18.4v.24l.07,4.58.34,18.34.39,18.34.22,9.16a5.56,5.56,0,0,1-.21,1.92A123.53,123.53,0,0,0,68.45,50.83Z"
      />
    </g>
    </svg>

  );
}

export default IconMail;