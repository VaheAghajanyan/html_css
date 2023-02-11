const inputANode = document.querySelector(".js-input-a");
const inputBNode = document.querySelector(".js-input-b");
const inputBtnNode = document.querySelector(".js-btn-result");
const selectOperationNode = document.querySelector(".js-select-operation");
const inputOutputNode = document.querySelector(".js-output");

inputBtnNode.addEventListener('click', function () {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectOperationNode.value;
    inputOutputNode.innerHTML = calculate({a, b, operation});
})