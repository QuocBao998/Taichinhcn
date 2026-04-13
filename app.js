// --- Constants & Config ---
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const CATEGORIES = {
    income: [
        { id: 'salary', name: 'Lương', color: '#4F46E5', nameEn: 'Salary' },
        { id: 'bonus', name: 'Thưởng', color: '#EC4899', nameEn: 'Bonus' },
        { id: 'investment', name: 'Đầu tư', color: '#10B981', nameEn: 'Investment' },
        { id: 'other_in', name: 'Khác', color: '#F59E0B', nameEn: 'Other' }
    ],
    expense: [
        { id: 'food', name: 'Ăn uống', color: '#4F46E5', nameEn: 'Food' },
        { id: 'utilities', name: 'Điện nước', color: '#06B6D4', nameEn: 'Utilities' },
        { id: 'shopping', name: 'Mua sắm', color: '#F59E0B', nameEn: 'Shopping' },
        { id: 'transport', name: 'Di chuyển', color: '#8B5CF6', nameEn: 'Transport' },
        { id: 'health', name: 'Sức khỏe', color: '#10B981', nameEn: 'Health' },
        { id: 'entertainment', name: 'Giải trí', color: '#EC4899', nameEn: 'Entertainment' },
        { id: 'banking', name: 'Thanh toán ngân hàng', color: '#ef4444', nameEn: 'Banking' },
        { id: 'mom', name: 'Thanh toán mẹ yêu', color: '#f43f5e', nameEn: 'Mom Allowance' },
        { id: 'parking', name: 'Phí gửi xe', color: '#64748b', nameEn: 'Parking Fee' },
        { id: 'fuel', name: 'Xăng dầu', color: '#eab308', nameEn: 'Fuel' },
        { id: 'travel', name: 'Du lịch', color: '#2dd4bf', nameEn: 'Travel' },
        { id: 'other_out', name: 'Khác', color: '#9ca3af', nameEn: 'Other' }
    ]
};

