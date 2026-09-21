(function () {
  var ENDPOINT = 'https://trummia-chat.tigernguyen0412.workers.dev';
  var HOTLINE = '0923.29.79.39';
  var ZALO_URL = 'https://zalo.me/0923297939';
  var MAX_LEN = 500;

  var L = {
    vi: {
      title: 'Trợ Lí Bán Hàng Trùm Mía', open: 'Chat với Trợ Lí Bán Hàng Trùm Mía', close: 'Đóng chat', placeholder: 'Nhập câu hỏi của bạn...', send: 'Gửi', typing: 'Đang trả lời...',
      hello: 'Xin chào anh/chị! Em là trợ lý của Trùm Mía. Em có thể giúp gì cho mình ạ?',
      error: 'Xin lỗi, hiện em chưa trả lời được. Anh/chị vui lòng gọi hoặc nhắn Zalo ' + HOTLINE + ' giúp em nhé.',
      zalo: 'Nhắn Zalo', order: 'Đặt hàng / để lại SĐT', formTitle: 'Để lại thông tin, nhân viên sẽ liên hệ',
      name: 'Họ tên *', phone: 'Số điện thoại *', product: 'Sản phẩm và số lượng', address: 'Địa chỉ (số nhà, đường, phường/xã, tỉnh/thành)', time: 'Thời gian có thể nhận hàng', note: 'Yêu cầu khác (nếu có)',
      consent: 'Thông tin chỉ dùng để tư vấn và giao hàng.', submit: 'Gửi thông tin', back: 'Quay lại chat',
      sent: 'Trùm Mía đã nhận thông tin. Nhân viên sẽ liên hệ với anh/chị sớm nhất ạ!', failed: 'Chưa gửi được. Anh/chị vui lòng gọi hoặc nhắn Zalo ' + HOTLINE + ' giúp em nhé.', badPhone: 'Vui lòng nhập họ tên và số điện thoại hợp lệ (10 số, bắt đầu bằng 0).'
    },
    en: {
      title: 'Trùm Mía Sales Assistant', open: 'Chat with the Trùm Mía Sales Assistant', close: 'Close chat', placeholder: 'Type your question...', send: 'Send', typing: 'Typing...',
      hello: 'Hello! I am the Trùm Mía assistant. How can I help you?',
      error: 'Sorry, I cannot answer right now. Please call or message us on Zalo at ' + HOTLINE + '.',
      zalo: 'Message on Zalo', order: 'Order / leave your phone', formTitle: 'Leave your details and our staff will contact you',
      name: 'Full name *', phone: 'Phone number *', product: 'Products and quantity', address: 'Address (house no., street, ward, province)', time: 'When can you receive the order?', note: 'Other requests (optional)',
      consent: 'Your details are used only for advice and delivery.', submit: 'Send details', back: 'Back to chat',
      sent: 'Trùm Mía has received your details. Our staff will contact you soon!', failed: 'Could not send. Please call or message us on Zalo at ' + HOTLINE + '.', badPhone: 'Please enter your name and a valid phone number (10 digits starting with 0, or +country code).'
    },
    ko: {
      title: 'Trùm Mía 판매 도우미', open: 'Trùm Mía 판매 도우미와 채팅', close: '채팅 닫기', placeholder: '질문을 입력하세요...', send: '보내기', typing: '답변 중...',
      hello: '안녕하세요! Trùm Mía 도우미입니다. 무엇을 도와드릴까요?',
      error: '죄송합니다. 지금은 답변드리기 어렵습니다. ' + HOTLINE + ' 로 전화 또는 Zalo 메시지를 남겨 주세요.',
      zalo: 'Zalo 메시지', order: '주문 / 연락처 남기기', formTitle: '정보를 남겨 주시면 직원이 연락드립니다',
      name: '이름 *', phone: '전화번호 *', product: '제품 및 수량', address: '주소 (번지, 도로명, 동/읍, 시/도)', time: '수령 가능한 시간', note: '기타 요청 (선택)',
      consent: '입력하신 정보는 상담 및 배송 목적으로만 사용됩니다.', submit: '정보 보내기', back: '채팅으로 돌아가기',
      sent: 'Trùm Mía가 정보를 받았습니다. 직원이 곧 연락드리겠습니다!', failed: '전송하지 못했습니다. ' + HOTLINE + ' 로 전화 또는 Zalo 메시지를 남겨 주세요.', badPhone: '이름과 올바른 전화번호를 입력해 주세요 (국가번호 포함 가능).'
    },
    ru: {
      title: 'Помощник по продажам Trùm Mía', open: 'Чат с помощником по продажам Trùm Mía', close: 'Закрыть чат', placeholder: 'Введите вопрос...', send: 'Отправить', typing: 'Печатает...',
      hello: 'Здравствуйте! Я помощник Trùm Mía. Чем могу помочь?',
      error: 'Извините, сейчас я не могу ответить. Позвоните или напишите в Zalo: ' + HOTLINE + '.',
      zalo: 'Написать в Zalo', order: 'Заказ / оставить телефон', formTitle: 'Оставьте данные, и сотрудник свяжется с вами',
      name: 'Имя *', phone: 'Телефон *', product: 'Продукция и количество', address: 'Адрес (дом, улица, район, город/область)', time: 'Когда вам удобно получить заказ?', note: 'Другие пожелания (по желанию)',
      consent: 'Данные используются только для консультации и доставки.', submit: 'Отправить данные', back: 'Вернуться в чат',
      sent: 'Trùm Mía получил ваши данные. Сотрудник скоро свяжется с вами!', failed: 'Не удалось отправить. Позвоните или напишите в Zalo: ' + HOTLINE + '.', badPhone: 'Введите имя и корректный номер телефона (с кодом страны, например +7...).'
    },
    zh: {
      title: 'Trùm Mía 销售助手', open: '与 Trùm Mía 销售助手聊天', close: '关闭聊天', placeholder: '请输入您的问题...', send: '发送', typing: '正在回复...',
      hello: '您好！我是 Trùm Mía 的助手，有什么可以帮您？',
      error: '抱歉，暂时无法回复。请致电或通过 Zalo 联系 ' + HOTLINE + '。',
      zalo: 'Zalo 留言', order: '下单 / 留下电话', formTitle: '留下您的信息，我们的工作人员会联系您',
      name: '姓名 *', phone: '电话号码 *', product: '产品及数量', address: '地址（门牌号、街道、坊/乡、省/市）', time: '可收货的时间', note: '其他要求（选填）',
      consent: '您的信息仅用于咨询和配送。', submit: '提交信息', back: '返回聊天',
      sent: 'Trùm Mía 已收到您的信息，工作人员会尽快与您联系！', failed: '发送失败。请致电或通过 Zalo 联系 ' + HOTLINE + '。', badPhone: '请输入有效的姓名和电话号码（含国家区号，如 +86...）。'
    }
  };

  var RETRY = {
    vi: 'Xin lỗi, em chưa nhận được tin nhắn này. Anh/chị nhắn lại giúp em nhé ạ.',
    en: 'Sorry, I did not receive that message. Could you send it again, please?',
    ko: '죄송합니다. 메시지를 받지 못했습니다. 다시 보내 주시겠어요?',
    ru: 'Извините, я не получил это сообщение. Отправьте, пожалуйста, ещё раз.',
    zh: '抱歉，我没有收到这条消息，请您再发送一次。'
  };
  var failures = 0;

  function validPhone(raw) {
    var p = String(raw).replace(/[\s.\-()]/g, '');
    var vn = p.match(/^(?:\+84|84)(\d{9})$/);
    if (vn) p = '0' + vn[1];
    return /^0[35789]\d{8}$/.test(p) || /^02\d{9}$/.test(p) || /^\+(?!84)[1-9]\d{7,14}$/.test(p);
  }

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
    '<div class="chat-actions"><a class="chat-zalo" id="chatZalo" target="_blank" rel="noopener noreferrer"></a>' +
    '<button type="button" class="chat-order" id="chatOrder"></button></div>' +
    '<div class="chat-log" id="chatLog" role="log" aria-live="polite"></div>' +
    '<form class="chat-form" id="chatForm"><input type="text" id="chatInput" maxlength="' + MAX_LEN + '" autocomplete="off" />' +
    '<button type="submit" id="chatSend"></button></form>' +
    '<form class="lead-form" id="leadForm" hidden>' +
    '<strong id="leadTitle"></strong>' +
    '<input type="text" id="leadName" maxlength="100" autocomplete="name" />' +
    '<input type="tel" id="leadPhone" maxlength="20" autocomplete="tel" />' +
    '<input type="text" id="leadProduct" maxlength="200" />' +
    '<input type="text" id="leadAddress" maxlength="250" autocomplete="street-address" /><input type="text" id="leadTime" maxlength="100" />' +
    '<textarea id="leadNote" maxlength="500" rows="2"></textarea>' +
    '<small id="leadConsent"></small>' +
    '<div class="lead-buttons"><button type="button" id="leadBack"></button><button type="submit" id="leadSubmit"></button></div>' +
    '</form></section>';
  document.body.appendChild(root);

  function $(id) {
    return document.getElementById(id);
  }
  var fab = $('chatFab');
  var panel = $('chatPanel');
  var log = $('chatLog');
  var form = $('chatForm');
  var input = $('chatInput');
  var send = $('chatSend');
  var closeBtn = $('chatClose');
  var title = $('chatTitle');
  var zalo = $('chatZalo');
  var orderBtn = $('chatOrder');
  var actions = root.querySelector('.chat-actions');
  var lead = $('leadForm');
  var leadFields = { name: $('leadName'), phone: $('leadPhone'), product: $('leadProduct'), address: $('leadAddress'), time: $('leadTime'), note: $('leadNote') };
  var greeting = null;

  zalo.href = ZALO_URL;

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
    zalo.textContent = t('zalo');
    orderBtn.textContent = t('order');
    $('leadTitle').textContent = t('formTitle');
    ['name', 'phone', 'product', 'address', 'time', 'note'].forEach(function (k) {
      leadFields[k].placeholder = t(k);
      leadFields[k].setAttribute('aria-label', t(k));
    });
    $('leadConsent').textContent = t('consent');
    $('leadBack').textContent = t('back');
    $('leadSubmit').textContent = t('submit');
    if (greeting && !history.length) setText(greeting, t('hello'));
  }

  function showLead(show) {
    lead.hidden = !show;
    log.hidden = show;
    form.hidden = show;
    actions.hidden = show;
    if (show) leadFields.name.focus();
    else input.focus();
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
  orderBtn.addEventListener('click', function () {
    showLead(true);
  });
  $('leadBack').addEventListener('click', function () {
    showLead(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) closeChat();
  });
  new MutationObserver(labels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  labels();

  lead.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = leadFields.name.value.trim();
    var phone = leadFields.phone.value.trim();
    if (!name || !validPhone(phone)) {
      window.alert(t('badPhone'));
      return;
    }
    var submit = $('leadSubmit');
    submit.disabled = true;
    fetch(ENDPOINT + '/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        phone: phone,
        product: leadFields.product.value,
        address: leadFields.address.value,
        deliveryTime: leadFields.time.value,
        note: leadFields.note.value,
        messages: history,
        lang: lang()
      })
    })
      .then(function (res) {
        if (!res.ok) throw new Error('bad status');
        Object.keys(leadFields).forEach(function (k) {
          leadFields[k].value = '';
        });
        showLead(false);
        addBubble('bot', t('sent'));
      })
      .catch(function () {
        showLead(false);
        addBubble('bot', t('failed'));
      })
      .then(function () {
        submit.disabled = false;
      });
  });

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

    function request() {
      return fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history, lang: lang() })
      }).then(function (res) {
        if (!res.ok) throw new Error('bad status');
        return res.json();
      });
    }

    request()
      .catch(function () {
        return new Promise(function (resolve) {
          setTimeout(resolve, 1200);
        }).then(request);
      })
      .then(function (data) {
        failures = 0;
        pending.className = 'chat-msg bot';
        setText(pending, data.reply);
        history.push({ role: 'assistant', content: data.reply });
      })
      .catch(function () {
        failures += 1;
        pending.className = 'chat-msg bot';
        pending.textContent = failures >= 2 ? t('error') : RETRY[lang()];
      })
      .then(function () {
        busy = false;
        send.disabled = false;
        log.scrollTop = log.scrollHeight;
        input.focus();
      });
  });
})();
