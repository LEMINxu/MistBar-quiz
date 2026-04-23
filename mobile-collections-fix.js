// 移动端Collections页面增强 - 最简化版本
console.log('Mobile Collections enhancement loaded');

// 检测是否为移动设备
function isMobileDevice() {
  return window.innerWidth <= 768;
}

// 仅在页面完全加载后进行非侵入性增强
window.addEventListener('load', function() {
  if (!isMobileDevice()) {
    console.log('Desktop detected, skipping mobile enhancements');
    return;
  }
  
  console.log('Mobile device detected, applying light enhancements');
  
  // 非侵入性的Collections增强
  document.addEventListener('click', function(event) {
    // 只针对Collections链接进行增强
    if (event.target && event.target.id === 'sidebarCollections') {
      console.log('Mobile Collections click detected - ensuring proper loading');
      
      // 延迟确保Collections数据加载
      setTimeout(() => {
        if (typeof openCollectionsView === 'function' && 
            document.getElementById('collectionsApp') && 
            !document.getElementById('collectionsApp').hidden) {
          console.log('Re-ensuring Collections data is loaded');
          openCollectionsView();
        }
      }, 200);
    }
  });
});

console.log('Mobile enhancement setup complete');