// --- Language Dictionary ---
const I18N = {
    vi: {
        app_title: "MyLife", app_subtitle: "TRUNG TÂM NĂNG SUẤT", login_title: "Đăng nhập", your_name: "Tên hiển thị",
        password: "Mật khẩu", pass_wrong: "Mật khẩu không chính xác!", login_btn: "Truy cập ứng dụng",
        nav_overview: "Tổng quan", nav_income: "Thu nhập", nav_expense: "Chi tiêu", nav_report: "Báo cáo", nav_settings: "Cài đặt",
        status: "TRẠNG THÁI", status_active: "Đang hoạt động", loading_weather: "Đang tải vị trí...",
        warning: "Cảnh báo:", total_income: "Tổng Thu Nhập", income_month: "+ Thu nhập tháng này", total_expense: "Tổng Chi Tiêu",
        expense_month: "- Chi tiêu tháng này", recent_tx: "Giao dịch gần đây", view_all: "Xem tất cả", null_tx: "Không có ghi chú", empty: "Trống",
        all_income: "Tất cả Thu Nhập", add_income: "Thêm thu nhập", all_expense: "Tất cả Chi Tiêu", add_expense: "Thêm chi tiêu",
        report_desc: "Phân tích chi tiết thu chi của bạn", advisor: "Cố vấn Tài chính", income_dist: "Phân bổ Thu Nhập", expense_dist: "Phân bổ Chi Tiêu",
        settings_desc: "Quản lý tài khoản, mật khẩu và tính năng", account_settings: "Tài khoản", new_pass: "Để trống nếu không đổi",
        finance_settings: "Thiết lập Tài chính", budget_month: "Thiết lập ngân sách Tháng", budget_day: "Thiết lập ngân sách Ngày",
        login_sound: "Âm thanh đăng nhập", save: "Lưu Cài Đặt Khối", save_tx: "Lưu thông tin", add_tx: "Thêm giao dịch", amount: "Số tiền", category: "Hạng mục", date: "Ngày", note: "Ghi chú", delete: "Xóa",
        logout: "Đăng xuất", st_interface: "Giao diện", st_theme_standard: "Tiêu chuẩn", st_theme_desc: "Màu chủ đạo hiện tại", st_change: "Thay đổi",
        st_account: "Tài khoản", st_default_acc: "Tài khoản mặc định", st_default_acc_desc: "Ví để trừ giao dịch tiền tệ", st_cash: "Tiền mặt",
        st_security: "Bảo mật", st_change_pass: "Đổi mật khẩu", st_forgot_pass: "Quên mật khẩu", st_forgot_desc: "Xóa dữ liệu để lập lại từ đầu",
        st_reset: "Thiết lập lại", st_faceid: "Cài đặt Face ID", st_management: "Quản lý và Thiết lập", st_noti: "Quản lý thông báo",
        st_noti_desc: "Bật popup cảnh báo tiêu dùng", st_audio: "Âm thanh", st_theme_colors: "Màu sắc chủ đạo",
        total_balance: "Tổng Còn Lại", pd_month: "Tháng này", pd_year: "Năm nay", pd_day: "Hôm nay",
        noti_title: "Thông báo", noti_empty: "Không có thông báo nào"
    },
    en: {
        app_title: "MyLife", app_subtitle: "PRODUCTIVITY HUB", login_title: "Login", your_name: "Display Name",
        password: "Password", pass_wrong: "Incorrect password!", login_btn: "Enter Application",
        nav_overview: "Overview", nav_income: "Income", nav_expense: "Expense", nav_report: "Report", nav_settings: "Settings",
        status: "STATUS", status_active: "Online", loading_weather: "Loading location...",
        warning: "Warning:", total_income: "Total Income", income_month: "+ Income this month", total_expense: "Total Expense",
        expense_month: "- Expense this month", recent_tx: "Recent Transactions", view_all: "View All", null_tx: "No records found", empty: "Empty",
        all_income: "All Income", add_income: "Add Income", all_expense: "All Expense", add_expense: "Add Expense",
        report_desc: "Detailed income/expense analysis", advisor: "Financial Advisor", income_dist: "Income Distribution", expense_dist: "Expense Distribution",
        settings_desc: "Manage account, password & features", account_settings: "Account", new_pass: "Leave blank if unchanged",
        finance_settings: "Financial Setup", budget_month: "Monthly Budget Setting", budget_day: "Daily Budget Setting",
        login_sound: "Login Sound", save: "Save Block Settings", save_tx: "Save Details", add_tx: "Add Transaction", amount: "Amount", category: "Category", date: "Date", note: "Note", delete: "Delete",
        logout: "Logout", st_interface: "Interface", st_theme_standard: "Standard", st_theme_desc: "Current accent color", st_change: "Change",
        st_account: "Account", st_default_acc: "Default Account", st_default_acc_desc: "Wallet for transactions", st_cash: "Cash",
        st_security: "Security", st_change_pass: "Change Password", st_forgot_pass: "Forgot Password", st_forgot_desc: "Clear data to reset",
        st_reset: "Reset Data", st_faceid: "Face ID Setting", st_management: "Management & Config", st_noti: "Notification Control",
        st_noti_desc: "Enable spending alerts", st_audio: "Sound & Haptics", st_theme_colors: "Accent Colors",
        total_balance: "Total Balance", pd_month: "This Month", pd_year: "This Year", pd_day: "Today",
        noti_title: "Notifications", noti_empty: "No notifications"
    }
};

// --- State Management ---
let transactions = JSON.parse(localStorage.getItem('v3_transactions')) || [];
let incomeChartInstance = null;
let expenseChartInstance = null;

let currentUser = localStorage.getItem('tc_username');
let currentPass = localStorage.getItem('tc_password');
let soundEnabled = localStorage.getItem('tc_sound') !== 'false';
let budgetMonth = parseFloat(localStorage.getItem('tc_budgetMonth')) || 0;
let budgetDay = parseFloat(localStorage.getItem('tc_budgetDay')) || 0;
let currentLang = localStorage.getItem('tc_lang') || 'vi';

let filterState = { income: 'month', expense: 'month' };
let globalSearchQuery = '';

function setFilterPeriod(type, period) {
    filterState[type] = period;
    document.querySelectorAll(`.pill-btn[data-target="${type}"]`).forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.period === period) btn.classList.add('active');
    });
    updateUI();
}

// --- Language ---
function applyLanguage() {
    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (el.tagName === 'INPUT' && el.type !== 'submit') {
                // Ignore placeholder translations as they are complex to target properly without overriding DOM structure,
                // but can add if necessary. Just change InnerHTML for text nodes.
            } else {
                el.innerHTML = dict[key];
            }
        }
    });
    document.getElementById('langLabel').textContent = currentLang.toUpperCase();
    setGreetingDate();
    updateUI(); 
    if (document.getElementById('report').classList.contains('active')) renderReports();
}

