const containerElement = document.querySelector('.container');

const sneakers = [
  {
    id: 0,
    title: 'TÊNIS CLYDE OG',
    size: '39 (29cm)',
    art: '391962_03',
  },
  {
    id: 1,
    title: 'TÊNIS RS-X 3D',
    size: '39 (29cm)',
    art: '391962_03',
  },
  {
    id: 2,
    title: 'TÊNIS CLYDE do nanzinho',
    size: '39 (29cm)',
    art: '391962_03',
  },
];

let stringTitle = '';

// 'yan ' + 'cesar' // yan cesar

sneakers.forEach((element, index, array) => {
  stringTitle =
    stringTitle +
    `
        <span>
            ${element.title}
        </span>
            <br />
        <span>
            ${element.size}
        </span>
         <br />
        <span>
          ${element.art}
        </span>
        <br />

    `;
});

containerElement.innerHTML = stringTitle;
