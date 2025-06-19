/*ローディング画面挿入
================================*/
const loading = document.querySelector('#loading');

if (!sessionStorage.getItem('loaded')) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      loading.classList.add('loaded');
      setTimeout(() => {
        loading.style.display = 'none';
      }, 1500);
      sessionStorage.setItem('loaded', 'true');
    }, 2000);
  });
} else {
  loading.style.display = 'none';
}

/*About画面にアニメーション導入
================================*/
const showP = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const keyFrames = {
        opacity: [0, 1],
        translate: ['0 50px', 0],
      };
      entry.target.animate(keyFrames, 600);

      // 一度表示したら監視解除（1回だけ実行）
      observer.unobserve(entry.target);
    }
  });
};
const pObserver = new IntersectionObserver(showP);
pObserver.observe(document.querySelector('#animateP'));
/*問い合わせフォーム
================================*/
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        // JSで手動でリダイレクト
        window.location.href = 'thanks.html';
      } else {
        alert('送信に失敗しました。');
      }
    }).catch(() => alert('エラーが発生しました。'));
  });

/*ワークスカードに0.3秒のアニメーション追加
===========================================*/