function toggleLang() {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    localStorage.setItem('tc_lang', currentLang);
    applyLanguage();
}

// --- Audio ---
function playSuccessSound() {
    if (!soundEnabled) return;
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        
        const osc1 = ctx.createOscillator(); const gain1 = ctx.createGain();
        osc1.type = 'sine'; osc1.frequency.setValueAtTime(523.25, ctx.currentTime);
        gain1.gain.setValueAtTime(0.1, ctx.currentTime); gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc1.connect(gain1); gain1.connect(ctx.destination);
        osc1.start(); osc1.stop(ctx.currentTime + 0.3);
        
        const osc2 = ctx.createOscillator(); const gain2 = ctx.createGain();
        osc2.type = 'sine'; osc2.frequency.setValueAtTime(659.25, ctx.currentTime + 0.15);
        gain2.gain.setValueAtTime(0.1, ctx.currentTime + 0.15); gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
        osc2.connect(gain2); gain2.connect(ctx.destination);
        osc2.start(ctx.currentTime + 0.15); osc2.stop(ctx.currentTime + 0.6);
        
    } catch(e) { console.log('Audio error:', e); }
}

// --- Login & Settings Init ---
function initAuth() {
    const loginScreen = document.getElementById('loginScreen');
    if (!currentPass) {
        document.getElementById('loginPromptTitle').textContent = currentLang === 'vi' ? 'Khởi tạo tài khoản' : 'Setup Account';
        document.getElementById('nameSetupGroup').style.display = 'block';
        document.getElementById('passwordLabel').textContent = currentLang === 'vi' ? 'Tạo mật khẩu' : 'Create Password';
        document.getElementById('setupName').required = true;
    } else {
        document.getElementById('loginPromptTitle').textContent = I18N[currentLang]['login_title'];
        document.getElementById('nameSetupGroup').style.display = 'none';
        document.getElementById('setupName').required = false;
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();
    const passInput = document.getElementById('loginPassword').value;
    const nameInput = document.getElementById('setupName').value;
    const errorEl = document.getElementById('loginError');

    if (!currentPass) {
        currentUser = nameInput || 'Bảo';
        currentPass = passInput;
        localStorage.setItem('tc_username', currentUser);
        localStorage.setItem('tc_password', currentPass);
        localStorage.setItem('tc_sound', 'true');
        proceedToApp();
    } else {
        if (passInput === currentPass) {
            proceedToApp();
        } else {
            errorEl.style.display = 'block';
        }
    }
}

function proceedToApp() {
    playSuccessSound();
    document.getElementById('loginScreen').classList.remove('active');
    setTimeout(() => {
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('mainDashboard').style.display = 'flex';
        
        applyLanguage();
        updateWeather(); 
    }, 400);

    // Sync settings form
    document.getElementById('settingName').value = currentUser || '';
    if (document.getElementById('card-holder-name')) {
        document.getElementById('card-holder-name').textContent = currentUser || 'MYLIFE';
    }
    document.getElementById('settingSound').checked = soundEnabled;
    document.getElementById('settingBudgetMonth').value = budgetMonth ? new Intl.NumberFormat('vi-VN').format(budgetMonth) : '';
    document.getElementById('settingBudgetDay').value = budgetDay ? new Intl.NumberFormat('vi-VN').format(budgetDay) : '';
    
    // Check saved theme color
    const savedColor = localStorage.getItem('tc_theme_color');
    if(savedColor) document.documentElement.style.setProperty('--primary', savedColor);
    const savedLight = localStorage.getItem('tc_theme_light');
    if(savedLight) document.documentElement.style.setProperty('--primary-light', savedLight);
}

function saveSettings(e) {
    e.preventDefault();
    const newName = document.getElementById('settingName').value;
    const newPass = document.getElementById('settingPassword').value;
    const newSound = document.getElementById('settingSound').checked;
    
    const vM = document.getElementById('settingBudgetMonth').value.replace(/\D/g, '');
    const vD = document.getElementById('settingBudgetDay').value.replace(/\D/g, '');

    if (newName) { 
        currentUser = newName; 
        localStorage.setItem('tc_username', currentUser); 
        if (document.getElementById('card-holder-name')) {
            document.getElementById('card-holder-name').textContent = currentUser;
        }
    }
    if (newPass) { currentPass = newPass; localStorage.setItem('tc_password', currentPass); }

    soundEnabled = newSound; localStorage.setItem('tc_sound', soundEnabled ? 'true' : 'false');
    
    budgetMonth = parseFloat(vM) || 0; localStorage.setItem('tc_budgetMonth', budgetMonth);
    budgetDay = parseFloat(vD) || 0; localStorage.setItem('tc_budgetDay', budgetDay);

    setGreetingDate();
    document.getElementById('settingPassword').value = '';
    updateUI();
    if(document.getElementById('report').classList.contains('active')) renderReports();
    alert(currentLang === 'vi' ? 'Đã lưu Cài đặt thành công!' : 'Settings saved successfully!');
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    applyLanguage();
    
    const isDark = localStorage.getItem('tc_theme') === 'dark';
    if (isDark) document.body.setAttribute('data-theme', 'dark');

    document.getElementById('theme-toggle').addEventListener('click', () => {
        const currentDark = document.body.getAttribute('data-theme') === 'dark';
        if (currentDark) { document.body.setAttribute('data-theme', 'light'); localStorage.setItem('tc_theme', 'light'); } 
        else { document.body.setAttribute('data-theme', 'dark'); localStorage.setItem('tc_theme', 'dark'); }
    });

    document.getElementById('lang-toggle').addEventListener('click', toggleLang);

    ['txAmount', 'settingBudgetMonth', 'settingBudgetDay'].forEach(id => {
        const el = document.getElementById(id);
        if(!el) return;
        el.addEventListener('input', function(e) {
            let value = this.value.replace(/\D/g, '');
            if (value === '') { this.value = ''; return; }
            this.value = new Intl.NumberFormat('vi-VN').format(parseInt(value, 10));
        });
    });

    // Search Feature
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            globalSearchQuery = e.target.value.toLowerCase().trim();
            updateUI();
        });
    }

    // Close Noti when clicking outside
    document.addEventListener('click', (e) => {
        const notiBox = document.getElementById('notiDropdown');
        const bellBtn = document.querySelector('.bell-btn');
        if (notiBox && notiBox.style.display === 'block' && !notiBox.contains(e.target) && !bellBtn.contains(e.target)) {
            notiBox.style.display = 'none';
        }
    });

});

