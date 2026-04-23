// 移动端触摸滑动支持
function initMobileTouchSupport() {
  let startY = 0;
  let currentY = 0;
  let isScrolling = false;
  
  const entryPageEl = document.getElementById('entryPage');
  if (!entryPageEl || window.innerWidth > 768) return;
  
  // 添加触摸事件监听
  entryPageEl.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
    isScrolling = false;
  }, { passive: true });
  
  entryPageEl.addEventListener('touchmove', function(e) {
    currentY = e.touches[0].clientY;
    const deltaY = startY - currentY;
    
    if (Math.abs(deltaY) > 10) {
      isScrolling = true;
    }
  }, { passive: true });
  
  entryPageEl.addEventListener('touchend', function(e) {
    if (!isScrolling) return;
    
    const deltaY = startY - currentY;
    const scrollThreshold = 50;
    
    if (Math.abs(deltaY) > scrollThreshold) {
      if (deltaY > 0) {
        // 向上滑动 - 滚动到底部动作卡片区域
        const actionsEl = document.querySelector('.entry-actions');
        if (actionsEl) {
          actionsEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // 向下滑动 - 滚动到顶部标题区域
        const headerEl = document.querySelector('.entry-header');
        if (headerEl) {
          headerEl.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
  }, { passive: true });
}

// 初始化触摸支持
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileTouchSupport);
} else {
  initMobileTouchSupport();
}