// ======== DADOS MOCKADOS ========
let animals = [
    { brinco: "1001", nome: "Nelore 01", sexo: "M", raca: "Nelore", nascimento: "2021-05-10", dataEntrada: "2021-12-01", peso: 550, valorCompra: 1500, categoria: "Touro", status: "Reprodução", observacoes: "Animal de genética premium." },
    { brinco: "1002", nome: "Nelore 02", sexo: "F", raca: "Nelore", nascimento: "2020-03-15", dataEntrada: "2021-01-10", peso: 420, valorCompra: 1200, categoria: "Vaca", status: "Reprodução", observacoes: "" },
    { brinco: "1003", nome: "Angus 01", sexo: "M", raca: "Angus", nascimento: "2022-08-20", dataEntrada: "2023-01-15", peso: 310, valorCompra: 1800, categoria: "Garrote", status: "Engorda", observacoes: "Lote 1" },
    { brinco: "1004", nome: "Angus 02", sexo: "M", raca: "Angus", nascimento: "2022-09-05", dataEntrada: "2023-01-15", peso: 290, valorCompra: 1750, categoria: "Garrote", status: "Engorda", observacoes: "Lote 1" },
    { brinco: "1005", nome: "Nelore 03", sexo: "M", raca: "Nelore", nascimento: "2021-11-12", dataEntrada: "2022-04-10", peso: 510, valorCompra: 1300, categoria: "Novilho", status: "Venda", observacoes: "Pronto para o frigorífico." },
    { brinco: "1006", nome: "Mestiço 01", sexo: "F", raca: "Cruzamento Industrial", nascimento: "2023-01-10", dataEntrada: "2023-05-20", peso: 180, valorCompra: 900, categoria: "Bezerro", status: "Engorda", observacoes: "" },
    { brinco: "1007", nome: "Nelore 04", sexo: "M", raca: "Nelore", nascimento: "2022-05-18", dataEntrada: "2023-02-10", peso: 340, valorCompra: 1400, categoria: "Garrote", status: "Engorda", observacoes: "Lote 2" },
    { brinco: "1008", nome: "Nelore 05", sexo: "F", raca: "Nelore", nascimento: "2021-02-22", dataEntrada: "2021-08-11", peso: 450, valorCompra: 1100, categoria: "Vaca", status: "Reprodução", observacoes: "" },
    { brinco: "1009", nome: "Angus 03", sexo: "M", raca: "Angus", nascimento: "2022-10-30", dataEntrada: "2023-04-05", peso: 275, valorCompra: 1600, categoria: "Garrote", status: "Engorda", observacoes: "Lote 1" },
    { brinco: "1010", nome: "Nelore 06", sexo: "M", raca: "Nelore", nascimento: "2021-12-05", dataEntrada: "2022-05-01", peso: 505, valorCompra: 1450, categoria: "Novilho", status: "Venda", observacoes: "" },
    { brinco: "1011", nome: "Mestiço 02", sexo: "M", raca: "Cruzamento Industrial", nascimento: "2022-07-14", dataEntrada: "2023-01-08", peso: 320, valorCompra: 1000, categoria: "Garrote", status: "Engorda", observacoes: "Lote 3" },
    { brinco: "1012", nome: "Nelore 07", sexo: "F", raca: "Nelore", nascimento: "2019-11-11", dataEntrada: "2020-03-12", peso: 480, valorCompra: 1250, categoria: "Vaca", status: "Reprodução", observacoes: "Excelente matriz" },
    { brinco: "1013", nome: "Angus 04", sexo: "M", raca: "Angus", nascimento: "2021-09-25", dataEntrada: "2022-02-28", peso: 520, valorCompra: 1900, categoria: "Novilho", status: "Venda", observacoes: "" },
    { brinco: "1014", nome: "Nelore 08", sexo: "M", raca: "Nelore", nascimento: "2023-02-28", dataEntrada: "2023-07-15", peso: 150, valorCompra: 800, categoria: "Bezerro", status: "Engorda", observacoes: "" },
    { brinco: "1015", nome: "Nelore 09", sexo: "M", raca: "Nelore", nascimento: "2023-03-10", dataEntrada: "2023-07-15", peso: 140, valorCompra: 800, categoria: "Bezerro", status: "Engorda", observacoes: "" },
    { brinco: "1016", nome: "Mestiço 03", sexo: "F", raca: "Cruzamento Industrial", nascimento: "2022-04-12", dataEntrada: "2022-11-20", peso: 360, valorCompra: 1150, categoria: "Novilho", status: "Engorda", observacoes: "Lote 3" },
    { brinco: "1017", nome: "Angus 05", sexo: "F", raca: "Angus", nascimento: "2021-08-08", dataEntrada: "2022-01-10", peso: 430, valorCompra: 1700, categoria: "Vaca", status: "Reprodução", observacoes: "" },
    { brinco: "1018", nome: "Nelore 10", sexo: "M", raca: "Nelore", nascimento: "2021-10-20", dataEntrada: "2022-03-15", peso: 515, valorCompra: 1500, categoria: "Novilho", status: "Venda", observacoes: "" },
    { brinco: "1019", nome: "Nelore 11", sexo: "M", raca: "Nelore", nascimento: "2022-06-15", dataEntrada: "2023-01-05", peso: 330, valorCompra: 1350, categoria: "Garrote", status: "Engorda", observacoes: "Lote 2" },
    { brinco: "1020", nome: "Brahman 01", sexo: "M", raca: "Brahman", nascimento: "2022-01-05", dataEntrada: "2022-08-10", peso: 410, valorCompra: 1600, categoria: "Novilho", status: "Engorda", observacoes: "Lote 4" }
];