// --- Weather Feature ---
function updateWeather() {
    const wWidget = document.getElementById('weatherWidget');
    
    const fetchWeather = (lat = 21.02, lon = 105.85, cityName = "Hà Nội") => {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
        .then(r => r.json())
        .then(data => {
            const t = Math.round(data.current_weather.temperature);
            const code = data.current_weather.weathercode;
            let iconCode = 'cloud';
            if (code <= 3) iconCode = 'sun'; else if (code <= 48) iconCode = 'cloud-fog'; else if (code <= 69) iconCode = 'cloud-drizzle';
            else if (code <= 79) iconCode = 'cloud-snow'; else if (code <= 82) iconCode = 'cloud-rain'; else if (code <= 99) iconCode = 'cloud-lightning';

            wWidget.innerHTML = `<i data-lucide="${iconCode}"></i> ${cityName}: ${t}°C`;
            lucide.createIcons();
        }).catch(() => { wWidget.innerHTML = `<i data-lucide="cloud-off"></i> --°C`; });
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            pos => {
                const lat = pos.coords.latitude;
                const lon = pos.coords.longitude;
                // Reverse geocoding free api
                fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=vi`)
                .then(r=>r.json()).then(geo => {
                    const city = geo.city || geo.locality || "Vị trí của bạn";
                    fetchWeather(lat, lon, city);
                }).catch(()=> fetchWeather(lat, lon, "Location"));
            },
            () => fetchWeather() // fallback
        );
    } else {
        fetchWeather();
    }
}

// --- Date and Time ---
function setGreetingDate() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = currentLang === 'vi' ? 'Chào' : 'Hello';
    
    if(currentLang === 'vi') {
        if (hour >= 5 && hour < 11) greeting = 'Chào buổi sáng';
        else if (hour >= 11 && hour < 14) greeting = 'Chào buổi trưa';
        else if (hour >= 14 && hour < 18) greeting = 'Chào buổi chiều';
        else greeting = 'Chào buổi tối';
    } else {
        if (hour >= 5 && hour < 12) greeting = 'Good morning';
        else if (hour >= 12 && hour < 18) greeting = 'Good afternoon';
        else greeting = 'Good evening';
    }

    document.getElementById('greeting-title').innerHTML = `${greeting}, ${currentUser} <span class="wave">👋</span>`;
    const dateStr = now.toLocaleDateString(currentLang === 'vi' ? 'vi-VN' : 'en-US', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' });
    document.getElementById('greeting-date').textContent = dateStr.toUpperCase();
}


// --- Tab Navigation ---
function switchTab(tabId) {
    document.querySelectorAll('.main-nav li').forEach(li => li.classList.remove('active'));
    document.querySelectorAll('.bottom-nav a').forEach(a => a.classList.remove('active'));
    
    const navLink = document.querySelector(`.main-nav a[onclick="switchTab('${tabId}')"]`);
    if (navLink) navLink.parentElement.classList.add('active');
    
    const botNav = document.getElementById(`nav-${tabId}`);
    if (botNav) botNav.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
        tab.classList.remove('active');
    });
    
    const target = document.getElementById(tabId);
    target.style.display = 'block';
    setTimeout(() => target.classList.add('active'), 10);
    
    if (tabId === 'report') renderReports();
}

// --- Data Operations ---
function saveData() {
    localStorage.setItem('v3_transactions', JSON.stringify(transactions));
    updateUI();
}

function handleFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('txId').value;
    const type = document.getElementById('txType').value;
    
    const rawAmountStr = document.getElementById('txAmount').value.replace(/\D/g, '');
    const amount = parseFloat(rawAmountStr) || 0;
    
    const categoryId = document.getElementById('txCategory').value;
    const date = document.getElementById('txDate').value;
    const note = document.getElementById('txNote').value;

    const txData = { id: id || Date.now().toString(), type, amount, categoryId, date, note };

    if (id) {
        const index = transactions.findIndex(t => t.id === id);
        if (index > -1) transactions[index] = txData;
    } else {
        transactions.unshift(txData);
    }

    transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
    saveData();
    closeModal();
    
    if (document.getElementById('report').classList.contains('active')) renderReports();
}

function handleDelete() {
    const id = document.getElementById('txId').value;
    const confirmMsg = currentLang === 'vi' ? 'Bạn có chắc chắn muốn xóa?' : 'Are you sure you want to delete?';
    if(confirm(confirmMsg)) {
        transactions = transactions.filter(t => t.id !== id);
        saveData();
        closeModal();
        if (document.getElementById('report').classList.contains('active')) renderReports();
    }
}

// --- Modal Handle ---
function openModal(type, id = null) {
    document.getElementById('txModal').classList.add('active');
    const catSelect = document.getElementById('txCategory');
    catSelect.innerHTML = '';
    
    CATEGORIES[type].forEach(cat => {
        const o = document.createElement('option');
        o.value = cat.id; o.textContent = currentLang === 'vi' ? cat.name : cat.nameEn;
        catSelect.appendChild(o);
    });

    document.getElementById('txType').value = type;

    if (id) {
        const tx = transactions.find(t => t.id === id);
        document.getElementById('modal-title').textContent = currentLang === 'vi' ? 'Sửa giao dịch' : 'Edit Transaction';
        document.getElementById('txId').value = tx.id;
        document.getElementById('txAmount').value = new Intl.NumberFormat('vi-VN').format(tx.amount);
        document.getElementById('txCategory').value = tx.categoryId;
        document.getElementById('txDate').value = tx.date;
        document.getElementById('txNote').value = tx.note;
        document.getElementById('btnDelete').style.display = 'block';
    } else {
        const t = currentLang === 'vi' ? (type === 'income' ? 'Thêm thu nhập' : 'Thêm chi tiêu') : (type === 'income' ? 'Add Income' : 'Add Expense');
        document.getElementById('modal-title').textContent = t;
        document.getElementById('txForm').reset();
        document.getElementById('txId').value = '';
        document.getElementById('txDate').valueAsDate = new Date();
        document.getElementById('btnDelete').style.display = 'none';
        document.getElementById('txType').value = type; 
    }
}

function closeModal() { document.getElementById('txModal').classList.remove('active'); }

// --- UI Rendering ---
function getCategoryInfo(id, type) {
    return CATEGORIES[type].find(c => c.id === id) || { name: 'Khác', nameEn: 'Other', color: '#64748B' };
}

function renderTransactionHTML(t) {
    const isIncome = t.type === 'income';
    const cat = getCategoryInfo(t.categoryId, t.type);
    const dateFormatted = new Date(t.date).toLocaleDateString(currentLang === 'vi'? 'vi-VN':'en-US');
    const iconStr = isIncome ? 'arrow-up-right' : 'arrow-down-right';
    const colorCls = isIncome ? 'color-income' : 'color-expense';
    const bgCls = isIncome ? 'bg-income' : 'bg-expense';
    
    const catName = currentLang === 'vi' ? cat.name : cat.nameEn;

    return `
        <div class="tx-item" onclick="openModal('${t.type}', '${t.id}')">
            <div class="tx-left">
                <div class="tx-icon-wrapper ${bgCls}">
                    <i data-lucide="${iconStr}"></i>
                </div>
                <div class="tx-info">
                    <h4>${t.note || catName}</h4>
                    <p>${dateFormatted}</p>
                </div>
            </div>
            <div class="tx-amount ${colorCls}">
                ${isIncome ? '+' : '-'}${formatCurrency(t.amount)}
            </div>
        </div>
    `;
}

function updateUI() {
    let incomeDisplay = 0, expenseDisplay = 0;
    let incomeMonth = 0, expenseMonth = 0, expenseDay = 0; 
    let allTimeIncome = 0, allTimeExpense = 0;
    
    const incArr = []; const expArr = [];
    const todayStr = new Date().toISOString().split('T')[0];
    
    const currMonth = new Date().getMonth();
    const currYear = new Date().getFullYear();

    transactions.forEach(t => {
        const d = new Date(t.date);
        const tMonth = d.getMonth();
        const tYear = d.getFullYear();
        
        const catInfo = getCategoryInfo(t.categoryId, t.type);
        const dictName = currentLang === 'vi' ? catInfo.name : catInfo.nameEn;
        
        let matchSearch = true;
        if (globalSearchQuery) {
            matchSearch = (t.note && t.note.toLowerCase().includes(globalSearchQuery)) || 
                          dictName.toLowerCase().includes(globalSearchQuery) || 
                          t.amount.toString().includes(globalSearchQuery);
        }

        let matchIncomeFilter = false;
        if(filterState.income === 'month') matchIncomeFilter = (tMonth === currMonth && tYear === currYear);
        if(filterState.income === 'year') matchIncomeFilter = (tYear === currYear);
        if(filterState.income === 'day') matchIncomeFilter = (t.date === todayStr);
        
        let matchExpenseFilter = false;
        if(filterState.expense === 'month') matchExpenseFilter = (tMonth === currMonth && tYear === currYear);
        if(filterState.expense === 'year') matchExpenseFilter = (tYear === currYear);
        if(filterState.expense === 'day') matchExpenseFilter = (t.date === todayStr);
        
        if (t.type === 'income') { 
            if(matchSearch) incArr.push(t);
            allTimeIncome += t.amount;
            if(tMonth === currMonth && tYear === currYear) incomeMonth += t.amount; 
            if(matchIncomeFilter) incomeDisplay += t.amount;
        } else { 
            if(matchSearch) expArr.push(t);
            allTimeExpense += t.amount;
            if(tMonth === currMonth && tYear === currYear) expenseMonth += t.amount; 
            if(t.date === todayStr) expenseDay += t.amount;
            if(matchExpenseFilter) expenseDisplay += t.amount;
        }
    });

    // Alert Logic
    const alertBox = document.getElementById('globalBudgetAlert');
    const alertText = document.getElementById('budgetAlertText');
    let isWarning = false;

    // Notification Logic (Populate Bell Dropdown)
    const notiList = document.getElementById('notiList');
    const notiDot = document.getElementById('notiDot');
    let notiHTML = '';
    let hasNoti = false;
    
    // Feature toggle flag from Settings
    const isPushEnabled = document.getElementById('settingNoti') ? document.getElementById('settingNoti').checked : true;

    if (budgetMonth > 0 && expenseMonth > budgetMonth) {
        isWarning = true;
        hasNoti = true;
        const txt = currentLang === 'vi' 
            ? `Tháng này bạn đã tiêu ${formatCurrency(expenseMonth)}, vượt hạn mức (${formatCurrency(budgetMonth)}).`
            : `You spent ${formatCurrency(expenseMonth)} this month, exceeding limit (${formatCurrency(budgetMonth)}).`;
        alertText.textContent = txt;
        
        notiHTML += `<div style="padding: 8px; background: var(--danger-bg); color: var(--danger); border-radius: var(--radius-sm); border: 1px solid var(--danger);">
            <i data-lucide="alert-triangle" style="width: 14px; height: 14px;"></i> ${txt}
        </div>`;
    } else if (budgetDay > 0 && expenseDay > budgetDay) {
        isWarning = true;
        hasNoti = true;
        const txt = currentLang === 'vi' 
            ? `Hôm nay bạn đã tiêu ${formatCurrency(expenseDay)}, vượt hạn mức ngày (${formatCurrency(budgetDay)}).`
            : `You spent ${formatCurrency(expenseDay)} today, exceeding daily limit (${formatCurrency(budgetDay)}).`;
        alertText.textContent = txt;
        
        notiHTML += `<div style="padding: 8px; background: var(--warning-bg); color: var(--warning); border-radius: var(--radius-sm); border: 1px dashed var(--warning);">
            <i data-lucide="alert-circle" style="width: 14px; height: 14px;"></i> ${txt}
        </div>`;
    }
    
    // Only show big banner if toggle is enabled
    alertBox.style.display = (isWarning && isPushEnabled) ? 'flex' : 'none';
    
    if (notiList) {
        if (!hasNoti) notiHTML = `<div style="padding: 12px; text-align: center;">${currentLang === 'vi' ? 'Không có thông báo nào' : 'No notifications'}</div>`;
        notiList.innerHTML = notiHTML;
    }
    if (notiDot) {
        notiDot.style.display = hasNoti ? 'block' : 'none';
    }

    document.getElementById('summary-balance').textContent = formatCurrency(allTimeIncome - allTimeExpense);
    document.getElementById('summary-income').textContent = formatCurrency(incomeDisplay);
    document.getElementById('summary-expense').textContent = formatCurrency(expenseDisplay);

    const recentDiv = document.getElementById('recent-transactions');
    const emptyTxt = currentLang === 'vi' ? 'Không có ghi chú' : 'No records found';
    
    let mixedArr = [];
    if(globalSearchQuery) {
        mixedArr = incArr.concat(expArr).sort((a,b) => new Date(b.date) - new Date(a.date));
    } else {
        mixedArr = transactions;
    }

    if (mixedArr.length === 0) {
        recentDiv.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 20px;">${emptyTxt}</p>`;
    } else {
        recentDiv.innerHTML = mixedArr.slice(0, 5).map(renderTransactionHTML).join('');
    }

    document.getElementById('income-list').innerHTML = incArr.length ? incArr.map(renderTransactionHTML).join('') : `<p style="text-align: center; color: var(--text-muted); padding: 20px;">${emptyTxt}</p>`;
    document.getElementById('expense-list').innerHTML = expArr.length ? expArr.map(renderTransactionHTML).join('') : `<p style="text-align: center; color: var(--text-muted); padding: 20px;">${emptyTxt}</p>`;

    lucide.createIcons();
}

// --- Smart Chart & Advisor Rendering ---
function renderReports() {
    renderChart('income', 'incomeChart', 'income-details');
    renderChart('expense', 'expenseChart', 'expense-details');
}

function renderChart(type, canvasId, detailsId) {
    const currMonth = new Date().getMonth();
    const currYear = new Date().getFullYear();
    const list = transactions.filter(t => t.type === type && new Date(t.date).getMonth() === currMonth && new Date(t.date).getFullYear() === currYear);
    
    let total = 0;
    const aggregated = list.reduce((acc, curr) => {
        acc[curr.categoryId] = (acc[curr.categoryId] || 0) + curr.amount;
        total += curr.amount;
        return acc;
    }, {});

    // SMART ADVISOR LOGIC FOR EXPENSES
    if (type === 'expense') {
        const advBlock = document.getElementById('advisorBlock');
        const advMsg = document.getElementById('advisorMessage');
        if (budgetMonth > 0 && total > budgetMonth) {
            // Find highest category
            let maxCatId = '', maxVal = 0;
            for(let key in aggregated) { if(aggregated[key] > maxVal) { maxVal = aggregated[key]; maxCatId = key; } }
            
            const pCent = Math.round((maxVal / total) * 100);
            const wCat = getCategoryInfo(maxCatId, 'expense');
            const catName = currentLang === 'vi' ? wCat.name : wCat.nameEn;
            
            advMsg.innerHTML = currentLang === 'vi'
                ? `Cảnh báo: Bạn đã vượt hạn mức tháng. Hạng mục rủi ro cao là <b>[${catName}]</b> (chiếm ${pCent}% tổng chi).<br>💡 <i>Gợi ý giải quyết: Lập tức tạm ngưng hoặc cắt giảm chi phí cho mục này trong những ngày còn lại của tháng. Điểm lại các khoản chi không thực sự thiết yếu.</i>`
                : `Warning: Monthly budget exceeded. Highest risk area is <b>[${catName}]</b> (${pCent}% of total).<br>💡 <i>Advice: Immediately pause or reduce spending in this category for the rest of the month. Review non-essential expenses.</i>`;
            advBlock.style.display = 'block';
        } else {
            advBlock.style.display = 'none';
        }
    }

    const labels = [];
    const data = [];
    const bgColors = [];
    let detailsHTML = '';

    Object.keys(aggregated).sort((a,b)=> aggregated[b]-aggregated[a]).forEach(key => {
        const cat = getCategoryInfo(key, type);
        const nameProp = currentLang === 'vi' ? cat.name : cat.nameEn;
        labels.push(`${nameProp} ${Math.round(aggregated[key]/total * 100)}%`);
        data.push(aggregated[key]);
        bgColors.push(cat.color);

        detailsHTML += `
            <div class="detail-item">
                <div class="d-name">
                    <span class="d-color" style="background-color: ${cat.color}"></span>
                    ${nameProp}
                </div>
                <div>${formatCurrency(aggregated[key])}</div>
            </div>
        `;
    });

    if (data.length === 0) {
        labels.push(currentLang==='vi'?'Trống':'Empty'); data.push(1); bgColors.push('#E2E8F0');
        detailsHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">${currentLang==='vi'?'Không có chi tiết':'Empty'}</p>`;
    }

    document.getElementById(detailsId).innerHTML = detailsHTML;

    const ctx = document.getElementById(canvasId).getContext('2d');
    
    if (type === 'income' && incomeChartInstance) incomeChartInstance.destroy();
    if (type === 'expense' && expenseChartInstance) expenseChartInstance.destroy();

    Chart.defaults.color = '#94A3B8';
    Chart.defaults.font.family = 'Inter';

    const chartInstance = new Chart(ctx, {
        type: 'pie',
        data: { labels: labels, datasets: [{ data: data, backgroundColor: bgColors, borderWidth: 0 }] },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { position: 'left', labels: { color: getComputedStyle(document.body).getPropertyValue('--text-primary'), padding: 16, font: { size: 11, weight: '500' } } },
                tooltip: { callbacks: { label: function(c) { if (data[0] === 1 && (labels[0] === 'Trống' || labels[0] === 'Empty')) return ' Empty'; return ` ${formatCurrency(c.parsed)}`; } } }
            }
        }
    });

    if (type === 'income') incomeChartInstance = chartInstance;
    else expenseChartInstance = chartInstance;
}

