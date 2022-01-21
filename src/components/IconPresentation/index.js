/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import styles from './styles.module.css';

function IconPresentation({width = 18.5, height = 18.5}) {
  return (
    <svg
    width={width}
    height={height}
    aria-hidden="true"
    viewBox="0 0 700 700"
    className={styles.iconPresentation}>
    <g>
      <path
      fill="currentColor"
      d="m694.33 242.83c-4.8828-20.793-16.406-39.43-32.824-53.094-16.418-13.668-36.84-21.613-58.176-22.645h-14.906l0.76953-0.55859c16.156-14.066 26.449-33.688 28.84-54.977 2.3867-21.289-3.2969-42.703-15.934-60-12.641-17.301-31.309-29.227-52.316-33.426-15.852-3.2031-32.281-1.9414-47.461 3.6406-15.395 5.6445-28.805 15.668-38.57 28.84-9.6328 13.109-15.402 28.652-16.66 44.871-1.9492 24.531 6.7188 48.719 23.801 66.43 1.4688 1.4688 3.0781 2.8008 4.6211 4.1992h-0.49219c-3.8398 0.074219-7.6719 0.35547-11.48 0.83984-26.844 3.6602-50.93 18.379-66.43 40.602-1.1211 1.5391-2.1016 3.0781-3.0781 4.7617-0.98047 1.6797-1.9609 3.2188-2.6602 4.4805l-9.0312 15.82-8.5391 14.695-31.57-18.969-11.762-7c-5.125-3.3594-10.715-5.9531-16.59-7.6992-13.113-3.5469-27.098-1.7578-38.902 4.9688-11.801 6.7266-20.465 17.852-24.098 30.941-2.6094 9.4297-2.4531 19.414 0.44922 28.762 2.9062 9.3438 8.4336 17.656 15.934 23.949 2.332 1.918 4.8125 3.6523 7.418 5.1797l5.4609 3.2188 20.859 12.738 41.441 24.57 10.078 5.9492 4.9688 2.9414 2.4492 1.4688 3.4297 1.8203h0.003906c9.082 4.5508 19.215 6.582 29.348 5.8789s19.895-4.1094 28.262-9.8672c3.9922-2.7188 7.5938-5.9688 10.711-9.6602l2.2383-2.6602 1.6094-2.1016 3.1484-4.1992 1.2617-1.75c0.83984 33.391 1.8203 62.578 2.8711 87.641 0 5.2969 4.293 9.5898 9.5898 9.5898s9.5898-4.293 9.5898-9.5898c1.3984-34.301 2.6602-76.23 3.7812-126.49 0.10156-5.6445-3.3711-10.738-8.6602-12.707-5.293-1.9688-11.25-0.38281-14.859 3.957l-0.35156 0.42188-25.41 31.215-3.3594 4.0586-1.6797 2.0312-1.2617 1.3281v0.003906c-1.5781 1.7188-3.3906 3.2031-5.3906 4.4102-4.0117 2.5352-8.625 3.9609-13.367 4.1289-4.875 0.24609-9.7227-0.86719-14-3.2188l-1.6094-0.91016-7.3477-4.6172-9.8711-6.2305-40.809-25.691-21-13.23-5.3203-3.3594h-0.003906c-1.043-0.63672-2.0234-1.3633-2.9414-2.1719-2.3281-2.1641-3.9961-4.9414-4.8125-8.0117-0.81641-3.0742-0.75-6.3125 0.19531-9.3477 1.2305-4.1523 4.0586-7.6484 7.8633-9.7227 3.8047-2.0742 8.2773-2.5547 12.434-1.3359 6.7227 3.2148 13.203 6.9102 19.391 11.059l47.391 29.539h0.42188c4.1914 2.4648 9.1914 3.1562 13.895 1.9219 4.707-1.2344 8.7227-4.293 11.164-8.5l18.199-31.078 9.1719-15.68c0.83984-1.4688 1.4688-2.3789 2.0312-3.3594l-0.003906-0.003906c0.59766-0.99219 1.2539-1.9531 1.9609-2.8711 9.6562-13.473 24.449-22.363 40.879-24.57 2.3242-0.28125 4.6602-0.44141 7-0.48828h15.051c8.4727-0.61328 16.402-4.3984 22.207-10.598 5.8008-6.2031 9.0547-14.367 9.1016-22.859 0.050781-8.4961-3.1055-16.695-8.8398-22.965-1.1875-1.3086-2.4727-2.5273-3.8477-3.6367l-2.1016-1.5391-1.0508-0.69922c-0.91016-0.69922-1.8906-1.2617-2.7305-1.9609l0.003907-0.003906c-1.7578-1.3789-3.418-2.875-4.9727-4.4766-9.5508-9.9062-14.352-23.461-13.16-37.172 0.71484-9.0234 3.9102-17.672 9.2422-24.988 5.2969-7.2031 12.602-12.684 21-15.75 8.5195-3.1641 17.75-3.9141 26.668-2.1719 11.754 2.3477 22.207 9 29.309 18.652 7.1055 9.6523 10.352 21.609 9.0977 33.531-1.2539 11.918-6.9102 22.941-15.867 30.906-1.6602 1.4648-3.4141 2.8203-5.25 4.0586l-1.75 1.1914-1.9609 1.6094h0.003906c-6.6719 5.5977-10.848 13.613-11.621 22.285-0.76953 8.6719 1.9297 17.297 7.5039 23.984 5.5781 6.6875 13.574 10.891 22.246 11.691 2.1211 0.10547 4.2461 0.10547 6.3711 0h21.629c18.562 0.625 35.906 9.4102 47.391 24.012 5.5898 7.0352 9.6445 15.168 11.898 23.867 1.1367 4.3008 1.793 8.7148 1.9609 13.16v7.7695 8.1914l1.75 123.13c-0.51562 5.6523-3.5156 10.781-8.1914 14-4.5391 3.1133-10.164 4.2031-15.539 3.0117-3.9336-0.88672-7.5195-2.9141-10.309-5.8281-2.7891-2.9102-4.6562-6.582-5.3711-10.551-0.0625-0.65234-0.0625-1.3086 0-1.9609v-9.0312c-0.91016-32.969-1.8906-62.441-2.9414-87.781-0.41797-4.8477-4.4766-8.5703-9.3438-8.5703-4.8672 0-8.9258 3.7227-9.3438 8.5703-1.0508 25.34-2.0312 54.809-2.9414 87.781v9.9414c-0.097656 1.4453-0.097656 2.8945 0 4.3398 0.72656 5.875 2.5781 11.559 5.4609 16.73 6.0859 10.93 16.297 18.973 28.348 22.328 13.121 3.5938 27.152 1.3984 38.551-6.0273 11.395-7.4219 19.074-19.371 21.09-32.82 0.57031-5.6055 0.82812-11.238 0.76953-16.871v-15.051l0.48828-30.871 0.91016-64.398 0.003906-8.332v-8.8906 0.003906c-0.046875-6.7383-0.82422-13.449-2.3125-20.023z"
      />
      <path
      fill="currentColor"
      d="m408.24 560.56c8.8672-16.203 11.871-34.969 8.5039-53.129-3.3672-18.16-12.898-34.602-26.98-46.551-14.605-12.562-33.234-19.473-52.5-19.473-19.27 0-37.895 6.9102-52.5 19.473-14.242 12.238-23.855 28.992-27.23 47.461-2.707 14.918-1.0352 30.301 4.8164 44.289 5.8516 13.988 15.629 25.984 28.152 34.531-1.6797 0-3.2891 0-4.9688 0.48828-13.672 2.0078-26.52 7.7773-37.102 16.66-6.2031 5.2852-11.441 11.609-15.469 18.691-1.0508-1.75-2.0312-3.5-3.2188-5.1797h-0.003907c-8.6484-11.961-20.625-21.113-34.438-26.32-6.4258-2.375-13.133-3.9023-19.949-4.5508 16.988-13.484 27.809-33.258 30.008-54.836s-4.4062-43.129-18.324-59.766c-13.918-16.637-33.965-26.945-55.59-28.59-21.629-1.6484-43.004 5.5117-59.273 19.852-14.656 13.691-23.73 32.312-25.48 52.289-2.3047 27.715 10.137 54.598 32.758 70.773-6.9648 0.62109-13.816 2.1758-20.371 4.6172-13.77 5.2148-25.699 14.371-34.297 26.32-7.4258 10.289-11.969 22.371-13.16 35-0.22266 2.7734-0.22266 5.5586 0 8.332v7.2109l1.1914 12.32c0 2.1719 4.7617 3.7812 10.078 3.6406 5.3203-0.14062 8.4688-1.6797 8.6797-3.6406v-0.003906c0.50391-8.0781 1.5078-16.121 3.0078-24.078 2.0312-8.0586 6.0234-15.488 11.621-21.629 6.1602-6.6953 14.062-11.543 22.82-14 4.5508-1.293 9.2734-1.8828 14-1.75h3.3594c1.6992-0.089844 3.3828-0.32422 5.043-0.70312 3.3945-0.75 6.6367-2.0742 9.5898-3.918 6.1562-3.8203 10.82-9.6328 13.215-16.473 2.3945-6.8398 2.375-14.293-0.054687-21.117-1.1523-3.543-2.9023-6.8555-5.1836-9.8008-1.1523-1.4062-2.418-2.7148-3.7773-3.9219l-2.1016-1.6797-1.3984-1.0508v0.003906c-4.1875-3.1484-7.8086-6.9844-10.711-11.34-6.0352-8.7891-8.6562-19.477-7.3672-30.059 1.2891-10.582 6.3984-20.332 14.367-27.414 7.9688-7.3242 18.398-11.387 29.227-11.387 10.824 0 21.254 4.0625 29.223 11.387 7.8789 7.1406 12.922 16.879 14.207 27.434 1.2852 10.551-1.2734 21.215-7.207 30.039-2.9102 4.2266-6.5078 7.9414-10.641 10.988 0 0-2.1016 1.4688-3.3594 2.6602-1.3906 1.1953-2.6758 2.5078-3.8477 3.918-2.4023 2.8281-4.2969 6.0508-5.6016 9.5234-2.4766 6.832-2.5469 14.305-0.19141 21.184 2.3555 6.875 6.9922 12.738 13.141 16.613 2.9492 1.8633 6.1914 3.2109 9.5898 3.9922 1.6797 0.40234 3.3906 0.66016 5.1094 0.76953h3.5c4.7305-0.12891 9.4492 0.46094 14 1.75 8.7344 2.4688 16.609 7.3164 22.75 14 5.582 6.1016 9.5703 13.48 11.621 21.488 1.5117 7.9336 2.5156 15.953 3.0117 24.012 0 2.2383 4.8984 3.9219 10.289 3.7109 5.3906-0.21094 8.75-1.75 8.9609-3.7109l1.1914-12.32v-7.2773l-0.003906-0.003906c0.10156-1.7227 0.10156-3.4531 0-5.1797 3.5234-12.043 11.215-22.438 21.703-29.328 7.1523-4.6797 15.406-7.4062 23.938-7.9102h3.3594 2.0312c1.375 0.070313 2.7539 0.070313 4.1289 0 6.2031-0.57812 12.082-3.0195 16.871-7 4.9766-4.3281 8.4648-10.109 9.9727-16.531 1.5078-6.418 0.95703-13.148-1.5742-19.238-1.2969-3.082-3.0664-5.9375-5.25-8.4727-1.0742-1.25-2.2461-2.4219-3.5-3.5l-1.8906-1.5391-1.1875-1.6094c-1.8867-1.4297-3.6641-2.9961-5.3203-4.6914-3.3438-3.4414-6.1328-7.3867-8.2617-11.688-4.3984-8.707-5.8008-18.625-3.9883-28.211 2.2383-9.9844 7.7617-18.93 15.68-25.41 7.7773-6.4922 17.59-10.047 27.719-10.047 10.133 0 19.941 3.5547 27.723 10.047 7.7539 6.3984 13.07 15.273 15.051 25.129 1.9883 9.6602 0.70703 19.707-3.6406 28.562-2.1289 4.3008-4.918 8.2461-8.2617 11.688-1.6523 1.6953-3.4336 3.2617-5.3203 4.6914 0 0-1.8203 1.2617-3.0117 2.3789h0.003906c-3.875 3.2852-6.918 7.4336-8.8906 12.109-2.5742 6.1055-3.1602 12.867-1.6797 19.324 1.4844 6.457 4.9609 12.285 9.9375 16.656 4.7305 4.1562 10.617 6.7695 16.871 7.4922 1.4219 0.082031 2.8477 0.082031 4.2695 0h1.6797 3.2891 0.003906c8.5 0.49219 16.727 3.1953 23.867 7.8398 10.793 7.0977 18.613 17.906 21.98 30.379v4.1992 7.2109l1.1914 12.32c0 2.1719 4.7617 3.7812 10.078 3.6406 5.3203-0.14062 8.4688-1.6797 8.6797-3.6406 0.77344-7.9805 2.0352-15.906 3.7812-23.73 2.0312-8.0586 6.0234-15.488 11.621-21.629 6.1602-6.6953 14.059-11.543 22.82-14 4.5508-1.293 9.2695-1.8828 14-1.75h3.3594c1.6953-0.089844 3.3828-0.32422 5.0391-0.69922 3.3945-0.75391 6.6406-2.0781 9.5898-3.9219 6.1602-3.8203 10.824-9.6328 13.219-16.473 2.3945-6.8398 2.375-14.293-0.058594-21.117-1.293-3.5195-3.1875-6.7891-5.6016-9.6602-1.1523-1.4062-2.418-2.7148-3.7773-3.9219l-2.1016-1.6797-1.3984-1.0508v0.003906c-4.1875-3.1484-7.8086-6.9844-10.711-11.34-6.0352-8.7891-8.6562-19.477-7.3672-30.059 1.2891-10.582 6.3984-20.332 14.367-27.414 7.9688-7.3242 18.398-11.387 29.227-11.387 10.824 0 21.254 4.0625 29.223 11.387 7.8789 7.1406 12.922 16.879 14.207 27.434 1.2852 10.551-1.2734 21.215-7.207 30.039-2.8906 4.2227-6.4609 7.9336-10.57 10.988 0 0-2.1016 1.4688-3.3594 2.6602-1.3906 1.1953-2.6797 2.5078-3.8477 3.918-2.4258 2.8242-4.3438 6.0469-5.6719 9.5234-2.4766 6.832-2.5469 14.305-0.19141 21.184 2.3555 6.875 6.9922 12.738 13.141 16.613 2.9492 1.8633 6.1914 3.2109 9.5898 3.9922 1.6797 0.40234 3.3906 0.66016 5.1094 0.76953h3.5c4.7305-0.12891 9.4492 0.46094 14 1.75 8.7344 2.4688 16.609 7.3164 22.75 14 5.582 6.1016 9.5703 13.48 11.621 21.488 1.5117 7.9336 2.5156 15.953 3.0117 24.012 0 2.2383 4.8984 3.9219 10.289 3.7109 5.3906-0.21094 8.75-1.75 8.9609-3.7109l1.1914-12.32v-7.2773l-0.003906-0.003906c0.10156-2.7812-0.015625-5.5664-0.34766-8.3281-1.25-12.641-5.8398-24.723-13.301-35-8.6484-11.961-20.629-21.113-34.441-26.32-6.4219-2.375-13.129-3.9062-19.949-4.5508 19.086-12.652 31.875-32.844 35.156-55.504 3.2812-22.664-3.25-45.652-17.961-63.203-14.711-17.547-36.207-27.992-59.094-28.719-22.887-0.72266-45 8.3438-60.793 24.926-14.652 13.691-23.727 32.312-25.477 52.289-2.3047 27.715 10.137 54.598 32.758 70.773-6.9648 0.62109-13.816 2.1758-20.371 4.6172-13.77 5.2148-25.699 14.371-34.297 26.32-1.1211 1.6094-2.0312 3.2891-3.0781 4.8984l-0.003907 0.003907c-4.125-7.0586-9.457-13.336-15.75-18.551-10.637-8.875-23.527-14.617-37.238-16.59-1.4688 0-3.0117 0-4.4805-0.42188 2.8242-1.8164 5.5352-3.8008 8.1211-5.9492 6.3477-5.9062 11.691-12.812 15.816-20.441z"
      />
      <path
      fill="currentColor"
      d="m40.32 402.99c3.8359 1.5039 7.8281 2.582 11.898 3.2227 2.0156 0.34766 4.0508 0.55469 6.0898 0.62891h5.3164l33.32-0.55859c87.289-1.6094 162.05-3.9883 211.75-7 3.5703 0 6.2305-4.8984 6.0195-10.289-0.21094-5.3906-2.8008-8.75-6.0195-8.9609-49.699-3.2188-124.46-5.6719-211.75-7l-33.32-0.55859-2.0234-0.003906h-1.1914c-0.79297 0.070312-1.5898 0.070312-2.3789 0-1.5391-0.30078-3.043-0.77344-4.4805-1.3984-2.9297-1.2422-5.5391-3.1328-7.6289-5.5312-2.1172-2.3867-3.6953-5.207-4.6211-8.2578-0.41016-1.5352-0.66797-3.1055-0.76953-4.6914v-44.102c0-48.371 0.35156-98 0.55859-148.12v-83.996-3.2188-0.003906c-0.042969-0.79297-0.042969-1.5859 0-2.3789 0.58984-3.1523 1.9062-6.125 3.8516-8.6797 3.9805-5.2617 10.199-8.3477 16.797-8.3281 48.371-0.42188 95.129-1.0508 138.74-1.8906 87.785-1.6094 162.54-4.0625 212.52-7.3516 3.4297 0 6.0898-4.7617 5.8789-10.078-0.20703-5.3203-3.0781-8.4727-5.8789-8.6797-49.699-3.2891-124.46-5.7383-211.75-7.3516-43.609-0.83984-90.441-1.4688-138.74-1.8906-13.672-0.21094-26.98 4.3828-37.609 12.98-10.633 8.5938-17.91 20.648-20.562 34.059-0.4375 2.3164-0.74219 4.6523-0.91016 7v6.0195 83.93l0.14062 147.91v46.129c0.66797 4.3828 1.8164 8.6797 3.4297 12.809 2.6719 8.0977 7.0898 15.508 12.949 21.699 5.6797 6.0898 12.637 10.848 20.371 13.93z"
      />
    </g>
    </svg>

  );
}

export default IconPresentation;