let weighings = [
    { id: 1, animalBrinco: "1003", data: "2023-05-01", peso: 280 },
    { id: 2, animalBrinco: "1003", data: "2023-06-01", peso: 295 },
    { id: 3, animalBrinco: "1003", data: "2023-07-01", peso: 310 },
    { id: 4, animalBrinco: "1005", data: "2023-04-15", peso: 480 },
    { id: 5, animalBrinco: "1005", data: "2023-06-15", peso: 510 },
    { id: 6, animalBrinco: "1010", data: "2023-05-10", peso: 490 },
    { id: 7, animalBrinco: "1010", data: "2023-07-10", peso: 505 }
];

let charts = {};

// ======== INICIALIZAÇÃO ========
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    initLogin();
    initNavigation();
    initModals();
});

// ======== AUTENTICAÇÃO SIMULADA ========
function checkAuth() {
    const isAuth = sessionStorage.getItem('agrotech_auth');
    if (isAuth === 'true') {
        showApp();
    } else {
        showLogin();
    }
}

function initLogin() {
    const loginForm = document.getElementById('login-form');
    const btnLogout = document.getElementById('btn-logout');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('login-user').value;
        const pass = document.getElementById('login-password').value;
        const errorMsg = document.getElementById('login-error');

        if (user === 'admin' && pass === 'admin123') {
            sessionStorage.setItem('agrotech_auth', 'true');
            errorMsg.style.display = 'none';
            showApp();
        } else {
            errorMsg.style.display = 'block';
        }
    });

    btnLogout.addEventListener('click', () => {
        sessionStorage.removeItem('agrotech_auth');
        showLogin();
    });
}

function showApp() {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('app-screen').classList.add('active');
    
    // Render initial data
    renderDashboard();
    renderAnimals();
    renderWeighings();
    renderReports();
    renderFatteningLot();
}

function showLogin() {
    document.getElementById('app-screen').classList.remove('active');
    document.getElementById('login-screen').classList.add('active');
    document.getElementById('login-form').reset();
    document.getElementById('login-error').style.display = 'none';
}


// ======== NAVEGAÇÃO SPA ========
function initNavigation() {
    const navItems = document.querySelectorAll('#nav-list li');
    const sections = document.querySelectorAll('.view-section');
    const pageTitle = document.getElementById('page-title');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const targetId = item.getAttribute('data-target');
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });

            pageTitle.innerText = item.innerText;

            if (targetId === 'dashboard-section') renderDashboard();
            if (targetId === 'reports-section') renderReports();
            if (targetId === 'fattening-section') renderFatteningLot();
        });
    });
}


// ======== MODAIS ========
function initModals() {
    // Modal Animal
    const animalModal = document.getElementById('animal-modal');
    const btnAddAnimal = document.getElementById('btn-add-animal');
    
    btnAddAnimal.addEventListener('click', () => {
        document.getElementById('animal-form').reset();
        document.getElementById('animal-id').value = '';
        document.getElementById('brinco').readOnly = false;
        document.getElementById('animal-modal-title').innerText = 'Cadastrar Bovino';
        animalModal.classList.add('show');
    });

    // Modal Pesagem
    const weighingModal = document.getElementById('weighing-modal');
    const btnAddWeighing = document.getElementById('btn-add-weighing');

    btnAddWeighing.addEventListener('click', () => {
        document.getElementById('weighing-form').reset();
        populateWeighingSelect();
        weighingModal.classList.add('show');
    });

    // Close Modals
    const closeBtns = document.querySelectorAll('.close-modal, .btn-close-modal');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').classList.remove('show');
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });

    // Forms Submit
    document.getElementById('animal-form').addEventListener('submit', handleAnimalSubmit);
    document.getElementById('weighing-form').addEventListener('submit', handleWeighingSubmit);
}


