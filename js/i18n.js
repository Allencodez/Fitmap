// Minimal i18n runtime for Fitmap
(function () {
  const translations = {
    en: {
      choose_language: "Choose your language",
      english: "English",
      french: "French",
      spanish: "Spanish",
      japanese: "Japanese",
      pidgin: "Pidgin",
      arabic: "Arabic",
      portugese: "Portuguese",
      edit_profile: "Edit Profile",
      payment_method: "Payment method",
      language: "Language",
      order_history: "Order History",
      invite_friends: "Invite Friends",
      help_center: "Help Center",
      your_email: "Your Email Account",
      name: "Name",
      password: "Password",
      save_changes: "Save Changes",
      // homepage keys
      start_training: "Let's start training",
      search_placeholder: "Search",
      exp_line1: "Experience World-Class",
      exp_line2: "Fitness With Us.",
      start_journey: "Start Your Journey",
      tab_all: "All",
      tab_gym_centers: "Gym Centers",
      tab_amenities: "Amenities",
      tab_trainers: "Trainers",
      tab_equipment: "Equipment",
      no_results: "No results found matching your search.",
      card1_p1: "Find gym location nearest to you.",
      card1_p2: "Each center is equipped with state of",
      card1_p3: "the art facilities.",
      see_more: "See more >",
      card2_p1: "Enjoy world-class facilites designed",
      card2_p2: "to enhance your fitness journey and",
      card2_p3: "provide ultimate comfort.",
      card3_p1:
        "Join our diverse range of group fitness classes led by certified instructors for all fitness levels.",
      card4_p1: "Meet Our Expert Trainers",
    },
    fr: {
      choose_language: "Choisissez votre langue",
      english: "Anglais",
      french: "Français",
      spanish: "Espagnol",
      japanese: "Japonais",
      pidgin: "Pidgin",
      arabic: "Arabe",
      portugese: "Portugais",
      edit_profile: "Modifier le profil",
      payment_method: "Méthode de paiement",
      language: "Langue",
      order_history: "Historique des commandes",
      invite_friends: "Inviter des amis",
      help_center: "Centre d'aide",
      your_email: "Votre compte e-mail",
      name: "Nom",
      password: "Mot de passe",
      save_changes: "Enregistrer les modifications",
    },
    jp: {
      choose_language: "言語を選択してください",
      english: "英語",
      french: "フランス語",
      spanish: "スペイン語",
      japanese: "日本語",
      pidgin: "ピジン",
      arabic: "アラビア語",
      portugese: "ポルトガル語",
      edit_profile: "プロフィールを編集",
      payment_method: "支払い方法",
      language: "言語",
      order_history: "注文履歴",
      invite_friends: "友達を招待",
      help_center: "ヘルプセンター",
      your_email: "メールアカウント",
      name: "名前",
      password: "パスワード",
      save_changes: "変更を保存",
    },
    pg: {
      choose_language: "Choose ya language",
      english: "English",
      french: "French",
      spanish: "Spanish",
      japanese: "Japanese",
      pidgin: "Pidgin",
      arabic: "Arabic",
      portugese: "Portuguese",
      edit_profile: "Edit Profile",
      payment_method: "Payment method",
      language: "Language",
      order_history: "Order History",
      invite_friends: "Invite Friends",
      help_center: "Help Center",
      your_email: "Your Email Account",
      name: "Name",
      password: "Password",
      save_changes: "Save Changes",
      // homepage pg (Nigerian Pidgin)
      start_training: "Make we start training",
      search_placeholder: "Find",
      exp_line1: "Experience correct fitness",
      exp_line2: "wey wan make you strong",
      start_journey: "Begin your journey",
      tab_all: "All",
      tab_gym_centers: "Gym Center",
      tab_amenities: "Amenities",
      tab_trainers: "Trainers",
      tab_equipment: "Equipment",
      no_results: "No result wey match your search.",
      card1_p1: "Find gym wey near you.",
      card1_p2: "Every center get better facilities",
      card1_p3: "wey go help you",
      see_more: "See more >",
      card2_p1: "Enjoy correct facilities wey go boost your fitness journey",
      card2_p2: "and make you comfortable",
      card2_p3: "",
      card3_p1:
        "Join our group classes wey certified trainers dey handle for all levels.",
      card4_p1: "Meet our oga trainers",
    },
    ar: {
      choose_language: "اختر لغتك",
      english: "الإنجليزية",
      french: "الفرنسية",
      spanish: "الإسبانية",
      japanese: "اليابانية",
      pidgin: "بيجدين",
      arabic: "العربية",
      portugese: "البرتغالية",
      edit_profile: "تعديل الملف الشخصي",
      payment_method: "طريقة الدفع",
      language: "اللغة",
      order_history: "تاريخ الطلبات",
      invite_friends: "دعوة الأصدقاء",
      help_center: "مركز المساعدة",
      your_email: "حساب بريدك الإلكتروني",
      name: "الاسم",
      password: "كلمة المرور",
      save_changes: "حفظ التغييرات",
    },
    pt: {
      choose_language: "Escolha seu idioma",
      english: "Inglês",
      french: "Francês",
      spanish: "Espanhol",
      japanese: "Japonês",
      pidgin: "Pidgin",
      arabic: "Árabe",
      portugese: "Português",
      edit_profile: "Editar perfil",
      payment_method: "Método de pagamento",
      language: "Idioma",
      order_history: "Histórico de pedidos",
      invite_friends: "Convidar amigos",
      help_center: "Central de ajuda",
      your_email: "Sua conta de e-mail",
      name: "Nome",
      password: "Senha",
      save_changes: "Salvar alterações",
    },
    es: {
      choose_language: "Elige tu idioma",
      english: "Inglés",
      french: "Francés",
      spanish: "Español",
      japanese: "Japonés",
      pidgin: "Pidgin",
      arabic: "Árabe",
      portugese: "Portugués",
      edit_profile: "Editar perfil",
      payment_method: "Método de pago",
      language: "Idioma",
      order_history: "Historial de pedidos",
      invite_friends: "Invitar amigos",
      help_center: "Centro de ayuda",
      your_email: "Tu correo electrónico",
      name: "Nombre",
      password: "Contraseña",
      save_changes: "Guardar cambios",
    },
  };

  function getLang() {
    return localStorage.getItem("fitmap_lang") || "en";
  }

  function setLang(lang) {
    localStorage.setItem("fitmap_lang", lang);
    applyTranslations();
  }

  function applyTranslations(root) {
    const lang = getLang();
    const dict = translations[lang] || translations.en;
    const ctx = root || document;
    ctx.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const txt = dict[key] || translations.en[key] || key;
      // preserve input placeholders
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = txt;
      } else {
        el.textContent = txt;
      }
    });
  }

  // expose helpers
  window.FitmapI18n = { getLang, setLang, applyTranslations };

  document.addEventListener("DOMContentLoaded", function () {
    applyTranslations();
  });
})();