// --- V6 New Features ---
function logoutSession() {
    if(confirm(currentLang === 'vi' ? 'Bạn có muốn đăng xuất không?' : 'Do you want to logout?')) {
        location.reload();
    }
}

function hardReset() {
    if(confirm(currentLang === 'vi' ? 'Hành động này sẽ XÓA TOÀN BỘ dữ liệu giao dịch và cài đặt của bạn. Bạn có chắc không?' : 'This will DELETE ALL your transaction data and settings. Are you sure?')) {
        localStorage.clear();
        location.reload();
    }
}

function toggleThemeModal() {
    document.getElementById('themeModal').classList.add('active');
}

function closeThemeModal() {
    document.getElementById('themeModal').classList.remove('active');
}

function setThemeColor(hex, lightHex, colorName) {
    document.documentElement.style.setProperty('--primary', hex);
    document.documentElement.style.setProperty('--primary-light', lightHex);
    localStorage.setItem('tc_theme_color', hex);
    localStorage.setItem('tc_theme_light', lightHex);
    closeThemeModal();
    // Update text
    document.querySelector('[data-i18n="st_theme_desc"]').textContent = currentLang === 'vi' ? `Màu chủ đạo hiện tại: ${colorName}` : `Current accent color: ${colorName}`;
}

function toggleNotifications() {
    const box = document.getElementById('notiDropdown');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

function toggleNotifications() {
    const box = document.getElementById('notiDropdown');
    box.style.display = box.style.display === 'none' ? 'block' : 'none';
}
