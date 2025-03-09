// 🟢 HTML 요소들 가져오기
const buttons = document.querySelectorAll(".tab-button");
const cardsContainer = document.getElementById("cards-container");

// 🟢 모바일 카드 HTML 생성 함수
function getServiceCards() {
  return `
    <div class="card">
      <img src="/assets/write_poem.png" alt="시를 읽다 쓰다" class="card-image">
      <p class="card-tag">시를 읽다 쓰다 (ios / android)</p>
      <p class="card-description">시를 쓰고 읽고 공유하는 어플리케이션입니다.</p>
      <div class="card-buttons">
        <a href="../pages/poem_service/terms.html" class="card-button">이용약관</a>
        <a href="../pages/poem_service/policy.html" class="card-button">정보처리방침</a>
        <a href="mailto:masteraccount@whatshould-do.com" class="card-button">문의하기</a>
      </div>
    </div>
    <div class="card">
      <img src="/assets/biz_bridge_logo.png" alt="비즈브릿지" class="card-image">
      <p class="card-tag">비즈브릿지 (ios / android)</p>
      <p class="card-description">B2B 제품 검색 어플리케이션입니다.</p>
      <div class="card-buttons">
        <a href="../pages/biz_service/terms.html" class="card-button">이용약관</a>
        <a href="../pages/biz_service/policy.html" class="card-button">정보처리방침</a>
        <a href="mailto:masteraccount@whatshould-do.com" class="card-button">문의하기</a>
      </div>
    </div>
  `;
}

// 🟢 iframe 클릭 시 새 탭에서 열기 위한 이벤트 추가 함수
function addIframeClickEvent() {
  const iframes = document.querySelectorAll(".preview-frame"); // 🔄 매번 새로 가져옴!
  iframes.forEach((iframe) => {
    iframe.addEventListener("click", () => {
      const link = iframe.src; // 🔥 iframe의 src에서 URL 가져오기
      window.open(link, "_blank"); // 🔥 새 탭에서 열기!
    });
  });
}

// 🟢 처음 로딩 시 기본 내용 설정
window.onload = () => {
  buttons[0].classList.add("active");
  cardsContainer.classList.add("row"); // 🔥 기본으로 row 클래스 추가!
  cardsContainer.innerHTML = getServiceCards(); // 🔥 카드 함수 호출!
};

// 🟢 버튼 클릭 시 내용 교체
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const tab = button.getAttribute("data-tab");
    if (tab === "service") {
      cardsContainer.className = "cards-container row"; // 🔥 row 클래스 추가!
      cardsContainer.innerHTML = getServiceCards(); // 🔥 카드들 표시!
    } else if (tab === "webdev") {
      cardsContainer.className = "cards-container column"; // 🔥 column 클래스 추가!
      cardsContainer.innerHTML = `
<div class="site-preview" onclick="window.open('https://anhsonstudio.com', '_blank')">
  <iframe src="https://anhsonstudio.com" class="preview-frame" style="pointer-events: none;"></iframe>
</div>

<div class="site-preview" onclick="window.open('https://staging.funcoding.jp/en', '_blank')">
  <iframe src="https://staging.funcoding.jp/en" class="preview-frame" style="pointer-events: none;"></iframe>
</div>

<div class="site-preview" onclick="window.open('https://japan-alumni.world/', '_blank')">
  <iframe src="https://japan-alumni.world/" class="preview-frame" style="pointer-events: none;"></iframe>
</div>
      `;
      addIframeClickEvent(); // 🔥 iframe 클릭 이벤트 추가!
    }
  });
});
