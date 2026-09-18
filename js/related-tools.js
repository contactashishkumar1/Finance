/**
 * ArthCalculator.in - Master Automated Directory & Topical Linking Matrix
 * File Asset Location: /js/related-tools.js
 * Combines semantic contextual scoring and cohesive popular directory showcase.
 */
(function() {
    function injectMasterLinkingHub() {
        const targetContainer = document.getElementById("arthcalculatorLinkingHub");
        if (!targetContainer) return;

        const currentPath = window.location.pathname.toLowerCase();
        let cleanSlug = currentPath.replace(/^\/+|\/+$/g, '');
        if (cleanSlug.startsWith('blog/')) {
            cleanSlug = cleanSlug.replace('blog/', '');
        }

        // Strict Exclusion: Money Transfer is an independent product section
        if (cleanSlug.startsWith("money-transfer")) {
            return;
        }

        // Comprehensive Database Mapping Matrix (300+ Verified Calculators)
        const db = [
    {
        "name": "50/30/20 Budget Planner",
        "url": "/50-30-20-rule/",
        "icon": "👤",
        "category": "retirement",
        "keys": "50 30 20 rule 50/30/20 budget planner personal finance calculator"
    },
    {
        "name": "Advance Tax Calculator",
        "url": "/advance-tax/",
        "icon": "📑",
        "category": "tax",
        "keys": "advance tax advance tax calculator tax finance calculator"
    },
    {
        "name": "Advance Tax Penalty Calculator",
        "url": "/advance-tax-penalty-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "advance tax penalty calculator advance tax penalty calculator tax finance calculator"
    },
    {
        "name": "Advanced Home Affordability Calculator",
        "url": "/home-affordability/",
        "icon": "🏛️",
        "category": "loans",
        "keys": "home affordability advanced home affordability calculator govtschemes finance calculator"
    },
    {
        "name": "Agriculture Income Tax Calculator",
        "url": "/agriculture-income-tax-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "agriculture income tax calculator agriculture income tax calculator tax finance calculator"
    },
    {
        "name": "Alpha Calculator",
        "url": "/alpha/",
        "icon": "📈",
        "category": "stocks",
        "keys": "alpha alpha calculator stocks finance calculator"
    },
    {
        "name": "Altman Z-Score Calculator",
        "url": "/altman-z-score/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "altman z score altman z-score calculator business finance calculator"
    },
    {
        "name": "Asset Allocation Calculator",
        "url": "/asset-allocation/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "asset allocation asset allocation calculator stocks finance calculator"
    },
    {
        "name": "Atal Pension Yojana APY Calculator",
        "url": "/apy-calculator/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "apy calculator atal pension yojana apy calculator govtschemes finance calculator"
    },
    {
        "name": "Balance Transfer vs Personal Loan Calculator",
        "url": "/balance-transfer-vs-personal-loan/",
        "icon": "💳",
        "category": "loans",
        "keys": "balance transfer vs personal loan balance transfer vs personal loan calculator loans finance calculator"
    },
    {
        "name": "Beta Calculator",
        "url": "/beta/",
        "icon": "📈",
        "category": "stocks",
        "keys": "beta beta calculator stocks finance calculator"
    },
    {
        "name": "BNPL Late Fee Annualized APR Calculator",
        "url": "/bnpl-late-fee-apr/",
        "icon": "💳",
        "category": "credit-cards",
        "keys": "bnpl late fee apr bnpl late fee annualized apr calculator loans finance calculator"
    },
    {
        "name": "Bonus Calculator",
        "url": "/bonus-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "bonus calculator bonus calculator salary finance calculator"
    },
    {
        "name": "Bonus Stripping Loss Disallowance Calculator",
        "url": "/bonus-stripping-94-8/",
        "icon": "📊",
        "category": "capital-gains",
        "keys": "bonus stripping 94 8 bonus stripping loss disallowance calculator trading finance calculator"
    },
    {
        "name": "Break Even Calculator",
        "url": "/break-even-calculator/",
        "icon": "💼",
        "category": "business",
        "keys": "break even calculator break even calculator business finance calculator"
    },
    {
        "name": "Brokerage Calculator",
        "url": "/brokerage-calculator/",
        "icon": "📊",
        "category": "trading",
        "keys": "brokerage calculator brokerage calculator trading finance calculator"
    },
    {
        "name": "Budget Planner",
        "url": "/budget-planner/",
        "icon": "👤",
        "category": "wealth-planning",
        "keys": "budget planner budget planner personal finance calculator"
    },
    {
        "name": "Business Loan EMI Calculator",
        "url": "/business-loan-emi/",
        "icon": "💳",
        "category": "loans",
        "keys": "business loan emi business loan emi calculator loans finance calculator"
    },
    {
        "name": "CAGR Calculator",
        "url": "/cagr/",
        "icon": "📈",
        "category": "stocks",
        "keys": "cagr cagr calculator stocks finance calculator"
    },
    {
        "name": "Capital Gains Exemption Calculator",
        "url": "/capital-gains-exemption-calculator/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "capital gains exemption calculator capital gains exemption calculator tax finance calculator"
    },
    {
        "name": "Capital Gains Indexation Calculator",
        "url": "/capital-gains-indexation-calculator/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "capital gains indexation calculator capital gains indexation calculator tax finance calculator"
    },
    {
        "name": "Capital Gains Tax Calculator",
        "url": "/capital-gains-tax/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "capital gains tax capital gains tax calculator tax finance calculator"
    },
    {
        "name": "Car Loan Calculator",
        "url": "/car-loan/",
        "icon": "💳",
        "category": "loans",
        "keys": "car loan car loan calculator loans finance calculator"
    },
    {
        "name": "Car Purchase Planner",
        "url": "/car-purchase/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "car purchase car purchase planner planning finance calculator"
    },
    {
        "name": "Carbon Credit Valuation & Sequestration Estimator",
        "url": "/carbon-credit-valuation/",
        "icon": "⚡",
        "category": "ev",
        "keys": "carbon credit valuation carbon credit valuation & sequestration estimator ev finance calculator"
    },
    {
        "name": "Cash Conversion Cycle CCC Calculator",
        "url": "/cash-conversion-cycle/",
        "icon": "💼",
        "category": "business",
        "keys": "cash conversion cycle cash conversion cycle ccc calculator business finance calculator"
    },
    {
        "name": "Cash-Futures Arbitrage Spread Return Calculator",
        "url": "/cash-futures-arbitrage-yield/",
        "icon": "📊",
        "category": "trading",
        "keys": "cash futures arbitrage yield cash-futures arbitrage spread return calculator trading finance calculator"
    },
    {
        "name": "Child Education Cost 2040 Projector (SIP Goal Planner)",
        "url": "/child-education-planner/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "child education planner child education cost 2040 projector (sip goal planner) planning finance calculator"
    },
    {
        "name": "CIBIL Score Simulator",
        "url": "/cibil-score-simulator/",
        "icon": "💳",
        "category": "loans",
        "keys": "cibil score simulator cibil score simulator loans finance calculator"
    },
    {
        "name": "Clubbing of Income Calculator",
        "url": "/clubbing-of-income-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "clubbing of income calculator clubbing of income calculator tax finance calculator"
    },
    {
        "name": "Commercial Property Rental Yield Calculator",
        "url": "/commercial-property-rental-yield/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "commercial property rental yield commercial property rental yield calculator realestate finance calculator"
    },
    {
        "name": "Commission Calculator",
        "url": "/commission-calculator/",
        "icon": "💼",
        "category": "business",
        "keys": "commission calculator commission calculator business finance calculator"
    },
    {
        "name": "Compound Interest Calculator",
        "url": "/compound-interest/",
        "icon": "📈",
        "category": "wealth-planning",
        "keys": "compound interest compound interest calculator stocks finance calculator"
    },
    {
        "name": "Construction Material Calculator",
        "url": "/house-construction-material/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "house construction material construction material calculator realestate finance calculator"
    },
    {
        "name": "Contribution Margin Calculator",
        "url": "/contribution-margin/",
        "icon": "💼",
        "category": "business",
        "keys": "contribution margin contribution margin calculator business finance calculator"
    },
    {
        "name": "Corporate Car Lease vs Buy Calculator",
        "url": "/car-lease-vs-buy/",
        "icon": "💵",
        "category": "salary",
        "keys": "car lease vs buy corporate car lease vs buy calculator salary finance calculator"
    },
    {
        "name": "Corporate FD vs Bank FD Calculator",
        "url": "/corporate-fd-vs-bank-fd-calculator/",
        "icon": "🏛️",
        "category": "deposits",
        "keys": "corporate fd vs bank fd calculator corporate fd vs bank fd calculator govtschemes finance calculator"
    },
    {
        "name": "Cost of Debt Calculator",
        "url": "/cost-of-debt/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "cost of debt cost of debt calculator business finance calculator"
    },
    {
        "name": "Cost of Equity Calculator",
        "url": "/cost-of-equity/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "cost of equity cost of equity calculator business finance calculator"
    },
    {
        "name": "Covered Call Break-Even & Cushion Calculator",
        "url": "/covered-call-downside-cushion/",
        "icon": "📊",
        "category": "trading",
        "keys": "covered call downside cushion covered call break-even & cushion calculator trading finance calculator"
    },
    {
        "name": "Credit Card Balance Transfer Calculator",
        "url": "/credit-card-balance-transfer-calculator/",
        "icon": "🏛️",
        "category": "credit-cards",
        "keys": "credit card balance transfer calculator credit card balance transfer calculator govtschemes finance calculator"
    },
    {
        "name": "Credit Card Interest Calculator",
        "url": "/credit-card-interest/",
        "icon": "🏛️",
        "category": "credit-cards",
        "keys": "credit card interest credit card interest calculator govtschemes finance calculator"
    },
    {
        "name": "Credit Card Minimum Due Calculator",
        "url": "/credit-card-minimum-due/",
        "icon": "🏛️",
        "category": "credit-cards",
        "keys": "credit card minimum due credit card minimum due calculator govtschemes finance calculator"
    },
    {
        "name": "Credit Card Reward Calculator",
        "url": "/credit-card-rewards/",
        "icon": "🏛️",
        "category": "credit-cards",
        "keys": "credit card rewards credit card reward calculator govtschemes finance calculator"
    },
    {
        "name": "Credit Card Reward Points to Rupee Calculator",
        "url": "/credit-card-reward-points-rupee/",
        "icon": "🏛️",
        "category": "credit-cards",
        "keys": "credit card reward points rupee credit card reward points to rupee calculator govtschemes finance calculator"
    },
    {
        "name": "Crorepati Calculator",
        "url": "/crorepati-calculator/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "crorepati calculator crorepati calculator planning finance calculator"
    },
    {
        "name": "Crypto Tax Calculator",
        "url": "/crypto-tax-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "crypto tax calculator crypto tax calculator tax finance calculator"
    },
    {
        "name": "CTC to In-Hand Calculator",
        "url": "/ctc-to-in-hand/",
        "icon": "💵",
        "category": "salary",
        "keys": "ctc to in hand ctc to in-hand calculator salary finance calculator"
    },
    {
        "name": "Current Ratio Calculator",
        "url": "/current-ratio/",
        "icon": "💼",
        "category": "business",
        "keys": "current ratio current ratio calculator business finance calculator"
    },
    {
        "name": "DCF Stock Valuation",
        "url": "/dcf/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "dcf dcf stock valuation business finance calculator"
    },
    {
        "name": "Debt Consolidation Calculator",
        "url": "/debt-consolidation-calculator/",
        "icon": "💳",
        "category": "loans",
        "keys": "debt consolidation calculator debt consolidation calculator loans finance calculator"
    },
    {
        "name": "Debt Payoff Calculator",
        "url": "/debt-payoff/",
        "icon": "📊",
        "category": "credit-cards",
        "keys": "debt payoff debt payoff calculator trading finance calculator"
    },
    {
        "name": "Debt to Equity Ratio Calculator",
        "url": "/debt-to-equity/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "debt to equity debt to equity ratio calculator business finance calculator"
    },
    {
        "name": "Debt to Income Ratio Calculator",
        "url": "/debt-to-income/",
        "icon": "💳",
        "category": "loans",
        "keys": "debt to income debt to income ratio calculator loans finance calculator"
    },
    {
        "name": "Discount Calculator",
        "url": "/discount-calculator/",
        "icon": "👤",
        "category": "business",
        "keys": "discount calculator discount calculator personal finance calculator"
    },
    {
        "name": "Dividend Discount Model DDM Calculator",
        "url": "/dividend-discount-model/",
        "icon": "📈",
        "category": "stocks",
        "keys": "dividend discount model dividend discount model ddm calculator stocks finance calculator"
    },
    {
        "name": "Dividend Growth Calculator",
        "url": "/dividend-growth/",
        "icon": "📈",
        "category": "stocks",
        "keys": "dividend growth dividend growth calculator stocks finance calculator"
    },
    {
        "name": "Dividend Stripping Calculator (Sec 94(7))",
        "url": "/dividend-stripping-94-7/",
        "icon": "📊",
        "category": "capital-gains",
        "keys": "dividend stripping 94 7 dividend stripping calculator (sec 94(7)) trading finance calculator"
    },
    {
        "name": "Dividend Tax Calculator",
        "url": "/dividend-tax-calculator/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "dividend tax calculator dividend tax calculator tax finance calculator"
    },
    {
        "name": "Dividend Yield Calculator",
        "url": "/dividend-yield/",
        "icon": "📈",
        "category": "stocks",
        "keys": "dividend yield dividend yield calculator stocks finance calculator"
    },
    {
        "name": "Dividend Yield on Cost Calculator",
        "url": "/yield-on-cost/",
        "icon": "📈",
        "category": "stocks",
        "keys": "yield on cost dividend yield on cost calculator stocks finance calculator"
    },
    {
        "name": "DSCR Calculator",
        "url": "/dscr/",
        "icon": "💳",
        "category": "corporate-finance",
        "keys": "dscr dscr calculator loans finance calculator"
    },
    {
        "name": "DuPont Analysis Calculator",
        "url": "/dupont-analysis/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "dupont analysis dupont analysis calculator business finance calculator"
    },
    {
        "name": "E-Way Bill Validity Calculator",
        "url": "/eway-bill-validity-calculator/",
        "icon": "💼",
        "category": "gst",
        "keys": "eway bill validity calculator e-way bill validity calculator business finance calculator"
    },
    {
        "name": "Early Retirement Planner",
        "url": "/early-retirement/",
        "icon": "👴",
        "category": "retirement",
        "keys": "early retirement early retirement planner planning finance calculator"
    },
    {
        "name": "EBITDA Calculator",
        "url": "/ebitda/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "ebitda ebitda calculator business finance calculator"
    },
    {
        "name": "Education Cost Calculator",
        "url": "/education-cost/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "education cost education cost calculator planning finance calculator"
    },
    {
        "name": "Education Loan Moratorium & Capitalization Calculator",
        "url": "/education-loan-moratorium/",
        "icon": "💳",
        "category": "loans",
        "keys": "education loan moratorium education loan moratorium & capitalization calculator loans finance calculator"
    },
    {
        "name": "Education Loan Refinancing Calculator",
        "url": "/education-loan-refinancing-calculator/",
        "icon": "💳",
        "category": "loans",
        "keys": "education loan refinancing calculator education loan refinancing calculator loans finance calculator"
    },
    {
        "name": "Education Planning Calculator",
        "url": "/education-planning/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "education planning education planning calculator planning finance calculator"
    },
    {
        "name": "ELSS vs PPF vs FD Comparison Calculator",
        "url": "/elss-vs-ppf-vs-fd/",
        "icon": "🏛️",
        "category": "deposits",
        "keys": "elss vs ppf vs fd elss vs ppf vs fd comparison calculator govtschemes finance calculator"
    },
    {
        "name": "Emergency Fund Planner",
        "url": "/emergency-fund/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "emergency fund emergency fund planner planning finance calculator"
    },
    {
        "name": "EMI Calculator",
        "url": "/emi/",
        "icon": "💳",
        "category": "loans",
        "keys": "emi emi calculator loans finance calculator"
    },
    {
        "name": "Enterprise Value Calculator",
        "url": "/enterprise-value/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "enterprise value enterprise value calculator business finance calculator"
    },
    {
        "name": "EPF Calculator",
        "url": "/epf/",
        "icon": "💵",
        "category": "salary",
        "keys": "epf epf calculator salary finance calculator"
    },
    {
        "name": "EPF vs VPF vs PPF Comparison Calculator",
        "url": "/epf-vs-vpf-vs-ppf/",
        "icon": "💵",
        "category": "salary",
        "keys": "epf vs vpf vs ppf epf vs vpf vs ppf comparison calculator salary finance calculator"
    },
    {
        "name": "EPS Pension Calculator",
        "url": "/eps-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "eps calculator eps pension calculator salary finance calculator"
    },
    {
        "name": "ESI Contribution Calculator",
        "url": "/esi-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "esi calculator esi contribution calculator salary finance calculator"
    },
    {
        "name": "ESOP & RSU Wealth Simulator",
        "url": "/esop-simulator/",
        "icon": "💵",
        "category": "salary",
        "keys": "esop simulator esop & rsu wealth simulator salary finance calculator"
    },
    {
        "name": "ESOP Dilution & Valuation Calculator",
        "url": "/esop-dilution-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "esop dilution calculator esop dilution & valuation calculator salary finance calculator"
    },
    {
        "name": "ESOP Perquisite Tax Calculator",
        "url": "/esop-perquisite-tax-calculator/",
        "icon": "📑",
        "category": "salary",
        "keys": "esop perquisite tax calculator esop perquisite tax calculator tax finance calculator"
    },
    {
        "name": "ESOP Value Calculator",
        "url": "/esop-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "esop calculator esop value calculator salary finance calculator"
    },
    {
        "name": "EV Battery Replacement Fund Planner",
        "url": "/ev-battery-fund-planner/",
        "icon": "⚡",
        "category": "ev",
        "keys": "ev battery fund planner ev battery replacement fund planner ev finance calculator"
    },
    {
        "name": "EV vs Petrol Cost Calculator",
        "url": "/ev-vs-petrol/",
        "icon": "⚡",
        "category": "ev",
        "keys": "ev vs petrol ev vs petrol cost calculator ev finance calculator"
    },
    {
        "name": "EV vs. Petrol Cost Per KM Calculator",
        "url": "/ev-vs-petrol-cost/",
        "icon": "⚡",
        "category": "ev",
        "keys": "ev vs petrol cost ev vs. petrol cost per km calculator ev finance calculator"
    },
    {
        "name": "Expense Ratio Calculator",
        "url": "/expense-ratio/",
        "icon": "👤",
        "category": "mutual-funds",
        "keys": "expense ratio expense ratio calculator personal finance calculator"
    },
    {
        "name": "Expense Tracker",
        "url": "/expense-tracker/",
        "icon": "👤",
        "category": "wealth-planning",
        "keys": "expense tracker expense tracker personal finance calculator"
    },
    {
        "name": "F&O Tax Audit Turnover Calculator",
        "url": "/fo-tax-audit-turnover-calculator/",
        "icon": "📑",
        "category": "trading",
        "keys": "fo tax audit turnover calculator f&o tax audit turnover calculator tax finance calculator"
    },
    {
        "name": "Fibonacci Retracement Calculator",
        "url": "/fibonacci-retracement-calculator/",
        "icon": "📊",
        "category": "trading",
        "keys": "fibonacci retracement calculator fibonacci retracement calculator trading finance calculator"
    },
    {
        "name": "Financial Goal Planner",
        "url": "/financial-goal-planner/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "financial goal planner financial goal planner planning finance calculator"
    },
    {
        "name": "Financial Independence Calculator",
        "url": "/financial-independence/",
        "icon": "👴",
        "category": "retirement",
        "keys": "financial independence financial independence calculator planning finance calculator"
    },
    {
        "name": "Financial Leverage Calculator",
        "url": "/financial-leverage/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "financial leverage financial leverage calculator business finance calculator"
    },
    {
        "name": "FIRE Calculator",
        "url": "/fire-calculator/",
        "icon": "👴",
        "category": "retirement",
        "keys": "fire calculator fire calculator planning finance calculator"
    },
    {
        "name": "Fixed Deposit (FD)",
        "url": "/fd/",
        "icon": "🏛️",
        "category": "deposits",
        "keys": "fd fixed deposit (fd) govtschemes finance calculator"
    },
    {
        "name": "Fixed vs Floating Home Loan Interest Rate Calculator",
        "url": "/fixed-vs-floating-rate/",
        "icon": "💳",
        "category": "loans",
        "keys": "fixed vs floating rate fixed vs floating home loan interest rate calculator loans finance calculator"
    },
    {
        "name": "Flat vs Reducing Interest Rate Loan Calculator",
        "url": "/flat-vs-reducing-rate/",
        "icon": "💳",
        "category": "loans",
        "keys": "flat vs reducing rate flat vs reducing interest rate loan calculator loans finance calculator"
    },
    {
        "name": "Foreign Freelance Tax Calculator",
        "url": "/foreign-tax-optimizer/",
        "icon": "📑",
        "category": "tax",
        "keys": "foreign tax optimizer foreign freelance tax calculator tax finance calculator"
    },
    {
        "name": "Form 67 Foreign Tax Credit Calculator",
        "url": "/foreign-tax-credit-form-67/",
        "icon": "📑",
        "category": "tax",
        "keys": "foreign tax credit form 67 form 67 foreign tax credit calculator tax finance calculator"
    },
    {
        "name": "Freelance Rate & Project Quote Calculator",
        "url": "/freelance-rate-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "freelance rate calculator freelance rate & project quote calculator salary finance calculator"
    },
    {
        "name": "Freelancer vs Salaried Tax Calculator",
        "url": "/freelancer-vs-salaried/",
        "icon": "📑",
        "category": "tax",
        "keys": "freelancer vs salaried freelancer vs salaried tax calculator tax finance calculator"
    },
    {
        "name": "Future Value Calculator",
        "url": "/future-value/",
        "icon": "📈",
        "category": "wealth-planning",
        "keys": "future value future value calculator stocks finance calculator"
    },
    {
        "name": "Futures Profit Calculator",
        "url": "/futures-profit/",
        "icon": "📊",
        "category": "trading",
        "keys": "futures profit futures profit calculator trading finance calculator"
    },
    {
        "name": "Gift Tax Calculator",
        "url": "/gift-tax-sec-56-2-x/",
        "icon": "📑",
        "category": "tax",
        "keys": "gift tax sec 56 2 x gift tax calculator tax finance calculator"
    },
    {
        "name": "Goal Based Portfolio Rebalancing Planner",
        "url": "/goal-portfolio/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "goal portfolio goal based portfolio rebalancing planner stocks finance calculator"
    },
    {
        "name": "Goal Priority Planner",
        "url": "/goal-priority/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "goal priority goal priority planner planning finance calculator"
    },
    {
        "name": "Goal SIP Calculator",
        "url": "/goal-sip-calculator/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "goal sip calculator goal sip calculator stocks finance calculator"
    },
    {
        "name": "Goal Step Up SIP Calculator",
        "url": "/goal-step-up/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "goal step up goal step up sip calculator planning finance calculator"
    },
    {
        "name": "Gold Loan vs. Personal Loan Optimizer ( Edition)",
        "url": "/gold-loan-vs-personal-loan/",
        "icon": "💳",
        "category": "loans",
        "keys": "gold loan vs personal loan gold loan vs. personal loan optimizer ( edition) loans finance calculator"
    },
    {
        "name": "Gratuity Calculator",
        "url": "/gratuity/",
        "icon": "💵",
        "category": "salary",
        "keys": "gratuity gratuity calculator salary finance calculator"
    },
    {
        "name": "Gratuity Exemption Calculator",
        "url": "/gratuity-exemption-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "gratuity exemption calculator gratuity exemption calculator salary finance calculator"
    },
    {
        "name": "GST Calculator",
        "url": "/gst/",
        "icon": "💼",
        "category": "gst",
        "keys": "gst gst calculator business finance calculator"
    },
    {
        "name": "GST Composition Scheme Calculator",
        "url": "/gst-composition-scheme-calculator/",
        "icon": "💼",
        "category": "gst",
        "keys": "gst composition scheme calculator gst composition scheme calculator business finance calculator"
    },
    {
        "name": "GST Export LUT Tax Savings Calculator",
        "url": "/freelance-gst-lut-export-tax/",
        "icon": "📑",
        "category": "gst",
        "keys": "freelance gst lut export tax gst export lut tax savings calculator tax finance calculator"
    },
    {
        "name": "GST Late Fee & Penalty Calculator",
        "url": "/gst-late-fee-calculator/",
        "icon": "💼",
        "category": "gst",
        "keys": "gst late fee calculator gst late fee & penalty calculator business finance calculator"
    },
    {
        "name": "GST Profit Calculator",
        "url": "/gst-profit-calculator/",
        "icon": "💼",
        "category": "gst",
        "keys": "gst profit calculator gst profit calculator business finance calculator"
    },
    {
        "name": "GST RCM Calculator",
        "url": "/rcm-calculator/",
        "icon": "💼",
        "category": "gst",
        "keys": "rcm calculator gst rcm calculator business finance calculator"
    },
    {
        "name": "Health Insurance Top-Up vs. Base Plan Evaluator Calculator",
        "url": "/health-insurance-evaluator/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "health insurance evaluator health insurance top-up vs. base plan evaluator calculator planning finance calculator"
    },
    {
        "name": "Home Construction Cost Calculator",
        "url": "/home-construction-cost/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "home construction cost home construction cost calculator realestate finance calculator"
    },
    {
        "name": "Home Loan Balance Transfer (HLBT) Savings Tool Calculator",
        "url": "/home-loan-balance-transfer/",
        "icon": "💳",
        "category": "loans",
        "keys": "home loan balance transfer home loan balance transfer (hlbt) savings tool calculator loans finance calculator"
    },
    {
        "name": "Home Loan EMI Calculator",
        "url": "/home-loan/",
        "icon": "💳",
        "category": "loans",
        "keys": "home loan home loan emi calculator loans finance calculator"
    },
    {
        "name": "HRA Exemption Calculator",
        "url": "/hra/",
        "icon": "💵",
        "category": "salary",
        "keys": "hra hra exemption calculator salary finance calculator"
    },
    {
        "name": "HUF Tax Savings Calculator",
        "url": "/huf-tax-savings-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "huf tax savings calculator huf tax savings calculator tax finance calculator"
    },
    {
        "name": "Human Life Value Calculator",
        "url": "/hlv-calculator/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "hlv calculator human life value calculator planning finance calculator"
    },
    {
        "name": "In-Hand Salary Calculator",
        "url": "/in-hand-salary/",
        "icon": "💵",
        "category": "salary",
        "keys": "in hand salary in-hand salary calculator salary finance calculator"
    },
    {
        "name": "Income from House Property Calculator",
        "url": "/income-from-house-property-calculator/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "income from house property calculator income from house property calculator realestate finance calculator"
    },
    {
        "name": "Income Tax Calculator",
        "url": "/income-tax/",
        "icon": "📑",
        "category": "tax",
        "keys": "income tax income tax calculator tax finance calculator"
    },
    {
        "name": "Indian Land Area Unit Converter",
        "url": "/indian-land-unit-converter/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "indian land unit converter indian land area unit converter realestate finance calculator"
    },
    {
        "name": "Inflation Adjusted Salary Calculator",
        "url": "/inflation-adjusted-salary-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "inflation adjusted salary calculator inflation adjusted salary calculator salary finance calculator"
    },
    {
        "name": "Inflation Adjusted SIP Calculator",
        "url": "/inflation-adjusted-sip-calculator/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "inflation adjusted sip calculator inflation adjusted sip calculator stocks finance calculator"
    },
    {
        "name": "Inflation Calculator",
        "url": "/inflation/",
        "icon": "👤",
        "category": "wealth-planning",
        "keys": "inflation inflation calculator personal finance calculator"
    },
    {
        "name": "Influencer Business Expense & Tax Tracker",
        "url": "/influencer-tax-tracker/",
        "icon": "📑",
        "category": "tax",
        "keys": "influencer tax tracker influencer business expense & tax tracker tax finance calculator"
    },
    {
        "name": "Information Ratio Calculator",
        "url": "/information-ratio/",
        "icon": "📈",
        "category": "stocks",
        "keys": "information ratio information ratio calculator stocks finance calculator"
    },
    {
        "name": "Interest Coverage Ratio Calculator",
        "url": "/interest-coverage/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "interest coverage interest coverage ratio calculator business finance calculator"
    },
    {
        "name": "Internal Rate of Return (IRR) Calculator",
        "url": "/irr-calculator/",
        "icon": "📈",
        "category": "corporate-finance",
        "keys": "irr calculator internal rate of return (irr) calculator stocks finance calculator"
    },
    {
        "name": "Intraday Profit Calculator",
        "url": "/intraday-profit-calculator/",
        "icon": "📊",
        "category": "trading",
        "keys": "intraday profit calculator intraday profit calculator trading finance calculator"
    },
    {
        "name": "Inventory Turnover Ratio Calculator",
        "url": "/inventory-turnover/",
        "icon": "💼",
        "category": "business",
        "keys": "inventory turnover inventory turnover ratio calculator business finance calculator"
    },
    {
        "name": "Iron Condor 4-Leg Strategy PnL Visualizer",
        "url": "/iron-condor-strategy-pnl/",
        "icon": "📊",
        "category": "trading",
        "keys": "iron condor strategy pnl iron condor 4-leg strategy pnl visualizer trading finance calculator"
    },
    {
        "name": "Joining Bonus Clawback Tax Refund Sec 89(1) Calculator",
        "url": "/joining-bonus-clawback-tax-refund/",
        "icon": "📑",
        "category": "tax",
        "keys": "joining bonus clawback tax refund joining bonus clawback tax refund sec 89(1) calculator tax finance calculator"
    },
    {
        "name": "Kisan Vikas Patra KVP Calculator",
        "url": "/kvp-calculator/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "kvp calculator kisan vikas patra kvp calculator govtschemes finance calculator"
    },
    {
        "name": "Lease Escalation Calculator",
        "url": "/lease-escalation-calculator/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "lease escalation calculator lease escalation calculator realestate finance calculator"
    },
    {
        "name": "Leave Encashment Calculator",
        "url": "/leave-encashment-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "leave encashment calculator leave encashment calculator salary finance calculator"
    },
    {
        "name": "Leave Encashment Exemption Calculator",
        "url": "/leave-encashment-taxability-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "leave encashment taxability calculator leave encashment exemption calculator tax finance calculator"
    },
    {
        "name": "Loan Affordability Calculator",
        "url": "/loan-affordability/",
        "icon": "🏛️",
        "category": "loans",
        "keys": "loan affordability loan affordability calculator govtschemes finance calculator"
    },
    {
        "name": "Loan Against Mutual Funds Calculator",
        "url": "/loan-against-mutual-funds/",
        "icon": "💳",
        "category": "loans",
        "keys": "loan against mutual funds loan against mutual funds calculator loans finance calculator"
    },
    {
        "name": "Loan Balance Calculator",
        "url": "/loan-balance-calculator/",
        "icon": "💳",
        "category": "loans",
        "keys": "loan balance calculator loan balance calculator loans finance calculator"
    },
    {
        "name": "Loan Eligibility Calculator",
        "url": "/loan-eligibility/",
        "icon": "💳",
        "category": "loans",
        "keys": "loan eligibility loan eligibility calculator loans finance calculator"
    },
    {
        "name": "Loan Prepayment Calculator",
        "url": "/loan-prepayment/",
        "icon": "💳",
        "category": "loans",
        "keys": "loan prepayment loan prepayment calculator loans finance calculator"
    },
    {
        "name": "Loan vs Investment Calculator",
        "url": "/loan-vs-investment-calculator/",
        "icon": "💳",
        "category": "loans",
        "keys": "loan vs investment calculator loan vs investment calculator loans finance calculator"
    },
    {
        "name": "Long Butterfly Option Strategy Risk-Reward Calculator",
        "url": "/butterfly-spread-option-risk/",
        "icon": "📊",
        "category": "trading",
        "keys": "butterfly spread option risk long butterfly option strategy risk-reward calculator trading finance calculator"
    },
    {
        "name": "Long Straddle & Strangle Volatility Calculator",
        "url": "/straddle-strangle-volatility-breakeven/",
        "icon": "📊",
        "category": "trading",
        "keys": "straddle strangle volatility breakeven long straddle & strangle volatility calculator trading finance calculator"
    },
    {
        "name": "LRS & TCS Refund Calculator",
        "url": "/lrs-tcs-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "lrs tcs calculator lrs & tcs refund calculator tax finance calculator"
    },
    {
        "name": "Lumpsum Calculator",
        "url": "/lumpsum/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "lumpsum lumpsum calculator stocks finance calculator"
    },
    {
        "name": "Mahila Samman Savings Certificate Calculator",
        "url": "/mahila-samman-savings-calculator/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "mahila samman savings calculator mahila samman savings certificate calculator govtschemes finance calculator"
    },
    {
        "name": "Markup Calculator",
        "url": "/markup-calculator/",
        "icon": "💼",
        "category": "business",
        "keys": "markup calculator markup calculator business finance calculator"
    },
    {
        "name": "Moratorium Interest Calculator",
        "url": "/moratorium-interest-calculator/",
        "icon": "💳",
        "category": "loans",
        "keys": "moratorium interest calculator moratorium interest calculator loans finance calculator"
    },
    {
        "name": "Mortgage Balance Calculator",
        "url": "/mortgage-balance/",
        "icon": "💳",
        "category": "loans",
        "keys": "mortgage balance mortgage balance calculator loans finance calculator"
    },
    {
        "name": "Mudra Loan EMI Calculator",
        "url": "/mudra-loan-emi/",
        "icon": "💳",
        "category": "loans",
        "keys": "mudra loan emi mudra loan emi calculator loans finance calculator"
    },
    {
        "name": "Multiple Goal Planner",
        "url": "/multiple-goals/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "multiple goals multiple goal planner planning finance calculator"
    },
    {
        "name": "Mutual Fund Expense Ratio Impact",
        "url": "/mutual-fund-expense-ratio-impact/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "mutual fund expense ratio impact mutual fund expense ratio impact stocks finance calculator"
    },
    {
        "name": "Mutual Fund Portfolio Overlap Diversification Tool Calculator",
        "url": "/portfolio-overlap/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "portfolio overlap mutual fund portfolio overlap diversification tool calculator stocks finance calculator"
    },
    {
        "name": "Mutual Fund Return Calculator",
        "url": "/mutual-fund-returns/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "mutual fund returns mutual fund return calculator stocks finance calculator"
    },
    {
        "name": "National Savings Certificate NSC Calculator",
        "url": "/nsc-calculator/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "nsc calculator national savings certificate nsc calculator govtschemes finance calculator"
    },
    {
        "name": "Net Present Value (NPV) Calculator",
        "url": "/npv-calculator/",
        "icon": "📈",
        "category": "corporate-finance",
        "keys": "npv calculator net present value (npv) calculator stocks finance calculator"
    },
    {
        "name": "Net Worth Calculator",
        "url": "/net-worth/",
        "icon": "👤",
        "category": "wealth-planning",
        "keys": "net worth net worth calculator personal finance calculator"
    },
    {
        "name": "No Cost EMI Calculator",
        "url": "/no-cost-emi/",
        "icon": "💳",
        "category": "credit-cards",
        "keys": "no cost emi no cost emi calculator loans finance calculator"
    },
    {
        "name": "Notice Period Pay Buyout Tax & Cost Calculator",
        "url": "/notice-period-buyout-tax-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "notice period buyout tax calculator notice period pay buyout tax & cost calculator tax finance calculator"
    },
    {
        "name": "Notice Period Pay Recovery Calculator",
        "url": "/notice-period-pay-recovery/",
        "icon": "💵",
        "category": "salary",
        "keys": "notice period pay recovery notice period pay recovery calculator salary finance calculator"
    },
    {
        "name": "NPS Calculator",
        "url": "/nps/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "nps nps calculator govtschemes finance calculator"
    },
    {
        "name": "NPS Tier 1 vs Tier 2 Calculator",
        "url": "/nps-tier-1-vs-tier-2/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "nps tier 1 vs tier 2 nps tier 1 vs tier 2 calculator govtschemes finance calculator"
    },
    {
        "name": "NPS Tier I vs Tier II Optimizer",
        "url": "/nps-optimizer-2026/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "nps optimizer 2026 nps tier i vs tier ii optimizer govtschemes finance calculator"
    },
    {
        "name": "NPS vs EPF vs PPF Calculator",
        "url": "/nps-vs-epf-vs-ppf/",
        "icon": "💵",
        "category": "govtschemes",
        "keys": "nps vs epf vs ppf nps vs epf vs ppf calculator salary finance calculator"
    },
    {
        "name": "NRE vs NRO Account Tax Calculator",
        "url": "/nre-vs-nro-taxation-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "nre vs nro taxation calculator nre vs nro account tax calculator tax finance calculator"
    },
    {
        "name": "NRI Repatriation Calculator (NRO)",
        "url": "/nri-repatriation-limit-calculator/",
        "icon": "👤",
        "category": "wealth-planning",
        "keys": "nri repatriation limit calculator nri repatriation calculator (nro) personal finance calculator"
    },
    {
        "name": "Operating Leverage Calculator",
        "url": "/operating-leverage/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "operating leverage operating leverage calculator business finance calculator"
    },
    {
        "name": "Opportunity Cost Calculator",
        "url": "/opportunity-cost-calculator/",
        "icon": "📈",
        "category": "wealth-planning",
        "keys": "opportunity cost calculator opportunity cost calculator stocks finance calculator"
    },
    {
        "name": "Option IV Rank (IVR) & Percentile Calculator",
        "url": "/option-iv-rank-percentile/",
        "icon": "📊",
        "category": "trading",
        "keys": "option iv rank percentile option iv rank (ivr) & percentile calculator trading finance calculator"
    },
    {
        "name": "Option Payoff Calculator",
        "url": "/option-payoff-calculator/",
        "icon": "📊",
        "category": "trading",
        "keys": "option payoff calculator option payoff calculator trading finance calculator"
    },
    {
        "name": "Option Selling Margin & ROI Calculator",
        "url": "/option-selling-roi-calculator/",
        "icon": "📊",
        "category": "trading",
        "keys": "option selling roi calculator option selling margin & roi calculator trading finance calculator"
    },
    {
        "name": "Option Wheel Strategy (CSP + Covered Call) ROI Calculator",
        "url": "/nifty-wheel-strategy-roi/",
        "icon": "📊",
        "category": "trading",
        "keys": "nifty wheel strategy roi option wheel strategy (csp + covered call) roi calculator trading finance calculator"
    },
    {
        "name": "Options Profit Calculator",
        "url": "/options-profit/",
        "icon": "📊",
        "category": "trading",
        "keys": "options profit options profit calculator trading finance calculator"
    },
    {
        "name": "P2P Lending Net Return Calculator",
        "url": "/peer-to-peer-p2p-lending-returns/",
        "icon": "📈",
        "category": "stocks",
        "keys": "peer to peer p2p lending returns p2p lending net return calculator stocks finance calculator"
    },
    {
        "name": "Passive Income Calculator",
        "url": "/passive-income/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "passive income passive income calculator planning finance calculator"
    },
    {
        "name": "Payback Period Calculator",
        "url": "/payback-period-calculator/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "payback period calculator payback period calculator business finance calculator"
    },
    {
        "name": "PEG Ratio Calculator",
        "url": "/peg-ratio-calculator/",
        "icon": "📈",
        "category": "stocks",
        "keys": "peg ratio calculator peg ratio calculator stocks finance calculator"
    },
    {
        "name": "Percentage Calculator",
        "url": "/percentage/",
        "icon": "👤",
        "category": "wealth-planning",
        "keys": "percentage percentage calculator personal finance calculator"
    },
    {
        "name": "Personal Loan EMI Calculator",
        "url": "/personal-loan-emi/",
        "icon": "💳",
        "category": "loans",
        "keys": "personal loan emi personal loan emi calculator loans finance calculator"
    },
    {
        "name": "PF Withdrawal Taxability & TDS Calculator",
        "url": "/pf-withdrawal-taxability-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "pf withdrawal taxability calculator pf withdrawal taxability & tds calculator tax finance calculator"
    },
    {
        "name": "Piotroski F-Score Calculator",
        "url": "/piotroski-score-calculator/",
        "icon": "📈",
        "category": "stocks",
        "keys": "piotroski score calculator piotroski f-score calculator stocks finance calculator"
    },
    {
        "name": "Portfolio Beta Volatility Calculator",
        "url": "/portfolio-beta/",
        "icon": "📈",
        "category": "stocks",
        "keys": "portfolio beta portfolio beta volatility calculator stocks finance calculator"
    },
    {
        "name": "Portfolio Rebalancing Calculator",
        "url": "/portfolio-rebalancing/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "portfolio rebalancing portfolio rebalancing calculator stocks finance calculator"
    },
    {
        "name": "Portfolio Return Calculator",
        "url": "/portfolio-return-calculator/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "portfolio return calculator portfolio return calculator stocks finance calculator"
    },
    {
        "name": "Position Size Calculator",
        "url": "/position-size-calculator/",
        "icon": "📊",
        "category": "trading",
        "keys": "position size calculator position size calculator trading finance calculator"
    },
    {
        "name": "Post Office Monthly Income POMIS Calculator",
        "url": "/pomis-calculator/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "pomis calculator post office monthly income pomis calculator govtschemes finance calculator"
    },
    {
        "name": "Post-Tax Fixed Deposit FD Return Calculator",
        "url": "/post-tax-fd-returns/",
        "icon": "📑",
        "category": "deposits",
        "keys": "post tax fd returns post-tax fixed deposit fd return calculator tax finance calculator"
    },
    {
        "name": "PPF Calculator",
        "url": "/ppf/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "ppf ppf calculator govtschemes finance calculator"
    },
    {
        "name": "Pradhan Mantri Vaya Vandana Yojana PMVVY Calculator",
        "url": "/pmvvy-calculator/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "pmvvy calculator pradhan mantri vaya vandana yojana pmvvy calculator govtschemes finance calculator"
    },
    {
        "name": "Pre-EMI Interest Calculator",
        "url": "/pre-emi-interest-calculator/",
        "icon": "💳",
        "category": "loans",
        "keys": "pre emi interest calculator pre-emi interest calculator loans finance calculator"
    },
    {
        "name": "Present Value (PV) Calculator",
        "url": "/present-value/",
        "icon": "📈",
        "category": "wealth-planning",
        "keys": "present value present value (pv) calculator stocks finance calculator"
    },
    {
        "name": "Professional Tax Calculator (State-wise)",
        "url": "/professional-tax-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "professional tax calculator professional tax calculator (state-wise) tax finance calculator"
    },
    {
        "name": "Profit Margin Calculator",
        "url": "/margin-calculator/",
        "icon": "💼",
        "category": "business",
        "keys": "margin calculator profit margin calculator business finance calculator"
    },
    {
        "name": "Profit Margin Calculator",
        "url": "/profit-margin/",
        "icon": "💼",
        "category": "business",
        "keys": "profit margin profit margin calculator business finance calculator"
    },
    {
        "name": "Property Appreciation Calculator",
        "url": "/property-appreciation/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "property appreciation property appreciation calculator realestate finance calculator"
    },
    {
        "name": "Property Area & Plot Size Converter",
        "url": "/property-area-converter/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "property area converter property area & plot size converter realestate finance calculator"
    },
    {
        "name": "Property Depreciation SLM vs WDV Calculator",
        "url": "/property-depreciation-slm-vs-wdv/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "property depreciation slm vs wdv property depreciation slm vs wdv calculator realestate finance calculator"
    },
    {
        "name": "Property ROI Calculator",
        "url": "/property-roi/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "property roi property roi calculator realestate finance calculator"
    },
    {
        "name": "Protective Put Portfolio Hedging Cost Calculator",
        "url": "/protective-put-hedge-cost/",
        "icon": "📊",
        "category": "trading",
        "keys": "protective put hedge cost protective put portfolio hedging cost calculator trading finance calculator"
    },
    {
        "name": "Quick Ratio Calculator",
        "url": "/quick-ratio/",
        "icon": "💼",
        "category": "business",
        "keys": "quick ratio quick ratio calculator business finance calculator"
    },
    {
        "name": "Real Estate vs Equity Calculator",
        "url": "/real-estate-vs-equity/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "real estate vs equity real estate vs equity calculator realestate finance calculator"
    },
    {
        "name": "Real Return Calculator",
        "url": "/real-return/",
        "icon": "📈",
        "category": "stocks",
        "keys": "real return real return calculator stocks finance calculator"
    },
    {
        "name": "Recurring Deposit (RD)",
        "url": "/rd/",
        "icon": "🏛️",
        "category": "deposits",
        "keys": "rd recurring deposit (rd) govtschemes finance calculator"
    },
    {
        "name": "REIT & InvIT Dividend Distribution Yield & Tax Calculator",
        "url": "/reit-invit-dividend-tax-yield/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "reit invit dividend tax yield reit & invit dividend distribution yield & tax calculator tax finance calculator"
    },
    {
        "name": "REIT & InvIT Tax Calculator",
        "url": "/reit-dividend-tax-calculator/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "reit dividend tax calculator reit & invit tax calculator tax finance calculator"
    },
    {
        "name": "Remote vs. Office Work Savings Calculator",
        "url": "/remote-vs-office-calculator/",
        "icon": "👤",
        "category": "wealth-planning",
        "keys": "remote vs office calculator remote vs. office work savings calculator personal finance calculator"
    },
    {
        "name": "Rent vs Buy Calculator",
        "url": "/rent-vs-buy-calculator/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "rent vs buy calculator rent vs buy calculator realestate finance calculator"
    },
    {
        "name": "Rental Yield Calculator",
        "url": "/rental-yield/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "rental yield rental yield calculator realestate finance calculator"
    },
    {
        "name": "Required CAGR Calculator",
        "url": "/required-cagr-calculator/",
        "icon": "📈",
        "category": "stocks",
        "keys": "required cagr calculator required cagr calculator stocks finance calculator"
    },
    {
        "name": "Retirement Calculator",
        "url": "/retirement/",
        "icon": "👴",
        "category": "retirement",
        "keys": "retirement retirement calculator planning finance calculator"
    },
    {
        "name": "Retirement Withdrawal Calculator",
        "url": "/retirement-withdrawal/",
        "icon": "👴",
        "category": "retirement",
        "keys": "retirement withdrawal retirement withdrawal calculator planning finance calculator"
    },
    {
        "name": "Return on Capital Employed ROCE Calculator",
        "url": "/roce-calculator/",
        "icon": "💼",
        "category": "stocks",
        "keys": "roce calculator return on capital employed roce calculator business finance calculator"
    },
    {
        "name": "Return on Equity ROE Calculator",
        "url": "/roe-calculator/",
        "icon": "📈",
        "category": "stocks",
        "keys": "roe calculator return on equity roe calculator stocks finance calculator"
    },
    {
        "name": "Risk Reward Calculator",
        "url": "/risk-reward-calculator/",
        "icon": "📊",
        "category": "trading",
        "keys": "risk reward calculator risk reward calculator trading finance calculator"
    },
    {
        "name": "ROI Calculator",
        "url": "/roi-calculator/",
        "icon": "📈",
        "category": "stocks",
        "keys": "roi calculator roi calculator stocks finance calculator"
    },
    {
        "name": "Rolling Returns Calculator",
        "url": "/rolling-returns/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "rolling returns rolling returns calculator stocks finance calculator"
    },
    {
        "name": "Rule of 72 Calculator & Guide",
        "url": "/rule-of-72/",
        "icon": "📈",
        "category": "wealth-planning",
        "keys": "rule of 72 rule of 72 calculator & guide stocks finance calculator"
    },
    {
        "name": "SaaS & Subscription Leak Audit Tool",
        "url": "/subscription-leak-audit/",
        "icon": "💼",
        "category": "business",
        "keys": "subscription leak audit saas & subscription leak audit tool business finance calculator"
    },
    {
        "name": "SaaS Unit Economics Calculator",
        "url": "/saas-metrics-calculator/",
        "icon": "💼",
        "category": "business",
        "keys": "saas metrics calculator saas unit economics calculator business finance calculator"
    },
    {
        "name": "Salary Breakup Calculator",
        "url": "/salary-breakup/",
        "icon": "💵",
        "category": "salary",
        "keys": "salary breakup salary breakup calculator salary finance calculator"
    },
    {
        "name": "Salary Hike Calculator",
        "url": "/salary-hike/",
        "icon": "💵",
        "category": "salary",
        "keys": "salary hike salary hike calculator salary finance calculator"
    },
    {
        "name": "Savings Bank Interest",
        "url": "/savings-bank-interest/",
        "icon": "🏛️",
        "category": "deposits",
        "keys": "savings bank interest savings bank interest govtschemes finance calculator"
    },
    {
        "name": "Savings Goal Calculator",
        "url": "/savings-goal/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "savings goal savings goal calculator planning finance calculator"
    },
    {
        "name": "Savings Rate Calculator",
        "url": "/savings-rate/",
        "icon": "👤",
        "category": "wealth-planning",
        "keys": "savings rate savings rate calculator personal finance calculator"
    },
    {
        "name": "Section 10(37) Compulsory Land Acquisition Exemption",
        "url": "/sec-10-37-land-acquisition/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "sec 10 37 land acquisition section 10(37) compulsory land acquisition exemption tax finance calculator"
    },
    {
        "name": "Section 40(b) LLP Partner Remuneration Calculator",
        "url": "/llp-partner-remuneration-40b/",
        "icon": "💼",
        "category": "business",
        "keys": "llp partner remuneration 40b section 40(b) llp partner remuneration calculator business finance calculator"
    },
    {
        "name": "Section 44AD Presumptive Tax Calculator",
        "url": "/44ad-presumptive-tax-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "44ad presumptive tax calculator section 44ad presumptive tax calculator tax finance calculator"
    },
    {
        "name": "Section 44ADA Presumptive Tax Calculator",
        "url": "/44ada-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "44ada calculator section 44ada presumptive tax calculator tax finance calculator"
    },
    {
        "name": "Section 44AE Calculator",
        "url": "/44ae-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "44ae calculator section 44ae calculator tax finance calculator"
    },
    {
        "name": "Section 54 & 54F Tax Exemption Calculator",
        "url": "/section-54-54f-calculator/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "section 54 54f calculator section 54 & 54f tax exemption calculator tax finance calculator"
    },
    {
        "name": "Section 54B Agricultural Land Capital Gain Calculator",
        "url": "/sec-54b-agricultural-land/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "sec 54b agricultural land section 54b agricultural land capital gain calculator tax finance calculator"
    },
    {
        "name": "Section 54EC Capital Gain Bonds Tax Calculator",
        "url": "/sec-54ec-capital-gain-bonds-tax/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "sec 54ec capital gain bonds tax section 54ec capital gain bonds tax calculator tax finance calculator"
    },
    {
        "name": "Section 54EC Capital Gains Bond Calculator",
        "url": "/section-54ec-bond-calculator/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "section 54ec bond calculator section 54ec capital gains bond calculator tax finance calculator"
    },
    {
        "name": "Section 54F Capital Gain Exemption Calculator",
        "url": "/sec-54f-capital-gain-exemption/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "sec 54f capital gain exemption section 54f capital gain exemption calculator tax finance calculator"
    },
    {
        "name": "Section 80C Tax Saving Calculator",
        "url": "/80c-tax-saving/",
        "icon": "📑",
        "category": "tax",
        "keys": "80c tax saving section 80c tax saving calculator tax finance calculator"
    },
    {
        "name": "Section 80D Tax Saving Calculator",
        "url": "/80d-tax-saving-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "80d tax saving calculator section 80d tax saving calculator tax finance calculator"
    },
    {
        "name": "Section 80DD Disability Dependent Tax Calculator",
        "url": "/sec-80dd-dependent-tax/",
        "icon": "📑",
        "category": "tax",
        "keys": "sec 80dd dependent tax section 80dd disability dependent tax calculator tax finance calculator"
    },
    {
        "name": "Section 80DDB Critical Illness Medical Deduction Calculator",
        "url": "/sec-80ddb-critical-illness/",
        "icon": "📑",
        "category": "tax",
        "keys": "sec 80ddb critical illness section 80ddb critical illness medical deduction calculator tax finance calculator"
    },
    {
        "name": "Section 80E Education Loan Tax Calculator",
        "url": "/sec-80e-education-loan/",
        "icon": "📑",
        "category": "tax",
        "keys": "sec 80e education loan section 80e education loan tax calculator tax finance calculator"
    },
    {
        "name": "Section 80EEA Home Loan Tax Calculator",
        "url": "/sec-80eea-home-loan/",
        "icon": "📑",
        "category": "tax",
        "keys": "sec 80eea home loan section 80eea home loan tax calculator tax finance calculator"
    },
    {
        "name": "Section 80EEB EV Loan Interest Tax Calculator",
        "url": "/sec-80eeb-ev-loan-tax-deduction/",
        "icon": "⚡",
        "category": "ev",
        "keys": "sec 80eeb ev loan tax deduction section 80eeb ev loan interest tax calculator ev finance calculator"
    },
    {
        "name": "Section 80EEB EV Loan Tax Calculator",
        "url": "/sec-80eeb-electric-vehicle/",
        "icon": "📑",
        "category": "tax",
        "keys": "sec 80eeb electric vehicle section 80eeb ev loan tax calculator tax finance calculator"
    },
    {
        "name": "Section 80G Donation Tax Deduction Calculator",
        "url": "/80g-donation-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "80g donation calculator section 80g donation tax deduction calculator tax finance calculator"
    },
    {
        "name": "Section 80GGA Scientific Research Donation Calculator",
        "url": "/sec-80gga-scientific-donation/",
        "icon": "📑",
        "category": "tax",
        "keys": "sec 80gga scientific donation section 80gga scientific research donation calculator tax finance calculator"
    },
    {
        "name": "Section 80TTB Senior Citizen Tax Calculator",
        "url": "/sec-80ttb-senior-citizen-tax/",
        "icon": "📑",
        "category": "tax",
        "keys": "sec 80ttb senior citizen tax section 80ttb senior citizen tax calculator tax finance calculator"
    },
    {
        "name": "Section 80U Disability Tax Calculator",
        "url": "/sec-80u-disability-tax/",
        "icon": "📑",
        "category": "tax",
        "keys": "sec 80u disability tax section 80u disability tax calculator tax finance calculator"
    },
    {
        "name": "Section 87A Rebate Eligibility Calculator",
        "url": "/section-87a-rebate/",
        "icon": "📑",
        "category": "tax",
        "keys": "section 87a rebate section 87a rebate eligibility calculator tax finance calculator"
    },
    {
        "name": "Section 89 Salary Arrears Tax Relief Calculator",
        "url": "/salary-arrears-tax-relief-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "salary arrears tax relief calculator section 89 salary arrears tax relief calculator tax finance calculator"
    },
    {
        "name": "Senior Citizen Savings Scheme SCSS Calculator",
        "url": "/scss-calculator/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "scss calculator senior citizen savings scheme scss calculator govtschemes finance calculator"
    },
    {
        "name": "Sequence of Returns Risk (SRR) Simulator",
        "url": "/srr-simulator/",
        "icon": "👴",
        "category": "retirement",
        "keys": "srr simulator sequence of returns risk (srr) simulator planning finance calculator"
    },
    {
        "name": "Set Off and Carry Forward of Losses Calculator",
        "url": "/set-off-carry-forward-losses-calculator/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "set off carry forward losses calculator set off and carry forward of losses calculator tax finance calculator"
    },
    {
        "name": "SGB Secondary Market Yield Calculator",
        "url": "/sovereign-gold-bond-secondary-market-yield/",
        "icon": "👤",
        "category": "govtschemes",
        "keys": "sovereign gold bond secondary market yield sgb secondary market yield calculator personal finance calculator"
    },
    {
        "name": "SGB vs Physical Gold vs Digital Gold Calculator",
        "url": "/gold-vs-sgb-vs-digital-gold/",
        "icon": "📈",
        "category": "govtschemes",
        "keys": "gold vs sgb vs digital gold sgb vs physical gold vs digital gold calculator stocks finance calculator"
    },
    {
        "name": "Share Buyback vs Dividend Tax Calculator",
        "url": "/buyback-vs-dividend-tax/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "buyback vs dividend tax share buyback vs dividend tax calculator tax finance calculator"
    },
    {
        "name": "Sharpe Ratio Calculator",
        "url": "/sharpe-ratio/",
        "icon": "📈",
        "category": "stocks",
        "keys": "sharpe ratio sharpe ratio calculator stocks finance calculator"
    },
    {
        "name": "Side Income Calculator",
        "url": "/side-income/",
        "icon": "👤",
        "category": "wealth-planning",
        "keys": "side income side income calculator personal finance calculator"
    },
    {
        "name": "Simple Interest Calculator",
        "url": "/simple-interest/",
        "icon": "📈",
        "category": "wealth-planning",
        "keys": "simple interest simple interest calculator stocks finance calculator"
    },
    {
        "name": "SIP Calculator",
        "url": "/sip/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "sip sip calculator stocks finance calculator"
    },
    {
        "name": "SIP Cost of Delay Calculator",
        "url": "/sip-cost-of-delay/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "sip cost of delay sip cost of delay calculator stocks finance calculator"
    },
    {
        "name": "SIP vs FD Calculator",
        "url": "/sip-vs-fd/",
        "icon": "🏛️",
        "category": "mutual-funds",
        "keys": "sip vs fd sip vs fd calculator govtschemes finance calculator"
    },
    {
        "name": "Solar + EV Home Ecosystem ROI Calculator",
        "url": "/solar-ev-ecosystem/",
        "icon": "⚡",
        "category": "ev",
        "keys": "solar ev ecosystem solar + ev home ecosystem roi calculator ev finance calculator"
    },
    {
        "name": "Solar Rooftop ROI & Subsidy Calculator",
        "url": "/solar-rooftop-calculator/",
        "icon": "⚡",
        "category": "ev",
        "keys": "solar rooftop calculator solar rooftop roi & subsidy calculator ev finance calculator"
    },
    {
        "name": "Sortino Ratio Calculator",
        "url": "/sortino-ratio/",
        "icon": "📈",
        "category": "stocks",
        "keys": "sortino ratio sortino ratio calculator stocks finance calculator"
    },
    {
        "name": "Sovereign Gold Bond SGB Returns Calculator",
        "url": "/sgb-returns-calculator/",
        "icon": "📈",
        "category": "govtschemes",
        "keys": "sgb returns calculator sovereign gold bond sgb returns calculator stocks finance calculator"
    },
    {
        "name": "SSY Calculator",
        "url": "/ssy/",
        "icon": "🏛️",
        "category": "govtschemes",
        "keys": "ssy ssy calculator govtschemes finance calculator"
    },
    {
        "name": "Stamp Duty & Registration",
        "url": "/stamp-duty/",
        "icon": "🏠",
        "category": "realestate",
        "keys": "stamp duty stamp duty & registration realestate finance calculator"
    },
    {
        "name": "Startup Burn Rate & Runway Calculator",
        "url": "/startup-burn-rate-runway/",
        "icon": "💼",
        "category": "business",
        "keys": "startup burn rate runway startup burn rate & runway calculator business finance calculator"
    },
    {
        "name": "Step-Down EMI Calculator",
        "url": "/step-down-emi-calculator/",
        "icon": "💳",
        "category": "loans",
        "keys": "step down emi calculator step-down emi calculator loans finance calculator"
    },
    {
        "name": "Step-Up Loan EMI & Repayment Optimizer",
        "url": "/step-up-loan-calculator/",
        "icon": "💳",
        "category": "loans",
        "keys": "step up loan calculator step-up loan emi & repayment optimizer loans finance calculator"
    },
    {
        "name": "Step-Up SIP Calculator",
        "url": "/step-up-sip/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "step up sip step-up sip calculator stocks finance calculator"
    },
    {
        "name": "Stock Average Calculator",
        "url": "/stock-average/",
        "icon": "📊",
        "category": "trading",
        "keys": "stock average stock average calculator trading finance calculator"
    },
    {
        "name": "Stock Pivot Point Calculator",
        "url": "/pivot-point-calculator/",
        "icon": "📊",
        "category": "trading",
        "keys": "pivot point calculator stock pivot point calculator trading finance calculator"
    },
    {
        "name": "Stock Position Size Calculator",
        "url": "/stock-position-size-calculator/",
        "icon": "📊",
        "category": "trading",
        "keys": "stock position size calculator stock position size calculator trading finance calculator"
    },
    {
        "name": "Stop Loss Calculator",
        "url": "/stop-loss/",
        "icon": "📊",
        "category": "trading",
        "keys": "stop loss stop loss calculator trading finance calculator"
    },
    {
        "name": "Superannuation Fund Calculator",
        "url": "/superannuation-calculator/",
        "icon": "💵",
        "category": "salary",
        "keys": "superannuation calculator superannuation fund calculator salary finance calculator"
    },
    {
        "name": "Surcharge & Marginal Relief Calculator",
        "url": "/surcharge-marginal-relief-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "surcharge marginal relief calculator surcharge & marginal relief calculator tax finance calculator"
    },
    {
        "name": "SWP Calculator",
        "url": "/swp/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "swp swp calculator stocks finance calculator"
    },
    {
        "name": "Systematic Transfer Plan STP Calculator",
        "url": "/stp-calculator/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "stp calculator systematic transfer plan stp calculator stocks finance calculator"
    },
    {
        "name": "Take Home Salary Calculator",
        "url": "/take-home-salary/",
        "icon": "💵",
        "category": "salary",
        "keys": "take home salary take home salary calculator salary finance calculator"
    },
    {
        "name": "Target Amount SIP Calculator",
        "url": "/target-sip-calculator/",
        "icon": "📈",
        "category": "mutual-funds",
        "keys": "target sip calculator target amount sip calculator stocks finance calculator"
    },
    {
        "name": "Tax Loss Harvesting Calculator",
        "url": "/tax-loss-harvesting/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "tax loss harvesting tax loss harvesting calculator tax finance calculator"
    },
    {
        "name": "Tax Regime Breakeven",
        "url": "/new-old-tax-breakeven/",
        "icon": "📑",
        "category": "tax",
        "keys": "new old tax breakeven tax regime breakeven tax finance calculator"
    },
    {
        "name": "TCS Calculator",
        "url": "/tcs-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "tcs calculator tcs calculator tax finance calculator"
    },
    {
        "name": "TDS Calculator",
        "url": "/tds-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "tds calculator tds calculator tax finance calculator"
    },
    {
        "name": "TDS Late Payment Penalty Calculator",
        "url": "/tds-late-payment-penalty-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "tds late payment penalty calculator tds late payment penalty calculator tax finance calculator"
    },
    {
        "name": "TDS on FD Interest Calculator",
        "url": "/tds-on-fd-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "tds on fd calculator tds on fd interest calculator tax finance calculator"
    },
    {
        "name": "TDS on Property Sale (Section 194-IA) Calculator",
        "url": "/tds-on-property-sale-calculator/",
        "icon": "📑",
        "category": "capital-gains",
        "keys": "tds on property sale calculator tds on property sale (section 194-ia) calculator tax finance calculator"
    },
    {
        "name": "TDS on Rent (Sec 194-IB) Calculator",
        "url": "/tds-on-rent-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "tds on rent calculator tds on rent (sec 194-ib) calculator tax finance calculator"
    },
    {
        "name": "TDS on Salary Calculator (Section 192)",
        "url": "/tds-on-salary-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "tds on salary calculator tds on salary calculator (section 192) tax finance calculator"
    },
    {
        "name": "Term Insurance Calculator",
        "url": "/term-insurance-calculator/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "term insurance calculator term insurance calculator planning finance calculator"
    },
    {
        "name": "Time to Financial Freedom Calculator",
        "url": "/time-to-financial-freedom/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "time to financial freedom time to financial freedom calculator planning finance calculator"
    },
    {
        "name": "Time Value of Money Calculator",
        "url": "/time-value-of-money/",
        "icon": "📈",
        "category": "wealth-planning",
        "keys": "time value of money time value of money calculator stocks finance calculator"
    },
    {
        "name": "Treasury Bill T-Bill Yield Calculator",
        "url": "/tbill-yield-calculator/",
        "icon": "🏛️",
        "category": "deposits",
        "keys": "tbill yield calculator treasury bill t-bill yield calculator govtschemes finance calculator"
    },
    {
        "name": "Treynor Ratio Calculator",
        "url": "/treynor-ratio/",
        "icon": "📈",
        "category": "stocks",
        "keys": "treynor ratio treynor ratio calculator stocks finance calculator"
    },
    {
        "name": "Trust & NGO Tax Calculator (Sec 11)",
        "url": "/trust-tax-calculator/",
        "icon": "📑",
        "category": "tax",
        "keys": "trust tax calculator trust & ngo tax calculator (sec 11) tax finance calculator"
    },
    {
        "name": "Two-Wheeler Loan EMI Calculator",
        "url": "/two-wheeler-loan-emi/",
        "icon": "💳",
        "category": "loans",
        "keys": "two wheeler loan emi two-wheeler loan emi calculator loans finance calculator"
    },
    {
        "name": "Vacation Goal Calculator",
        "url": "/vacation-goal/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "vacation goal vacation goal calculator planning finance calculator"
    },
    {
        "name": "WACC Calculator",
        "url": "/wacc/",
        "icon": "💼",
        "category": "corporate-finance",
        "keys": "wacc wacc calculator business finance calculator"
    },
    {
        "name": "Wealth Projection Calculator",
        "url": "/wealth-projection/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "wealth projection wealth projection calculator planning finance calculator"
    },
    {
        "name": "Wedding Cost & Marriage Planner",
        "url": "/marriage-planner/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "marriage planner wedding cost & marriage planner planning finance calculator"
    },
    {
        "name": "Wedding Expense & Inflation Planner ( Edition)",
        "url": "/wedding-inflation-planner/",
        "icon": "👴",
        "category": "wealth-planning",
        "keys": "wedding inflation planner wedding expense & inflation planner ( edition) planning finance calculator"
    },
    {
        "name": "Working Capital Calculator",
        "url": "/working-capital/",
        "icon": "💼",
        "category": "business",
        "keys": "working capital working capital calculator business finance calculator"
    },
    {
        "name": "XIRR Calculator",
        "url": "/xirr/",
        "icon": "📈",
        "category": "stocks",
        "keys": "xirr xirr calculator stocks finance calculator"
    },
    {
        "name": "XIRR vs CAGR vs Absolute Return Calculator",
        "url": "/xirr-vs-cagr-vs-absolute-return/",
        "icon": "📈",
        "category": "stocks",
        "keys": "xirr vs cagr vs absolute return xirr vs cagr vs absolute return calculator stocks finance calculator"
    }
];

        // Master 17 Hub Category Lookup Map for 311 calculators
        const canonicalCategoryMap = {
    "income-tax": "tax",
    "new-old-tax-breakeven": "tax",
    "section-87a-rebate": "tax",
    "surcharge-marginal-relief-calculator": "tax",
    "advance-tax": "tax",
    "advance-tax-penalty-calculator": "tax",
    "agriculture-income-tax-calculator": "tax",
    "80c-tax-saving": "tax",
    "80d-tax-saving-calculator": "tax",
    "80g-donation-calculator": "tax",
    "sec-80gga-scientific-donation": "tax",
    "sec-80e-education-loan": "tax",
    "sec-80eea-home-loan": "tax",
    "sec-80eeb-electric-vehicle": "tax",
    "sec-80dd-dependent-tax": "tax",
    "sec-80ddb-critical-illness": "tax",
    "sec-80u-disability-tax": "tax",
    "sec-80ttb-senior-citizen-tax": "tax",
    "tds-calculator": "tax",
    "tds-on-salary-calculator": "tax",
    "tds-on-rent-calculator": "tax",
    "tds-on-fd-calculator": "tax",
    "tds-late-payment-penalty-calculator": "tax",
    "tcs-calculator": "tax",
    "lrs-tcs-calculator": "tax",
    "salary-arrears-tax-relief-calculator": "tax",
    "joining-bonus-clawback-tax-refund": "tax",
    "notice-period-buyout-tax-calculator": "tax",
    "leave-encashment-taxability-calculator": "tax",
    "pf-withdrawal-taxability-calculator": "tax",
    "professional-tax-calculator": "tax",
    "huf-tax-savings-calculator": "tax",
    "trust-tax-calculator": "tax",
    "crypto-tax-calculator": "tax",
    "foreign-tax-optimizer": "tax",
    "foreign-tax-credit-form-67": "tax",
    "nre-vs-nro-taxation-calculator": "tax",
    "clubbing-of-income-calculator": "tax",
    "gift-tax-sec-56-2-x": "tax",
    "influencer-tax-tracker": "tax",
    "freelancer-vs-salaried": "tax",
    "44ad-presumptive-tax-calculator": "tax",
    "44ada-calculator": "tax",
    "44ae-calculator": "tax",
    "capital-gains-tax": "capital-gains",
    "capital-gains-indexation-calculator": "capital-gains",
    "capital-gains-exemption-calculator": "capital-gains",
    "section-54-54f-calculator": "capital-gains",
    "sec-54f-capital-gain-exemption": "capital-gains",
    "section-54ec-bond-calculator": "capital-gains",
    "sec-54ec-capital-gain-bonds-tax": "capital-gains",
    "sec-54b-agricultural-land": "capital-gains",
    "sec-10-37-land-acquisition": "capital-gains",
    "tds-on-property-sale-calculator": "capital-gains",
    "tax-loss-harvesting": "capital-gains",
    "set-off-carry-forward-losses-calculator": "capital-gains",
    "bonus-stripping-94-8": "capital-gains",
    "dividend-stripping-94-7": "capital-gains",
    "buyback-vs-dividend-tax": "capital-gains",
    "dividend-tax-calculator": "capital-gains",
    "reit-dividend-tax-calculator": "capital-gains",
    "reit-invit-dividend-tax-yield": "capital-gains",
    "in-hand-salary": "salary",
    "take-home-salary": "salary",
    "ctc-to-in-hand": "salary",
    "salary-breakup": "salary",
    "salary-hike": "salary",
    "inflation-adjusted-salary-calculator": "salary",
    "hra": "salary",
    "gratuity": "salary",
    "gratuity-exemption-calculator": "salary",
    "leave-encashment-calculator": "salary",
    "notice-period-pay-recovery": "salary",
    "bonus-calculator": "salary",
    "epf": "salary",
    "epf-vs-vpf-vs-ppf": "salary",
    "eps-calculator": "salary",
    "esi-calculator": "salary",
    "superannuation-calculator": "salary",
    "esop-calculator": "salary",
    "esop-simulator": "salary",
    "esop-dilution-calculator": "salary",
    "esop-perquisite-tax-calculator": "salary",
    "car-lease-vs-buy": "salary",
    "freelance-rate-calculator": "salary",
    "home-loan": "loans",
    "home-loan-balance-transfer": "loans",
    "home-affordability": "loans",
    "loan-affordability": "loans",
    "loan-eligibility": "loans",
    "loan-prepayment": "loans",
    "loan-balance-calculator": "loans",
    "mortgage-balance": "loans",
    "emi": "loans",
    "personal-loan-emi": "loans",
    "car-loan": "loans",
    "two-wheeler-loan-emi": "loans",
    "business-loan-emi": "loans",
    "mudra-loan-emi": "loans",
    "gold-loan-vs-personal-loan": "loans",
    "loan-against-mutual-funds": "loans",
    "loan-vs-investment-calculator": "loans",
    "balance-transfer-vs-personal-loan": "loans",
    "education-loan-moratorium": "loans",
    "education-loan-refinancing-calculator": "loans",
    "fixed-vs-floating-rate": "loans",
    "flat-vs-reducing-rate": "loans",
    "pre-emi-interest-calculator": "loans",
    "step-up-loan-calculator": "loans",
    "step-down-emi-calculator": "loans",
    "moratorium-interest-calculator": "loans",
    "debt-consolidation-calculator": "loans",
    "debt-to-income": "loans",
    "cibil-score-simulator": "loans",
    "credit-card-interest": "credit-cards",
    "credit-card-minimum-due": "credit-cards",
    "credit-card-balance-transfer-calculator": "credit-cards",
    "credit-card-rewards": "credit-cards",
    "credit-card-reward-points-rupee": "credit-cards",
    "debt-payoff": "credit-cards",
    "no-cost-emi": "credit-cards",
    "bnpl-late-fee-apr": "credit-cards",
    "ppf": "govtschemes",
    "ssy": "govtschemes",
    "scss-calculator": "govtschemes",
    "nsc-calculator": "govtschemes",
    "kvp-calculator": "govtschemes",
    "pomis-calculator": "govtschemes",
    "apy-calculator": "govtschemes",
    "pmvvy-calculator": "govtschemes",
    "mahila-samman-savings-calculator": "govtschemes",
    "sgb-returns-calculator": "govtschemes",
    "gold-vs-sgb-vs-digital-gold": "govtschemes",
    "sovereign-gold-bond-secondary-market-yield": "govtschemes",
    "nps": "govtschemes",
    "nps-optimizer-2026": "govtschemes",
    "nps-tier-1-vs-tier-2": "govtschemes",
    "nps-vs-epf-vs-ppf": "govtschemes",
    "fd": "deposits",
    "post-tax-fd-returns": "deposits",
    "corporate-fd-vs-bank-fd-calculator": "deposits",
    "rd": "deposits",
    "savings-bank-interest": "deposits",
    "tbill-yield-calculator": "deposits",
    "elss-vs-ppf-vs-fd": "deposits",
    "sip-vs-fd": "mutual-funds",
    "sip": "mutual-funds",
    "step-up-sip": "mutual-funds",
    "goal-sip-calculator": "mutual-funds",
    "target-sip-calculator": "mutual-funds",
    "inflation-adjusted-sip-calculator": "mutual-funds",
    "sip-cost-of-delay": "mutual-funds",
    "lumpsum": "mutual-funds",
    "swp": "mutual-funds",
    "stp-calculator": "mutual-funds",
    "mutual-fund-returns": "mutual-funds",
    "mutual-fund-expense-ratio-impact": "mutual-funds",
    "expense-ratio": "mutual-funds",
    "rolling-returns": "mutual-funds",
    "portfolio-overlap": "mutual-funds",
    "portfolio-rebalancing": "mutual-funds",
    "portfolio-return-calculator": "mutual-funds",
    "goal-portfolio": "mutual-funds",
    "asset-allocation": "mutual-funds",
    "cagr": "stocks",
    "required-cagr-calculator": "stocks",
    "xirr": "stocks",
    "xirr-vs-cagr-vs-absolute-return": "stocks",
    "roi-calculator": "stocks",
    "real-return": "stocks",
    "alpha": "stocks",
    "beta": "stocks",
    "portfolio-beta": "stocks",
    "sharpe-ratio": "stocks",
    "sortino-ratio": "stocks",
    "treynor-ratio": "stocks",
    "information-ratio": "stocks",
    "dividend-yield": "stocks",
    "dividend-growth": "stocks",
    "yield-on-cost": "stocks",
    "dividend-discount-model": "stocks",
    "piotroski-score-calculator": "stocks",
    "peg-ratio-calculator": "stocks",
    "roe-calculator": "stocks",
    "roce-calculator": "stocks",
    "peer-to-peer-p2p-lending-returns": "stocks",
    "option-payoff-calculator": "trading",
    "options-profit": "trading",
    "option-iv-rank-percentile": "trading",
    "option-selling-roi-calculator": "trading",
    "iron-condor-strategy-pnl": "trading",
    "butterfly-spread-option-risk": "trading",
    "straddle-strangle-volatility-breakeven": "trading",
    "covered-call-downside-cushion": "trading",
    "protective-put-hedge-cost": "trading",
    "nifty-wheel-strategy-roi": "trading",
    "cash-futures-arbitrage-yield": "trading",
    "futures-profit": "trading",
    "intraday-profit-calculator": "trading",
    "position-size-calculator": "trading",
    "stock-position-size-calculator": "trading",
    "risk-reward-calculator": "trading",
    "stop-loss": "trading",
    "stock-average": "trading",
    "pivot-point-calculator": "trading",
    "fibonacci-retracement-calculator": "trading",
    "brokerage-calculator": "trading",
    "fo-tax-audit-turnover-calculator": "trading",
    "gst": "gst",
    "gst-profit-calculator": "gst",
    "gst-late-fee-calculator": "gst",
    "gst-composition-scheme-calculator": "gst",
    "rcm-calculator": "gst",
    "eway-bill-validity-calculator": "gst",
    "freelance-gst-lut-export-tax": "gst",
    "break-even-calculator": "business",
    "contribution-margin": "business",
    "margin-calculator": "business",
    "markup-calculator": "business",
    "profit-margin": "business",
    "commission-calculator": "business",
    "working-capital": "business",
    "cash-conversion-cycle": "business",
    "current-ratio": "business",
    "quick-ratio": "business",
    "inventory-turnover": "business",
    "saas-metrics-calculator": "business",
    "startup-burn-rate-runway": "business",
    "subscription-leak-audit": "business",
    "llp-partner-remuneration-40b": "business",
    "npv-calculator": "corporate-finance",
    "irr-calculator": "corporate-finance",
    "payback-period-calculator": "corporate-finance",
    "wacc": "corporate-finance",
    "dcf": "corporate-finance",
    "cost-of-debt": "corporate-finance",
    "cost-of-equity": "corporate-finance",
    "enterprise-value": "corporate-finance",
    "ebitda": "corporate-finance",
    "altman-z-score": "corporate-finance",
    "dupont-analysis": "corporate-finance",
    "financial-leverage": "corporate-finance",
    "operating-leverage": "corporate-finance",
    "debt-to-equity": "corporate-finance",
    "interest-coverage": "corporate-finance",
    "dscr": "corporate-finance",
    "fire-calculator": "retirement",
    "retirement": "retirement",
    "early-retirement": "retirement",
    "financial-independence": "retirement",
    "retirement-withdrawal": "retirement",
    "srr-simulator": "retirement",
    "50-30-20-rule": "retirement",
    "budget-planner": "wealth-planning",
    "expense-tracker": "wealth-planning",
    "savings-rate": "wealth-planning",
    "savings-goal": "wealth-planning",
    "net-worth": "wealth-planning",
    "emergency-fund": "wealth-planning",
    "crorepati-calculator": "wealth-planning",
    "wealth-projection": "wealth-planning",
    "financial-goal-planner": "wealth-planning",
    "multiple-goals": "wealth-planning",
    "goal-priority": "wealth-planning",
    "goal-step-up": "wealth-planning",
    "car-purchase": "wealth-planning",
    "child-education-planner": "wealth-planning",
    "education-planning": "wealth-planning",
    "education-cost": "wealth-planning",
    "marriage-planner": "wealth-planning",
    "wedding-inflation-planner": "wealth-planning",
    "vacation-goal": "wealth-planning",
    "side-income": "wealth-planning",
    "passive-income": "wealth-planning",
    "time-to-financial-freedom": "wealth-planning",
    "term-insurance-calculator": "wealth-planning",
    "hlv-calculator": "wealth-planning",
    "health-insurance-evaluator": "wealth-planning",
    "time-value-of-money": "wealth-planning",
    "future-value": "wealth-planning",
    "present-value": "wealth-planning",
    "compound-interest": "wealth-planning",
    "simple-interest": "wealth-planning",
    "rule-of-72": "wealth-planning",
    "percentage": "wealth-planning",
    "discount-calculator": "business",
    "inflation": "wealth-planning",
    "opportunity-cost-calculator": "wealth-planning",
    "remote-vs-office-calculator": "wealth-planning",
    "nri-repatriation-limit-calculator": "wealth-planning",
    "stamp-duty": "realestate",
    "rent-vs-buy-calculator": "realestate",
    "rental-yield": "realestate",
    "commercial-property-rental-yield": "realestate",
    "property-appreciation": "realestate",
    "property-roi": "realestate",
    "real-estate-vs-equity": "realestate",
    "property-depreciation-slm-vs-wdv": "realestate",
    "lease-escalation-calculator": "realestate",
    "income-from-house-property-calculator": "realestate",
    "home-construction-cost": "realestate",
    "house-construction-material": "realestate",
    "indian-land-unit-converter": "realestate",
    "property-area-converter": "realestate",
    "ev-vs-petrol": "ev",
    "ev-vs-petrol-cost": "ev",
    "ev-battery-fund-planner": "ev",
    "solar-rooftop-calculator": "ev",
    "solar-ev-ecosystem": "ev",
    "carbon-credit-valuation": "ev",
    "sec-80eeb-ev-loan-tax-deduction": "ev"
};

        // Extract topical search tokens from current path
        const stopWords = new Set(["calculator", "in", "vs", "the", "and", "or", "to", "for", "of", "a", "an", "is", "guide", "how", "what", "cost"]);
        const tokens = cleanSlug.split(/[-_]+/).filter(t => t.length > 1 && !stopWords.has(t));

        // Detect primary topical category using canonical map with robust fallback
        let targetCategory = canonicalCategoryMap[cleanSlug];

        if (!targetCategory) {
            if (/capital-gain|tax-loss|bonus-strip/.test(cleanSlug)) {
                targetCategory = "capital-gains";
            } else if (/gst|invoicing/.test(cleanSlug)) {
                targetCategory = "gst";
            } else if (/credit-card|cibil|bnpl/.test(cleanSlug)) {
                targetCategory = "credit-cards";
            } else if (/fd|rd|deposit/.test(cleanSlug)) {
                targetCategory = "deposits";
            } else if (/sip|cagr|xirr|mutual-fund|expense-ratio|rolling-return/.test(cleanSlug)) {
                targetCategory = "mutual-funds";
            } else if (/trade|option|futures|intraday|stop-loss|brokerage|straddle|spread/.test(cleanSlug)) {
                targetCategory = "trading";
            } else if (/loan|emi|mortgage|prepayment/.test(cleanSlug)) {
                targetCategory = "loans";
            } else if (/salary|ctc|in-hand|hike|hra|gratuity|bonus/.test(cleanSlug)) {
                targetCategory = "salary";
            } else if (/tax|advance-tax|tds|80c|80d|87a|rebate|44ad|huf/.test(cleanSlug)) {
                targetCategory = "tax";
            } else if (/property|land|real-estate|rent|affordability/.test(cleanSlug)) {
                targetCategory = "realestate";
            } else if (/corporate|wacc|dupont|burn-rate|runway|ebitda/.test(cleanSlug)) {
                targetCategory = "corporate-finance";
            } else if (/business|margin|markup|discount|commission|break-even/.test(cleanSlug)) {
                targetCategory = "business";
            } else if (/retirement|fire|pension/.test(cleanSlug)) {
                targetCategory = "retirement";
            } else if (/ev-|petrol|solar|battery/.test(cleanSlug)) {
                targetCategory = "ev";
            } else if (/ppf|nps|ssy|sukanya|apy|scss/.test(cleanSlug)) {
                targetCategory = "govtschemes";
            } else if (/stock|equity|alpha|beta|sharpe|valuation/.test(cleanSlug)) {
                targetCategory = "stocks";
            } else {
                targetCategory = "wealth-planning";
            }
        }

        // Semantic & Topical Relevance Scoring Engine
        let scoredItems = [];
        for (let i = 0; i < db.length; i++) {
            const item = db[i];
            const itemSlug = item.url.replace(/^\/+|\/+$/g, "").toLowerCase();

            // Strictly exclude current page
            if (itemSlug === cleanSlug || currentPath.includes(itemSlug)) {
                continue;
            }

            let score = 0;

            // Category match bonus (Primary category priority)
            if (item.category === targetCategory) {
                score += 100;
            }

            // Semantic token matches
            const itemKeys = item.keys.toLowerCase();
            for (let j = 0; j < tokens.length; j++) {
                const t = tokens[j];
                if (itemSlug.includes(t)) {
                    score += 40; // Exact keyword in slug
                } else if (itemKeys.includes(t)) {
                    score += 15; // Keyword in search tags
                }
            }

            scoredItems.push({ score, item });
        }

        // Sort descending by relevance score
        scoredItems.sort((a, b) => b.score - a.score);

        // Pick top 8 most topically relevant calculators
        const finalRelatedPool = scoredItems.slice(0, 8).map(x => x.item);

        // Section 1 Cards Layout Generation Block (Clean 4-Column Responsive Grid)
        let dynamicRelatedCardsHTML = '';
        finalRelatedPool.forEach(link => {
            dynamicRelatedCardsHTML += `
                <a href="${link.url}" class="group p-4 bg-slate-50/70 hover:bg-white border border-slate-200/90 hover:border-blue-400 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between min-h-[92px] items-start text-left">
                    <div class="flex items-start gap-2.5 w-full">
                        <span class="text-xl inline-block mt-0.5 group-hover:scale-110 transition-transform duration-200">${link.icon}</span>
                        <div class="flex-1 min-w-0">
                            <h4 class="font-bold text-slate-800 text-xs sm:text-sm group-hover:text-blue-600 transition-colors duration-150 leading-snug line-clamp-2">${link.name}</h4>
                        </div>
                    </div>
                    <div class="w-full pt-2 mt-2 border-t border-slate-100 flex items-center justify-between">
                        <span class="text-[11px] font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Calculate Now
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                            </svg>
                        </span>
                    </div>
                </a>`;
        });

        // Combined UI Block Injection Pipeline (Native Clean Theme)
        targetContainer.innerHTML = `
            <!-- Related Financial Calculators (Contextual) -->
            <section class="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm mb-8 relative overflow-hidden max-w-6xl mx-auto">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-2 text-left">
                    <div>
                        <h2 class="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                            <span class="p-1.5 bg-blue-50 text-blue-600 rounded-lg inline-flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                                </svg>
                            </span>
                            Related Financial Calculators
                        </h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-1">Contextual calculators matched specifically to your current planning workflow.</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                    ${dynamicRelatedCardsHTML}
                </div>
            </section>

            <!-- Popular Financial Calculators Showcase (Clean Light Theme) -->
            <section class="bg-gradient-to-b from-white to-slate-50/60 p-5 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm mb-12 relative overflow-hidden max-w-6xl mx-auto">
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3 text-left">
                    <div>
                        <h2 class="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                            <span class="p-1.5 bg-amber-50 text-amber-600 rounded-lg inline-flex items-center justify-center">⭐</span>
                            Popular Tools Directory
                        </h2>
                        <p class="text-slate-500 text-xs sm:text-sm mt-1">Our most-used financial calculators across tax, investments, loans, and salary.</p>
                    </div>
                    <a href="/calculators/" class="text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap flex items-center gap-1.5 group">
                        Explore All 300+ Tools
                        <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="/income-tax/" class="bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between min-h-[105px]">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xl">📑</span>
                                <span class="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">Tax</span>
                            </div>
                            <h3 class="text-sm font-bold text-slate-800 group-hover:text-amber-700 transition-colors mb-1">Income Tax Calculator</h3>
                            <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">Compare New vs Old Tax Regime, Section 87A rebate and slab taxes for FY 2026-27.</p>
                        </div>
                        <div class="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                        </div>
                    </a>
                    <a href="/in-hand-salary/" class="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between min-h-[105px]">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xl">💵</span>
                                <span class="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">Salary</span>
                            </div>
                            <h3 class="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-1">In-Hand Salary Calculator</h3>
                            <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">Calculate monthly take-home pay after EPF, Professional Tax, and Income Tax deductions.</p>
                        </div>
                        <div class="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                        </div>
                    </a>
                    <a href="/step-up-sip/" class="bg-white p-4 rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between min-h-[105px]">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xl">💸</span>
                                <span class="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-100">Mutual Funds</span>
                            </div>
                            <h3 class="text-sm font-bold text-slate-800 group-hover:text-cyan-700 transition-colors mb-1">Step-Up SIP Calculator</h3>
                            <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">Calculate how an annual 5% to 15% top-up accelerates your compounding wealth to ₹1 Cr+.</p>
                        </div>
                        <div class="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] font-bold text-cyan-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                        </div>
                    </a>
                    <a href="/home-loan/" class="bg-white p-4 rounded-xl border border-slate-200 hover:border-indigo-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between min-h-[105px]">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xl">🏠</span>
                                <span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">Loans</span>
                            </div>
                            <h3 class="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors mb-1">Home Loan EMI Calculator</h3>
                            <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">Plan housing loan repayments with exact monthly EMI, amortization, and total interest split.</p>
                        </div>
                        <div class="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] font-bold text-indigo-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                        </div>
                    </a>
                    <a href="/ppf/" class="bg-white p-4 rounded-xl border border-slate-200 hover:border-amber-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between min-h-[105px]">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xl">🏛️</span>
                                <span class="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">Govt Scheme</span>
                            </div>
                            <h3 class="text-sm font-bold text-slate-800 group-hover:text-amber-700 transition-colors mb-1">PPF Calculator</h3>
                            <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">Calculate Public Provident Fund maturity amount, tax-free interest, and 15-year corpus.</p>
                        </div>
                        <div class="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                        </div>
                    </a>
                    <a href="/gst/" class="bg-white p-4 rounded-xl border border-slate-200 hover:border-slate-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between min-h-[105px]">
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-xl">💼</span>
                                <span class="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">Business</span>
                            </div>
                            <h3 class="text-sm font-bold text-slate-800 group-hover:text-slate-800 transition-colors mb-1">GST Calculator</h3>
                            <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">Calculate inclusive and exclusive GST amounts for 5%, 12%, 18%, 28% slabs with CGST/SGST.</p>
                        </div>
                        <div class="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between">
                            <span class="text-[11px] font-bold text-slate-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">Calculate Now →</span>
                        </div>
                    </a>
                </div>
            </section>
        `;
    }

    // Issue D: Mobile Floating Quick-Result Pill (< 768px) - Safety-First Scoped Detection
    function initMobileFloatingResultPill() {
        if (typeof window === "undefined" || window.innerWidth >= 768) return;
        if (!("IntersectionObserver" in window)) return;

        const main = document.querySelector("main");
        if (!main) return;

        // 1. Explicit verified primary financial result IDs across ArthCalculator
        const explicitResultSelectors = [
            "#mainTaxDisplay", "#monthlyEmiVal", "#phase1EmiVal",
            "#maturityValue", "#taxLabel", "#profitVal", "#emiValDisp", "#netTax",
            "#taxPayable", "#profitDisplay", "#cibilScore", "#costOfDebt", "#capitalGainsTax",
            "#cagrValue", "#resTax", "#netProfitDisp", "#adaTax", "#beUnitsDisp",
            "#targetSavingsDisplay", "#winnerText", "#resTaxSaved", "#resMaxProfit",
            "#resTaxableGain", "#totalFundValue", "#roiDisp", "#ratioResultDisplay",
            "#resultAmount", "#resEffectiveApr", "#resDisallowedLoss", "#resAnnualizedYield",
            "#futureCostDisplay", "#profitResultDisplay", "#resNetSavings", "#resRupeeValue",
            "#netBenefitDisplay", "#burnRateDisplay", "#runwayDisplay", "#monthlyEmi",
            "#emiValue", "#totalMaturity", "#finalCorpus", "#netInHandSalary", "#inHandSalary",
            "#totalTaxPayable", "#taxLiability", "#estimatedTax", "#totalInterest",
            "#wealthGained", "#resTotalIncome", "#taxPayableDisp", "#emiDisp",
            "#totalInterestDisp", "#beUnits", "#cagrDisp", "#sipMaturity", "#fdMaturity",
            "#rdMaturity", "#ppfMaturity", "#ssyMaturity", "#npsCorpus", "#gratuityAmount",
            "#gratuityValue", "#exemptHraDisp", "#taxableHraDisp", "#taxSavedAmt",
            "#mainResultVal", "#resMinIncome", "#resFinalDeclare",
            "#hraExemption", "#taxSavedVal", "#resNetBenefit", "#resAnnualYield", "#resScore",
            "#resNetCost", "#resBreakEven", "#resMargin", "#resNetProfit", "#resTotalReturn"
        ];

        let valueElem = null;

        // Priority 1: Check explicit verified IDs inside <main>
        for (let i = 0; i < explicitResultSelectors.length; i++) {
            const el = main.querySelector(explicitResultSelectors[i]);
            if (el && el.tagName !== "H1" && el.tagName !== "INPUT" && el.tagName !== "SELECT" && el.tagName !== "BUTTON") {
                valueElem = el;
                break;
            }
        }

        // Priority 2: Scoped pattern check inside <main> (excluding header, navigation, and inputs)
        if (!valueElem) {
            const candidate = main.querySelector("[id^='res']:not(input):not(button):not(select), [id$='Disp']:not(input):not(button):not(select), [id$='Display']:not(input):not(button):not(select), [id$='Value']:not(input):not(button):not(select), [id$='Tax']:not(input):not(button):not(select), [id$='Profit']:not(input):not(button):not(select), [id$='Maturity']:not(input):not(button):not(select)");
            if (candidate && candidate.tagName !== "H1") {
                valueElem = candidate;
            }
        }

        // Safety-First Rule: If no verified result element found, gracefully exit (do not display wrong pill)
        if (!valueElem) return;

        // Guarantee element is never inside a header or navigation
        if (valueElem.closest("header") || valueElem.closest("nav") || valueElem.tagName === "H1") return;

        // 2. Derive parent result card container strictly inside <main>
        const resultCard = main.querySelector("#resultCard, #resultsContainer, #calculatorResults, [id*='result-card'], [id*='results-card']") || 
                           valueElem.closest("#resultCard, #resultsContainer, .card-shadow, .bg-white.p-6, .bg-white.p-8, .bg-slate-900.p-6, .bg-slate-900.p-8, .rounded-2xl, .rounded-xl") || 
                           valueElem.parentElement;

        if (!resultCard || resultCard.closest("header") || resultCard.closest("nav")) return;

        // 3. Extract or derive label safely from result container
        let cleanLabel = "Result";
        const labelElem = valueElem.closest("div")?.parentElement?.querySelector("h2, h3, p.uppercase, [class*='uppercase'], span.uppercase, p, label") ||
                          valueElem.closest("div")?.querySelector("h2, h3, p.uppercase, [class*='uppercase'], span.uppercase, p, label") ||
                          resultCard.querySelector("[class*='uppercase'], h2, h3, p");

        if (labelElem && labelElem.tagName !== "H1" && labelElem !== valueElem && !labelElem.closest("header") && !labelElem.closest("nav")) {
            const rawLabel = labelElem.textContent.trim().replace(/\s+/g, " ").replace(/[:：]$/, "");
            if (rawLabel && !rawLabel.startsWith("₹") && !/^\d+$/.test(rawLabel)) {
                cleanLabel = rawLabel;
            }
        }

        // 4. Create mobile floating pill container (Single declaration, single className, unique IDs)
        const pill = document.createElement("div");
        pill.id = "mobileQuickResultPill";
        pill.className = "fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur text-white px-3.5 py-2 rounded-full shadow-2xl border border-slate-700/60 flex items-center gap-2 max-w-[95vw] transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none text-xs md:hidden";
        pill.style.minHeight = "44px";
        pill.setAttribute("aria-live", "polite");
        pill.innerHTML = `
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span id="mobilePillLabel" class="text-slate-300 font-medium min-w-0 shrink truncate leading-tight">${cleanLabel}:</span>
            <span id="mobilePillValue" class="font-bold text-white tracking-tight whitespace-nowrap shrink-0"></span>
            <button type="button" id="mobilePillScrollBtn" class="ml-0.5 pl-2 border-l border-slate-700 text-blue-400 font-semibold hover:text-blue-300 flex items-center gap-0.5 shrink-0 self-stretch px-1.5 focus:outline-none">View ↓</button>
        `;
        document.body.appendChild(pill);

        const pillValue = pill.querySelector("#mobilePillValue");
        const scrollBtn = pill.querySelector("#mobilePillScrollBtn");

        function updatePillValue() {
            if (valueElem && pillValue) {
                const currentVal = valueElem.textContent.trim();
                if (currentVal) {
                    pillValue.textContent = currentVal;
                }
            }
        }
        updatePillValue();

        // MutationObserver to sync with real-time recalculations
        const observer = new MutationObserver(updatePillValue);
        observer.observe(valueElem, { childList: true, characterData: true, subtree: true });

        // IntersectionObserver to show/hide pill based on result card viewport position
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    pill.classList.add("translate-y-12", "opacity-0", "pointer-events-none");
                    pill.classList.remove("translate-y-0", "opacity-100", "pointer-events-auto");
                } else {
                    // Only show if the result card is below viewport (user is at top editing inputs)
                    const rect = entry.boundingClientRect;
                    if (rect.top > (window.innerHeight || document.documentElement.clientHeight)) {
                        updatePillValue();
                        pill.classList.remove("translate-y-12", "opacity-0", "pointer-events-none");
                        pill.classList.add("translate-y-0", "opacity-100", "pointer-events-auto");
                    } else {
                        pill.classList.add("translate-y-12", "opacity-0", "pointer-events-none");
                        pill.classList.remove("translate-y-0", "opacity-100", "pointer-events-auto");
                    }
                }
            });
        }, { threshold: 0.05 });

        io.observe(resultCard);

        // Smooth scroll to result card on tap
        function scrollToResult() {
            resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        pill.addEventListener("click", scrollToResult);
        if (scrollBtn) scrollBtn.addEventListener("click", (e) => { e.stopPropagation(); scrollToResult(); });
    }

    // Direct lifecycle initialization
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => {
            injectMasterLinkingHub();
            initMobileFloatingResultPill();
        });
    } else {
        injectMasterLinkingHub();
        initMobileFloatingResultPill();
    }
})();

