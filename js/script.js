// Function to toggle display of blocks
function toggleBlocks(element) {
	const id = element.getAttribute('id');
	const colorBlocks = document.querySelectorAll('.box-color');
	const imageBlocks = document.querySelectorAll('.box-image');

	const showBlocks = (blocksToShow, blocksToHide) => {
		blocksToShow.forEach((block) => block.style.display = 'block');
		blocksToHide.forEach((block) => block.style.display = 'none');
	};

	id === 'color-toggle' ? showBlocks(colorBlocks, imageBlocks) : showBlocks(imageBlocks, colorBlocks);
}

// Function to change the style of the page body when clicking on a block
const handleBlockClick = (block) => {
	const isColorBlock = block.classList.contains('box-color');
	const styleProperty = isColorBlock ? 'background-color' : 'background-image';

	document.body.style[styleProperty] = getComputedStyle(block).getPropertyValue(styleProperty);
	isColorBlock ? document.body.style.backgroundImage = 'none' : null;
};

// Event handler for each block
const blocks = document.querySelectorAll('.box');
blocks.forEach((block) => block.addEventListener('click', () => handleBlockClick(block)));