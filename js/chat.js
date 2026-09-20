(function () {
  var ENDPOINT = 'https://trummia-chat.tigernguyen0412.workers.dev';
  var HOTLINE = '0923.29.79.39';
  var MAX_LEN = 500;

  var L = {
    vi: { title: 'Trùm Mía hỗ trợ', open: 'Chat với Trùm Mía', close: 'Đóng chat', placeholder: 'Nhập câu hỏi của bạn...', send: 'Gửi', typing: 'Đang trả lời...', hello: 'Xin chào anh/chị! Em là trợ lý của Trùm Mía. Em có thể giúp gì cho mình ạ?', error: 'Xin lỗi, hiện em chưa trả lời được. Anh/chị vui lòng gọi hoặc nhắn Zalo ' + HOTLINE + ' giúp em nhé.' },
    en: { title: 'Trùm Mía support', open: 'Chat with Trùm Mía', close: 'Close chat', placeholder: 'Type your question...', send: 'Send', typing: 'Typing...', hello: 'Hello! I am the Trùm Mía assistant. How can I help you?', error: 'Sorry, I cannot answer right now. Please call or message us on Zalo at ' + HOTLINE + '.' },
    ko: { title: 'Trùm Mía 문의', open: 'Trùm Mía와 채팅', close: '채팅 닫기', placeholder: '질문을 입력하세요...', send: '보내기', typing: '답변 중...', hello: '안녕하세요! Trùm Mía 도우미입니다. 무엇을 도와드릴까요?', error: '죄송합니다. 지금은 답변드리기 어렵습니다. ' + HOTLINE + ' 로 전화 또는 Zalo 메시지를 남겨 주세요.' },
    ru: { title: 'Поддержка Trùm Mía', open: 'Чат с Trùm Mía', close: 'Закрыть чат', placeholder: 'Введите вопрос...', send: 'Отправить', typing: 'Печатает...', hello: 'Здравствуйте! Я помощник Trùm Mía. Чем могу помочь?', error: 'Извините, сейчас я не могу ответить. Позвоните или напишите в Zalo: ' + HOTLINE + '.' },
    zh: { title: 'Trùm Mía 客服', open: '与 Trùm Mía 聊天', close: '关闭聊天', placeholder: '请输入您的问题...', send: '发送', typing: '正在回复...', hello: '您好！我是 Trùm Mía 的助手，有什么可以帮您？', error: '抱歉，暂时无法回复。请致电或通过 Zalo 联系 ' + HOTLINE + '。' }
  };

  function lang() {
    var l = document.documentElement.lang;
    return L[l] ? l : 'vi';
  }
  function t(key) {
    return L[lang()][key];
  }

  var history = [];
  var busy = false;

  var root = document.createElement('div');
  root.className = 'chat-widget';
  root.innerHTML =
    '<button type="button" class="chat-fab" id="chatFab"><span aria-hidden="true">💬</span></button>' +
    '<section class="chat-panel" id="chatPanel" hidden>' +
    '<header class="chat-head"><strong id="chatTitle"></strong><button type="button" class="chat-close" id="chatClose">×</button></header>' +
    '<div class="chat-log" id="chatLog" role="log" aria-live="polite"></div>' +
    '<form class="chat-form" id="chatForm"><input type="text" id="chatInput" maxlength="' + MAX_LEN + '" autocomplete="off" />' +
    '<button type="submit" id="chatSend"></button></form></section>';
  document.body.appendChild(root);

  var fab = document.getElementById('chatFab');
  var panel = document.getElementById('chatPanel');
  var log = document.getElementById('chatLog');
  var form = document.getElementById('chatForm');
  var input = document.getElementById('chatInput');
  var send = document.getElementById('chatSend');
  var closeBtn = document.getElementById('chatClose');
  var title = document.getElementById('chatTitle');
  var greeting = null;

  function setText(el, text) {
    var clean = String(text)
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '$1: $2')
      .replace(/\*\*|__|`/g, '')
      .replace(/^#{1,6}\s+/gm, '');
    el.textContent = '';
    var re = /https?:\/\/[^\s<>"')]+/g;
    var last = 0;
    var m;
    while ((m = re.exec(clean))) {
      var url = m[0].replace(/[.,;:!?]+$/, '');
      el.appendChild(document.createTextNode(clean.slice(last, m.index)));
      var a = document.createElement('a');
      a.href = url;
      a.textContent = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      el.appendChild(a);
      last = m.index + url.length;
      re.lastIndex = last;
    }
    el.appendChild(document.createTextNode(clean.slice(last)));
  }

  function addBubble(role, text) {
    var el = document.createElement('div');
    el.className = 'chat-msg ' + role;
    setText(el, text);
    log.appendChild(el);
    log.scrollTop = log.scrollHeight;
    return el;
  }

  function labels() {
    title.textContent = t('title');
    fab.setAttribute('aria-label', t('open'));
    closeBtn.setAttribute('aria-label', t('close'));
    input.placeholder = t('placeholder');
    input.setAttribute('aria-label', t('placeholder'));
    send.textContent = t('send');
    if (greeting && !history.length) greeting.textContent = t('hello');
  }

  function openChat() {
    panel.hidden = false;
    fab.hidden = true;
    if (!greeting) greeting = addBubble('bot', t('hello'));
    labels();
    input.focus();
  }

  function closeChat() {
    panel.hidden = true;
    fab.hidden = false;
    fab.focus();
  }

  fab.addEventListener('click', openChat);
  closeBtn.addEventListener('click', closeChat);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) closeChat();
  });
  new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  labels();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text || busy) return;
    input.value = '';
    addBubble('user', text);
    history.push({ role: 'user', content: text });
    busy = true;
    send.disabled = true;
    var pending = addBubble('bot typing', t('typing'));

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: history, lang: lang() })
    })
      .then(function (res) {
        if (!res.ok) throw new Error('bad status');
        return res.json();
      })
      .then(function (data) {
        pending.className = 'chat-msg bot';
        setText(pending, data.reply);
        history.push({ role: 'assistant', content: data.reply });
      })
      .catch(function () {
        pending.className = 'chat-msg bot';
        pending.textContent = t('error');
        history.pop();
      })
      .then(function () {
        busy = false;
        send.disabled = false;
        log.scrollTop = log.scrollHeight;
        input.focus();
      });
  });
})();
