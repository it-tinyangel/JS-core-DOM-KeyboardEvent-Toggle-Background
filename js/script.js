function toggleBlocks(element) {
	const id = element.getAttribute('id');
	const colorBlocks = document.querySelectorAll('.box-color');
	const imageBlocks = document.querySelectorAll('.box-image');

	const showBlocks = (blocksToShow, blocksToHide) => {
		blocksToShow.forEach((block) => block.style.display = 'block');
		blocksToHide.forEach((block) => block.style.display = 'none');
	};

	element.classList.add('focus');

	if (id === 'color-toggle') {
		document.getElementById('image-toggle').classList.remove('focus');
		showBlocks(colorBlocks, imageBlocks);
	} else if (id === 'image-toggle') {
		document.getElementById('color-toggle').classList.remove('focus');
		showBlocks(imageBlocks, colorBlocks);
	}
}

function handleBlockClick(block) {
	const isColorBlock = block.classList.contains('box-color');
	const styleProperty = isColorBlock ? 'background-color' : 'background-image';

	document.body.style[styleProperty] = getComputedStyle(block).getPropertyValue(styleProperty);

	isColorBlock ? document.body.style.backgroundImage = 'none' : null;
}

const blocks = document.querySelectorAll('.box');
blocks.forEach((block) => block.addEventListener('click', () => handleBlockClick(block)));

document.getElementById('color-toggle').addEventListener('click', (e) => toggleBlocks(e.target));
document.getElementById('image-toggle').addEventListener('click', (e) => toggleBlocks(e.target));