// # : html 코드에서 태그의 id 나타냄
const generateBtn = document.querySelector("#generateBtn"); //html에서 id가 generateBtn인 버튼을 찾아 generateBtn 변수에 저장
const gridContainer = document.querySelector("#gridContainer");

//generateBtn 버튼에 click이라는 이벤트가 발생하면 이미지를 생성
generateBtn.addEventListener("click", () => {
  if (gridContainer.children.length >= 5) {
    const confirmed = confirm(
      "이미지가 5개가 찼습니다. 모든 사진을 지우시겠습니까?"
    );
    if (confirmed) gridContainer.innerHTML = ""; //이미지 모두 삭제
  } else {
    // const randomNumber = Math.floor(Math.random() * 1000) + 1;
    // const imgUrl = `https://picsum.photos/500?random=${randomNumber}`; //외부 API

    const img = document.createElement("img");
    //img.src = imgUrl;
    img.src = `https://picsum.photos/500?random=${
      Math.floor(Math.random() * 1000) + 1
    }`; //외부 API를 통해 받아온 데이터를 이미지 태그 src 속성에 넣음
    //`{}` : 어떤 문자열 안에 동적인 값을 넣을 때 사용
    gridContainer.appendChild(img);
  }
});
