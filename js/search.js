/**
 * ArthCalculator.in - Master Global Search Overlay & Autocomplete Engine
 * Asset Path Location: /js/search.js
 * High-performance client-side search with multi-word token scoring, clean plain names, domain badges, and keyboard navigation.
 */
(function() {
    const catalog = [
    {
        "name": "50/30/20 Budget Planner",
        "url": "/50-30-20-rule/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "50 30 20 rule 50/30/20 budget planner personal personal formula finance calculator"
    },
    {
        "name": "Advance Tax Calculator",
        "url": "/advance-tax/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "advance tax advance tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Advance Tax Penalty Calculator",
        "url": "/advance-tax-penalty-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "advance tax penalty calculator advance tax penalty calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Advanced Home Affordability Calculator",
        "url": "/home-affordability/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "home affordability advanced home affordability calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Agriculture Income Tax Calculator",
        "url": "/agriculture-income-tax-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "agriculture income tax calculator agriculture income tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Alpha Calculator",
        "url": "/alpha/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "alpha alpha calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Altman Z-Score Calculator",
        "url": "/altman-z-score/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "altman z score altman z-score calculator business business formula finance calculator"
    },
    {
        "name": "Asset Allocation Calculator",
        "url": "/asset-allocation/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "asset allocation asset allocation calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Atal Pension Yojana (APY) Calculator",
        "url": "/apy-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "apy calculator atal pension yojana (apy) calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Balance Transfer vs Personal Loan Calculator",
        "url": "/balance-transfer-vs-personal-loan/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "balance transfer vs personal loan balance transfer vs personal loan calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Beta Calculator",
        "url": "/beta/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "beta beta calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "BNPL Late Fee Annualized APR Calculator",
        "url": "/bnpl-late-fee-apr/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "bnpl late fee apr bnpl late fee annualized apr calculator loans loans formula finance calculator"
    },
    {
        "name": "Bonus Calculator",
        "url": "/bonus-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "bonus calculator bonus calculator salary salary formula finance calculator"
    },
    {
        "name": "Bonus Stripping Loss Disallowance Calculator",
        "url": "/bonus-stripping-94-8/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "bonus stripping 94 8 bonus stripping loss disallowance calculator trading trading formula finance calculator"
    },
    {
        "name": "Break Even Calculator",
        "url": "/break-even-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "break even calculator break even calculator business business formula finance calculator"
    },
    {
        "name": "Brokerage Calculator",
        "url": "/brokerage-calculator/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "brokerage calculator brokerage calculator trading trading formula finance calculator nifty banknifty stock trading derivatives calls puts payoff greeks delta theta gamma vega iv implied volatility margin"
    },
    {
        "name": "Budget Planner",
        "url": "/budget-planner/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "budget planner budget planner personal personal formula finance calculator"
    },
    {
        "name": "Business Loan EMI Calculator",
        "url": "/business-loan-emi/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "business loan emi business loan emi calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "CAGR Calculator",
        "url": "/cagr/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "cagr cagr calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Capital Gains Exemption Calculator",
        "url": "/capital-gains-exemption-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "capital gains exemption calculator capital gains exemption calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Capital Gains Indexation Calculator",
        "url": "/capital-gains-indexation-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "capital gains indexation calculator capital gains indexation calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Capital Gains Tax Calculator",
        "url": "/capital-gains-tax/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "capital gains tax capital gains tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Car Loan Calculator",
        "url": "/car-loan/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "car loan car loan calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Car Purchase Planner",
        "url": "/car-purchase/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "car purchase car purchase planner planning planning formula finance calculator"
    },
    {
        "name": "Carbon Credit Valuation & Sequestration Estimator",
        "url": "/carbon-credit-valuation/",
        "icon": "\u26a1",
        "category": "EV & Green",
        "keys": "carbon credit valuation carbon credit valuation & sequestration estimator ev & green ev formula finance calculator"
    },
    {
        "name": "Cash Conversion Cycle CCC Calculator",
        "url": "/cash-conversion-cycle/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "cash conversion cycle cash conversion cycle ccc calculator business business formula finance calculator"
    },
    {
        "name": "Cash-Futures Arbitrage Spread Return Calculator",
        "url": "/cash-futures-arbitrage-yield/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "cash futures arbitrage yield cash-futures arbitrage spread return calculator trading trading formula finance calculator"
    },
    {
        "name": "Child Education Cost 2040 Projector (SIP Goal Planner)",
        "url": "/child-education-planner/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "child education planner child education cost 2040 projector (sip goal planner) planning planning formula finance calculator"
    },
    {
        "name": "CIBIL Score Simulator",
        "url": "/cibil-score-simulator/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "cibil score simulator cibil score simulator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Clubbing of Income Calculator",
        "url": "/clubbing-of-income-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "clubbing of income calculator clubbing of income calculator tax tax formula finance calculator"
    },
    {
        "name": "Commercial Property Rental Yield Calculator",
        "url": "/commercial-property-rental-yield/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "commercial property rental yield commercial property rental yield calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Commission Calculator",
        "url": "/commission-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "commission calculator commission calculator business business formula finance calculator"
    },
    {
        "name": "Compound Interest Calculator",
        "url": "/compound-interest/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "compound interest compound interest calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Construction Material Calculator",
        "url": "/house-construction-material/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "house construction material construction material calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Contribution Margin Calculator",
        "url": "/contribution-margin/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "contribution margin contribution margin calculator business business formula finance calculator"
    },
    {
        "name": "Corporate Car Lease vs Buy Calculator",
        "url": "/car-lease-vs-buy/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "car lease vs buy corporate car lease vs buy calculator salary salary formula finance calculator"
    },
    {
        "name": "Corporate FD vs Bank FD Calculator",
        "url": "/corporate-fd-vs-bank-fd-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "corporate fd vs bank fd calculator corporate fd vs bank fd calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Cost of Debt Calculator",
        "url": "/cost-of-debt/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "cost of debt cost of debt calculator business business formula finance calculator"
    },
    {
        "name": "Cost of Equity Calculator",
        "url": "/cost-of-equity/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "cost of equity cost of equity calculator business business formula finance calculator"
    },
    {
        "name": "Covered Call Break-Even & Cushion Calculator",
        "url": "/covered-call-downside-cushion/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "covered call downside cushion covered call break-even & cushion calculator trading trading formula finance calculator"
    },
    {
        "name": "Credit Card Balance Transfer Calculator",
        "url": "/credit-card-balance-transfer-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "credit card balance transfer calculator credit card balance transfer calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Credit Card Interest Calculator",
        "url": "/credit-card-interest/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "credit card interest credit card interest calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Credit Card Minimum Due Calculator",
        "url": "/credit-card-minimum-due/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "credit card minimum due credit card minimum due calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Credit Card Reward Calculator",
        "url": "/credit-card-rewards/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "credit card rewards credit card reward calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Credit Card Reward Points to Rupee Calculator",
        "url": "/credit-card-reward-points-rupee/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "credit card reward points rupee credit card reward points to rupee calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Crorepati Calculator",
        "url": "/crorepati-calculator/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "crorepati calculator crorepati calculator planning planning formula finance calculator"
    },
    {
        "name": "Crypto Tax Calculator",
        "url": "/crypto-tax-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "crypto tax calculator crypto tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "CTC to In-Hand Calculator",
        "url": "/ctc-to-in-hand/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "ctc to in hand ctc to in-hand calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "Current Ratio Calculator",
        "url": "/current-ratio/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "current ratio current ratio calculator business business formula finance calculator"
    },
    {
        "name": "DCF Stock Valuation",
        "url": "/dcf/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "dcf dcf stock valuation business business formula finance calculator"
    },
    {
        "name": "Debt Consolidation Calculator",
        "url": "/debt-consolidation-calculator/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "debt consolidation calculator debt consolidation calculator loans loans formula finance calculator"
    },
    {
        "name": "Debt Payoff Calculator",
        "url": "/debt-payoff/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "debt payoff debt payoff calculator trading trading formula finance calculator nifty banknifty stock trading derivatives calls puts payoff greeks delta theta gamma vega iv implied volatility margin"
    },
    {
        "name": "Debt to Equity Ratio Calculator",
        "url": "/debt-to-equity/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "debt to equity debt to equity ratio calculator business business formula finance calculator"
    },
    {
        "name": "Debt to Income Ratio Calculator",
        "url": "/debt-to-income/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "debt to income debt to income ratio calculator loans loans formula finance calculator"
    },
    {
        "name": "Discount Calculator",
        "url": "/discount-calculator/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "discount calculator discount calculator personal personal formula finance calculator"
    },
    {
        "name": "Dividend Discount Model DDM Calculator",
        "url": "/dividend-discount-model/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "dividend discount model dividend discount model ddm calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Dividend Growth Calculator",
        "url": "/dividend-growth/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "dividend growth dividend growth calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Dividend Stripping Calculator (Sec 94(7))",
        "url": "/dividend-stripping-94-7/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "dividend stripping 94 7 dividend stripping calculator (sec 94(7)) trading trading formula finance calculator"
    },
    {
        "name": "Dividend Tax Calculator",
        "url": "/dividend-tax-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "dividend tax calculator dividend tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Dividend Yield Calculator",
        "url": "/dividend-yield/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "dividend yield dividend yield calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Dividend Yield on Cost Calculator",
        "url": "/yield-on-cost/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "yield on cost dividend yield on cost calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "DSCR Calculator",
        "url": "/dscr/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "dscr dscr calculator loans loans formula finance calculator"
    },
    {
        "name": "DuPont Analysis Calculator",
        "url": "/dupont-analysis/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "dupont analysis dupont analysis calculator business business formula finance calculator"
    },
    {
        "name": "E-Way Bill Validity Calculator",
        "url": "/eway-bill-validity-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "eway bill validity calculator e-way bill validity calculator business business formula finance calculator"
    },
    {
        "name": "Early Retirement Planner",
        "url": "/early-retirement/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "early retirement early retirement planner planning planning formula finance calculator fire financial independence retire early pension corpus 4 percent rule"
    },
    {
        "name": "EBITDA Calculator",
        "url": "/ebitda/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "ebitda ebitda calculator business business formula finance calculator"
    },
    {
        "name": "Education Cost Calculator",
        "url": "/education-cost/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "education cost education cost calculator planning planning formula finance calculator"
    },
    {
        "name": "Education Loan Moratorium & Capitalization Calculator",
        "url": "/education-loan-moratorium/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "education loan moratorium education loan moratorium & capitalization calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Education Loan Refinancing Calculator",
        "url": "/education-loan-refinancing-calculator/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "education loan refinancing calculator education loan refinancing calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Education Planning Calculator",
        "url": "/education-planning/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "education planning education planning calculator planning planning formula finance calculator"
    },
    {
        "name": "ELSS vs PPF vs FD Comparison Calculator",
        "url": "/elss-vs-ppf-vs-fd/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "elss vs ppf vs fd elss vs ppf vs fd comparison calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Emergency Fund Planner",
        "url": "/emergency-fund/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "emergency fund emergency fund planner planning planning formula finance calculator"
    },
    {
        "name": "EMI Calculator",
        "url": "/emi/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "emi emi calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Enterprise Value Calculator",
        "url": "/enterprise-value/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "enterprise value enterprise value calculator business business formula finance calculator"
    },
    {
        "name": "EPF Calculator",
        "url": "/epf/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "epf epf calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "EPF vs VPF vs PPF Comparison Calculator",
        "url": "/epf-vs-vpf-vs-ppf/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "epf vs vpf vs ppf epf vs vpf vs ppf comparison calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "EPS Pension Calculator",
        "url": "/eps-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "eps calculator eps pension calculator salary salary formula finance calculator"
    },
    {
        "name": "ESI Contribution Calculator",
        "url": "/esi-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "esi calculator esi contribution calculator salary salary formula finance calculator"
    },
    {
        "name": "ESOP & RSU Wealth Simulator",
        "url": "/esop-simulator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "esop simulator esop & rsu wealth simulator salary salary formula finance calculator"
    },
    {
        "name": "ESOP Dilution & Valuation Calculator",
        "url": "/esop-dilution-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "esop dilution calculator esop dilution & valuation calculator salary salary formula finance calculator"
    },
    {
        "name": "ESOP Perquisite Tax Calculator",
        "url": "/esop-perquisite-tax-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "esop perquisite tax calculator esop perquisite tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "ESOP Value Calculator",
        "url": "/esop-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "esop calculator esop value calculator salary salary formula finance calculator"
    },
    {
        "name": "EV Battery Replacement Fund Planner",
        "url": "/ev-battery-fund-planner/",
        "icon": "\u26a1",
        "category": "EV & Green",
        "keys": "ev battery fund planner ev battery replacement fund planner ev & green ev formula finance calculator"
    },
    {
        "name": "EV vs Petrol Cost Calculator",
        "url": "/ev-vs-petrol/",
        "icon": "\u26a1",
        "category": "EV & Green",
        "keys": "ev vs petrol ev vs petrol cost calculator ev & green ev formula finance calculator"
    },
    {
        "name": "EV vs. Petrol Cost Per KM Calculator",
        "url": "/ev-vs-petrol-cost/",
        "icon": "\u26a1",
        "category": "EV & Green",
        "keys": "ev vs petrol cost ev vs. petrol cost per km calculator ev & green ev formula finance calculator"
    },
    {
        "name": "Expense Ratio Calculator",
        "url": "/expense-ratio/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "expense ratio expense ratio calculator personal personal formula finance calculator"
    },
    {
        "name": "Expense Tracker",
        "url": "/expense-tracker/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "expense tracker expense tracker personal personal formula finance calculator"
    },
    {
        "name": "F&O Tax Audit Turnover Calculator",
        "url": "/fo-tax-audit-turnover-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "fo tax audit turnover calculator f&o tax audit turnover calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Fibonacci Retracement Calculator",
        "url": "/fibonacci-retracement-calculator/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "fibonacci retracement calculator fibonacci retracement calculator trading trading formula finance calculator"
    },
    {
        "name": "Financial Goal Planner",
        "url": "/financial-goal-planner/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "financial goal planner financial goal planner planning planning formula finance calculator"
    },
    {
        "name": "Financial Independence Calculator",
        "url": "/financial-independence/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "financial independence financial independence calculator planning planning formula finance calculator"
    },
    {
        "name": "Financial Leverage Calculator",
        "url": "/financial-leverage/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "financial leverage financial leverage calculator business business formula finance calculator"
    },
    {
        "name": "FIRE Calculator",
        "url": "/fire-calculator/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "fire calculator fire calculator planning planning formula finance calculator fire financial independence retire early pension corpus 4 percent rule"
    },
    {
        "name": "Fixed Deposit (FD) Calculator",
        "url": "/fd/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "fd fixed deposit (fd) calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Fixed vs Floating Home Loan Interest Rate Calculator",
        "url": "/fixed-vs-floating-rate/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "fixed vs floating rate fixed vs floating home loan interest rate calculator loans loans formula finance calculator"
    },
    {
        "name": "Flat vs Reducing Interest Rate Loan Calculator",
        "url": "/flat-vs-reducing-rate/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "flat vs reducing rate flat vs reducing interest rate loan calculator loans loans formula finance calculator"
    },
    {
        "name": "Foreign Freelance Tax Calculator",
        "url": "/foreign-tax-optimizer/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "foreign tax optimizer foreign freelance tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Form 67 Foreign Tax Credit Calculator",
        "url": "/foreign-tax-credit-form-67/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "foreign tax credit form 67 form 67 foreign tax credit calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Freelance Rate & Project Quote Calculator",
        "url": "/freelance-rate-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "freelance rate calculator freelance rate & project quote calculator salary salary formula finance calculator"
    },
    {
        "name": "Freelancer vs Salaried Tax Calculator",
        "url": "/freelancer-vs-salaried/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "freelancer vs salaried freelancer vs salaried tax calculator tax tax formula finance calculator"
    },
    {
        "name": "Future Value Calculator",
        "url": "/future-value/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "future value future value calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Futures Profit Calculator",
        "url": "/futures-profit/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "futures profit futures profit calculator trading trading formula finance calculator"
    },
    {
        "name": "Gift Tax Calculator",
        "url": "/gift-tax-sec-56-2-x/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "gift tax sec 56 2 x gift tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Goal Based Portfolio Rebalancing Planner",
        "url": "/goal-portfolio/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "goal portfolio goal based portfolio rebalancing planner mutual funds stocks formula finance calculator"
    },
    {
        "name": "Goal Priority Planner",
        "url": "/goal-priority/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "goal priority goal priority planner planning planning formula finance calculator"
    },
    {
        "name": "Goal SIP Calculator",
        "url": "/goal-sip-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "goal sip calculator goal sip calculator mutual funds stocks formula finance calculator mutual fund sip systematic investment plan compounding wealth returns"
    },
    {
        "name": "Goal Step Up SIP Calculator",
        "url": "/goal-step-up/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "goal step up goal step up sip calculator planning planning formula finance calculator"
    },
    {
        "name": "Gold Loan vs. Personal Loan Optimizer ( Edition)",
        "url": "/gold-loan-vs-personal-loan/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "gold loan vs personal loan gold loan vs. personal loan optimizer ( edition) loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Gratuity Calculator",
        "url": "/gratuity/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "gratuity gratuity calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "Gratuity Exemption Calculator",
        "url": "/gratuity-exemption-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "gratuity exemption calculator gratuity exemption calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "GST Calculator",
        "url": "/gst/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "gst gst calculator business business formula finance calculator"
    },
    {
        "name": "GST Composition Scheme Calculator",
        "url": "/gst-composition-scheme-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "gst composition scheme calculator gst composition scheme calculator business business formula finance calculator"
    },
    {
        "name": "GST Export LUT Tax Savings Calculator",
        "url": "/freelance-gst-lut-export-tax/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "freelance gst lut export tax gst export lut tax savings calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "GST Late Fee & Penalty Calculator",
        "url": "/gst-late-fee-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "gst late fee calculator gst late fee & penalty calculator business business formula finance calculator"
    },
    {
        "name": "GST Profit Calculator",
        "url": "/gst-profit-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "gst profit calculator gst profit calculator business business formula finance calculator"
    },
    {
        "name": "GST RCM Calculator",
        "url": "/rcm-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "rcm calculator gst rcm calculator business business formula finance calculator"
    },
    {
        "name": "Health Insurance Top-Up vs. Base Plan Evaluator Calculator",
        "url": "/health-insurance-evaluator/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "health insurance evaluator health insurance top-up vs. base plan evaluator calculator planning planning formula finance calculator"
    },
    {
        "name": "Home Construction Cost Calculator",
        "url": "/home-construction-cost/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "home construction cost home construction cost calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Home Loan Balance Transfer (HLBT) Savings Tool Calculator",
        "url": "/home-loan-balance-transfer/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "home loan balance transfer home loan balance transfer (hlbt) savings tool calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Home Loan EMI Calculator",
        "url": "/home-loan/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "home loan home loan emi calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "HRA Exemption Calculator",
        "url": "/hra/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "hra hra exemption calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "HUF Tax Savings Calculator",
        "url": "/huf-tax-savings-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "huf tax savings calculator huf tax savings calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Human Life Value Calculator",
        "url": "/hlv-calculator/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "hlv calculator human life value calculator planning planning formula finance calculator"
    },
    {
        "name": "In-Hand Salary Calculator",
        "url": "/in-hand-salary/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "in hand salary in-hand salary calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "Income from House Property Calculator",
        "url": "/income-from-house-property-calculator/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "income from house property calculator income from house property calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Income Tax Calculator",
        "url": "/income-tax/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "income tax income tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Indian Land Area Unit Converter",
        "url": "/indian-land-unit-converter/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "indian land unit converter indian land area unit converter real estate realestate formula finance calculator land measurement converter area square feet meter yard bigha gaj acre guntha registry"
    },
    {
        "name": "Inflation Adjusted Salary Calculator",
        "url": "/inflation-adjusted-salary-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "inflation adjusted salary calculator inflation adjusted salary calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "Inflation Adjusted SIP Calculator",
        "url": "/inflation-adjusted-sip-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "inflation adjusted sip calculator inflation adjusted sip calculator mutual funds stocks formula finance calculator mutual fund sip systematic investment plan compounding wealth returns"
    },
    {
        "name": "Inflation Calculator",
        "url": "/inflation/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "inflation inflation calculator personal personal formula finance calculator"
    },
    {
        "name": "Influencer Business Expense & Tax Tracker",
        "url": "/influencer-tax-tracker/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "influencer tax tracker influencer business expense & tax tracker tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Information Ratio Calculator",
        "url": "/information-ratio/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "information ratio information ratio calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Interest Coverage Ratio Calculator",
        "url": "/interest-coverage/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "interest coverage interest coverage ratio calculator business business formula finance calculator"
    },
    {
        "name": "Internal Rate of Return (IRR) Calculator",
        "url": "/irr-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "irr calculator internal rate of return (irr) calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Intraday Profit Calculator",
        "url": "/intraday-profit-calculator/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "intraday profit calculator intraday profit calculator trading trading formula finance calculator"
    },
    {
        "name": "Inventory Turnover Ratio Calculator",
        "url": "/inventory-turnover/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "inventory turnover inventory turnover ratio calculator business business formula finance calculator"
    },
    {
        "name": "Iron Condor 4-Leg Strategy PnL Visualizer",
        "url": "/iron-condor-strategy-pnl/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "iron condor strategy pnl iron condor 4-leg strategy pnl visualizer trading trading formula finance calculator"
    },
    {
        "name": "Joining Bonus Clawback Tax Refund Sec 89(1) Calculator",
        "url": "/joining-bonus-clawback-tax-refund/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "joining bonus clawback tax refund joining bonus clawback tax refund sec 89(1) calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Kisan Vikas Patra (KVP) Calculator",
        "url": "/kvp-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "kvp calculator kisan vikas patra (kvp) calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Lease Escalation Calculator",
        "url": "/lease-escalation-calculator/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "lease escalation calculator lease escalation calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Leave Encashment Calculator",
        "url": "/leave-encashment-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "leave encashment calculator leave encashment calculator salary salary formula finance calculator"
    },
    {
        "name": "Leave Encashment Exemption Calculator",
        "url": "/leave-encashment-taxability-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "leave encashment taxability calculator leave encashment exemption calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Loan Affordability Calculator",
        "url": "/loan-affordability/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "loan affordability loan affordability calculator govt schemes govtschemes formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Loan Against Mutual Funds Calculator",
        "url": "/loan-against-mutual-funds/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "loan against mutual funds loan against mutual funds calculator loans loans formula finance calculator mutual fund sip systematic investment plan compounding wealth returns emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Loan Balance Calculator",
        "url": "/loan-balance-calculator/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "loan balance calculator loan balance calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Loan Eligibility Calculator",
        "url": "/loan-eligibility/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "loan eligibility loan eligibility calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Loan Prepayment Calculator",
        "url": "/loan-prepayment/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "loan prepayment loan prepayment calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Loan vs Investment Calculator",
        "url": "/loan-vs-investment-calculator/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "loan vs investment calculator loan vs investment calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Long Butterfly Option Strategy Risk-Reward Calculator",
        "url": "/butterfly-spread-option-risk/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "butterfly spread option risk long butterfly option strategy risk-reward calculator trading trading formula finance calculator nifty banknifty stock trading derivatives calls puts payoff greeks delta theta gamma vega iv implied volatility margin"
    },
    {
        "name": "Long Straddle & Strangle Volatility Calculator",
        "url": "/straddle-strangle-volatility-breakeven/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "straddle strangle volatility breakeven long straddle & strangle volatility calculator trading trading formula finance calculator nifty banknifty stock trading derivatives calls puts payoff greeks delta theta gamma vega iv implied volatility margin"
    },
    {
        "name": "LRS & TCS Refund Calculator",
        "url": "/lrs-tcs-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "lrs tcs calculator lrs & tcs refund calculator tax tax formula finance calculator"
    },
    {
        "name": "Lumpsum Calculator",
        "url": "/lumpsum/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "lumpsum lumpsum calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Mahila Samman Savings Certificate Calculator",
        "url": "/mahila-samman-savings-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "mahila samman savings calculator mahila samman savings certificate calculator govt schemes govtschemes formula finance calculator"
    },
    {
        "name": "Markup Calculator",
        "url": "/markup-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "markup calculator markup calculator business business formula finance calculator"
    },
    {
        "name": "Money Transfer Tools, Guides & Resources Calculator",
        "url": "/money-transfer/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "money transfer money transfer tools, guides & resources calculator personal personal formula finance calculator"
    },
    {
        "name": "Moratorium Interest Calculator",
        "url": "/moratorium-interest-calculator/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "moratorium interest calculator moratorium interest calculator loans loans formula finance calculator"
    },
    {
        "name": "Mortgage Balance Calculator",
        "url": "/mortgage-balance/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "mortgage balance mortgage balance calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Mudra Loan EMI Calculator",
        "url": "/mudra-loan-emi/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "mudra loan emi mudra loan emi calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Multiple Goal Planner",
        "url": "/multiple-goals/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "multiple goals multiple goal planner planning planning formula finance calculator"
    },
    {
        "name": "Mutual Fund Expense Ratio Impact",
        "url": "/mutual-fund-expense-ratio-impact/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "mutual fund expense ratio impact mutual fund expense ratio impact mutual funds stocks formula finance calculator mutual fund sip systematic investment plan compounding wealth returns"
    },
    {
        "name": "Mutual Fund Portfolio Overlap Diversification Tool Calculator",
        "url": "/portfolio-overlap/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "portfolio overlap mutual fund portfolio overlap diversification tool calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Mutual Fund Return Calculator",
        "url": "/mutual-fund-returns/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "mutual fund returns mutual fund return calculator mutual funds stocks formula finance calculator mutual fund sip systematic investment plan compounding wealth returns"
    },
    {
        "name": "National Savings Certificate (NSC) Calculator",
        "url": "/nsc-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "nsc calculator national savings certificate (nsc) calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Net Present Value (NPV) Calculator",
        "url": "/npv-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "npv calculator net present value (npv) calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Net Worth Calculator",
        "url": "/net-worth/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "net worth net worth calculator personal personal formula finance calculator"
    },
    {
        "name": "No Cost EMI Calculator",
        "url": "/no-cost-emi/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "no cost emi no cost emi calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Notice Period Pay Buyout Tax & Cost Calculator",
        "url": "/notice-period-buyout-tax-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "notice period buyout tax calculator notice period pay buyout tax & cost calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Notice Period Pay Recovery Calculator",
        "url": "/notice-period-pay-recovery/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "notice period pay recovery notice period pay recovery calculator salary salary formula finance calculator"
    },
    {
        "name": "NPS Calculator",
        "url": "/nps/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "nps nps calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "NPS Tier 1 vs Tier 2 Calculator",
        "url": "/nps-tier-1-vs-tier-2/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "nps tier 1 vs tier 2 nps tier 1 vs tier 2 calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "NPS Tier I vs Tier II Optimizer",
        "url": "/nps-optimizer-2026/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "nps optimizer 2026 nps tier i vs tier ii optimizer govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "NPS vs EPF vs PPF Calculator",
        "url": "/nps-vs-epf-vs-ppf/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "nps vs epf vs ppf nps vs epf vs ppf calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "NRE vs NRO Account Tax Calculator",
        "url": "/nre-vs-nro-taxation-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "nre vs nro taxation calculator nre vs nro account tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "NRI Repatriation Calculator (NRO)",
        "url": "/nri-repatriation-limit-calculator/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "nri repatriation limit calculator nri repatriation calculator (nro) personal personal formula finance calculator"
    },
    {
        "name": "Operating Leverage Calculator",
        "url": "/operating-leverage/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "operating leverage operating leverage calculator business business formula finance calculator"
    },
    {
        "name": "Opportunity Cost Calculator",
        "url": "/opportunity-cost-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "opportunity cost calculator opportunity cost calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Option IV Rank (IVR) & Percentile Calculator",
        "url": "/option-iv-rank-percentile/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "option iv rank percentile option iv rank (ivr) & percentile calculator trading trading formula finance calculator nifty banknifty stock trading derivatives calls puts payoff greeks delta theta gamma vega iv implied volatility margin"
    },
    {
        "name": "Option Payoff Calculator",
        "url": "/option-payoff-calculator/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "option payoff calculator option payoff calculator trading trading formula finance calculator nifty banknifty stock trading derivatives calls puts payoff greeks delta theta gamma vega iv implied volatility margin"
    },
    {
        "name": "Option Selling Margin & ROI Calculator",
        "url": "/option-selling-roi-calculator/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "option selling roi calculator option selling margin & roi calculator trading trading formula finance calculator nifty banknifty stock trading derivatives calls puts payoff greeks delta theta gamma vega iv implied volatility margin"
    },
    {
        "name": "Option Wheel Strategy (CSP + Covered Call) ROI Calculator",
        "url": "/nifty-wheel-strategy-roi/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "nifty wheel strategy roi option wheel strategy (csp + covered call) roi calculator trading trading formula finance calculator"
    },
    {
        "name": "Options Profit Calculator",
        "url": "/options-profit/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "options profit options profit calculator trading trading formula finance calculator nifty banknifty stock trading derivatives calls puts payoff greeks delta theta gamma vega iv implied volatility margin"
    },
    {
        "name": "P2P Lending Net Return Calculator",
        "url": "/peer-to-peer-p2p-lending-returns/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "peer to peer p2p lending returns p2p lending net return calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Passive Income Calculator",
        "url": "/passive-income/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "passive income passive income calculator planning planning formula finance calculator"
    },
    {
        "name": "Payback Period Calculator",
        "url": "/payback-period-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "payback period calculator payback period calculator business business formula finance calculator"
    },
    {
        "name": "PEG Ratio Calculator",
        "url": "/peg-ratio-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "peg ratio calculator peg ratio calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Percentage Calculator",
        "url": "/percentage/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "percentage percentage calculator personal personal formula finance calculator"
    },
    {
        "name": "Personal Loan EMI Calculator",
        "url": "/personal-loan-emi/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "personal loan emi personal loan emi calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "PF Withdrawal Taxability & TDS Calculator",
        "url": "/pf-withdrawal-taxability-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "pf withdrawal taxability calculator pf withdrawal taxability & tds calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Piotroski F-Score Calculator",
        "url": "/piotroski-score-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "piotroski score calculator piotroski f-score calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Portfolio Beta Volatility Calculator",
        "url": "/portfolio-beta/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "portfolio beta portfolio beta volatility calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Portfolio Rebalancing Calculator",
        "url": "/portfolio-rebalancing/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "portfolio rebalancing portfolio rebalancing calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Portfolio Return Calculator",
        "url": "/portfolio-return-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "portfolio return calculator portfolio return calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Position Size Calculator",
        "url": "/position-size-calculator/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "position size calculator position size calculator trading trading formula finance calculator"
    },
    {
        "name": "Post Office Monthly Income (POMIS) Calculator",
        "url": "/pomis-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "pomis calculator post office monthly income (pomis) calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Post-Tax Fixed Deposit FD Return Calculator",
        "url": "/post-tax-fd-returns/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "post tax fd returns post-tax fixed deposit fd return calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "PPF Calculator",
        "url": "/ppf/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "ppf ppf calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Pradhan Mantri Vaya Vandana Yojana PMVVY Calculator",
        "url": "/pmvvy-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "pmvvy calculator pradhan mantri vaya vandana yojana pmvvy calculator govt schemes govtschemes formula finance calculator"
    },
    {
        "name": "Pre-EMI Interest Calculator",
        "url": "/pre-emi-interest-calculator/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "pre emi interest calculator pre-emi interest calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Present Value (PV) Calculator",
        "url": "/present-value/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "present value present value (pv) calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Professional Tax Calculator (State-wise)",
        "url": "/professional-tax-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "professional tax calculator professional tax calculator (state-wise) tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Profit Margin Calculator",
        "url": "/margin-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "margin calculator profit margin calculator business business formula finance calculator"
    },
    {
        "name": "Profit Margin Calculator",
        "url": "/profit-margin/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "profit margin profit margin calculator business business formula finance calculator"
    },
    {
        "name": "Property Appreciation Calculator",
        "url": "/property-appreciation/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "property appreciation property appreciation calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Property Area & Plot Size Converter",
        "url": "/property-area-converter/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "property area converter property area & plot size converter real estate realestate formula finance calculator"
    },
    {
        "name": "Property Depreciation SLM vs WDV Calculator",
        "url": "/property-depreciation-slm-vs-wdv/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "property depreciation slm vs wdv property depreciation slm vs wdv calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Property ROI Calculator",
        "url": "/property-roi/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "property roi property roi calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Protective Put Portfolio Hedging Cost Calculator",
        "url": "/protective-put-hedge-cost/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "protective put hedge cost protective put portfolio hedging cost calculator trading trading formula finance calculator"
    },
    {
        "name": "Quick Ratio Calculator",
        "url": "/quick-ratio/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "quick ratio quick ratio calculator business business formula finance calculator"
    },
    {
        "name": "Real Estate vs Equity Calculator",
        "url": "/real-estate-vs-equity/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "real estate vs equity real estate vs equity calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Real Return Calculator",
        "url": "/real-return/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "real return real return calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Recurring Deposit (RD) Calculator",
        "url": "/rd/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "rd recurring deposit (rd) calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "REIT & InvIT Dividend Distribution Yield & Tax Calculator",
        "url": "/reit-invit-dividend-tax-yield/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "reit invit dividend tax yield reit & invit dividend distribution yield & tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "REIT & InvIT Tax Calculator",
        "url": "/reit-dividend-tax-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "reit dividend tax calculator reit & invit tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Remote vs. Office Work Savings Calculator",
        "url": "/remote-vs-office-calculator/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "remote vs office calculator remote vs. office work savings calculator personal personal formula finance calculator"
    },
    {
        "name": "Rent vs Buy Calculator",
        "url": "/rent-vs-buy-calculator/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "rent vs buy calculator rent vs buy calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Rental Yield Calculator",
        "url": "/rental-yield/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "rental yield rental yield calculator real estate realestate formula finance calculator"
    },
    {
        "name": "Required CAGR Calculator",
        "url": "/required-cagr-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "required cagr calculator required cagr calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Retirement Calculator",
        "url": "/retirement/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "retirement retirement calculator planning planning formula finance calculator fire financial independence retire early pension corpus 4 percent rule"
    },
    {
        "name": "Retirement Withdrawal Calculator",
        "url": "/retirement-withdrawal/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "retirement withdrawal retirement withdrawal calculator planning planning formula finance calculator fire financial independence retire early pension corpus 4 percent rule"
    },
    {
        "name": "Return on Capital Employed ROCE Calculator",
        "url": "/roce-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "roce calculator return on capital employed roce calculator business business formula finance calculator"
    },
    {
        "name": "Return on Equity ROE Calculator",
        "url": "/roe-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "roe calculator return on equity roe calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Risk Reward Calculator",
        "url": "/risk-reward-calculator/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "risk reward calculator risk reward calculator trading trading formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "ROI Calculator",
        "url": "/roi-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "roi calculator roi calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Rolling Returns Calculator",
        "url": "/rolling-returns/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "rolling returns rolling returns calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Rule of 72 Calculator & Guide",
        "url": "/rule-of-72/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "rule of 72 rule of 72 calculator & guide mutual funds stocks formula finance calculator"
    },
    {
        "name": "SaaS & Subscription Leak Audit Tool",
        "url": "/subscription-leak-audit/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "subscription leak audit saas & subscription leak audit tool business business formula finance calculator"
    },
    {
        "name": "SaaS Unit Economics Calculator",
        "url": "/saas-metrics-calculator/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "saas metrics calculator saas unit economics calculator business business formula finance calculator"
    },
    {
        "name": "Salary Breakup Calculator",
        "url": "/salary-breakup/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "salary breakup salary breakup calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "Salary Hike Calculator",
        "url": "/salary-hike/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "salary hike salary hike calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "Savings Bank Interest Calculator",
        "url": "/savings-bank-interest/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "savings bank interest savings bank interest calculator govt schemes govtschemes formula finance calculator"
    },
    {
        "name": "Savings Goal Calculator",
        "url": "/savings-goal/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "savings goal savings goal calculator planning planning formula finance calculator"
    },
    {
        "name": "Savings Rate Calculator",
        "url": "/savings-rate/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "savings rate savings rate calculator personal personal formula finance calculator"
    },
    {
        "name": "Section 10(37) Compulsory Land Acquisition Exemption",
        "url": "/sec-10-37-land-acquisition/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 10 37 land acquisition section 10(37) compulsory land acquisition exemption tax tax formula finance calculator land measurement converter area square feet meter yard bigha gaj acre guntha registry"
    },
    {
        "name": "Section 40(b) LLP Partner Remuneration Calculator",
        "url": "/llp-partner-remuneration-40b/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "llp partner remuneration 40b section 40(b) llp partner remuneration calculator business business formula finance calculator"
    },
    {
        "name": "Section 44AD Presumptive Tax Calculator",
        "url": "/44ad-presumptive-tax-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "44ad presumptive tax calculator section 44ad presumptive tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Section 44ADA Presumptive Tax Calculator",
        "url": "/44ada-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "44ada calculator section 44ada presumptive tax calculator tax tax formula finance calculator"
    },
    {
        "name": "Section 44AE Calculator",
        "url": "/44ae-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "44ae calculator section 44ae calculator tax tax formula finance calculator"
    },
    {
        "name": "Section 54 & 54F Tax Exemption Calculator",
        "url": "/section-54-54f-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "section 54 54f calculator section 54 & 54f tax exemption calculator tax tax formula finance calculator"
    },
    {
        "name": "Section 54B Agricultural Land Capital Gain Calculator",
        "url": "/sec-54b-agricultural-land/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 54b agricultural land section 54b agricultural land capital gain calculator tax tax formula finance calculator land measurement converter area square feet meter yard bigha gaj acre guntha registry"
    },
    {
        "name": "Section 54EC Capital Gain Bonds Tax Calculator",
        "url": "/sec-54ec-capital-gain-bonds-tax/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 54ec capital gain bonds tax section 54ec capital gain bonds tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Section 54EC Capital Gains Bond Calculator",
        "url": "/section-54ec-bond-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "section 54ec bond calculator section 54ec capital gains bond calculator tax tax formula finance calculator"
    },
    {
        "name": "Section 54F Capital Gain Exemption Calculator",
        "url": "/sec-54f-capital-gain-exemption/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 54f capital gain exemption section 54f capital gain exemption calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Section 80C Tax Saving Calculator",
        "url": "/80c-tax-saving/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "80c tax saving section 80c tax saving calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Section 80D Tax Saving Calculator",
        "url": "/80d-tax-saving-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "80d tax saving calculator section 80d tax saving calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Section 80DD Disability Dependent Tax Calculator",
        "url": "/sec-80dd-dependent-tax/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 80dd dependent tax section 80dd disability dependent tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Section 80DDB Critical Illness Medical Deduction Calculator",
        "url": "/sec-80ddb-critical-illness/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 80ddb critical illness section 80ddb critical illness medical deduction calculator tax tax formula finance calculator"
    },
    {
        "name": "Section 80E Education Loan Tax Calculator",
        "url": "/sec-80e-education-loan/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 80e education loan section 80e education loan tax calculator tax tax formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Section 80EEA Home Loan Tax Calculator",
        "url": "/sec-80eea-home-loan/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 80eea home loan section 80eea home loan tax calculator tax tax formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Section 80EEB EV Loan Interest Tax Calculator",
        "url": "/sec-80eeb-ev-loan-tax-deduction/",
        "icon": "\u26a1",
        "category": "EV & Green",
        "keys": "sec 80eeb ev loan tax deduction section 80eeb ev loan interest tax calculator ev & green ev formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Section 80EEB EV Loan Tax Calculator",
        "url": "/sec-80eeb-electric-vehicle/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 80eeb electric vehicle section 80eeb ev loan tax calculator tax tax formula finance calculator"
    },
    {
        "name": "Section 80G Donation Tax Deduction Calculator",
        "url": "/80g-donation-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "80g donation calculator section 80g donation tax deduction calculator tax tax formula finance calculator"
    },
    {
        "name": "Section 80GGA Scientific Research Donation Calculator",
        "url": "/sec-80gga-scientific-donation/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 80gga scientific donation section 80gga scientific research donation calculator tax tax formula finance calculator"
    },
    {
        "name": "Section 80TTB Senior Citizen Tax Calculator",
        "url": "/sec-80ttb-senior-citizen-tax/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 80ttb senior citizen tax section 80ttb senior citizen tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Section 80U Disability Tax Calculator",
        "url": "/sec-80u-disability-tax/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "sec 80u disability tax section 80u disability tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Section 87A Rebate Eligibility Calculator",
        "url": "/section-87a-rebate/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "section 87a rebate section 87a rebate eligibility calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Section 89 Salary Arrears Tax Relief Calculator",
        "url": "/salary-arrears-tax-relief-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "salary arrears tax relief calculator section 89 salary arrears tax relief calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "Senior Citizen Savings Scheme (SCSS) Calculator",
        "url": "/scss-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "scss calculator senior citizen savings scheme (scss) calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Sequence of Returns Risk (SRR) Simulator",
        "url": "/srr-simulator/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "srr simulator sequence of returns risk (srr) simulator planning planning formula finance calculator"
    },
    {
        "name": "Set Off and Carry Forward of Losses Calculator",
        "url": "/set-off-carry-forward-losses-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "set off carry forward losses calculator set off and carry forward of losses calculator tax tax formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "SGB Secondary Market Yield Calculator",
        "url": "/sovereign-gold-bond-secondary-market-yield/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "sovereign gold bond secondary market yield sgb secondary market yield calculator personal personal formula finance calculator"
    },
    {
        "name": "SGB vs Physical Gold vs Digital Gold Calculator",
        "url": "/gold-vs-sgb-vs-digital-gold/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "gold vs sgb vs digital gold sgb vs physical gold vs digital gold calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Share Buyback vs Dividend Tax Calculator",
        "url": "/buyback-vs-dividend-tax/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "buyback vs dividend tax share buyback vs dividend tax calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Sharpe Ratio Calculator",
        "url": "/sharpe-ratio/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "sharpe ratio sharpe ratio calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Side Income Calculator",
        "url": "/side-income/",
        "icon": "\ud83d\udc64",
        "category": "Personal",
        "keys": "side income side income calculator personal personal formula finance calculator"
    },
    {
        "name": "Simple Interest Calculator",
        "url": "/simple-interest/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "simple interest simple interest calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "SIP Calculator",
        "url": "/sip/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "sip sip calculator mutual funds stocks formula finance calculator mutual fund sip systematic investment plan compounding wealth returns"
    },
    {
        "name": "SIP Cost of Delay Calculator",
        "url": "/sip-cost-of-delay/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "sip cost of delay sip cost of delay calculator mutual funds stocks formula finance calculator mutual fund sip systematic investment plan compounding wealth returns"
    },
    {
        "name": "SIP vs FD Calculator",
        "url": "/sip-vs-fd/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "sip vs fd sip vs fd calculator govt schemes govtschemes formula finance calculator mutual fund sip systematic investment plan compounding wealth returns post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Solar + EV Home Ecosystem ROI Calculator",
        "url": "/solar-ev-ecosystem/",
        "icon": "\u26a1",
        "category": "EV & Green",
        "keys": "solar ev ecosystem solar + ev home ecosystem roi calculator ev & green ev formula finance calculator"
    },
    {
        "name": "Solar Rooftop ROI & Subsidy Calculator",
        "url": "/solar-rooftop-calculator/",
        "icon": "\u26a1",
        "category": "EV & Green",
        "keys": "solar rooftop calculator solar rooftop roi & subsidy calculator ev & green ev formula finance calculator"
    },
    {
        "name": "Sortino Ratio Calculator",
        "url": "/sortino-ratio/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "sortino ratio sortino ratio calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Sovereign Gold Bond SGB Returns Calculator",
        "url": "/sgb-returns-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "sgb returns calculator sovereign gold bond sgb returns calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Stamp Duty & Registration",
        "url": "/stamp-duty/",
        "icon": "\ud83c\udfe0",
        "category": "Real Estate",
        "keys": "stamp duty stamp duty & registration real estate realestate formula finance calculator land measurement converter area square feet meter yard bigha gaj acre guntha registry"
    },
    {
        "name": "Startup Burn Rate & Runway Calculator",
        "url": "/startup-burn-rate-runway/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "startup burn rate runway startup burn rate & runway calculator business business formula finance calculator"
    },
    {
        "name": "Step-Down EMI Calculator",
        "url": "/step-down-emi-calculator/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "step down emi calculator step-down emi calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Step-Up Loan EMI & Repayment Optimizer",
        "url": "/step-up-loan-calculator/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "step up loan calculator step-up loan emi & repayment optimizer loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Step-Up SIP Calculator",
        "url": "/step-up-sip/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "step up sip step-up sip calculator mutual funds stocks formula finance calculator mutual fund sip systematic investment plan compounding wealth returns"
    },
    {
        "name": "Stock Average Calculator",
        "url": "/stock-average/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "stock average stock average calculator trading trading formula finance calculator"
    },
    {
        "name": "Stock Pivot Point Calculator",
        "url": "/pivot-point-calculator/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "pivot point calculator stock pivot point calculator trading trading formula finance calculator"
    },
    {
        "name": "Stock Position Size Calculator",
        "url": "/stock-position-size-calculator/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "stock position size calculator stock position size calculator trading trading formula finance calculator"
    },
    {
        "name": "Stop Loss Calculator",
        "url": "/stop-loss/",
        "icon": "\ud83d\udcca",
        "category": "Trading",
        "keys": "stop loss stop loss calculator trading trading formula finance calculator nifty banknifty stock trading derivatives calls puts payoff greeks delta theta gamma vega iv implied volatility margin"
    },
    {
        "name": "STP Calculator",
        "url": "/stp-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "stp calculator stp calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Sukanya Samriddhi Yojana (SSY) Calculator",
        "url": "/ssy/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "ssy sukanya samriddhi yojana (ssy) calculator govt schemes govtschemes formula finance calculator post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "Superannuation Fund Calculator",
        "url": "/superannuation-calculator/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "superannuation calculator superannuation fund calculator salary salary formula finance calculator"
    },
    {
        "name": "Surcharge & Marginal Relief Calculator",
        "url": "/surcharge-marginal-relief-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "surcharge marginal relief calculator surcharge & marginal relief calculator tax tax formula finance calculator"
    },
    {
        "name": "SWP Calculator",
        "url": "/swp/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "swp swp calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Take Home Salary Calculator",
        "url": "/take-home-salary/",
        "icon": "\ud83d\udcb5",
        "category": "Salary",
        "keys": "take home salary take home salary calculator salary salary formula finance calculator take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "Target Amount SIP Calculator",
        "url": "/target-sip-calculator/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "target sip calculator target amount sip calculator mutual funds stocks formula finance calculator mutual fund sip systematic investment plan compounding wealth returns"
    },
    {
        "name": "Tax Loss Harvesting Calculator",
        "url": "/tax-loss-harvesting/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "tax loss harvesting tax loss harvesting calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Tax Regime Breakeven",
        "url": "/new-old-tax-breakeven/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "new old tax breakeven tax regime breakeven tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "TCS Calculator",
        "url": "/tcs-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "tcs calculator tcs calculator tax tax formula finance calculator"
    },
    {
        "name": "TDS Calculator",
        "url": "/tds-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "tds calculator tds calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "TDS Late Payment Penalty Calculator",
        "url": "/tds-late-payment-penalty-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "tds late payment penalty calculator tds late payment penalty calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "TDS on FD Interest Calculator",
        "url": "/tds-on-fd-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "tds on fd calculator tds on fd interest calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven post office govt scheme small savings tax free interest fixed deposit recurring sukanya samriddhi ssy girl child scheme"
    },
    {
        "name": "TDS on Property Sale (Section 194-IA) Calculator",
        "url": "/tds-on-property-sale-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "tds on property sale calculator tds on property sale (section 194-ia) calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "TDS on Rent (Sec 194-IB) Calculator",
        "url": "/tds-on-rent-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "tds on rent calculator tds on rent (sec 194-ib) calculator tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "TDS on Salary Calculator (Section 192)",
        "url": "/tds-on-salary-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "tds on salary calculator tds on salary calculator (section 192) tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven take home pay net salary gross deduction ctc epf pf gratuity hra rent allowance"
    },
    {
        "name": "Term Insurance Calculator",
        "url": "/term-insurance-calculator/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "term insurance calculator term insurance calculator planning planning formula finance calculator"
    },
    {
        "name": "Time to Financial Freedom Calculator",
        "url": "/time-to-financial-freedom/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "time to financial freedom time to financial freedom calculator planning planning formula finance calculator"
    },
    {
        "name": "Time Value of Money Calculator",
        "url": "/time-value-of-money/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "time value of money time value of money calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Treasury Bills (T-Bill) Yield Calculator",
        "url": "/tbill-yield-calculator/",
        "icon": "\ud83c\udfdb\ufe0f",
        "category": "Govt Schemes",
        "keys": "tbill yield calculator treasury bills (t-bill) yield calculator govt schemes govtschemes formula finance calculator"
    },
    {
        "name": "Treynor Ratio Calculator",
        "url": "/treynor-ratio/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "treynor ratio treynor ratio calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "Trust & NGO Tax Calculator (Sec 11)",
        "url": "/trust-tax-calculator/",
        "icon": "\ud83d\udcd1",
        "category": "Tax",
        "keys": "trust tax calculator trust & ngo tax calculator (sec 11) tax tax formula finance calculator income tax itr deduction exemption slab regime budget 87a 80c 80d capital gains surcharge cess old new breakeven"
    },
    {
        "name": "Two-Wheeler Loan EMI Calculator",
        "url": "/two-wheeler-loan-emi/",
        "icon": "\ud83d\udcb3",
        "category": "Loans",
        "keys": "two wheeler loan emi two-wheeler loan emi calculator loans loans formula finance calculator emi interest amortization principal repayment tenure bank cibil score credit"
    },
    {
        "name": "Vacation Goal Calculator",
        "url": "/vacation-goal/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "vacation goal vacation goal calculator planning planning formula finance calculator"
    },
    {
        "name": "WACC Calculator",
        "url": "/wacc/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "wacc wacc calculator business business formula finance calculator"
    },
    {
        "name": "Wealth Projection Calculator",
        "url": "/wealth-projection/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "wealth projection wealth projection calculator planning planning formula finance calculator"
    },
    {
        "name": "Wedding Cost & Marriage Planner",
        "url": "/marriage-planner/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "marriage planner wedding cost & marriage planner planning planning formula finance calculator"
    },
    {
        "name": "Wedding Expense & Inflation Planner ( Edition)",
        "url": "/wedding-inflation-planner/",
        "icon": "\ud83d\udc74",
        "category": "Planning",
        "keys": "wedding inflation planner wedding expense & inflation planner ( edition) planning planning formula finance calculator"
    },
    {
        "name": "Working Capital Calculator",
        "url": "/working-capital/",
        "icon": "\ud83d\udcbc",
        "category": "Business",
        "keys": "working capital working capital calculator business business formula finance calculator"
    },
    {
        "name": "XIRR Calculator",
        "url": "/xirr/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "xirr xirr calculator mutual funds stocks formula finance calculator"
    },
    {
        "name": "XIRR vs CAGR vs Absolute Return Calculator",
        "url": "/xirr-vs-cagr-vs-absolute-return/",
        "icon": "\ud83d\udcc8",
        "category": "Mutual Funds",
        "keys": "xirr vs cagr vs absolute return xirr vs cagr vs absolute return calculator mutual funds stocks formula finance calculator"
    }
];

    let overlay, card, inputField, resultsBox;
    let selectedIndex = -1;
    let currentResults = [];

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag));
    }

    function highlightMatches(text, queryTokens) {
        if (!queryTokens || queryTokens.length === 0) return escapeHTML(text);
        let escaped = escapeHTML(text);
        queryTokens.forEach(token => {
            if (!token) return;
            const regex = new RegExp(`(${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
            escaped = escaped.replace(regex, '<span class="text-blue-600 font-extrabold underline decoration-blue-300">$1</span>');
        });
        return escaped;
    }

    function createOverlayDOMFramework() {
        if (document.getElementById("globalSearchOverlay")) return;

        const container = document.createElement("div");
        container.id = "globalSearchOverlay";
        container.className = "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] hidden items-start justify-center p-3 sm:p-6 md:p-10 opacity-0 transition-opacity duration-200";
        container.style.boxSizing = "border-box";
        container.innerHTML = `
            <div class="bg-white w-full max-w-2xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden mt-4 sm:mt-8 flex flex-col max-h-[85vh] transform scale-95 transition-transform duration-200" id="globalSearchCard" style="box-sizing: border-box;">
                <!-- Search Input Header -->
                <div class="p-3.5 sm:p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50/70">
                    <div class="text-blue-600 shrink-0">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="text" id="globalSearchInputField" placeholder="Search 300+ calculators (e.g. sip, income tax, emi, 87a, ctc)..." class="w-full bg-transparent text-slate-800 placeholder-slate-400 font-semibold text-sm sm:text-base focus:outline-none" style="border: none !important; outline: none !important; box-shadow: none !important; padding: 4px 0 !important; width: 100% !important; background: transparent !important; display: block !important;" autocomplete="off" spellcheck="false">
                    <button id="closeSearchBtn" class="text-xs bg-slate-200 hover:bg-slate-300 text-slate-600 font-bold px-2.5 py-1.5 rounded-lg uppercase tracking-wider transition-colors shrink-0">Esc</button>
                </div>

                <!-- Search Results Scroll Box -->
                <div class="flex-1 overflow-y-auto p-2 sm:p-3 space-y-1 bg-white flex flex-col items-stretch divide-y divide-slate-50" id="globalSearchResultsContainer" style="max-height: 58vh;">
                    <!-- Rendered Dynamically -->
                </div>

                <!-- Search Footer Help -->
                <div class="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex flex-wrap justify-between items-center text-[10px] sm:text-xs font-medium text-slate-400 shrink-0 gap-2">
                    <div class="flex items-center gap-2">
                        <span class="inline-flex items-center gap-1"><kbd class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-mono text-[9px]">↑</kbd><kbd class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-mono text-[9px]">↓</kbd> Navigate</span>
                        <span class="inline-flex items-center gap-1"><kbd class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-mono text-[9px]">↵</kbd> Select</span>
                        <span class="inline-flex items-center gap-1"><kbd class="bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-mono text-[9px]">Esc</kbd> Close</span>
                    </div>
                    <div class="flex items-center gap-1.5 font-bold text-slate-500">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        300+ Verified Calculators
                    </div>
                </div>
            </div>`;
        document.body.appendChild(container);

        overlay = document.getElementById("globalSearchOverlay");
        card = document.getElementById("globalSearchCard");
        inputField = document.getElementById("globalSearchInputField");
        resultsBox = document.getElementById("globalSearchResultsContainer");

        inputField.addEventListener("input", executeFilterQuery);
        inputField.addEventListener("keydown", handleKeyNavigation);
        document.getElementById("closeSearchBtn").addEventListener("click", hideModalContext);
        overlay.addEventListener("click", (e) => { if (e.target === overlay) hideModalContext(); });
    }

    function renderDefaultQuickLaunches() {
        const popularSlugs = ["/income-tax/", "/in-hand-salary/", "/step-up-sip/", "/home-loan/", "/ppf/", "/gst/"];
        currentResults = catalog.filter(c => popularSlugs.includes(c.url));
        selectedIndex = -1;

        let html = `
            <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2 text-left flex items-center justify-between">
                <span>⭐ Suggested Quick Launches</span>
                <span class="text-[10px] text-slate-400 font-normal">Popular Calculators</span>
            </div>`;

        currentResults.forEach((item, idx) => {
            html += `
                <a href="${item.url}" class="search-result-item flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/80 transition-colors text-left group" data-index="${idx}">
                    <div class="flex items-center gap-3 min-w-0">
                        <span class="text-lg shrink-0 group-hover:scale-110 transition-transform">${item.icon}</span>
                        <div class="flex flex-col min-w-0">
                            <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">${escapeHTML(item.name)}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">${item.category}</span>
                        <span class="text-[11px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block">Launch ↵</span>
                    </div>
                </a>`;
        });

        resultsBox.innerHTML = html;
    }

    function executeFilterQuery(e) {
        const rawQuery = (e ? e.target.value : (inputField ? inputField.value : "")).trim();
        if (rawQuery.length === 0) {
            renderDefaultQuickLaunches();
            return;
        }

        const queryTokens = rawQuery.toLowerCase().split(/\s+/).filter(t => t.length > 0);

        // Advanced Multi-Word Scoring & Ranking Engine
        let scored = [];
        for (let i = 0; i < catalog.length; i++) {
            const item = catalog[i];
            const nameLower = item.name.toLowerCase();
            const urlLower = item.url.toLowerCase();
            const keysLower = (item.keys || "").toLowerCase();
            const catLower = (item.category || "").toLowerCase();

            let score = 0;
            let matchedAllTokens = true;

            // Exact full phrase bonus
            if (nameLower === rawQuery.toLowerCase()) {
                score += 150;
            } else if (nameLower.startsWith(rawQuery.toLowerCase())) {
                score += 80;
            }

            for (let j = 0; j < queryTokens.length; j++) {
                const token = queryTokens[j];
                let tokenMatched = false;

                if (nameLower.includes(token)) {
                    tokenMatched = true;
                    // Extra bonus if word starts with token
                    if (new RegExp(`\\b${token}`, 'i').test(nameLower)) {
                        score += 45;
                    } else {
                        score += 30;
                    }
                }

                if (urlLower.includes(token)) {
                    tokenMatched = true;
                    score += 25;
                }

                if (keysLower.includes(token)) {
                    tokenMatched = true;
                    score += 15;
                }

                if (catLower.includes(token)) {
                    tokenMatched = true;
                    score += 10;
                }

                if (!tokenMatched) {
                    matchedAllTokens = false;
                    break;
                }
            }

            if (matchedAllTokens && score > 0) {
                scored.push({ item, score });
            }
        }

        // Sort descending by score
        scored.sort((a, b) => b.score - a.score);
        currentResults = scored.slice(0, 15).map(x => x.item);
        selectedIndex = currentResults.length > 0 ? 0 : -1;

        if (currentResults.length === 0) {
            resultsBox.innerHTML = `
                <div class="py-10 text-center text-slate-500">
                    <div class="text-3xl mb-2">🔍</div>
                    <div class="text-sm font-bold text-slate-800">No calculators found for "${escapeHTML(rawQuery)}"</div>
                    <div class="text-xs text-slate-400 mt-1">Try searching for: <span class="text-blue-600 font-semibold cursor-pointer hover:underline" onclick="document.getElementById('globalSearchInputField').value='sip'; document.getElementById('globalSearchInputField').dispatchEvent(new Event('input'))">sip</span>, <span class="text-blue-600 font-semibold cursor-pointer hover:underline" onclick="document.getElementById('globalSearchInputField').value='tax'; document.getElementById('globalSearchInputField').dispatchEvent(new Event('input'))">tax</span>, <span class="text-blue-600 font-semibold cursor-pointer hover:underline" onclick="document.getElementById('globalSearchInputField').value='emi'; document.getElementById('globalSearchInputField').dispatchEvent(new Event('input'))">emi</span>, <span class="text-blue-600 font-semibold cursor-pointer hover:underline" onclick="document.getElementById('globalSearchInputField').value='salary'; document.getElementById('globalSearchInputField').dispatchEvent(new Event('input'))">salary</span>, <span class="text-blue-600 font-semibold cursor-pointer hover:underline" onclick="document.getElementById('globalSearchInputField').value='ppf'; document.getElementById('globalSearchInputField').dispatchEvent(new Event('input'))">ppf</span></div>
                </div>`;
            return;
        }

        let html = `
            <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-2 text-left flex items-center justify-between">
                <span>Found ${currentResults.length} Relevant Results</span>
                <span class="text-[10px] text-slate-400 font-normal">Use ↑↓ to navigate</span>
            </div>`;

        currentResults.forEach((item, idx) => {
            const isSelected = idx === selectedIndex;
            const activeClass = isSelected ? 'bg-blue-50/90 border-blue-200' : 'border-transparent hover:bg-slate-50';
            const highlightedName = highlightMatches(item.name, queryTokens);

            html += `
                <a href="${item.url}" class="search-result-item flex items-center justify-between p-3 rounded-xl border ${activeClass} transition-colors text-left group" data-index="${idx}">
                    <div class="flex items-center gap-3 min-w-0">
                        <span class="text-lg shrink-0 group-hover:scale-110 transition-transform">${item.icon}</span>
                        <div class="flex flex-col min-w-0">
                            <span class="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors truncate">${highlightedName}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-2 shrink-0">
                        <span class="text-[10px] font-bold text-slate-600 bg-slate-100 group-hover:bg-blue-100 group-hover:text-blue-700 px-2 py-0.5 rounded-md transition-colors">${item.category}</span>
                        <span class="text-[11px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block">Launch ↵</span>
                    </div>
                </a>`;
        });

        resultsBox.innerHTML = html;
        updateItemHighlight();
    }

    function updateItemHighlight() {
        const items = resultsBox.querySelectorAll(".search-result-item");
        items.forEach((el, idx) => {
            if (idx === selectedIndex) {
                el.classList.add("bg-blue-50/90", "border-blue-200");
                el.classList.remove("border-transparent");
                el.scrollIntoView({ block: "nearest" });
            } else {
                el.classList.remove("bg-blue-50/90", "border-blue-200");
                el.classList.add("border-transparent");
            }
        });
    }

    function handleKeyNavigation(e) {
        if (!currentResults || currentResults.length === 0) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % currentResults.length;
            updateItemHighlight();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + currentResults.length) % currentResults.length;
            updateItemHighlight();
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (selectedIndex >= 0 && selectedIndex < currentResults.length) {
                window.location.href = currentResults[selectedIndex].url;
            } else if (currentResults.length > 0) {
                window.location.href = currentResults[0].url;
            }
        }
    }

    window.showModalContext = function() {
        if (!overlay) createOverlayDOMFramework();
        overlay.classList.remove("hidden");
        overlay.classList.add("flex");
        setTimeout(() => {
            overlay.classList.remove("opacity-0");
            card.classList.remove("scale-95");
            if (inputField) {
                inputField.focus();
                inputField.select();
                renderDefaultQuickLaunches();
            }
        }, 30);
        document.body.style.overflow = "hidden";
    };

    window.hideModalContext = function() {
        if (!overlay) return;
        overlay.classList.add("opacity-0");
        card.classList.add("scale-95");
        setTimeout(() => {
            overlay.classList.remove("flex");
            overlay.classList.add("hidden");
        }, 200);
        document.body.style.overflow = "";
        if (inputField) inputField.value = "";
    };

    // Global Event Delegation for Search Triggers
    document.addEventListener("click", function(event) {
        if (!event.target) return;
        if (event.target.id === "desktopSearchTrigger" || event.target.closest("#mobileSearchTrigger") || event.target.closest("[data-search-trigger]")) {
            event.preventDefault();
            window.showModalContext();
        }
    });

    // Global Hotkeys (Cmd+K, Ctrl+K, Esc)
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            window.hideModalContext();
        }
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            window.showModalContext();
        }
    });
})();
