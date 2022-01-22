/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import styles from './styles.module.css';

function IconPlay({width = 18.5, height = 18.5}) {
  return (
    <svg
    width={width}
    height={height}
    aria-hidden="true"
    viewBox="200 200 800 800"
    className={styles.iconPlay}>
    <g>
      <path
      fill="currentColor"
      d="m997.8 433.2c0-13.922 0.83984-24.84 0-41.281v0.003906c-0.72656-15.91-3.8828-31.609-9.3594-46.562-11.039-30.238-30.816-56.512-56.816-75.484-26.004-18.977-57.062-29.789-89.227-31.074l-159.72-1.5586-318-0.83984v-0.003906c-32.797 0.49219-64.711 10.727-91.676 29.402-26.969 18.676-47.77 44.949-59.766 75.48-6.0234 15.355-9.668 31.543-10.797 48-1.1992 17.641 0 27.961 0 42.121v79.32l1.5586 158.4 0.83984 79.32v60.117c0.26562 8.0586 1.1484 16.082 2.6406 24 5.8203 31.246 20.809 60.047 43.055 82.742 22.246 22.695 50.746 38.258 81.863 44.699 14.754 2.7422 29.77 3.7891 44.762 3.1211l39.602-0.71875 79.441-1.4414 317.4-7.1992c13.199 0 24-6.7188 24-14.52 0-7.8008-10.441-14.16-24-14.52h-3.6016l-318-7.082-79.32-1.4414-39.719-0.71875c-11.07 0.36328-22.133-0.80859-32.883-3.4805-20.727-5.668-39.32-17.34-53.434-33.543-14.113-16.207-23.117-36.227-25.883-57.535-0.77344-5.6094-1.1328-11.262-1.082-16.922v-59.52l0.83984-79.441 1.3203-158.76v-79.441c0-13.078 0-27.48 0.83984-36v0.003906c1.2812-10.102 3.9023-19.992 7.8008-29.398 8.207-18.848 21.801-34.852 39.07-45.996 17.273-11.145 37.457-16.934 58.008-16.645l318.84-1.1992 157.08-0.83984h0.003907c21.031 1.0195 41.289 8.2422 58.223 20.758 16.934 12.512 29.785 29.758 36.938 49.559 3.6914 9.9297 5.8008 20.379 6.2383 30.961 0.60156 11.398 0 26.039 0.83984 38.762l1.1992 79.441 2.7617 158.76 1.5586 79.441v-0.003906c1.582 25.027 1.2617 50.141-0.95703 75.117-4.4453 22.871-15.555 43.918-31.934 60.488-16.379 16.566-37.289 27.922-60.109 32.633-11.281 2.7617-20.762 8.5195-21 16.801s11.281 14.762 26.16 12h3.9609c29.41-5.582 56.504-19.758 77.863-40.73s36.02-47.809 42.137-77.109c3.3945-27.426 4.8789-55.051 4.4414-82.68l2.0391-78.961 2.7617-158.76z"
      />
      <path
      fill="currentColor"
      d="m785.52 578.76c-95.398-57.84-196.8-106.44-283.56-151.8-4.1992-2.0391-4.4414 1.6797-0.71875 8.5195-3.7188-6.8398-6.9609-8.3984-7.1992-3.6016v1.3203c-7.6797 102.96-20.641 220.8-22.078 338.28h-0.003906c-0.11328 5.4023 1.3008 10.727 4.0781 15.359 3.9922 6.6367 10.441 11.43 17.945 13.34 7.5039 1.9102 15.457 0.78125 22.137-3.1406h0.96094c90.879-54 180.4-110 268.56-168l1.0781-0.71875c3.5547-2.3125 6.5469-5.3867 8.7617-9 4.2266-6.6562 5.5547-14.75 3.6758-22.406-1.8828-7.6562-6.8047-14.215-13.637-18.152zm-269.52-125.4 1.1992 0.83984c72 52.801 135.24 102.96 199.56 147.84-63.281 37.922-125.84 76.879-187.68 116.88-4.1992-82.922-13.801-168-20.16-262.08h0.003906c-1.082-7.5-3.5195-14.738-7.2031-21.359 3.7344 6.7109 8.5586 12.754 14.281 17.879z"
      />
    </g>
    </svg>

  );
}

export default IconPlay;