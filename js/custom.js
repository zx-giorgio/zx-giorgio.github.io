// 计算相遇天数和小时数
function updateDaysTogether() {
  const startDate = new Date('2025-05-24T20:00:00');
  const now = new Date();
  const diff = now - startDate;
  
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  const text = days + ' 天 ' + hours + ' 小时';
  
  const elements = document.querySelectorAll('.days-together, #days-together');
  elements.forEach(function(el) {
    if (el) el.textContent = text;
  });
}

document.addEventListener('DOMContentLoaded', updateDaysTogether);
setInterval(updateDaysTogether, 60000);