// ======== DASHBOARD & GRÁFICOS ========
function renderDashboard() {
    const total = animals.length;
    const totalWeight = animals.reduce((sum, a) => sum + parseFloat(a.peso), 0);
    const avgWeight = total > 0 ? (totalWeight / total).toFixed(1) : 0;
    const emEngorda = animals.filter(a => a.status === 'Engorda').length;
    const prontos = animals.filter(a => a.peso >= 500 && a.status === 'Venda').length;
    
    // GMD Simulado e Lotes (simulando que cada anotação de "Lote X" em observacoes é um lote, ou fallback para 1 se vazio)
    const gmd = 0.85; 
    
    // Calcula qtd lotes únicos a partir do campo 'observacoes' que comecem com "Lote"
    const lotesUnicos = new Set();
    animals.forEach(a => {
        if (a.observacoes.toLowerCase().includes('lote')) {
            lotesUnicos.add(a.observacoes);
        }
    });
    const qtdLotes = lotesUnicos.size > 0 ? lotesUnicos.size : 1;

    document.getElementById('dash-total-animals').innerText = total;
    document.getElementById('dash-avg-weight').innerText = `${avgWeight} kg`;
    document.getElementById('dash-fattening').innerText = emEngorda;
    document.getElementById('dash-ready').innerText = prontos;
    document.getElementById('dash-gmd').innerText = `${gmd} kg/dia`;
    document.getElementById('dash-lots').innerText = qtdLotes;

    renderCharts();
}

function renderCharts() {
    Chart.defaults.font.family = 'Inter';
    Chart.defaults.color = '#64748b';

    // 1. Evolução de Peso
    const ctxWeight = document.getElementById('weightEvolutionChart').getContext('2d');
    if (charts.weight) charts.weight.destroy();
    charts.weight = new Chart(ctxWeight, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [{
                label: 'Peso Médio (kg)',
                data: [320, 335, 350, 362, 380, 392],
                borderColor: '#1b5e20',
                backgroundColor: 'rgba(27, 94, 32, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#1b5e20'
            }]
        },
        options: { responsive: true, plugins: { legend: { display: false } }, maintainAspectRatio: false }
    });

    // 2. Distribuição por Categoria
    const ctxCategory = document.getElementById('categoryDistributionChart').getContext('2d');
    if (charts.category) charts.category.destroy();
    const catCount = {};
    animals.forEach(a => { catCount[a.categoria] = (catCount[a.categoria] || 0) + 1; });
    charts.category = new Chart(ctxCategory, {
        type: 'doughnut',
        data: {
            labels: Object.keys(catCount),
            datasets: [{
                data: Object.values(catCount),
                backgroundColor: ['#4ade80', '#22c55e', '#16a34a', '#15803d', '#166534'],
                borderWidth: 0
            }]
        },
        options: { responsive: true, cutout: '70%', plugins: { legend: { position: 'bottom' } }, maintainAspectRatio: false }
    });

    // 3. Distribuição por Raça
    const ctxBreed = document.getElementById('breedDistributionChart').getContext('2d');
    if (charts.breed) charts.breed.destroy();
    const breedCount = {};
    animals.forEach(a => { breedCount[a.raca] = (breedCount[a.raca] || 0) + 1; });
    charts.breed = new Chart(ctxBreed, {
        type: 'pie',
        data: {
            labels: Object.keys(breedCount),
            datasets: [{
                data: Object.values(breedCount),
                backgroundColor: ['#1e40af', '#3b82f6', '#93c5fd', '#1d4ed8', '#bfdbfe'],
                borderWidth: 0
            }]
        },
        options: { responsive: true, plugins: { legend: { position: 'bottom' } }, maintainAspectRatio: false }
    });
}


