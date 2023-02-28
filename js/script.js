const colors = [
    { hex: '#f44336', rgb: '244,67,54'},
    { hex: '#e91e63', rgb: '233,30,99'},
    { hex: '#9c27b0', rgb: '156,39,176'},
    { hex: '#673ab7', rgb: '103,58,183'},
    { hex: '#3f51b5', rgb: '63,81,181'},
    { hex: '#673ab7', rgb: '103,58,183'},
    { hex: '#f44336', rgb: '244,67,54'},
    { hex: '#e91e63', rgb: '233,30,99'},
    { hex: '#9c27b0', rgb: '156,39,176'},
    { hex: '#673ab7', rgb: '103,58,183'},
    { hex: '#3f51b5', rgb: '63,81,181'},
    { hex: '#673ab7', rgb: '103,58,183'},
    { hex: '#f44336', rgb: '244,67,54'},
    { hex: '#e91e63', rgb: '233,30,99'},
    { hex: '#9c27b0', rgb: '156,39,176'},
    { hex: '#673ab7', rgb: '103,58,183'},
    
    

];
 const paletteContainer = document.querySelector('.js-palette');
 const cardsMarkup = createColorCardsMarkup(colors);

 paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
 paletteContainer.addEventListener('click', onPaletteContainerClick);


  function createColorCardsMarkup (colors) {
    return colors.map(({hex, rgb}) => {
        return `
        <div class="color-card">
        <div 
        class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}"
        ></div>
        <div class="color-meta">
            <p>HEX: ${hex} </p>
            <p>RGB: ${rgb} </p>
        </div>
        </div>
        `;
    })
    .join(''); 
     
  }

  function onPaletteContainerClick (evt) {
    const isColorSwatch = evt.target.classList.contains('color-swatch')
    
    if (!isColorSwatch) {
        return;
    }
    
    const swatchEl = evt.target;
    const parentColorCard = swatchEl.closest('.color-card');

    removeActiveCardClass();

     addActiveCardClass(parentColorCard);
    // parentColorCard.classList.add('is-active');

 setBodyBgColor(swatchEl.dataset.hex);
   
  }
  function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;

  }
  function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');
    if(currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }
    
  }
  function addActiveCardClass(card) {

    card.classList.add('is-active');
  }

