const heading = document.querySelector('#heading');

const titleKeyframes = {
  // opacity: [0, 1],
  // 上に動かす指定
  // translate: ['0 50px', 0],
  // 回転させる
  // rotate: ['x 360deg', 0],
  // 色が変化する見出し
  // color: ['transparent', '#fff'],
  // backgroundPosition: ['100% 0', '0 0'],
  //ふよふよ動く見出し’横の半径/縦の半径’
  borderRadius: [
    '20% 50% 50% 70%/50% 50% 70% 50%',
    '50% 20% 50% 50&/40% 40% 60% 60%',
    '50% 40% 20% 40%/40% 50% 50% 80%',
    '50% 50% 50% 20%/40% 40% 60% 60%',
  ],
};
const titleOptions = {
  duration: 8000,
  // easing: 'ease',
  direction: 'alternate',
  iterations: Infinity,
};
// 何を.animate(どのように,どれくらい)
heading.animate(titleKeyframes, titleOptions);

const items = document.querySelectorAll('.img-item');
// console.log(items);

for (let i = 0; i < items.length; i++ ) {

  const imageKeyframes = {
    opacity: [0, 1],
    filter: ['blur(20px)', 'blur(0)'],
    rotate: ['5deg', 0],
    scale: [1.1, 1],
    translate: ['0 80px', 0],
    easing: 'ease',
  };

  const imageOptions = {
    duration: 1800,
    delay: i * 300,
    fill: 'forwards',
  };
  items[i].animate(imageKeyframes, imageOptions);
};