// ======== GESTÃO DE ANIMAIS ========
function renderAnimals() {
    const tbody = document.getElementById('animals-table-body');
    tbody.innerHTML = '';

    animals.forEach(animal => {
        let badgeClass = 'badge-engorda';
        if (animal.status === 'Reprodução') badgeClass = 'badge-reproducao';
        if (animal.status === 'Venda') badgeClass = 'badge-venda';

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${animal.brinco}</strong></td>
            <td>${animal.nome}</td>
            <td>${animal.raca}</td>
            <td>${formatDate(animal.dataEntrada)}</td>
            <td><strong>${animal.peso}</strong></td>
            <td>${animal.categoria}</td>
            <td><span class="badge ${badgeClass}">${animal.status}</span></td>
            <td>
                <button class="btn-icon" onclick="editAnimal('${animal.brinco}')" title="Editar"><i class="fa-solid fa-pen"></i></button>
                <button class="btn-icon" style="color: var(--danger)" onclick="deleteAnimal('${animal.brinco}')" title="Excluir"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function handleAnimalSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('animal-id').value;
    
    const animalData = {
        brinco: document.getElementById('brinco').value,
        nome: document.getElementById('nome').value,
        sexo: document.getElementById('sexo').value,
        raca: document.getElementById('raca').value,
        nascimento: document.getElementById('nascimento').value,
        dataEntrada: document.getElementById('dataEntrada').value,
        peso: parseFloat(document.getElementById('peso').value),
        valorCompra: parseFloat(document.getElementById('valorCompra').value) || 0,
        categoria: document.getElementById('categoria').value,
        status: document.getElementById('status').value,
        observacoes: document.getElementById('observacoes').value
    };

    if (id) {
        const index = animals.findIndex(a => a.brinco === id);
        if (index > -1) animals[index] = animalData;
    } else {
        if (animals.find(a => a.brinco === animalData.brinco)) {
            alert("Erro: Este brinco já está cadastrado no sistema.");
            return;
        }
        animals.push(animalData);
    }

    document.getElementById('animal-modal').classList.remove('show');
    renderAnimals();
    renderDashboard();
    renderReports();
}

window.editAnimal = function(brinco) {
    const animal = animals.find(a => a.brinco === brinco);
    if(animal) {
        document.getElementById('animal-id').value = animal.brinco;
        document.getElementById('brinco').value = animal.brinco;
        document.getElementById('brinco').readOnly = true; 
        document.getElementById('nome').value = animal.nome;
        document.getElementById('sexo').value = animal.sexo;
        document.getElementById('raca').value = animal.raca;
        document.getElementById('nascimento').value = animal.nascimento;
        document.getElementById('dataEntrada').value = animal.dataEntrada;
        document.getElementById('peso').value = animal.peso;
        document.getElementById('valorCompra').value = animal.valorCompra;
        document.getElementById('categoria').value = animal.categoria;
        document.getElementById('status').value = animal.status;
        document.getElementById('observacoes').value = animal.observacoes;
        
        document.getElementById('animal-modal-title').innerText = 'Editar Bovino';
        document.getElementById('animal-modal').classList.add('show');
    }
}

window.deleteAnimal = function(brinco) {
    if (confirm(`Atenção! Deseja remover o animal de brinco ${brinco} do sistema?`)) {
        animals = animals.filter(a => a.brinco !== brinco);
        weighings = weighings.filter(w => w.animalBrinco !== brinco);
        renderAnimals();
        renderWeighings();
        renderDashboard();
        renderReports();
    }
}


// ======== PESAGENS ========
function populateWeighingSelect() {
    const select = document.getElementById('w-animal');
    select.innerHTML = '<option value="">-- Selecione o Animal --</option>';
    animals.forEach(a => {
        select.innerHTML += `<option value="${a.brinco}">${a.brinco} - ${a.nome}</option>`;
    });
}

function renderWeighings() {
    const tbody = document.getElementById('weighings-table-body');
    tbody.innerHTML = '';
    
    const sorted = [...weighings].sort((a,b) => new Date(b.data) - new Date(a.data));

    sorted.forEach(w => {
        const animal = animals.find(a => a.brinco === w.animalBrinco) || { nome: 'Não Encontrado' };
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${formatDate(w.data)}</td>
            <td><strong>${w.animalBrinco}</strong></td>
            <td>${animal.nome}</td>
            <td><strong class="text-primary">${w.peso} kg</strong></td>
        `;
        tbody.appendChild(tr);
    });
}

function handleWeighingSubmit(e) {
    e.preventDefault();
    const wData = {
        id: Date.now(),
        animalBrinco: document.getElementById('w-animal').value,
        data: document.getElementById('w-data').value,
        peso: parseFloat(document.getElementById('w-peso').value)
    };

    weighings.push(wData);
    
    // Atualiza peso atual no cadastro do animal
    const animal = animals.find(a => a.brinco === wData.animalBrinco);
    if(animal) animal.peso = wData.peso;

    document.getElementById('weighing-modal').classList.remove('show');
    renderWeighings();
    renderAnimals();
    renderDashboard();
    renderReports();
}


// ======== RELATÓRIOS ========
function renderReports() {
    // 1. Resumo Geral
    document.getElementById('rep-total').innerText = animals.length;
    document.getElementById('rep-machos').innerText = animals.filter(a => a.sexo === 'M').length;
    document.getElementById('rep-femeas').innerText = animals.filter(a => a.sexo === 'F').length;
    
    const valorTotal = animals.reduce((sum, a) => sum + (a.valorCompra || 0), 0);
    document.getElementById('rep-valor').innerText = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // 2. Mais Pesados (Top 5)
    const heaviest = [...animals].sort((a,b) => b.peso - a.peso).slice(0, 5);
    const bodyHeaviest = document.getElementById('report-heaviest');
    bodyHeaviest.innerHTML = heaviest.length ? '' : '<tr><td colspan="3">Nenhum dado.</td></tr>';
    heaviest.forEach(a => {
        bodyHeaviest.innerHTML += `<tr><td>${a.brinco}</td><td>${a.nome}</td><td><strong>${a.peso}</strong></td></tr>`;
    });

    // 3. Prontos para Venda (> 500kg)
    const ready = animals.filter(a => a.peso >= 500 && a.status === 'Venda');
    const bodyReady = document.getElementById('report-ready');
    bodyReady.innerHTML = ready.length ? '' : '<tr><td colspan="3" style="text-align: center">Nenhum animal atingiu as condições.</td></tr>';
    ready.forEach(a => {
        bodyReady.innerHTML += `<tr><td>${a.brinco}</td><td>${a.nome}</td><td><strong style="color: var(--success)">${a.peso}</strong></td></tr>`;
    });

    // 4. Em Engorda
    const fattening = animals.filter(a => a.status === 'Engorda');
    const bodyFattening = document.getElementById('report-fattening');
    bodyFattening.innerHTML = fattening.length ? '' : '<tr><td colspan="5">Nenhum animal em engorda.</td></tr>';
    fattening.forEach(a => {
        bodyFattening.innerHTML += `<tr><td>${a.brinco}</td><td>${a.nome}</td><td>${a.raca}</td><td>${formatDate(a.dataEntrada)}</td><td><strong>${a.peso}</strong></td></tr>`;
    });
}


// ======== LOTE DE ENGORDA ========
function renderFatteningLot() {
    const lot = animals.filter(a => a.status === 'Engorda');
    
    const qty = lot.length;
    const totalWeight = lot.reduce((sum, a) => sum + parseFloat(a.peso), 0);
    const avgWeight = qty > 0 ? (totalWeight / qty).toFixed(1) : 0;
    
    document.getElementById('lot-qty').innerText = qty;
    document.getElementById('lot-avg-weight').innerText = `${avgWeight} kg`;
    document.getElementById('lot-gmd').innerText = '0.95 kg/dia'; // Mock
    
    if (qty > 0) {
        const pesoFaltante = 500 - avgWeight;
        if (pesoFaltante > 0) {
            const diasFaltantes = Math.ceil(pesoFaltante / 0.95);
            const dataPrev = new Date();
            dataPrev.setDate(dataPrev.getDate() + diasFaltantes);
            document.getElementById('lot-forecast').innerText = formatDate(dataPrev.toISOString().split('T')[0]);
        } else {
            document.getElementById('lot-forecast').innerText = 'Pronto p/ Abate';
        }
    } else {
        document.getElementById('lot-forecast').innerText = '-';
    }

    const tbody = document.getElementById('lot-table-body');
    tbody.innerHTML = '';
    
    lot.forEach(a => {
        // Simulação de dias no lote (diferença entre hoje e data de entrada)
        const today = new Date();
        const entrada = new Date(a.dataEntrada || a.nascimento);
        let dias = Math.floor((today - entrada) / (1000 * 60 * 60 * 24));
        if (dias < 0) dias = 0;

        tbody.innerHTML += `
            <tr>
                <td><strong>${a.brinco}</strong></td>
                <td>${a.nome}</td>
                <td>${dias} dias</td>
                <td><strong class="text-primary">${a.peso} kg</strong></td>
            </tr>
        `;
    });
}

// ======== UTILITÁRIOS ========
function formatDate(dateStr) {
    if (!dateStr) return '-';
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return dateStr;
}
