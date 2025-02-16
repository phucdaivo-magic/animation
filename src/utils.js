export {
    drawPoint,
}

const drawPoint = (x, y, img, $frame) => {
    const imgs = document.createElement('img');
    imgs.src = `https://www.goesser.at/wp-content/themes/sisu-theme/images/kampagnen/skiwm/fahrer_${img}.png`
    imgs.style.width = '60px';
    const div = document.createElement("div");
    div.className = "point";
    div.style.left = x + "px";
    div.style.top = y + "px";
    div.setAttribute("data-y", y);
    $frame.appendChild(div);
    // div.appendChild(imgs)
};