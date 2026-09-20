(function () {
  var IDX = { en: 0, ko: 1, ru: 2, zh: 3 };
  var STORAGE_KEY = 'trummia-lang';

  // Key = Vietnamese source text. Value = [English, Korean, Russian, Chinese].
  var T = {
    'Trùm Mía | Đặc sản Nha Trang - Khánh Hòa': [
      'Trùm Mía | Nha Trang - Khanh Hoa Specialty',
      'Trùm Mía | 냐짱 - 카인호아 특산품',
      'Trùm Mía | Деликатес Нячанга и Кханьхоа',
      'Trùm Mía | 芽庄 - 庆和特产'
    ],
    'Trùm Mía — đặc sản Nha Trang - Khánh Hòa, mía thô nguyên bản, mật mía tự nhiên và nước mía tươi 9 vị tốt cho sức khỏe.': [
      'Trùm Mía — Nha Trang - Khanh Hoa specialty: raw original sugarcane, natural molasses and fresh 9-flavor sugarcane juice, good for your health.',
      'Trùm Mía — 냐짱 - 카인호아 특산품. 원형 사탕수수, 천연 당밀, 건강에 좋은 신선한 9가지 맛 사탕수수 주스.',
      'Trùm Mía — деликатес Нячанга и Кханьхоа: цельный сахарный тростник, натуральная патока и свежий тростниковый сок 9 вкусов, полезный для здоровья.',
      'Trùm Mía — 芽庄 - 庆和特产：原生甘蔗、天然糖蜜和 9 种口味的鲜榨蔗汁，有益健康。'
    ],
    'Mía thô nguyên bản, mật mía tự nhiên và nước mía tươi 9 vị từ Trùm Mía — đặc sản Nha Trang - Khánh Hòa.': [
      'Raw original sugarcane, natural molasses and fresh 9-flavor sugarcane juice from Trùm Mía — Nha Trang - Khanh Hoa specialty.',
      'Trùm Mía의 원형 사탕수수, 천연 당밀, 신선한 9가지 맛 사탕수수 주스 — 냐짱 - 카인호아 특산품.',
      'Цельный сахарный тростник, натуральная патока и свежий тростниковый сок 9 вкусов от Trùm Mía — деликатес Нячанга и Кханьхоа.',
      'Trùm Mía 的原生甘蔗、天然糖蜜和 9 种口味鲜榨蔗汁——芽庄 - 庆和特产。'
    ],

    'ĐẶC SẢN NHA TRANG': ['NHA TRANG SPECIALTY', '냐짱 특산품', 'ДЕЛИКАТЕС НЯЧАНГА', '芽庄特产'],
    'VỊ NGỌT XỨ TRẦM': [
      'SWEETNESS OF THE AGARWOOD LAND',
      '침향의 땅, 그 달콤한 맛',
      'СЛАДОСТЬ КРАЯ АГАРОВОГО ДЕРЕВА',
      '沉香之乡的甜蜜滋味'
    ],
    'Trang Chủ': ['Home', '홈', 'Главная', '首页'],
    'Về Trùm Mía': ['About Trùm Mía', 'Trùm Mía 소개', 'О Trùm Mía', '关于 Trùm Mía'],
    'Sản Phẩm': ['Products', '제품', 'Продукция', '产品'],
    'Cửa Hàng': ['Stores', '매장', 'Магазины', '门店'],
    'Khám phá sản phẩm': ['Explore products', '제품 둘러보기', 'Смотреть продукцию', '探索产品'],

    'ĐẶC SẢN NHA TRANG · KHÁNH HÒA': [
      'NHA TRANG · KHANH HOA SPECIALTY',
      '냐짱 · 카인호아 특산품',
      'ДЕЛИКАТЕС НЯЧАНГА · КХАНЬХОА',
      '芽庄 · 庆和特产'
    ],
    'Từ cây mía Khánh Hòa đến những sản phẩm mang hương vị nguyên bản của quê hương': [
      'From Khanh Hoa sugarcane to products that carry the original flavor of the homeland',
      '카인호아의 사탕수수에서 고향 본연의 맛을 담은 제품까지',
      'От сахарного тростника Кханьхоа до продуктов с подлинным вкусом родного края',
      '从庆和的甘蔗，到承载故乡原味的产品'
    ],
    'đậm chất địa phương, tinh tế và hiện đại': [
      'rooted in local character, refined and modern',
      '지역의 개성이 살아 있는 세련되고 현대적인 맛',
      'с местным характером, утончённые и современные',
      '带着浓郁地方特色，精致而现代'
    ],
    'Nguyên liệu Khánh Hòa': ['Khanh Hoa ingredients', '카인호아 원료', 'Сырьё из Кханьхоа', '庆和原料'],
    'Gốc địa phương': ['Local origin', '지역 기반', 'Местное происхождение', '本地渊源'],
    'Hương vị nguyên bản': ['Original flavor', '본연의 맛', 'Подлинный вкус', '原汁原味'],
    'Trùm Mía khôi phục những giá trị của cây mía Khánh Hòa trong các sản phẩm từ mía, giữ trọn hương vị nguyên bản của vùng đất xứ Trầm và mang chúng đến gần hơn với người tiêu dùng hiện đại.': [
      'Trùm Mía revives the value of Khanh Hoa sugarcane in its sugarcane products, keeping the original flavor of the Agarwood Land and bringing it closer to modern consumers.',
      'Trùm Mía는 카인호아 사탕수수의 가치를 되살려 사탕수수 제품에 담고, 침향의 땅 본연의 맛을 그대로 지켜 현대 소비자에게 가까이 전합니다.',
      'Trùm Mía возрождает ценность сахарного тростника Кханьхоа в своих продуктах, сохраняя подлинный вкус края агарового дерева и приближая его к современному потребителю.',
      'Trùm Mía 让庆和甘蔗的价值在甘蔗产品中重现，保留沉香之乡的原汁原味，并将它带给现代消费者。'
    ],
    'Tìm cửa hàng': ['Find a store', '매장 찾기', 'Найти магазин', '查找门店'],
    'Mía khánh hòa': ['Khanh Hoa sugarcane', '카인호아 사탕수수', 'Сахарный тростник Кханьхоа', '庆和甘蔗'],
    'TRUYỀN THỐNG': ['TRADITIONAL', '전통', 'ТРАДИЦИОННЫЙ', '传统'],
    'NGUYÊN CHẤT': ['PURE', '순수', 'ЧИСТЫЙ', '纯正'],
    'Đặc sản': ['Specialty', '특산품', 'Местный продукт', '特产'],
    'Khánh Hòa': ['Khanh Hoa', '카인호아', 'Кханьхоа', '庆和'],
    'Ngọt lành • Thanh mát • Gắn với quê hương': [
      'Sweet • Refreshing • Rooted in the homeland',
      '달콤함 • 시원함 • 고향의 맛',
      'Сладкий • Освежающий • Со вкусом родного края',
      '香甜 • 清爽 • 故乡味道'
    ],
    'Mía thô nguyên bản': ['Raw original sugarcane', '가공하지 않은 원형 사탕수수', 'Цельный сахарный тростник', '原生甘蔗'],
    'Đặc sản Nha Trang': ['Nha Trang specialty', '냐짱 특산품', 'Деликатес Нячанга', '芽庄特产'],
    'Mía nguyên bản • Mật mía tự nhiên': [
      'Original sugarcane • Natural molasses',
      '원형 사탕수수 • 천연 당밀',
      'Цельный тростник • Натуральная патока',
      '原生甘蔗 • 天然糖蜜'
    ],
    'Đậm vị Nha Trang • Tự nhiên • Đáng nhớ': [
      'Rich Nha Trang flavor • Natural • Memorable',
      '진한 냐짱의 맛 • 자연 그대로 • 기억에 남는 맛',
      'Насыщенный вкус Нячанга • Натурально • Запоминается',
      '浓郁芽庄风味 • 天然 • 难忘'
    ],

    'Tinh Túy Xứ Trầm': ['Essence of the Agarwood Land', '침향의 땅의 정수', 'Суть края агарового дерева', '沉香之乡的精华'],
    'Chất lượng vượt trội': ['Outstanding quality', '뛰어난 품질', 'Выдающееся качество', '卓越品质'],
    'Nguyên liệu tự nhiên': ['Natural ingredients', '천연 원료', 'Натуральные ингредиенты', '天然原料'],
    'Sản xuất truyền thống': ['Traditional production', '전통 방식 생산', 'Традиционное производство', '传统工艺'],

    'Về chúng tôi': ['About us', '회사 소개', 'О нас', '关于我们'],
    'Mía Khánh Hòa': ['Khanh Hoa sugarcane', '카인호아 사탕수수', 'Сахарный тростник Кханьхоа', '庆和甘蔗'],
    'Vùng đất địa linh của Khánh Hòa là nơi tạo nên chất lượng cây mía tốt nhất nhờ điều kiện đất đai, khí hậu và nguồn nước phù hợp. Mía Khánh Hòa nổi tiếng với độ ngọt, độ chắc và hương vị đặc trưng khó lẫn, đã được người dân địa phương trồng và sử dụng qua nhiều thế hệ trong các sản phẩm truyền thống.': [
      "Khanh Hoa's sacred land produces the finest sugarcane thanks to suitable soil, climate and water. Khanh Hoa sugarcane is known for its sweetness, firmness and distinctive flavor, and has been grown and used by local people for generations in traditional products.",
      '카인호아의 영험한 땅은 알맞은 토양, 기후, 수원 덕분에 최고 품질의 사탕수수를 길러냅니다. 카인호아 사탕수수는 단맛과 단단함, 독특한 풍미로 유명하며, 지역 주민들이 여러 세대에 걸쳐 재배하고 전통 제품에 사용해 왔습니다.',
      'Благодатная земля Кханьхоа выращивает лучший сахарный тростник благодаря подходящим почве, климату и воде. Тростник Кханьхоа славится сладостью, плотностью и особым вкусом; местные жители выращивают его и используют в традиционных продуктах на протяжении многих поколений.',
      '庆和这片灵秀之地，凭借适宜的土壤、气候和水源，孕育出上佳的甘蔗。庆和甘蔗以甜度高、质地紧实、风味独特而闻名，当地人世代种植，并用于各类传统产品。'
    ],
    'Trùm Mía tiếp nối di sản ấy bằng cách khôi phục những giá trị nguyên bản của cây mía, từ quá trình chăm sóc đến chế biến, mang lại những sản phẩm như nước mía, mật mía và đường mía giữ trọn hương vị bản địa, tự nhiên và đậm dấu ấn xứ Trầm.': [
      'Trùm Mía continues that heritage by reviving the original values of sugarcane, from cultivation to processing, delivering products such as sugarcane juice, molasses and sugarcane sugar that keep their native, natural flavor and the character of the Agarwood Land.',
      'Trùm Mía는 재배부터 가공까지 사탕수수 본연의 가치를 되살려, 사탕수수 주스·당밀·사탕수수 설탕처럼 토착의 자연스러운 맛과 침향의 땅의 정취를 그대로 담은 제품을 선보입니다.',
      'Trùm Mía продолжает это наследие, возрождая исходные ценности сахарного тростника — от ухода до переработки. Так появляются тростниковый сок, патока и тростниковый сахар, сохраняющие природный вкус родных мест и дух края агарового дерева.',
      'Trùm Mía 延续这份传承，从种植到加工，重拾甘蔗的本真价值，推出蔗汁、糖蜜和甘蔗糖等产品，保留本地天然风味与沉香之乡的独特韵味。'
    ],
    'Nước': ['Juice', '주스', 'Сок', '鲜榨汁'],
    'Mía': ['Sugarcane', '사탕수수', 'Тростник', '甘蔗'],
    'Mật': ['Molasses', '당밀', 'Патока', '糖蜜'],
    'Đường': ['Sugar', '설탕', 'Сахар', '糖'],

    '🍬 Sản phẩm Trùm Mía': ['🍬 Trùm Mía products', '🍬 Trùm Mía 제품', '🍬 Продукция Trùm Mía', '🍬 Trùm Mía 产品'],
    'Nước mía, mật mía, đường mía và các sản phẩm từ mía Khánh Hòa': [
      'Sugarcane juice, molasses, sugarcane sugar and more from Khanh Hoa sugarcane',
      '카인호아 사탕수수로 만든 사탕수수 주스, 당밀, 설탕 및 다양한 제품',
      'Тростниковый сок, патока, тростниковый сахар и другие продукты из сахарного тростника Кханьхоа',
      '以庆和甘蔗制成的蔗汁、糖蜜、甘蔗糖等系列产品'
    ],
    'Best Seller': ['Best Seller', '베스트셀러', 'Хит продаж', '热销'],
    'Nước Mía Tươi': ['Fresh Sugarcane Juice', '신선한 사탕수수 주스', 'Свежевыжатый тростниковый сок', '鲜榨蔗汁'],
    'Ngọt thanh tự nhiên, mát lành và giữ trọn hương vị nguyên bản của cây mía Khánh Hòa.': [
      'Naturally lightly sweet and refreshing, keeping the original flavor of Khanh Hoa sugarcane.',
      '자연스럽게 은은히 달고 시원하며, 카인호아 사탕수수 본연의 맛을 그대로 담았습니다.',
      'Естественно мягкая сладость и прохлада, сохраняющие подлинный вкус тростника Кханьхоа.',
      '天然清甜，清凉爽口，保留庆和甘蔗的原汁原味。'
    ],
    'Hot': ['Hot', '인기', 'Хит', '爆款'],
    'Mật Mía': ['Sugarcane Molasses', '사탕수수 당밀', 'Тростниковая патока', '甘蔗糖蜜'],
    'Đậm vị, thơm nồng và giàu dinh dưỡng, là lựa chọn hoàn hảo cho sáng tạo món ăn và thức uống.': [
      'Rich, aromatic and nutritious — a perfect choice for creating dishes and drinks.',
      '진한 맛과 짙은 향, 풍부한 영양으로 요리와 음료 창작에 안성맞춤입니다.',
      'Насыщенная, ароматная и питательная — отличный выбор для кулинарии и напитков.',
      '味道浓郁，香气醇厚，营养丰富，是烹饪和调饮创作的理想之选。'
    ],
    'Mới': ['New', '신제품', 'Новинка', '新品'],
    'Đường Mía': ['Sugarcane Sugar', '사탕수수 설탕', 'Тростниковый сахар', '甘蔗糖'],
    'Truyền thống, nguyên chất và dẻo hương vị quê nhà, phù hợp cho cả tiêu dùng lẫn làm quà.': [
      'Traditional, pure and chewy with the flavor of home, suitable for everyday use and as a gift.',
      '전통 방식의 순수하고 쫀득한 고향의 맛으로, 일상용은 물론 선물용으로도 좋습니다.',
      'Традиционный, чистый, с тягучей текстурой и вкусом родного дома; подходит и для повседневного использования, и в подарок.',
      '传统、纯正、软糯，带着家乡的味道，既适合日常食用，也适合送礼。'
    ],
    'Mía Gừng': ['Ginger Sugarcane', '생강 사탕수수', 'Тростник с имбирём', '姜味甘蔗'],
    'Vị cay ấm của gừng tươi hòa cùng vị ngọt thanh của mía, mang lại cảm giác ấm bụng, dễ chịu.': [
      'The warm spice of fresh ginger meets the gentle sweetness of sugarcane, for a comforting, pleasant feeling.',
      '신선한 생강의 알싸하고 따뜻한 맛이 사탕수수의 은은한 단맛과 어우러져 속이 편안하고 따뜻해집니다.',
      'Согревающая острота свежего имбиря сочетается с мягкой сладостью тростника — приятное ощущение тепла и комфорта.',
      '鲜姜的辛暖与甘蔗的清甜相融，带来暖胃舒适的感受。'
    ],
    'Mía Dừa': ['Coconut Sugarcane', '코코넛 사탕수수', 'Тростник с кокосом', '椰香甘蔗'],
    'Vị mát, quyện cùng mía tươi để mang đến cảm giác dịu nhẹ, dễ uống và mang đậm bản sắc.': [
      'Cool and mild, blended with fresh sugarcane for a gentle, easy-to-drink taste full of local character.',
      '시원하고 부드러운 맛이 신선한 사탕수수와 어우러져 순하고 마시기 편하며 지역의 개성이 가득합니다.',
      'Прохладный и нежный вкус сливается со свежим тростником — мягко, легко пить, с ярким местным характером.',
      '清凉柔和，与鲜甘蔗交融，口感温润、易于入口，带有浓郁地方特色。'
    ],
    'Premium': ['Premium', '프리미엄', 'Премиум', '高端'],
    'Combo Mía 9 Vị': ['9-Flavor Sugarcane Combo', '사탕수수 9가지 맛 콤보', 'Комбо «Тростник 9 вкусов»', '甘蔗 9 味组合'],
    'Không gian vị giác đa dạng và đậm chất quê hương, lý tưởng cho thưởng thức và gifting.': [
      'A diverse world of flavors full of homeland character, ideal for enjoying and gifting.',
      '고향의 정취가 가득한 다채로운 맛의 세계로, 즐기기와 선물하기에 이상적입니다.',
      'Разнообразный мир вкусов с духом родного края — идеально для себя и в подарок.',
      '丰富多样的味觉体验，饱含故乡风情，适合品尝与送礼。'
    ],

    '🌟 Tại sao chọn Trùm Mía?': ['🌟 Why choose Trùm Mía?', '🌟 왜 Trùm Mía일까요?', '🌟 Почему Trùm Mía?', '🌟 为什么选择 Trùm Mía？'],
    'Nguyên liệu Khánh Hòa, hương vị quê hương và sản phẩm được giữ nguyên bản sắc': [
      'Khanh Hoa ingredients, homeland flavor, and products that keep their original character',
      '카인호아 원료, 고향의 맛, 그리고 본연의 개성을 지킨 제품',
      'Сырьё из Кханьхоа, вкус родного края и продукты, сохранившие подлинный характер',
      '庆和原料、故乡风味，以及保留本真特色的产品'
    ],
    'Mía Thô Nguyên Bản': ['Raw Original Sugarcane', '가공하지 않은 원형 사탕수수', 'Цельный сахарный тростник', '原生甘蔗'],
    'Được lựa chọn từ đồng mía Khánh Hòa, giữ trọn vị ngọt tự nhiên và chất lượng nguyên sơ.': [
      'Selected from Khanh Hoa sugarcane fields, keeping the natural sweetness and pristine quality.',
      '카인호아 사탕수수밭에서 엄선하여 자연스러운 단맛과 순수한 품질을 그대로 지켰습니다.',
      'Отобран на полях Кханьхоа, сохраняет природную сладость и первозданное качество.',
      '精选自庆和甘蔗田，保留天然甜味与原初品质。'
    ],
    'Mật Mía Tự Nhiên': ['Natural Molasses', '천연 당밀', 'Натуральная патока', '天然糖蜜'],
    'Ngọt đậm, thơm mùi mía và giàu giá trị dinh dưỡng, rất phù hợp cho sức khỏe và cảm giác thư giãn.': [
      'Deeply sweet, fragrant with sugarcane and rich in nutritional value, well suited to health and relaxation.',
      '진한 단맛과 사탕수수 향, 풍부한 영양 가치로 건강과 휴식에 잘 어울립니다.',
      'Насыщенно сладкая, с ароматом тростника и высокой питательной ценностью — подходит для здоровья и отдыха.',
      '甜味浓郁，带有甘蔗香气，营养价值丰富，适合养生与放松。'
    ],
    'Không Phụ Gia': ['No Additives', '무첨가', 'Без добавок', '零添加'],
    'Hoàn toàn từ mía và nguyên liệu tự nhiên, không đường hóa học, không chất bảo quản.': [
      'Made purely from sugarcane and natural ingredients, with no chemical sugar and no preservatives.',
      '오로지 사탕수수와 천연 원료로 만들며, 화학 설탕과 방부제를 사용하지 않습니다.',
      'Только из тростника и натуральных ингредиентов, без химического сахара и консервантов.',
      '完全由甘蔗和天然原料制成，不含化学糖，不含防腐剂。'
    ],
    'Đặc Sản Địa Phương': ['Local Specialty', '지역 특산품', 'Местный деликатес', '本地特产'],
    'Trùm Mía là sự kết nối giữa văn hóa, hương vị và sức khỏe của miền biển Khánh Hòa.': [
      "Trùm Mía connects the culture, flavor and well-being of Khanh Hoa's coastal region.",
      'Trùm Mía는 카인호아 해안 지역의 문화, 맛, 건강을 이어 줍니다.',
      'Trùm Mía соединяет культуру, вкус и здоровье прибрежного края Кханьхоа.',
      'Trùm Mía 连接着庆和海滨地区的文化、风味与健康。'
    ],

    '🌟 Từ cây mía đến Trùm Mía': ['🌟 From sugarcane to Trùm Mía', '🌟 사탕수수에서 Trùm Mía까지', '🌟 От тростника до Trùm Mía', '🌟 从甘蔗到 Trùm Mía'],
    'Mỗi sản phẩm bắt đầu từ vùng nguyên liệu Khánh Hòa.': [
      'Every product starts in the Khanh Hoa raw-material region.',
      '모든 제품은 카인호아 원료 재배지에서 시작됩니다.',
      'Каждый продукт начинается в краю сырья Кханьхоа.',
      '每一款产品都始于庆和的原料产区。'
    ],
    'Trùm Mía giữ những giá trị nguyên bản của cây mía Khánh Hòa: hương vị rõ ràng, mùi thơm tự nhiên và sự kết nối với vùng đất địa linh nơi mía phát triển tốt nhất.': [
      'Trùm Mía preserves the original values of Khanh Hoa sugarcane: a clear flavor, natural aroma and a connection to the sacred land where sugarcane grows best.',
      'Trùm Mía는 카인호아 사탕수수 본연의 가치, 즉 분명한 풍미와 자연스러운 향, 사탕수수가 가장 잘 자라는 영험한 땅과의 연결을 지켜 갑니다.',
      'Trùm Mía сохраняет исходные ценности сахарного тростника Кханьхоа: чёткий вкус, натуральный аромат и связь с благодатной землёй, где тростник растёт лучше всего.',
      'Trùm Mía 守护庆和甘蔗的本真价值：鲜明的风味、天然的香气，以及与甘蔗生长得最好的灵秀之地的联系。'
    ],
    'Vùng nguyên liệu': ['Raw-material region', '원료 재배지', 'Край сырья', '原料产区'],
    'Thu hoạch': ['Harvest', '수확', 'Сбор урожая', '收获'],
    'Sản phẩm': ['Products', '제품', 'Продукция', '产品'],
    '“Giữ nguyên bản sắc của cây mía, mang hương vị quê hương đến gần hơn với đời sống hiện đại.”': [
      '“Preserving the original character of sugarcane and bringing the flavor of home closer to modern life.”',
      '“사탕수수 본연의 개성을 지키며 고향의 맛을 현대인의 일상에 더 가까이 전합니다.”',
      '«Сохранить подлинный характер сахарного тростника и приблизить вкус родного края к современной жизни.»',
      '“守护甘蔗的本真特色，让故乡的味道更贴近现代生活。”'
    ],

    'Hương vị Nha Trang, thanh khiết và đậm chất quê hương.': [
      'The flavor of Nha Trang, pure and full of homeland character.',
      '냐짱의 맛, 맑고 순수하며 고향의 정취가 가득합니다.',
      'Вкус Нячанга — чистый и полный духа родного края.',
      '芽庄风味，清新纯净，饱含故乡韵味。'
    ],
    'Không phải đồ uống ngọt thông thường — đây là sự kết tinh của mía nguyên sơ, mật mía tự nhiên và tình yêu dành cho miền biển Khánh Hòa.': [
      "Not an ordinary sweet drink — it is the essence of pristine sugarcane, natural molasses and love for Khanh Hoa's coast.",
      '평범한 달콤한 음료가 아닙니다. 순수한 사탕수수와 천연 당밀, 그리고 카인호아 해안에 대한 사랑이 응축된 결정체입니다.',
      'Это не обычный сладкий напиток, а воплощение первозданного тростника, натуральной патоки и любви к побережью Кханьхоа.',
      '这不是普通的甜饮，而是原生甘蔗、天然糖蜜与对庆和海滨深情的结晶。'
    ],
    'Mua ngay': ['Buy now', '지금 구매', 'Купить', '立即购买'],

    '📍 Gặp Trùm Mía': ['📍 Meet Trùm Mía', '📍 Trùm Mía 만나기', '📍 Встречайте Trùm Mía', '📍 遇见 Trùm Mía'],
    'Đặc sản Nha Trang - Khánh Hòa, ghé cửa hàng để trải nghiệm': [
      'Nha Trang - Khanh Hoa specialty — visit a store to experience it',
      '냐짱 - 카인호아 특산품, 매장에 들러 직접 경험해 보세요',
      'Деликатес Нячанга и Кханьхоа — загляните в магазин, чтобы попробовать',
      '芽庄 - 庆和特产，欢迎到店体验'
    ],
    'Nam Nha Trang, Khánh Hòa': ['South Nha Trang, Khanh Hoa', '남냐짱, 카인호아', 'Южный Нячанг, Кханьхоа', '南芽庄，庆和'],
    'Địa chỉ: 29 Nguyễn Đức Cảnh, Phường Nam Nha Trang': [
      'Address: 29 Nguyễn Đức Cảnh, Nam Nha Trang Ward',
      '주소: 29 Nguyễn Đức Cảnh, Nam Nha Trang 동',
      'Адрес: 29 Nguyễn Đức Cảnh, район Nam Nha Trang',
      '地址：29 Nguyễn Đức Cảnh, Nam Nha Trang 坊'
    ],
    'Địa chỉ: 96 Nguyễn Tất Thành, Phường Nam Nha Trang': [
      'Address: 96 Nguyễn Tất Thành, Nam Nha Trang Ward',
      '주소: 96 Nguyễn Tất Thành, Nam Nha Trang 동',
      'Адрес: 96 Nguyễn Tất Thành, район Nam Nha Trang',
      '地址：96 Nguyễn Tất Thành, Nam Nha Trang 坊'
    ],
    'Giờ mở cửa: 7:00 - 22:00 (Thứ 2 - Chủ Nhật)': [
      'Opening hours: 7:00 – 22:00 (Monday – Sunday)',
      '영업시간: 7:00 - 22:00 (월요일 - 일요일)',
      'Часы работы: 7:00 – 22:00 (пн – вс)',
      '营业时间：7:00 - 22:00（周一至周日）'
    ],
    'SĐT: 0923.29.79.39': ['Phone: 0923.29.79.39', '전화: 0923.29.79.39', 'Тел.: 0923.29.79.39', '电话：0923.29.79.39'],
    'Xem bản đồ': ['View map', '지도 보기', 'Смотреть на карте', '查看地图'],

    '🛒 Mua hàng dễ dàng': ['🛒 Easy ordering', '🛒 간편 주문', '🛒 Легко заказать', '🛒 轻松订购'],
    'Đặt Trùm Mía ngay — vị ngọt lành, mía thô nguyên bản từ Khánh Hòa': [
      'Order Trùm Mía now — clean sweetness, raw original sugarcane from Khanh Hoa',
      '지금 Trùm Mía를 주문하세요 — 카인호아의 순수한 단맛, 원형 사탕수수',
      'Закажите Trùm Mía прямо сейчас — чистая сладость, цельный тростник из Кханьхоа',
      '立即订购 Trùm Mía——来自庆和的清甜滋味，原生甘蔗'
    ],
    'Giao hàng nhanh, hỗ trợ tận tâm và thích hợp cho cả gia đình, quán uống lẫn doanh nghiệp. Mua trực tiếp qua hotline hoặc Zalo để nhận tư vấn nhanh nhất.': [
      'Fast delivery and dedicated support, suitable for families, drink shops and businesses alike. Order directly via hotline or Zalo for the quickest advice.',
      '빠른 배송과 성실한 지원으로 가정, 음료 매장, 기업 모두에게 적합합니다. 핫라인 또는 Zalo로 직접 주문하시면 가장 빠르게 상담받으실 수 있습니다.',
      'Быстрая доставка и внимательная поддержка для семей, кафе и бизнеса. Звоните на горячую линию или пишите в Zalo, чтобы получить консультацию быстрее всего.',
      '配送快速，服务周到，适合家庭、饮品店和企业。通过热线或 Zalo 直接下单，可获得最快的咨询服务。'
    ],
    'Email CSKH': ['Customer support email', '고객지원 이메일', 'Email поддержки', '客服邮箱'],
    '📍 Tìm cửa hàng': ['📍 Find a store', '📍 매장 찾기', '📍 Найти магазин', '📍 查找门店'],
    '✉️ Gửi Gmail': ['✉️ Send email', '✉️ 이메일 보내기', '✉️ Написать на email', '✉️ 发送邮件'],

    'Đặc sản Nha Trang - Khánh Hòa — mía thô nguyên bản, mật mía tự nhiên và hương vị khỏe cho mọi ngày 🍬': [
      'Nha Trang - Khanh Hoa specialty — raw original sugarcane, natural molasses and healthy flavor for every day 🍬',
      '냐짱 - 카인호아 특산품 — 원형 사탕수수, 천연 당밀, 매일을 위한 건강한 맛 🍬',
      'Деликатес Нячанга и Кханьхоа — цельный сахарный тростник, натуральная патока и полезный вкус на каждый день 🍬',
      '芽庄 - 庆和特产——原生甘蔗、天然糖蜜，为每一天带来健康好味道 🍬'
    ],
    'Liên kết nhanh': ['Quick links', '바로가기', 'Быстрые ссылки', '快速链接'],
    'Liên Hệ': ['Contact', '문의', 'Контакты', '联系我们'],
    'Liên hệ': ['Contact', '문의', 'Контакты', '联系我们'],
    '📍 Nha Trang, Khánh Hòa': ['📍 Nha Trang, Khanh Hoa', '📍 냐짱, 카인호아', '📍 Нячанг, Кханьхоа', '📍 芽庄，庆和'],
    '© 2025 Trùm Mía — đặc sản Nha Trang - Khánh Hòa. Tất cả quyền được bảo lưu.': [
      '© 2025 Trùm Mía — Nha Trang - Khanh Hoa specialty. All rights reserved.',
      '© 2025 Trùm Mía — 냐짱 - 카인호아 특산품. 모든 권리 보유.',
      '© 2025 Trùm Mía — деликатес Нячанга и Кханьхоа. Все права защищены.',
      '© 2025 Trùm Mía — 芽庄 - 庆和特产。保留所有权利。'
    ],
    'Gọi ngay': ['Call now', '전화하기', 'Позвонить', '立即致电'],

    // alt / aria-label
    'Về trang chủ': ['Back to home', '홈으로 이동', 'На главную', '返回首页'],
    'Mở menu': ['Open menu', '메뉴 열기', 'Открыть меню', '打开菜单'],
    'Những giá trị thương hiệu Trùm Mía': ['Trùm Mía brand values', 'Trùm Mía 브랜드 가치', 'Ценности бренда Trùm Mía', 'Trùm Mía 品牌价值'],
    'Các giá trị thương hiệu Trùm Mía': ['Trùm Mía brand values', 'Trùm Mía 브랜드 가치', 'Ценности бренда Trùm Mía', 'Trùm Mía 品牌价值'],
    'Tính năng thương hiệu Trùm Mía': ['Trùm Mía brand highlights', 'Trùm Mía 브랜드 특징', 'Особенности бренда Trùm Mía', 'Trùm Mía 品牌亮点'],
    'Liên hệ nhanh': ['Quick contact', '빠른 연락', 'Быстрая связь', '快速联系'],
    'Đường mía Trùm Mía gói giấy kraft cùng cây mía tươi': [
      'Trùm Mía sugarcane sugar wrapped in kraft paper with fresh sugarcane',
      '크라프트지로 포장한 Trùm Mía 사탕수수 설탕과 신선한 사탕수수',
      'Тростниковый сахар Trùm Mía в крафтовой бумаге со свежим тростником',
      '牛皮纸包装的 Trùm Mía 甘蔗糖与新鲜甘蔗'
    ],
    'Cánh đồng mía xanh của Trùm Mía': ['Green sugarcane field of Trùm Mía', 'Trùm Mía의 푸른 사탕수수밭', 'Зелёное тростниковое поле Trùm Mía', 'Trùm Mía 的青翠甘蔗田'],
    'Nước mía tươi': ['Fresh sugarcane juice', '신선한 사탕수수 주스', 'Свежевыжатый тростниковый сок', '鲜榨蔗汁'],
    'Mật mía': ['Sugarcane molasses', '사탕수수 당밀', 'Тростниковая патока', '甘蔗糖蜜'],
    'Đường mía': ['Sugarcane sugar', '사탕수수 설탕', 'Тростниковый сахар', '甘蔗糖'],
    'Mía gừng': ['Ginger sugarcane', '생강 사탕수수', 'Тростник с имбирём', '姜味甘蔗'],
    'Mía dừa': ['Coconut sugarcane', '코코넛 사탕수수', 'Тростник с кокосом', '椰香甘蔗'],
    'Combo mía 9 vị': ['9-flavor sugarcane combo', '사탕수수 9가지 맛 콤보', 'Комбо «Тростник 9 вкусов»', '甘蔗 9 味组合'],
    'Nấu mật mía truyền thống': ['Traditional sugarcane molasses cooking', '전통 방식 사탕수수 당밀 끓이기', 'Традиционная варка тростниковой патоки', '传统熬制甘蔗糖蜜']
  };

  var textOrig = new WeakMap();
  var attrOrig = new WeakMap();

  function norm(s) {
    return s.replace(/\s+/g, ' ').trim();
  }

  function tr(key, lang) {
    var row = T[key];
    return row && lang !== 'vi' ? row[IDX[lang]] : null;
  }

  function translateAttr(el, attr, lang) {
    var saved = attrOrig.get(el);
    if (!saved) {
      saved = {};
      attrOrig.set(el, saved);
    }
    if (!(attr in saved)) saved[attr] = el.getAttribute(attr);
    var src = saved[attr];
    if (src === null) return;
    var out = tr(norm(src), lang);
    el.setAttribute(attr, out === null ? src : out);
  }

  function apply(lang) {
    document.documentElement.lang = lang;

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode.nodeName;
        return p === 'SCRIPT' || p === 'STYLE' || p === 'OPTION'
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });
    var node;
    while ((node = walker.nextNode())) {
      var orig = textOrig.get(node);
      if (orig === undefined) {
        orig = node.nodeValue;
        textOrig.set(node, orig);
      }
      var out = tr(norm(orig), lang);
      if (out === null) {
        node.nodeValue = orig;
      } else {
        var lead = orig.match(/^\s*/)[0];
        var trail = orig.match(/\s*$/)[0];
        node.nodeValue = lead + out + trail;
      }
    }

    document.querySelectorAll('[alt], [aria-label]').forEach(function (el) {
      if (el.id === 'langSelect') return;
      if (el.hasAttribute('alt')) translateAttr(el, 'alt', lang);
      if (el.hasAttribute('aria-label')) translateAttr(el, 'aria-label', lang);
    });

    document
      .querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"]')
      .forEach(function (el) {
        translateAttr(el, 'content', lang);
      });

    var titleEl = document.querySelector('title');
    var savedTitle = attrOrig.get(titleEl) || {};
    if (!('text' in savedTitle)) savedTitle.text = titleEl.textContent;
    attrOrig.set(titleEl, savedTitle);
    var t = tr(norm(savedTitle.text), lang);
    titleEl.textContent = t === null ? savedTitle.text : t;
  }

  function readSaved() {
    var fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (fromUrl && (fromUrl === 'vi' || fromUrl in IDX)) return fromUrl;
    try {
      var s = window.localStorage.getItem(STORAGE_KEY);
      if (s && (s === 'vi' || s in IDX)) return s;
    } catch (e) {}
    return 'vi';
  }

  var select = document.getElementById('langSelect');
  var current = readSaved();
  if (select) select.value = current;
  if (current !== 'vi') apply(current);

  if (select) {
    select.addEventListener('change', function () {
      var lang = select.value;
      apply(lang);
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch (e) {}
    });
  }
})();
