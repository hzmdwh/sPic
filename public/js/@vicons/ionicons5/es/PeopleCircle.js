import { openBlock as _openBlock, createElementBlock as _createElementBlock, createStaticVNode as _createStaticVNode, defineComponent } from 'vue'
const _hoisted_1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
}
const _hoisted_2 = /*#__PURE__*/ _createStaticVNode('<path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm-3.68 152.11c.21-1.2.44-2.4.71-3.59a66.46 66.46 0 0 1 16.29-31.21c12.89-13.73 31.16-21.31 51.45-21.31a74.05 74.05 0 0 1 25.06 4.26a66.69 66.69 0 0 1 26.27 17.2a68.15 68.15 0 0 1 18 42.14a78.46 78.46 0 0 1 0 11.4a86.19 86.19 0 0 1-8.2 31q-.76 1.59-1.59 3.15c-1.11 2.07-2.3 4.1-3.58 6.06a79.47 79.47 0 0 1-8.63 11c-13.12 14-29.92 21.73-47.31 21.73a59.61 59.61 0 0 1-19.17-3.18a63.47 63.47 0 0 1-6.1-2.43a70.76 70.76 0 0 1-22.07-16.12a83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68a75.62 75.62 0 0 1 1.05-11.08zm-149.73 24.34a59.87 59.87 0 0 1 5.2-20.64a56.76 56.76 0 0 1 2.78-5.3a54.49 54.49 0 0 1 7.19-9.56a55.62 55.62 0 0 1 14-10.82a56.84 56.84 0 0 1 8.11-3.64a63.85 63.85 0 0 1 33.35-2.39a57 57 0 0 1 30.78 17a57.86 57.86 0 0 1 15.41 38.62c.05 2.11 0 4.23-.15 6.38a71.58 71.58 0 0 1-6 23.84a69.49 69.49 0 0 1-5.73 10.42a65.39 65.39 0 0 1-15.76 16.57c-1.5 1.07-3.06 2.07-4.67 3.07a54.21 54.21 0 0 1-10 4.65a49.31 49.31 0 0 1-16.2 2.76c-.93 0-1.86 0-2.78-.08a47.6 47.6 0 0 1-5.48-.62a51.19 51.19 0 0 1-5.35-1.23a53.54 53.54 0 0 1-7.72-2.89c-.84-.39-1.66-.8-2.48-1.23c-18-9.49-31.57-29.16-34.23-52.12c-.12-1.05-.22-2.1-.29-3.16a66.59 66.59 0 0 1 .02-9.63zm53.92 178.6a177.27 177.27 0 0 1-61.94-70.65a4 4 0 0 1 1.62-5.26C117.67 316.69 141.4 311 163.82 311c17 0 30.7 2 42.69 5.88a8 8 0 0 1 2.59 13.77c-23.35 19-38.4 42.54-45.47 70.75a2.77 2.77 0 0 1-4.22 1.65zM256 432a175.12 175.12 0 0 1-65.7-12.72a4 4 0 0 1-2.4-4.46c.4-2.05.84-3.92 1.23-5.48c7.12-28.43 24.76-52 51-68.18c23.29-14.35 53-22.25 83.52-22.25c31.16 0 60 7.58 83.48 21.91a2.72 2.72 0 0 1 .91 3.67A176.1 176.1 0 0 1 256 432z" fill="currentColor"></path><path d="M161 295.28a47.6 47.6 0 0 1-5.48-.62a47.6 47.6 0 0 0 5.48.62z" fill="currentColor"></path><path d="M134.64 178.13a55.62 55.62 0 0 0-14 10.82a54.49 54.49 0 0 0-7.19 9.56a54.49 54.49 0 0 1 7.19-9.56a55.62 55.62 0 0 1 14-10.82z" fill="currentColor"></path><path d="M216.17 257.89a71.58 71.58 0 0 0 6-23.84c.15-2.15.2-4.27.15-6.38q.08 3.15-.15 6.38a71.58 71.58 0 0 1-6 23.84z" fill="currentColor"></path><path d="M134.64 178.13a56.84 56.84 0 0 1 8.11-3.64a56.84 56.84 0 0 0-8.11 3.64z" fill="currentColor"></path><path d="M150.21 293.43a53.54 53.54 0 0 1-7.72-2.89a53.54 53.54 0 0 0 7.72 2.89z" fill="currentColor"></path><path d="M105.78 237.19c2.66 23 16.26 42.63 34.23 52.12c-18.01-9.49-31.57-29.16-34.23-52.12z" fill="currentColor"></path><path d="M254.34 219a83.76 83.76 0 0 0 22 51.32a70.76 70.76 0 0 0 22.07 16.12a70.76 70.76 0 0 1-22.07-16.12a83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68q-.09 3.75.18 7.68z" fill="currentColor"></path><path d="M304.5 288.82a63.47 63.47 0 0 1-6.1-2.43a63.47 63.47 0 0 0 6.1 2.43z" fill="currentColor"></path><path d="M255.93 196.54a66.46 66.46 0 0 1 16.29-31.21a66.46 66.46 0 0 0-16.29 31.21z" fill="currentColor"></path><path d="M375 165.46a68.15 68.15 0 0 1 18 42.14a68.15 68.15 0 0 0-18-42.14a66.69 66.69 0 0 0-26.27-17.2a66.69 66.69 0 0 1 26.27 17.2z" fill="currentColor"></path><path d="M393 219a86.19 86.19 0 0 1-8.2 31a86.19 86.19 0 0 0 8.2-31z" fill="currentColor"></path><path d="M254.16 211.27a75.62 75.62 0 0 1 1.06-11.14a75.62 75.62 0 0 0-1.06 11.14z" fill="currentColor"></path><path d="M383.19 253.16z" fill="currentColor"></path><path d="M206.88 189.05a57.86 57.86 0 0 1 15.41 38.62a57.86 57.86 0 0 0-15.41-38.62a57 57 0 0 0-30.78-17a57 57 0 0 1 30.78 17z" fill="currentColor"></path><path d="M190 288a54.21 54.21 0 0 1-10 4.65a54.21 54.21 0 0 0 10-4.65z" fill="currentColor"></path><path d="M105.49 224.45a59.87 59.87 0 0 1 5.2-20.64a59.87 59.87 0 0 0-5.2 20.64z" fill="currentColor"></path><path d="M194.68 284.88C193.17 286 191.61 287 190 288c1.61-1 3.17-2 4.68-3.12z" fill="currentColor"></path><path d="M216.17 257.89a69.49 69.49 0 0 1-5.73 10.42a69.49 69.49 0 0 0 5.73-10.42z" fill="currentColor"></path><path d="M110.69 203.81a56.76 56.76 0 0 1 2.78-5.3a56.76 56.76 0 0 0-2.78 5.3z" fill="currentColor"></path><path d="M194.68 284.88a65.39 65.39 0 0 0 15.76-16.57a65.39 65.39 0 0 1-15.76 16.57z" fill="currentColor"></path>', 21)
const _hoisted_23 = [_hoisted_2]
export default defineComponent({
  name: 'PeopleCircle',
  render: function render(_ctx, _cache) {
    return _openBlock(), _createElementBlock('svg', _hoisted_1, _hoisted_23)
  }
})