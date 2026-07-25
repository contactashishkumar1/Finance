/**
 * ArthCalculator.in - Global Search Overlay & Autocomplete Engine
 * Asset Path Location: /js/search.js
 * Standalone single-file controller containing only sitemap-verified tools.
 */
(function() {
    // Exact Database Index Map - Extracted Directly From Your Sitemap XML
    const catalog = [
        { name: "platform Home Dashboard", url: "/", icon: "🏢", keys: "home main platform financial indices dashboard" },
        { name: "All Calculators Directory", url: "/calculators/", icon: "📂", keys: "all tools complete list directory index core calculators" },
        { name: "About Us Workspace", url: "/about/", icon: "ℹ️", keys: "about profile ca ashish jain contact information platform team" },
        { name: "50-30-20 Budget Rule Plan", url: "/50-30-20-rule/", icon: "📊", keys: "50 30 20 rule budget planning personal savings needs wants salary allocation" },
        { name: "Advance Tax Installments Planner", url: "/advance-tax/", icon: "🗓️", keys: "advance tax estimated liabilities self employed salaried penalty calculation compliance returns quarterly" },
        { name: "Alpha Investment Portfolio Yield", url: "/alpha/", icon: "⚡", keys: "alpha portfolio return asset metric outperformance market benchmark mutual funds" },
        { name: "Asset Allocation Model Tracker", url: "/asset-allocation/", icon: "⚖️", keys: "asset allocation diversification portfolio risk rebalancing equity debt gold" },
        { name: "Beta System Market Risk Metric", url: "/beta/", icon: "📉", keys: "beta market risk volatility portfolio benchmark capm metrics tracking shares" },
        { name: "Bonus Share Sizing Calculator", url: "/bonus-calculator/", icon: "➕", keys: "bonus calculator corporate action share dilution equity issuance ratios" },
        { name: "Break Even Sales Volume Engine", url: "/break-even-calculator/", icon: "🎯", keys: "break even margin fixed variable fixed costs quantities pricing product manufacturing profit" },
        { name: "Brokerage & P&L Tool", url: "/brokerage-calculator/", icon: "🖥️", keys: "brokerage pnl trading margin profit delivery intraday zerodha angel fno taxes exchange" },
        { name: "Budget Planner Tracker", url: "/budget-planner/", icon: "📝", keys: "budget allocation planning salary tracker tracking costs bucket management tools envelope" },
        { name: "CAGR Growth Rate Calculator", url: "/cagr/", icon: "📊", keys: "cagr compound annual growth rate portfolio return business analytics percentage valuation stocks point" },
        { name: "Capital Gains Tax Estimator", url: "/capital-gains-tax/", icon: "📑", keys: "capital gains tax stcg ltcg long short term shares property mutual funds indexation 112a holding calculations" },
        { name: "Car Lease vs Buy Evaluator", url: "/car-lease-vs-buy/", icon: "⚖️", keys: "car lease vs buy vehicle leasing corporate tax shield depreciation purchase options" },
        { name: "Car Loan Monthly Re-payments", url: "/car-loan/", icon: "🚗", keys: "car vehicle auto transport loan emi interest reducing rate tenure downpayment bike dealership purchase" },
        { name: "Car Purchase Finance Suitability", url: "/car-purchase/", icon: "🚘", keys: "car purchase asset budget affordability auto loan downpayment parameters processing" },
        { name: "Carbon Credit Project Valuation", url: "/carbon-credit-valuation/", icon: "🌿", keys: "carbon credit offset project valuation green offsets pricing tree planting standard monetization metrics" },
        { name: "Child Education Planner Roadmap", url: "/child-education-planner/", icon: "🎓", keys: "child education costs future higher studies collages international admission inflation savings growth milestones" },
        { name: "Commission Percentage Calculator", url: "/commission-calculator/", icon: "💰", keys: "commission scale revenue retail margin agency payload pricing payouts" },
        { name: "Compound Interest Calculator", url: "/compound-interest/", icon: "⏳", keys: "compound interest compounding savings asset growth wealth calculation monthly yearly continuous" },
        { name: "Contribution Margin Analyzer", url: "/contribution-margin/", icon: "📈", keys: "contribution margin variable costs variable profiling profitability break even cogs units" },
        { name: "Corporate Cost of Debt Calculator", url: "/cost-of-debt/", icon: "💸", keys: "cost of debt weighted post tax interest premium bonds yield corporate balance sheets tracking models" },
        { name: "CAPM Cost of Equity Finder", url: "/cost-of-equity/", icon: "📊", keys: "cost of equity capm beta risk free rate market premium hurdle discount valuation analytics models" },
        { name: "Credit Card Interest Loop Tracker", url: "/credit-card-interest/", icon: "💳", keys: "credit card interest debt trap roll over monthly compounding penal cash advances finance charges" },
        { name: "Credit Card Rewards Point Solver", url: "/credit-card-rewards/", icon: "🎁", keys: "credit card rewards points cashback monetization mile collection travel perks processing" },
        { name: "Crorepati Financial Milestone Plan", url: "/crorepati-calculator/", icon: "👑", keys: "crorepati timeline target savings monthly goal tracking compounding wealth milestone timelines speed models" },
        { name: "CTC to In-Hand Salary Optimizer", url: "/ctc-to-in-hand/", icon: "👔", keys: "ctc to in hand gross monthly take home deductions epf gratuity allowances tax structure" },
        { name: "Current Ratio Liquidity Health", url: "/current-ratio/", icon: "📏", keys: "current ratio corporate liquidity asset liabilities balance sheet health accounting criteria" },
        { name: "DCF Intrinsic Equity Valuation", url: "/dcf/", icon: "💎", keys: "dcf discounted cash flow intrinsic true fair value stocks valuation enterprise projections wacc growth terminal multiplier" },
        { name: "Debt Payoff Avalanche vs Snowball Planner", url: "/debt-payoff/", icon: "📅", keys: "debt payoff reduction planner avalanche snowball card consolidation tracking payments schedules liabilities" },
        { name: "Debt-to-Equity Corporate Ratio", url: "/debt-to-equity/", icon: "⚖️", keys: "debt to equity ratio leverage corporate metrics solvency profile capital balance tracking" },
        { name: "Debt-to-Income (DTI) Ratio Planner", url: "/debt-to-income/", icon: "📊", keys: "dti debt to income ratio credit score loan eligibility banking compliance leverage limits tracking" },
        { name: "Platform Legal Disclaimer", url: "/disclaimer/", icon: "⚖️", keys: "disclaimer rules validation compliance chartered accountant standard information terms" },
        { name: "Dividend Growth Projections Model", url: "/dividend-growth/", icon: "💹", keys: "dividend growth ddm valuation constant compounding returns pricing streams projections" },
        { name: "Dividend Yield Portfolio Tracker", url: "/dividend-yield/", icon: "🎟️", keys: "dividend yield payout tracking portfolio income passive stock cash flow" },
        { name: "DSCR Debt Service Coverage Ratio", url: "/dscr/", icon: "💰", keys: "dscr debt service coverage ratio corporate loans banking leverage solvency tracking limits capacity cash flow" },
        { name: "EBITDA Operating Profit Calculator", url: "/ebitda/", icon: "📊", keys: "ebitda operating earnings interest tax depreciation amortization corporate financial health corporate margin margins" },
        { name: "Education Loan Moratorium Planner", url: "/education-loan-moratorium/", icon: "🎒", keys: "education loan moratorium student study abroad interest accrual collateral university funding emi" },
        { name: "EMI Loan Calculation Engine", url: "/emi/", icon: "💳", keys: "emi loan repayment reduction home personal car reducing absolute total interest schedule chart breakdown" },
        { name: "Enterprise Valuation (EV) Engine", url: "/enterprise-value/", icon: "🏢", keys: "enterprise value ev market cap debt cash adjustments multiples corporate valuation takeover pricing acquisition metrics" },
        { name: "EPF Retirement Accumulation Corpus", url: "/epf/", icon: "💼", keys: "epf provident fund employee corporate salary contributions balance check interest voluntary retirement pf passbook" },
        { name: "ESOP Perquisite Option Calculator", url: "/esop-calculator/", icon: "📂", keys: "esop valuation pool equity grants lookup company stocks pricing perquisites" },
        { name: "ESOP Future Value Simulator", url: "/esop-simulator/", icon: "🚀", keys: "esop simulation strike price fmv growth trajectory tech equity projections valuation" },
        { name: "EV Battery Replacement Fund Planner", url: "/ev-battery-fund-planner/", icon: "🔋", keys: "ev battery fund replacement degradation pricing compound savings future costs vehicle life metrics sinking" },
        { name: "EV vs ICE Powertrain Lifecycle Comparison", url: "/ev-vs-petrol/", icon: "🔋", keys: "ev hybrid ice petrol diesel gas vehicle comparison running maintenance tco depreciation long term" },
        { name: "EV vs Petrol Cost Per Kilometer TCO", url: "/ev-vs-petrol-cost/", icon: "⚡", keys: "ev electronic vehicle petrol cost km tco running mileage battery lifespan engine comparison fuel pricing car buy" },
        { name: "Expense Ratio Impact Calculator", url: "/expense-ratio/", icon: "📉", keys: "expense ratio mutual fund fees direct vs regular returns tracking commission costs drag wealth" },
        { name: "Expense Budget Audit Tracker", url: "/expense-tracker/", icon: "🛒", keys: "expense tracking budget leakage outflow spending cash management parameters" },
        { name: "FD Calculator (Fixed Deposit)", url: "/fd/", icon: "🏦", keys: "fd fixed deposit banking safe returns interest monthly payout compounding sbi bank saving post office" },
        { name: "Financial Goal Planner Architecture", url: "/financial-goal-planner/", icon: "🎯", keys: "financial goal planner timeline corpus requirements multi asset allocation targeting" },
        { name: "Financial Independence Target Grid", url: "/financial-independence/", icon: "🏁", keys: "financial independence corpus runaway metrics fire multiplier safe withdrawal models" },
        { name: "Degree of Financial Leverage (DFL)", url: "/financial-leverage/", icon: "🧱", keys: "dfl degree financial leverage debt equity structure risk tracking solvency parameters eps ebit volatility" },
        { name: "FIRE Financial Freedom Planner", url: "/fire-calculator/", icon: "🔥", keys: "fire early retirement independence fast savings tracking safe withdrawal multiplier expense projections cash" },
        { name: "Fixed vs Floating Interest Rate Switcher", url: "/fixed-vs-floating-rate/", icon: "⚖️", keys: "fixed floating interest rates rbi repo rate linked mclr home loan market volatility benchmarking" },
        { name: "Flat vs Reducing Interest Rate Calculator", url: "/flat-vs-reducing-rate/", icon: "📉", keys: "flat versus reducing interest rate calculation banking processing fee real yield hidden costs" },
        { name: "Foreign Tax FTC Compliance Optimizer", url: "/foreign-tax-optimizer/", icon: "🌐", keys: "foreign tax credit dtaa form 67 income global tracking compliance options withholding" },
        { name: "Freelancer vs Salaried Tax Analyzer", url: "/freelancer-vs-salaried/", icon: "💼", keys: "freelancer vs salaried 44ad business expenses presumptive taxation 192 standard structure profile" },
        { name: "Futures Derivatives Profit Planner", url: "/futures-profit/", icon: "📈", keys: "futures profit derivative margin leverage lot size mark to market fno contract pricing options" },
        { name: "GST Calculator India (Goods & Services)", url: "/gst/", icon: "📦", keys: "gst gross item cgst sgst igst net product bills invoices manufacturing business taxation central slabs text input" },
        { name: "Health Insurance Evaluator Tool", url: "/health-insurance-evaluator/", icon: "🏥", keys: "health insurance claim premium top up super copay tracking metrics safety parameters" },
        { name: "HLV Human Life Value Assessment", url: "/hlv-calculator/", icon: "🧬", keys: "hlv human life value insurance coverage required liabilities target savings income multiplier" },
        { name: "Home Loan Eligibility & Amortization", url: "/home-loan/", icon: "🏠", keys: "home loan eligibility processing house flat property builder bank sbi interest mortgages balance asset buy" },
        { name: "Home Loan Balance Transfer (HLBT)", url: "/home-loan-balance-transfer/", icon: "🔄", keys: "hlbt home loan balance transfer refinancing interest rate switch processing fees bank switching" },
        { name: "HRA Tax Exemption Finder", url: "/hra/", icon: "🔑", keys: "hra house rent allowance standard exemption salary structure proof metrics savings real house landlords text sheet" },
        { name: "Income Tax Regime Planner India", url: "/income-tax/", icon: "📑", keys: "income tax old regime new slab deductions standard deduction tax brackets standard rebates exemptions calculation budget" },
        { name: "Inflation-Adjusted Salary Matrix", url: "/inflation-adjusted-salary-calculator/", icon: "👔", keys: "inflation adjusted salary purchasing power decrement hike metric real payouts trajectory" },
        { name: "Intraday Profit Analyzer", url: "/intraday-profit-calculator/", icon: "🔥", keys: "intraday profit shares equity volume leverage square off daily setup quick points scale risk stop target" },
        { name: "Interest Coverage Ratio (ICR)", url: "/interest-coverage/", icon: "🧱", keys: "icr interest coverage ratio solvency safety margins ebit borrowing bank health monitoring credit profile" },
        { name: "IRR Internal Rate of Return Engine", url: "/irr-calculator/", icon: "⏳", keys: "irr return metric yield hurdle cash outflow capital budgeting project timeline validation" },
        { name: "Remaining Loan Balance Calculator", url: "/loan-balance-calculator/", icon: "⚖️", keys: "remaining loan balance tracking amortization schedule paid off principal interest outstanding metrics" },
        { name: "Loan Eligibility Tester", url: "/loan-eligibility/", icon: "🆗", keys: "loan eligibility criteria salary tracking banking profile score limits multiplier" },
        { name: "Loan Prepayment & Interest Saver", url: "/loan-prepayment/", icon: "⚡", keys: "loan prepayment early payoff extra emi tenure reduction interest savings bank closing debt tracker" },
        { name: "Lumpsum Investment Compound Growth", url: "/lumpsum/", icon: "💰", keys: "lumpsum one time investment wealth compounding mf stock returns mutual fund compounding future value" },
        { name: "Gross & Net Profit Margin Analyzer", url: "/margin-calculator/", icon: "📏", keys: "gross profit net margin pricing cost of goods sold cogs analytics wholesale distribution revenues markups" },
        { name: "Mortgage Refinance Amortization", url: "/mortgage-balance/", icon: "🏠", keys: "mortgage balance property equity borrowing tracking closing valuation bank statements refinancing" },
        { name: "Portfolio Overlap Finder", url: "/portfolio-overlap/", icon: "📂", keys: "portfolio overlap mutual fund diversification holdings stock concentration tracking assets direct equity" },
        { name: "Net Worth Liquidity Asset Ledger", url: "/net-worth/", icon: "👑", keys: "net worth wealth personal equity sheet liability land bank liquid balance gold calculations tracking metric records" },
        { name: "NPS Retirement Accumulation Engine", url: "/nps/", icon: "👴", keys: "nps tier 1 mutual annuity pension calculation retirement allocation options equity debt safe corporate" },
        { name: "No Cost EMI Hidden Charges Checker", url: "/no-cost-emi/", icon: "🏷️", keys: "no cost emi zero interest processing fee hidden processing discount upfront gst calculations retail" },
        { name: "Options Trading Premium Profit Calc", url: "/options-profit/", icon: "📊", keys: "options calls puts multi strategy options writing premium breakdown risk premium payoff grid" },
        { name: "Degree of Operating Leverage (DOL)", url: "/operating-leverage/", icon: "🏗️" , keys: "dol operating leverage fixed asset fixed costs break even operational asset business metrics volatility" },
        { name: "Passive Income Streams Designer", url: "/passive-income/", icon: "🏖️", keys: "passive income dividend yield rent interest royalties wealth side hustle cash generation models tracking" },
        { name: "Investment Payback Period Calculator", url: "/payback-period-calculator/", icon: "🕰️", keys: "payback period calculation capital budgeting corporate project cash flows break even timelines yields metrics" },
        { name: "Basic Percentage Metric Tool", url: "/percentage/", icon: "🧮", keys: "percentage absolute markup margin simple division mathematics tools calculation metrics" },
        { name: "Portfolio Rebalancing Matrix", url: "/portfolio-rebalancing/", icon: "🔄", keys: "portfolio rebalancing allocation deviation standard limits target layout buy sell equity debt allocation" },
        { name: "PPF Wealth Accumulator", url: "/ppf/", icon: "🛡️", keys: "ppf public provident fund government savings scheme tax free safe interest post office" },
        { name: "Present Value (PV) Calculator", url: "/present-value/", icon: "📉", keys: "present value pv discounting discounted cash flows time value money analytics liability calculations" },
        { name: "Profit Margin Workspace", url: "/profit-margin/", icon: "📈", keys: "profit margin business markup corporate return cogs cost analysis model tracking" },
        { name: "Quick Ratio Acid Test Liquidity", url: "/quick-ratio/", icon: "⚡", keys: "quick ratio liquidity current assets liquid assets cash accounting balance sheet" },
        { name: "Real Rate of Return Calculator", url: "/real-return/", icon: "📉", keys: "real rate return net of inflation purchasing power investment true gains yields adjusted calculation" },
        { name: "RD Calculator (Recurring Deposit)", url: "/rd/", icon: "⏳", keys: "rd recurring deposit banks post office monthly savings schemes installment compounding interest safely" },
        { name: "Retirement Target Corpus Metrics", url: "/retirement/", icon: "👴", keys: "retirement planning age life longevity inflation corpus pensions annuity monthly costs expenses milestones" },
        { name: "Risk-Reward Position Ratio Tool", url: "/risk-reward-calculator/", icon: "⚖️", keys: "risk reward trading target parameters stops points win rate probability models" },
        { name: "ROI Financial Return on Investment", url: "/roi-calculator/", icon: "📊", keys: "roi performance yield compounding return absolute net gain tracking metrics" },
        { name: "Real Estate Rule of 72 Doubling Time", url: "/rule-of-72/", icon: "🔢", keys: "rule of 72 compounding double timeline quick estimation interest division" },
        { name: "Salary Hike Percentage Estimator", url: "/salary-hike/", icon: "🚀", keys: "salary hike appraisal increment current layout benchmark future payout" },
        { name: "Salary Structure Component Breakdown", url: "/salary-breakup/", icon: "👔", keys: "salary markup ctc structure allowances basic components in hand mapping parameters" },
        { name: "Savings Goal Accumulation Pipeline", url: "/savings-goal/", icon: "🎯", keys: "savings target future value time horizon monthly contribution required math tools" },
        { name: "Sharpe Ratio Volatility Return Metric", url: "/sharpe-ratio/", icon: "📊", keys: "sharpe risk adjusted portfolio return mutual fund evaluation metrics tracking variance" },
        { name: "SIP Calculator (Systematic Investment Plan)", url: "/sip/", icon: "📈", keys: "sip mutual fund investment returns compounding points step up systematic return planning mf allocation" },
        { name: "SIP vs FD Comparison Matrix", url: "/sip-vs-fd/", icon: "⚔️", keys: "sip vs fd fixed deposit mutual fund yield returns risk vs reward contrast" },
        { name: "Solar Rooftop Subsidy & Investment ROI", url: "/solar-rooftop-calculator/", icon: "☀️", keys: "solar rooftop subsidy light electricity bills cost savings government benchmark panel mnre structure power grid setup" },
        { name: "Step-Up Loan Amortization Engine", url: "/step-up-loan-calculator/", icon: "🪜", keys: "step up loan variable emi principal scaling moratorium bank layout tracking options" },
        { name: "Step-Up SIP Calculator", url: "/step-up-sip/", icon: "🚀", keys: "step up incremental sip salary hike increase top up compounding mutual fund investment allocation" },
        { name: "Stock Buy Average Cost Adjuster", url: "/stock-average/", icon: "🔄", keys: "stock buy cost average compounding scale down allocation equity matrix portfolio tracking" },
        { name: "Stop Loss Position Sizer Risk Tool", url: "/stop-loss/", icon: "🛑", keys: "stop loss buffer trading targets point calculation dynamic metrics management risk" },
        { name: "Subscription Leak & Cost Auditor", url: "/subscription-leak-audit/", icon: "🔍", keys: "subscription audit leak hidden costs monthly app recurring bill monitoring processing software digital optimization" },
        { name: "Sukanya Samriddhi Yojana (SSY) Growth", url: "/ssy/", icon: "👧", keys: "ssy sukanya samriddhi yojana girl child savings government schemes post office compounding fixed interest returns" },
        { name: "SWP Planner (Systematic Withdrawal Plan)", url: "/swp/", icon: "🏧", keys: "swp systematic withdrawal plan retirement regular monthly cash income payout mutual fund dividends annuity" },
        { name: "Take Home Net Income Calculator", url: "/take-home-salary/", icon: "💵", keys: "take home salary professional taxes gross deduction monthly net payload tracking options" },
        { name: "Tax Loss Harvesting Optimizer", url: "/tax-loss-harvesting/", icon: "🌾", keys: "tax loss harvesting capital offset balancing equity delivery set off short long losses share adjustments" },
        { name: "TDS Compliance Metric Sheet", url: "/tds-calculator/", icon: "✂️", keys: "tds tax deducted at source threshold salary interest rent professionals freelancers withholding tax compliance" },
        { name: "Time Value of Money (TVM) Tool", url: "/time-value-of-money/", icon: "⏳", keys: "tvm time value money finance foundational formulas discounting cash flows compounding timelines" },
        { name: "Vacation Budget Sinking Fund Planner", url: "/vacation-goal/", icon: "✈️", keys: "vacation horizon ticket savings goals travel sinking fund bucket metrics" },
        { name: "WACC Cost of Capital Engine", url: "/wacc/", icon: "🏢", keys: "wacc weighted average cost capital corporate finance debt equity balance weights metrics structure" },
        { name: "Wedding Inflation Planner Framework", url: "/wedding-inflation-planner/", icon: "💍", keys: "wedding marriage event budget catering venue layout gold price projections horizon" },
        { name: "Wealth Projection Horizon Tool", url: "/wealth-projection/", icon: "📈", keys: "wealth trajectory balance compound projections model asset lifecycle tracking future values" },
        { name: "Working Capital Health Analyzer", url: "/working-capital/", icon: "💳", keys: "working capital current ratio liquidity short term asset liability operation profiles runway tracking diagnostics" },
        { name: "XIRR Extended Return Analyzer", url: "/xirr/", icon: "💹", keys: "xirr irr extended internal rate of return irregular cash flows sip multiple buy sell stock portfolio calculations" },
        { name: "Retail Discount Absolute Rebate Check", url: "/discount-calculator/", icon: "🏷️", keys: "discount coupon pricing retail flat rate absolute percentage markup tools" },
        { name: "Early Retirement FIRE Corpus Target", url: "/early-retirement/", icon: "🔥", keys: "early retirement freedom calculations metrics safe withdrawal limits runaways" },
        { name: "Education Cost Inflation Estimator", url: "/education-cost/", icon: "🎒", keys: "education cost timeline higher study university fee inflation increments projection" },
        { name: "Education Portfolio Roadmap Planner", url: "/education-planning/", icon: "🎓", keys: "education planning horizontal tracking milestones compound savings horizons assets" },
        { name: "Emergency Fund Buffer Builder", url: "/emergency-fund/", icon: "🛡️", keys: "emergency fund rainy day reserve liquidity liquid storage banking monthly fixed expenses safety margins" },
        { name: "Future Value (FV) Calculator", url: "/future-value/", icon: "📈", keys: "future value fv compounding inflation cash projections math money timeline wealth appreciation" },
        { name: "Goal Portfolio Asset Allocation Setup", url: "/goal-portfolio/", icon: "🎯", keys: "goal portfolio framework parameters rebalancing equity allocations metrics profile" },
        { name: "Goal Priority Weighted Matrix", url: "/goal-priority/", icon: "⚖️", keys: "goal priority timeline weights importance mapping financial strategy options framework" },
        { name: "Goal SIP Calculator System Target", url: "/goal-sip-calculator/", icon: "📈", keys: "goal systematic investment path required corpus target yield monthly allocation tools" },
        { name: "Goal Step-Up Incremental Target Tool", url: "/goal-step-up/", icon: "🚀", keys: "goal step up dynamic target increments compounding adjustments milestones tracking" },
        { name: "Gold Loan vs Personal Loan Evaluator", url: "/gold-loan-vs-personal-loan/", icon: "🏆", keys: "gold loan personal unsecured secured collateral interest comparison pawn shop jewelry pledge" },
        { name: "Gratuity Payment Calculator", url: "/gratuity/", icon: "💼", keys: "gratuity service company exit resignation terminal benefit compliance years calculation continuous structure act" },
        { name: "GST Profit Margin & Price Calculator", url: "/gst-profit-calculator/", icon: "📈", keys: "gst profit pricing markup invoice items tax inclusive exclusive distribution retail product margin" },
        { name: "Home Affordability Index Tracker", url: "/home-affordability/", icon: "🏠", keys: "home affordability downpayment salary tracking properties mortgages capacity indexing limits" },
        { name: "In-Hand Salary Net Breakdown Matrix", url: "/in-hand-salary/", icon: "💵", keys: "in hand salary net deduction tax brackets old regime new regime take home tracking" },
        { name: "Inflation Impact Purchasing Power Calc", url: "/inflation/", icon: "🎈", keys: "inflation indexing rupee value cost escalation historical parameters compounding decay" },
        { name: "Inflation-Adjusted SIP Target Tracker", url: "/inflation-adjusted-sip-calculator/", icon: "💹", keys: "inflation adjusted systematic planning required real yield mf adjustments future metrics" },
        { name: "Influencer Tax Deduction Ledger Tracker", url: "/influencer-tax-tracker/", icon: "📸", keys: "influencer taxation business expenses tds 194j digital creators streaming revenue tracking" },
        { name: "Information Ratio Active Return Alpha", url: "/information-ratio/", icon: "📊", keys: "information ratio track record active tracking alpha mutual fund standard parameters metrics" },
        { name: "Inventory Turnover Ratio Checker", url: "/inventory-turnover/", icon: "📦", keys: "inventory turnover efficiency storage warehousing cost of goods sold sales velocity operations tracking metrics" },
        { name: "Loan Affordability Index Tracker", url: "/loan-affordability/", icon: "📈", keys: "loan affordability eligibility gross income multiplier maximum emi limits capacity banking profile" },
        { name: "Loan vs Investment Opportunity Cost", url: "/loan-vs-investment-calculator/", icon: "⚖️", keys: "loan versus investment prepayment arbitrage rate returns comparative models debt settlement" },
        { name: "LRS TCS Liberalized Remittance Tool", url: "/lrs-tcs-calculator/", icon: "🛂", keys: "lrs tcs foreign remittances education limits international travel tax validation compliance" },
        { name: "Retail Markup Percentage Calculator", url: "/markup-calculator/", icon: "🏷️", keys: "markup calculator margin retail pricing multiplier costs retail inventory cost profile calculations" },
        { name: "Marriage Budget Planner", url: "/marriage-planner/", icon: "💍", keys: "marriage wedding hall catering jewelry cost projections layout gold booking designer events milestones planner" },
        { name: "Multiple Goals Portfolio Compiler", url: "/multiple-goals/", icon: "📂", keys: "multiple goals horizon alignment compound matching multi dynamic tracking pipelines" },
        { name: "Mutual Fund Returns Planner", url: "/mutual-fund-returns/", icon: "🎯", keys: "mutual fund returns absolute mf performance metrics direct regular equity regular" },
        { name: "NPS Tax Optimization System (National Pension)", url: "/nps-optimizer-2026/", icon: "👴", keys: "nps national pension scheme corporate model tier 1 active choice auto choice 80ccd 2 tax alpha updates" },
        { name: "NPV Net Present Value Discount Engine", url: "/npv-calculator/", icon: "⏳", keys: "npv net present value capital budgeting cash flows discounting discount hurdle parameters" },
        { name: "Opportunity Cost Alternative Yield Calc", url: "/opportunity-cost-calculator/", icon: "⚖️", keys: "opportunity cost investment choice comparative tracking yields alternatives arbitrage models" },
        { name: "Personal Loan Instant EMI Analytics", url: "/personal-loan-emi/", icon: "💸", keys: "personal loan salary credit balance instant emergency interest fees processing unsecured borrowing math" },
        { name: "Portfolio Return Weighted Average Tool", url: "/portfolio-return-calculator/", icon: "📊", keys: "portfolio return assets weights compounding absolute profile metrics track records" },
        { name: "Position Sizing Equity Risk Sizer", url: "/position-size-calculator/", icon: "📏", keys: "position size stop loss trading shares sizing trade exposure risk boundaries parameters" },
        { name: "Platform Privacy Policy Layout", url: "/privacy-policy/", icon: "📜", keys: "privacy policy data collection standard procedures metrics cookies trackers security alignment" },
        { name: "Property Appreciation Metric Tracker", url: "/property-appreciation/", icon: "📈", keys: "property appreciation real estate growth compounding housing land valuation future price projections modeling" },
        { name: "Property ROI Rental Yield Analysis", url: "/property-roi/", icon: "🏠", keys: "property roi real estate returns cap rates cash purchase metrics leverage appreciation models" },
        { name: "Remote vs Office Commute Net Cost Calc", url: "/remote-vs-office-calculator/", icon: "🚗", keys: "remote versus office cost travel time fuel savings food expenses remote utility metrics" },
        { name: "Rent vs Buy Real Estate Evaluator", url: "/rent-vs-buy-calculator/", icon: "🏢", keys: "rent vs buy property house home ownership downpayment tax home appreciation vs compound savings calculation milestones" },
        { name: "Real Estate Rental Yield Tool", url: "/rental-yield/", icon: "🏠", keys: "rental yield gross net property investment cap rates monthly rent maintenance real estate analytics calculations" },
        { name: "Required CAGR Target Portfolio Estimator", url: "/required-cagr-calculator/", icon: "📊", keys: "required cagr future goal target horizon calculation backward interest computation assets" },
        { name: "Retirement Withdrawal SWP Runway Planner", url: "/retirement-withdrawal/", icon: "👴", keys: "retirement withdrawal cash runway safety multipliers safe extraction inflation adjustment models" },
        { name: "Rolling Returns Consistency Evaluator", url: "/rolling-returns/", icon: "⏳", keys: "rolling returns timeline mutual fund equity performance alpha consistency verification tracking" },
        { name: "Savings Rate Net Real Percentage", url: "/savings-rate/", icon: "📊", keys: "savings rate gross income net residue personal tracking allocation parameters profile" },
        { name: "Side Income Stream Side-Hustle Sizer", url: "/side-income/", icon: "🏖️", keys: "side income side hustle passive flow extra cash generation analytics tracking metrics" },
        { name: "Simple Interest Calculator", url: "/simple-interest/", icon: "🧮", keys: "simple interest formula flat tracking linear borrowing standard math banking yields" },
        { name: "Solar + EV Home Ecosystem Planner", url: "/solar-ev-ecosystem/", icon: "🏡", keys: "solar ev charger combination home grid off grid net zero fuel free green running costs payback period calculations" },
        { name: "Sortino Ratio Downside Deviation Check", url: "/sortino-ratio/", icon: "📊", keys: "sortino ratio risk adjusted down side variance deviation portfolio mutual fund analytics" },
        { name: "SRR Sequence of Returns Risk Simulator", url: "/srr-simulator/", icon: "🎲", keys: "srr sequence of returns risk portfolio cash drain tracking market cycles retirement variance" },
        { name: "Stamp Duty State Transaction Registry", url: "/stamp-duty/", icon: "📜", keys: "stamp duty registration charges state profiles flat transfer registration land records math" },
        { name: "TCS Refund & Liability Calculator", url: "/tcs-calculator/", icon: "🛂", keys: "tcs tax collected at source luxury cars foreign remittances travel compliance collection rates adjustments" },
        { name: "Time to Financial Freedom Projection", url: "/time-to-financial-freedom/", icon: "⏳", keys: "time to financial freedom asset tracking runway models target saving compound rates" },
        { name: "Treynor Ratio Systematic Portfolio Metric", url: "/treynor-ratio/", icon: "📊", keys: "treynor ratio risk adjusted returns beta systematic mutual fund evaluation calculations" }
,
        { name: "Financial Guides & Learning Resources | ArthCalculator", url: "/blog/", icon: "📚", keys: "financial guides learning resources arthcalculator blog index html" },
        { name: "SIP vs Lumpsum: Which Investment Strategy Is Better?", url: "/blog/sip-vs-lumpsum/", icon: "📚", keys: "sip vs lumpsum which investment strategy is better blog sip vs lumpsum index html" },
        { name: "Rule of 72 Explained: Estimate Investment Doubling Time", url: "/blog/rule-of-72/", icon: "📚", keys: "rule of 72 explained estimate investment doubling time blog rule of 72 index html" },
        { name: "Startup Wealth: A Complete Guide to ESOPs | ArthCalculator", url: "/blog/esop-wealth-guide/", icon: "📚", keys: "startup wealth a complete guide to esops arthcalculator blog esop wealth guide index html" },
        { name: "CAGR vs XIRR vs Absolute Return: What's the Difference?", url: "/blog/cagr-vs-xirr-vs-absolute-return/", icon: "📚", keys: "cagr vs xirr vs absolute return what s the difference blog cagr vs xirr vs absolute return index html" },
        { name: "Step", url: "/blog/step-up-sip-explained/", icon: "📚", keys: "step blog step up sip explained index html" },
        { name: "The Financial Math of EVs & Solar Rooftops | ArthCalculator", url: "/blog/financial-math-of-going-green/", icon: "📚", keys: "the financial math of evs solar rooftops arthcalculator blog financial math of going green index html" },
        { name: "Tax Loss Harvesting: Reduce Capital Gains Tax | ArthCalculator", url: "/blog/tax-loss-harvesting-guide/", icon: "📚", keys: "tax loss harvesting reduce capital gains tax arthcalculator blog tax loss harvesting guide index html" },
        { name: "Credit Card EMI Explained: Costs, Traps, and No", url: "/blog/credit-card-emi/", icon: "📚", keys: "credit card emi explained costs traps and no blog credit card emi index html" },
        { name: "Home Loan Eligibility Explained: How Banks Calculate Your Borrowing Power", url: "/blog/home-loan-eligibility/", icon: "📚", keys: "home loan eligibility explained how banks calculate your borrowing power blog home loan eligibility index html" },
        { name: "Flat Interest vs Reducing Balance Interest: Which is Better?", url: "/blog/flat-interest-vs-reducing-balance/", icon: "📚", keys: "flat interest vs reducing balance interest which is better blog flat interest vs reducing balance index html" },
        { name: "PPF vs EPF vs NPS: Which is the Best Retirement Investment?", url: "/blog/ppf-vs-epf-vs-nps/", icon: "📚", keys: "ppf vs epf vs nps which is the best retirement investment blog ppf vs epf vs nps index html" },
        { name: "Loan Against Mutual Funds vs Personal Loan | ArthCalculator", url: "/blog/loan-against-mutual-funds-vs-personal-loan/", icon: "📚", keys: "loan against mutual funds vs personal loan arthcalculator blog loan against mutual funds vs personal loan index html" },
        { name: "Fixed vs Floating Interest Rate: Which Should You Choose?", url: "/blog/fixed-vs-floating-interest-rate/", icon: "📚", keys: "fixed vs floating interest rate which should you choose blog fixed vs floating interest rate index html" },
        { name: "Home Loan Prepayment vs SIP Investment | ArthCalculator", url: "/blog/home-loan-prepayment-vs-sip-investment/", icon: "📚", keys: "home loan prepayment vs sip investment arthcalculator blog home loan prepayment vs sip investment index html" },
        { name: "The Ultimate Guide to FIRE in India | ArthCalculator", url: "/blog/ultimate-guide-to-fire/", icon: "📚", keys: "the ultimate guide to fire in india arthcalculator blog ultimate guide to fire index html" },
        { name: "How EMI Is Calculated: Formula, Examples & Loan Tips", url: "/blog/how-emi-is-calculated/", icon: "📚", keys: "how emi is calculated formula examples loan tips blog how emi is calculated index html" },
        { name: "What is SWP? The Ultimate Guide to Systematic Withdrawal Plans", url: "/blog/what-is-swp/", icon: "📚", keys: "what is swp the ultimate guide to systematic withdrawal plans blog what is swp index html" },
        { name: "Simple Interest vs Compound Interest: Which Makes You Richer?", url: "/blog/simple-vs-compound-interest/", icon: "📚", keys: "simple interest vs compound interest which makes you richer blog simple vs compound interest index html" },
        { name: "Loan Amortization Explained: Understand Your Repayment Schedule", url: "/blog/loan-amortization/", icon: "📚", keys: "loan amortization explained understand your repayment schedule blog loan amortization index html" },
        { name: "Time Value of Money (TVM) Explained with Examples", url: "/blog/time-value-of-money/", icon: "📚", keys: "time value of money tvm explained with examples blog time value of money index html" },
        { name: "Freelancer vs Salaried Employee: Taxes & Take", url: "/blog/freelancer-vs-salaried-taxes/", icon: "📚", keys: "freelancer vs salaried employee taxes take blog freelancer vs salaried taxes index html" },
        { name: "Risk vs Return: The Fundamental Trade", url: "/blog/risk-vs-return/", icon: "📚", keys: "risk vs return the fundamental trade blog risk vs return index html" },
        { name: "FD vs RD: Which Is Better for Your Savings?", url: "/blog/fd-vs-rd/", icon: "📚", keys: "fd vs rd which is better for your savings blog fd vs rd index html" },
        { name: "XIRR vs CAGR: Calculating Mutual Fund Returns | ArthCalculator", url: "/blog/xirr-vs-cagr-for-mutual-fund-returns/", icon: "📚", keys: "xirr vs cagr calculating mutual fund returns arthcalculator blog xirr vs cagr for mutual fund returns index html" },
        { name: "What Is Compound Interest? Complete Beginner Guide", url: "/blog/compound-interest-guide/", icon: "📚", keys: "what is compound interest complete beginner guide blog compound interest guide index html" },
        { name: "Loan Prepayment Strategy: Should You Invest or Pay Off Debt?", url: "/blog/loan-prepayment-strategy/", icon: "📚", keys: "loan prepayment strategy should you invest or pay off debt blog loan prepayment strategy index html" },
        { name: "SWP Tax Calculation for Equity Mutual Funds | ArthCalculator", url: "/blog/swp-tax-calculation-equity-mutual-funds/", icon: "📚", keys: "swp tax calculation for equity mutual funds arthcalculator blog swp tax calculation equity mutual funds index html" },
        { name: "Rent vs Buy a House in India: The Ultimate Financial Breakdown", url: "/blog/rent-vs-buy-a-house/", icon: "📚", keys: "rent vs buy a house in india the ultimate financial breakdown blog rent vs buy a house index html" },
        { name: "Inflation Explained: The Silent Wealth Destroyer", url: "/blog/inflation-explained/", icon: "📚", keys: "inflation explained the silent wealth destroyer blog inflation explained index html" },
        { name: "Global Money Transfer Hub: Calculators, Rates & Provider Reviews", url: "/money-transfer/", icon: "🌍", keys: "global money transfer hub calculators rates provider reviews money transfer index html" },
        { name: "Country Guides: International Money Transfer by Destination | ArthCalculator", url: "/money-transfer/country-guides/", icon: "🌍", keys: "country guides international money transfer by destination arthcalculator money transfer country guides index html" },
        { name: "US to India Money Transfer Guide | ArthCalculator", url: "/money-transfer/country-guides/us-to-india/", icon: "🌍", keys: "us to india money transfer guide arthcalculator money transfer country guides us to india index html" },
        { name: "Australia to Philippines Money Transfer Guide | ArthCalculator", url: "/money-transfer/country-guides/australia-to-philippines/", icon: "🌍", keys: "australia to philippines money transfer guide arthcalculator money transfer country guides australia to philippines index html" },
        { name: "US to China Money Transfer Guide | ArthCalculator", url: "/money-transfer/country-guides/us-to-china/", icon: "🌍", keys: "us to china money transfer guide arthcalculator money transfer country guides us to china index html" },
        { name: "UK to India Money Transfer Guide | ArthCalculator", url: "/money-transfer/country-guides/uk-to-india/", icon: "🌍", keys: "uk to india money transfer guide arthcalculator money transfer country guides uk to india index html" },
        { name: "US to Philippines Money Transfer Guide | ArthCalculator", url: "/money-transfer/country-guides/us-to-philippines/", icon: "🌍", keys: "us to philippines money transfer guide arthcalculator money transfer country guides us to philippines index html" },
        { name: "US to Mexico Money Transfer Guide | ArthCalculator", url: "/money-transfer/country-guides/us-to-mexico/", icon: "🌍", keys: "us to mexico money transfer guide arthcalculator money transfer country guides us to mexico index html" },
        { name: "UK to Nigeria Money Transfer Guide | ArthCalculator", url: "/money-transfer/country-guides/uk-to-nigeria/", icon: "🌍", keys: "uk to nigeria money transfer guide arthcalculator money transfer country guides uk to nigeria index html" },
        { name: "UAE to India Money Transfer Guide | ArthCalculator", url: "/money-transfer/country-guides/uae-to-india/", icon: "🌍", keys: "uae to india money transfer guide arthcalculator money transfer country guides uae to india index html" },
        { name: "Saudi Arabia to Pakistan Money Transfer Guide | ArthCalculator", url: "/money-transfer/country-guides/saudi-arabia-to-pakistan/", icon: "🌍", keys: "saudi arabia to pakistan money transfer guide arthcalculator money transfer country guides saudi arabia to pakistan index html" },
        { name: "Money Transfer Provider Comparisons Hub: Methodology, Features & Guide", url: "/money-transfer/provider-comparisons/", icon: "⚖️", keys: "money transfer provider comparisons hub methodology features guide money transfer provider comparisons index html" },
        { name: "Wise vs Traditional Bank Transfer 2026: Compare Fees & Wire Rates", url: "/money-transfer/provider-comparisons/wise-vs-bank-transfer/", icon: "⚖️", keys: "wise vs traditional bank transfer 2026 compare fees wire rates money transfer provider comparisons wise vs bank transfer index html" },
        { name: "Wise vs Western Union 2026: Fees, Rates & International Transfer Guide", url: "/money-transfer/provider-comparisons/wise-vs-western-union/", icon: "⚖️", keys: "wise vs western union 2026 fees rates international transfer guide money transfer provider comparisons wise vs western union index html" },
        { name: "Remitly vs Western Union: Money Transfer Comparison Guide", url: "/money-transfer/provider-comparisons/remitly-vs-western-union/", icon: "⚖️", keys: "remitly vs western union money transfer comparison guide money transfer provider comparisons remitly vs western union index html" },
        { name: "Wise vs PayPal Comparison 2026: Fees, Rates & Global Transfer Guide", url: "/money-transfer/provider-comparisons/wise-vs-paypal/", icon: "⚖️", keys: "wise vs paypal comparison 2026 fees rates global transfer guide money transfer provider comparisons wise vs paypal index html" },
        { name: "Wise vs Remitly Comparison 2026: Fees, Rates & Delivery Channels Guide", url: "/money-transfer/provider-comparisons/wise-vs-remitly/", icon: "⚖️", keys: "wise vs remitly comparison 2026 fees rates delivery channels guide money transfer provider comparisons wise vs remitly index html" },
        { name: "XE vs CurrencyFair 2026: Compare Fees, Rates & International Money Transfers", url: "/money-transfer/provider-comparisons/xe-vs-currencyfair/", icon: "⚖️", keys: "xe vs currencyfair 2026 compare fees rates international money transfers money transfer provider comparisons xe vs currencyfair index html" },
        { name: "OFX vs CurrencyFair 2026: Compare Fees, Rates & FX Transfers", url: "/money-transfer/provider-comparisons/ofx-vs-currencyfair/", icon: "⚖️", keys: "ofx vs currencyfair 2026 compare fees rates fx transfers money transfer provider comparisons ofx vs currencyfair index html" },
        { name: "Wise vs OFX Comparison 2026: Fees, Rates & Large Money Transfer Guide", url: "/money-transfer/provider-comparisons/wise-vs-ofx/", icon: "⚖️", keys: "wise vs ofx comparison 2026 fees rates large money transfer guide money transfer provider comparisons wise vs ofx index html" },
        { name: "PayPal vs Western Union 2026: Compare Fees & International Transfers", url: "/money-transfer/provider-comparisons/paypal-vs-western-union/", icon: "⚖️", keys: "paypal vs western union 2026 compare fees international transfers money transfer provider comparisons paypal vs western union index html" },
        { name: "Remitly vs Xoom 2026: Compare Fees, Rates & Cash Pickup Transfers", url: "/money-transfer/provider-comparisons/remitly-vs-xoom/", icon: "⚖️", keys: "remitly vs xoom 2026 compare fees rates cash pickup transfers money transfer provider comparisons remitly vs xoom index html" },
        { name: "Instarem vs Remitly 2026: Compare Fees, Rates & Transfer Speed", url: "/money-transfer/provider-comparisons/instarem-vs-remitly/", icon: "⚖️", keys: "instarem vs remitly 2026 compare fees rates transfer speed money transfer provider comparisons instarem vs remitly index html" },
        { name: "Wise vs XE Comparison 2026: Fees, Rates & International Wire Transfer Guide", url: "/money-transfer/provider-comparisons/wise-vs-xe/", icon: "⚖️", keys: "wise vs xe comparison 2026 fees rates international wire transfer guide money transfer provider comparisons wise vs xe index html" },
        { name: "OFX vs XE: Money Transfer Comparison Guide", url: "/money-transfer/provider-comparisons/ofx-vs-xe/", icon: "⚖️", keys: "ofx vs xe money transfer comparison guide money transfer provider comparisons ofx vs xe index html" },
        { name: "Wise vs Xoom Comparison 2026: Fees, Rates & International Transfer Guide", url: "/money-transfer/provider-comparisons/wise-vs-xoom/", icon: "⚖️", keys: "wise vs xoom comparison 2026 fees rates international transfer guide money transfer provider comparisons wise vs xoom index html" },
        { name: "Wise vs Instarem: Money Transfer Comparison Guide", url: "/money-transfer/provider-comparisons/wise-vs-instarem/", icon: "⚖️", keys: "wise vs instarem money transfer comparison guide money transfer provider comparisons wise vs instarem index html" },
        { name: "Wise vs CurrencyFair: Money Transfer Comparison Guide", url: "/money-transfer/provider-comparisons/wise-vs-currencyfair/", icon: "⚖️", keys: "wise vs currencyfair money transfer comparison guide money transfer provider comparisons wise vs currencyfair index html" },
        { name: "International Money Transfer Calculators | ArthCalculator", url: "/money-transfer/calculators/", icon: "🌍", keys: "international money transfer calculators arthcalculator money transfer calculators index html" },
        { name: "International Wire Cost Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/international-wire-cost/", icon: "🌍", keys: "international wire cost calculator international money transfer arthcalculator money transfer calculators international wire cost index html" },
        { name: "Effective Exchange Rate Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/effective-exchange-rate/", icon: "🌍", keys: "effective exchange rate calculator international money transfer arthcalculator money transfer calculators effective exchange rate index html" },
        { name: "Received Amount After Conversion | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/received-after-conversion/", icon: "🌍", keys: "received amount after conversion international money transfer arthcalculator money transfer calculators received after conversion index html" },
        { name: "Total Transfer Cost Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/total-transfer-cost/", icon: "🌍", keys: "total transfer cost calculator international money transfer arthcalculator money transfer calculators total transfer cost index html" },
        { name: "Exchange Rate Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/exchange-rate/", icon: "🌍", keys: "exchange rate calculator international money transfer arthcalculator money transfer calculators exchange rate index html" },
        { name: "Send Amount Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/send-amount/", icon: "🌍", keys: "send amount calculator international money transfer arthcalculator money transfer calculators send amount index html" },
        { name: "Transfer Cost Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/transfer-cost/", icon: "🌍", keys: "transfer cost calculator international money transfer arthcalculator money transfer calculators transfer cost index html" },
        { name: "Exchange Rate Markup Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/exchange-rate-markup/", icon: "🌍", keys: "exchange rate markup calculator international money transfer arthcalculator money transfer calculators exchange rate markup index html" },
        { name: "Money Transfer Comparison Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/comparison/", icon: "🌍", keys: "money transfer comparison calculator international money transfer arthcalculator money transfer calculators comparison index html" },
        { name: "Transfer Fee Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/transfer-fee/", icon: "🌍", keys: "transfer fee calculator international money transfer arthcalculator money transfer calculators transfer fee index html" },
        { name: "Recipient Gets Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/recipient-gets/", icon: "🌍", keys: "recipient gets calculator international money transfer arthcalculator money transfer calculators recipient gets index html" },
        { name: "Amount After Fees Calculator | International Money Transfer | ArthCalculator", url: "/money-transfer/calculators/amount-after-fees/", icon: "🌍", keys: "amount after fees calculator international money transfer arthcalculator money transfer calculators amount after fees index html" },
        { name: "Exchange Rate Guide: How Exchange Rates Work | ArthCalculator", url: "/money-transfer/exchange-rates/", icon: "💱", keys: "exchange rate guide how exchange rates work arthcalculator money transfer exchange rates index html" },
        { name: "USD to MXN Exchange Rate Guide | ArthCalculator", url: "/money-transfer/exchange-rates/usd-to-mxn/", icon: "💱", keys: "usd to mxn exchange rate guide arthcalculator money transfer exchange rates usd to mxn index html" },
        { name: "AED to INR Exchange Rate Guide | ArthCalculator", url: "/money-transfer/exchange-rates/aed-to-inr/", icon: "💱", keys: "aed to inr exchange rate guide arthcalculator money transfer exchange rates aed to inr index html" },
        { name: "AUD to PHP Exchange Rate Guide | ArthCalculator", url: "/money-transfer/exchange-rates/aud-to-php/", icon: "💱", keys: "aud to php exchange rate guide arthcalculator money transfer exchange rates aud to php index html" },
        { name: "USD to INR Exchange Rate Guide | ArthCalculator", url: "/money-transfer/exchange-rates/usd-to-inr/", icon: "💱", keys: "usd to inr exchange rate guide arthcalculator money transfer exchange rates usd to inr index html" },
        { name: "GBP to NGN Exchange Rate Guide | ArthCalculator", url: "/money-transfer/exchange-rates/gbp-to-ngn/", icon: "💱", keys: "gbp to ngn exchange rate guide arthcalculator money transfer exchange rates gbp to ngn index html" },
        { name: "USD to PHP Exchange Rate Guide | ArthCalculator", url: "/money-transfer/exchange-rates/usd-to-php/", icon: "💱", keys: "usd to php exchange rate guide arthcalculator money transfer exchange rates usd to php index html" },
        { name: "USD to CNY Exchange Rate Guide | ArthCalculator", url: "/money-transfer/exchange-rates/usd-to-cny/", icon: "💱", keys: "usd to cny exchange rate guide arthcalculator money transfer exchange rates usd to cny index html" },
        { name: "GBP to INR Exchange Rate Guide | ArthCalculator", url: "/money-transfer/exchange-rates/gbp-to-inr/", icon: "💱", keys: "gbp to inr exchange rate guide arthcalculator money transfer exchange rates gbp to inr index html" },
        { name: "SAR to PKR Exchange Rate Guide | ArthCalculator", url: "/money-transfer/exchange-rates/sar-to-pkr/", icon: "💱", keys: "sar to pkr exchange rate guide arthcalculator money transfer exchange rates sar to pkr index html" },
        { name: "Money Transfer Provider Reviews: Comprehensive 2026 Directory & Methodology", url: "/money-transfer/provider-reviews/", icon: "🌍", keys: "money transfer provider reviews comprehensive 2026 directory methodology money transfer provider reviews index html" },
        { name: "Wise Review 2026: Mid", url: "/money-transfer/provider-reviews/wise-review/", icon: "🌍", keys: "wise review 2026 mid money transfer provider reviews wise review index html" },
        { name: "Remitly Review 2026: Express vs Economy Fees, Speed & Verdict", url: "/money-transfer/provider-reviews/remitly-review/", icon: "🌍", keys: "remitly review 2026 express vs economy fees speed verdict money transfer provider reviews remitly review index html" },
        { name: "PayPal Money Transfer Review 2026: International Fees, FX Rates & Verdict", url: "/money-transfer/provider-reviews/paypal-review/", icon: "🌍", keys: "paypal money transfer review 2026 international fees fx rates verdict money transfer provider reviews paypal review index html" },
        { name: "XE Money Transfer Review 2026: Zero Transfer Fees, Rates & Verdict", url: "/money-transfer/provider-reviews/xe-review/", icon: "🌍", keys: "xe money transfer review 2026 zero transfer fees rates verdict money transfer provider reviews xe review index html" },
        { name: "Western Union Review 2026: Agent Network, Cash Pickup, Fees & Verdict", url: "/money-transfer/provider-reviews/western-union-review/", icon: "🌍", keys: "western union review 2026 agent network cash pickup fees verdict money transfer provider reviews western union review index html" },
        { name: "OFX Money Transfer Review 2026: Large Transfer Fees, Rates & Verdict", url: "/money-transfer/provider-reviews/ofx-review/", icon: "🌍", keys: "ofx money transfer review 2026 large transfer fees rates verdict money transfer provider reviews ofx review index html" },
        { name: "Instarem Review 2026: Asian Remittance Fees, Rates & Verdict", url: "/money-transfer/provider-reviews/instarem-review/", icon: "🌍", keys: "instarem review 2026 asian remittance fees rates verdict money transfer provider reviews instarem review index html" },
        { name: "CurrencyFair Review 2026: P2P Exchange Marketplace Fees, Rates & Verdict", url: "/money-transfer/provider-reviews/currencyfair-review/", icon: "🌍", keys: "currencyfair review 2026 p2p exchange marketplace fees rates verdict money transfer provider reviews currencyfair review index html" },
        { name: "SWIFT & IBAN Guide: International Banking Identifiers Explained | ArthCalculator", url: "/money-transfer/swift-iban/", icon: "🌍", keys: "swift iban guide international banking identifiers explained arthcalculator money transfer swift iban index html" }
    ];

    let overlay, card, inputField, resultsBox;

    function createOverlayDOMFramework() {
        if (document.getElementById("globalSearchOverlay")) return;

        const container = document.createElement("div");
        container.id = "globalSearchOverlay";
        container.className = "fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] hidden items-start justify-center p-4 sm:p-10 opacity-0 transition-opacity duration-200";
        container.style.boxSizing = "border-box";
        container.innerHTML = `
            <div class="bg-white w-full max-w-2xl rounded-2xl border border-slate-200 shadow-2xl overflow-hidden mt-4 sm:mt-12 flex flex-col max-h-[80vh] transform scale-95 transition-transform duration-200" id="globalSearchCard" style="box-sizing: border-box;">
                <div class="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50/50">
                    <div class="text-blue-600 shrink-0"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
                    <input type="text" id="globalSearchInputField" placeholder="Type keywords (e.g., sip, emi, tax, cagr)..." class="w-full bg-transparent text-slate-800 placeholder-slate-400 font-semibold text-sm focus:outline-none" style="border: none !important; outline: none !important; box-shadow: none !important; padding: 6px 0 !important; width: 100% !important; background: transparent !important; display: block !important;">
                    <button id="closeSearchBtn" class="text-xs bg-slate-200 hover:bg-slate-300 text-slate-500 font-bold px-2.5 py-1.5 rounded-lg uppercase tracking-wider transition-colors shrink-0">Esc</button>
                </div>
                <div class="flex-1 overflow-y-auto p-4 space-y-1 bg-white flex flex-col items-stretch" id="globalSearchResultsContainer">
                    <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2 text-left">Suggested Quick Launches</div>
                    <a href="/sip/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📈</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Systematic Investment Plan (SIP) Calculator</span></a>
                    <a href="/emi/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">💳</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Loan EMI Amortization Calculator</span></a>
                    <a href="/income-tax/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📑</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Income Tax Regime Tax Planner</span></a>
                    <a href="/cagr/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📊</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Compound Annual Growth Rate (CAGR) Tool</span></a>
                </div>
                <div class="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider shrink-0">
                    <div>Search Architecture</div>
                    <div class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>All Core Tools Indexed</div>
                </div>
            </div>`;
        document.body.appendChild(container);
        
        overlay = document.getElementById("globalSearchOverlay");
        card = document.getElementById("globalSearchCard");
        inputField = document.getElementById("globalSearchInputField");
        resultsBox = document.getElementById("globalSearchResultsContainer");

        inputField.addEventListener("input", executeFilterQuery);
        document.getElementById("closeSearchBtn").addEventListener("click", hideModalContext);
        overlay.addEventListener("click", (e) => { if (e.target === overlay) hideModalContext(); });
    }

    window.showModalContext = function() {
        if (!overlay) createOverlayDOMFramework();
        overlay.classList.remove("hidden");
        overlay.classList.add("flex");
        setTimeout(() => {
            overlay.classList.remove("opacity-0");
            card.classList.remove("scale-95");
            if (inputField) { inputField.focus(); inputField.select(); }
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

    function executeFilterQuery(e) {
        const query = e.target.value.toLowerCase().trim();
        if (query.length === 0) {
            resultsBox.innerHTML = `
                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2 text-left">Suggested Quick Launches</div>
                <a href="/sip/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📈</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Systematic Investment Plan (SIP) Calculator</span></a>
                <a href="/emi/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">💳</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Loan EMI Amortization Calculator</span></a>
                <a href="/income-tax/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📑</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Income Tax Regime Tax Planner</span></a>
                <a href="/cagr/" class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50/60 group transition-colors text-left"><span class="text-lg">📊</span><span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">Compound Annual Growth Rate (CAGR) Tool</span></a>`;
            return;
        }

        const hits = catalog.filter(item => item.name.toLowerCase().includes(query) || (item.keys && item.keys.toLowerCase().includes(query)));
        if (hits.length === 0) {
            resultsBox.innerHTML = `<div class="py-12 text-center text-sm font-bold text-slate-500">No calculators matched "${e.target.value}"</div>`;
            return;
        }

        let html = `<div class="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 py-2 text-left">Found ${hits.length} Calculator Matches</div>`;
        hits.forEach(item => {
            html += `
                <a href="${item.url}" class="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/80 group transition-colors border border-transparent hover:border-blue-100 text-left">
                    <div class="flex items-center gap-3 min-w-0">
                        <span class="text-lg bg-slate-100 p-1.5 rounded-lg group-hover:bg-blue-100/50 transition-colors">${item.icon}</span>
                        <span class="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors truncate">${item.name}</span>
                    </div>
                    <span class="text-[10px] font-bold text-blue-500 bg-blue-50 px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider whitespace-nowrap hidden sm:inline-block">Launch Tool →</span>
                </a>`;
        });
        resultsBox.innerHTML = html;
    }

    // GLOBAL ROOT DELEGATION EVENT LISTENER (Immune to template asynchronous fetch speeds)
    document.addEventListener("click", function(event) {
        if (!event.target) return;
        
        // Match clicks hitting input triggers or mobile triggers
        if (event.target.id === "desktopSearchTrigger" || event.target.closest("#mobileSearchTrigger")) {
            event.preventDefault();
            window.showModalContext();
        }
    });

    // Keyboard Hotkey Interceptions (Esc / Ctrl K)
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") window.hideModalContext();
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            window.showModalContext();
        }
    });
})();
