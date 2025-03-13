// 🟢 HTML 요소들 가져오기
const buttons = document.querySelectorAll(".tab-button");
const cardsContainer = document.getElementById("cards-container");

// 🟢 모바일 카드 HTML 생성 함수
function getServiceCards() {
  return `
    <div class="description">
      <h1>코드는 관세도 물류 비용도 필요 없습니다.</h1><br>
      구글과 아마존과 같은 거대 IT 기업이 인도와 같은 국가에 외주를 맡기는 것은 이유가 있습니다.<br><br>

      한국 매니저와 인도 & 베트남 현지의 숙련된 프로그래머들이 경쟁력 있는 홈페이지를 제작해 드립니다.<br><br>

      홈페이지 제작이 처음이신가요?<br>
      전문 용어가 복잡하게 느껴지시나요?<br><br>

      걱정하지 마세요!<br>
      상담을 통해 고객님의 니즈를 파악해 최적의 솔루션을 제공해 드립니다.
    </div>

    <hr>

    <h2 style="text-align:center;">포트폴리오</h2>

    <div class="portfolio-container">
      <div class="site-preview" onclick="window.open('https://anhsonstudio.com', '_blank')">
        <iframe src="https://anhsonstudio.com" class="preview-frame" style="pointer-events: none;"></iframe>
      </div>

      <div class="site-preview" onclick="window.open('https://staging.funcoding.jp/en', '_blank')">
        <iframe src="https://staging.funcoding.jp/en" class="preview-frame" style="pointer-events: none;"></iframe>
      </div>
    </div>
        <hr>

    <h2 style="text-align:center;">문의방법</h2>

    <div class="contact-container">
      <!-- 카카오톡 문의 -->
      <div class="contact-card">
      
        <h3>카카오톡 오픈채팅</h3>
        <a href="https://open.kakao.com/o/sZMTpL7g" target="_blank" class="contact-button">문의하기</a>
      </div>

      <!-- 크몽 문의 -->
      <div class="contact-card">
        <h3>크몽 문의</h3>
        <a href="https://kmong.com/" target="_blank" class="contact-button">문의하기</a>
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
  cardsContainer.classList.add("column"); // 🔥 기본으로 row 클래스 추가!
  cardsContainer.innerHTML = getServiceCards(); // 🔥 카드 함수 호출!
};

// 🟢 버튼 클릭 시 내용 교체
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const tab = button.getAttribute("data-tab");
    if (tab === "webdev") {
      cardsContainer.className = "cards-container column"; // 🔥 row 클래스 추가!
      cardsContainer.innerHTML = getServiceCards(); // 🔥 카드들 표시!
    } else if (tab === "service") {
      cardsContainer.className = "cards-container row"; // 🔥 column 클래스 추가!
      cardsContainer.innerHTML = `
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
      addIframeClickEvent(); // 🔥 iframe 클릭 이벤트 추가!
    }
  });
});
