// "오늘의 메뉴 보기" 버튼을 누르면 메뉴를 보여주거나 숨깁니다.
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

function setOpen(open) {
  menu.classList.toggle("hidden", !open);
  menuBtn.textContent = open ? "메뉴 접기" : "오늘의 메뉴 보기";
}

menuBtn.addEventListener("click", () => {
  const open = menu.classList.contains("hidden");
  setOpen(open);
  if (open) menu.scrollIntoView({ behavior: "smooth" });
});

// 상단 "메뉴" 링크를 누르면 메뉴를 펼친 뒤 그 위치로 이동합니다.
document.querySelector('a[href="#menu"]').addEventListener("click", () => setOpen(true));
