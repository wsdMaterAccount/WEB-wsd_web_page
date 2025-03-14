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
      <img src="/assets/mou_image.png" alt="MOU 이미지" class="mou-image">
    </div>
    <hr>

<h2 style="text-align:center;">단가표 및 포토폴리오</h2>

<div class="pricing-table">
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>제품명</th>
        <th>가격</th>
        <th>내용</th>
        <th>참고 사이트</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>정적 웹사이트</td>
        <td>500.000 원</td>
        <td>반응형 웹, seo 최적화</td>
       <td><a href="https://giosun.com/31" target="_blank">https://giosun.com/31</a></td>
      </tr>
      <tr>
        <td>2</td>
        <td>동적 웹사이트</td>
        <td>상의 후 결정</td>
        <td>고객이 원하는 모든 서비스 구현 가능</td>
        <td><a href="https://giolite.co.kr" target="_blank">https://giolite.co.kr</a></td>
      </tr>
    </tbody>
  </table>
</div>
    <div class="portfolio-container">
      <div class="site-preview" onclick="window.open('https://staging.funcoding.jp/en', '_blank')">
        <iframe src="https://staging.funcoding.jp/en" class="preview-frame" style="pointer-events: none;"></iframe>
      </div>

      <div class="site-preview" onclick="window.open('https://anhsonstudio.com', '_blank')">
        <iframe src="https://anhsonstudio.com" class="preview-frame" style="pointer-events: none;"></iframe>
      </div>
    </div>
    <div class="price-info">
  <p><strong>※ 본 가격은 홈페이지 제작 비용만 포함되어 있으며, 유지관리 및 도메인, 호스팅 비용은 포함되어 있지 않습니다.</strong></p>
  <p>(서버 사이드 요청을 많이 사용한다면 비용이 증가할 수 있지만, 대부분의 기업 홈페이지의 서버는 비교적 단순한 구조로 구성됩니다.  
  따라서 일반적인 기업 홈페이지의 도메인 및 호스팅 비용은 연간 <strong>15 USD (1년 / 약 2만원)</strong> 내외입니다.)</p>
</div>
<hr>


    <h2 style="text-align:center;">문의방법</h2>

    <div class="contact-container">
          <!-- 크몽 문의 -->
      <div class="contact-card">
        <h3>크몽으로 문의하기</h3>
        <a href="https://kmong.com/" target="_blank" class="contact-button" onclick="trackOutboundLink('https://kmong.com'); return false;">문의하기</a>

      </div>

      <!-- 카카오톡 문의 -->
      <div class="contact-card">
        <h3>카카오톡 오픈채팅 상담하기</h3>
        <a href="https://open.kakao.com/o/sZMTpL7g" target="_blank" class="contact-button" onclick="trackOutboundLink('https://open.kakao.com/o/sZMTpL7g'); return false;">문의하기</a>

      </div>
    </div>
  `;
}

// iframe 클릭 시 새 탭에서 열기 위한 이벤트 추가 함수
function addIframeClickEvent() {
  const iframes = document.querySelectorAll(".preview-frame"); // 🔄 매번 새로 가져옴!
  iframes.forEach((iframe) => {
    iframe.addEventListener("click", () => {
      const link = iframe.src; // 🔥 iframe의 src에서 URL 가져오기
      window.open(link, "_blank"); // 🔥 새 탭에서 열기!
    });
  });
}

// 처음 로딩 시 기본 내용 설정
window.onload = () => {
  buttons[0].classList.add("active");
  cardsContainer.classList.add("column"); // 🔥 기본으로 row 클래스 추가!
  cardsContainer.innerHTML = getServiceCards(); // 🔥 카드 함수 호출!
};

// 버튼 클릭 시 내용 교체
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

// 구글 에널리틱스를 위한
function trackOutboundLink(url) {
  gtag("event", "사용자_반응", {
    event_category: "outbound",
    event_label: url,
    transport_type: "beacon",
    event_callback: function () {
      document.location = url;
    },
  });
}
