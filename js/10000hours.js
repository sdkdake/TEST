
const startButton = document.querySelector(".start_btn");
const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const shareButton = document.querySelector(".share_btn");
const loading = document.querySelector(".result_loading");

function calculator() {
    const fieldValue = document.querySelector("#field_value");
    let timeValue = document.querySelector("#time_value");
    let timeValue_int = Number(timeValue.value);

    const fieldResult = document.querySelector(".field_result");
    const timeResult = document.querySelector(".time_result");


    if(fieldValue.value == "") {
        alert('입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if (timeValue.value== "") {
        alert('입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if (timeValue_int > 24) {
        alert('잘못된 값입니다. 24이하의 값을 입력해 주세요.');
        return false;
    }

    result.style.display = "none";
    loading.style.display = "flex";

    setTimeout(function() {
        loading.style.display = "none";
        result.style.display = "flex";
        fieldResult.innerText = fieldValue.value;
        // parseInt -> 사용자가 타임인풋에 적은 숫자를 정수로 가저와 10000시간에서 나눔, 그 숫자를 10진수로 표현하고, 1800ms = 1.8초 후에 보여주는 코드 //
        timeResult.innerText = parseInt((10000/timeValue_int), 10);
    }, 1800);
}

function openModal(){
    modal.style.display = "flex";
}

function closeModal(){
    modal.style.display = "none";
}

window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
}

// execCommand 코드가 퇴출된듯 ?? 호환성 문제가 있는 경우에만 사용을 권장하는 것 같은데, 대체할 수 있는 코드는 뭐지 //
function copyUrl() {
    const url = window.location.href;

    navigator.clipboard.writeText(url).then(() => {
        alert("URL이 복사되었습니다"); 
    });
}

shareButton.addEventListener('click', copyUrl);
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator);