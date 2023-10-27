export default startDrag


function startDrag() {
    const mainContainer = document.querySelector('.grid-main-container')
    const draggable = document.querySelectorAll('.grid-box')
    var currentDrag = null;
    var currentTop = null;
    var currentBottom = null;
    draggable.forEach(element => {
        element.addEventListener('dragstart', (e) => {
            currentDrag = element;
            currentTop = element.getBoundingClientRect().top
            currentBottom = element.getBoundingClientRect().bottom
            element.style.border = '1px dashed red'
            element.style.opacity = '0.5'
        })
    });
    draggable.forEach(element => {
        element.addEventListener('dragover', (e) => {
            const left = (e.offsetX / e.target.getBoundingClientRect().width) < .5
            if (currentTop > e.target.getBoundingClientRect().bottom && (e.offsetY / e.target.getBoundingClientRect().height) < .6) {
                //아래에서 위로 넣을 때
                mainContainer.insertBefore(currentDrag, left && e.target || e.target.nextSibling)
            } else if (currentBottom < e.target.getBoundingClientRect().top && (e.offsetY / e.target.getBoundingClientRect().height) > .4) {
                //위에서 아래로 넣을 때
                mainContainer.insertBefore(currentDrag, left && e.target || e.target.nextSibling)
            } else if (currentBottom == e.target.getBoundingClientRect().bottom || currentTop == e.target.getBoundingClientRect().top) {
                //같은 라인에서 넣을 때
                mainContainer.insertBefore(currentDrag, left && e.target || e.target.nextSibling)
            }
        })
    });
    draggable.forEach(element => {
        element.addEventListener('dragend', (e) => {
            element.style.border='';
            element.style.opacity = '1';
        })
    });
}

