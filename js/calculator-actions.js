/**
 * ArthCalculator.in - Universal Action Utilities & Reactive Calculation Engine
 * Handles:
 *  1. Reset to Defaults (resetCalculator)
 *  2. Copy Result Summary to Clipboard (copyCalculationSummary)
 *  3. Print / Save as PDF (window.print)
 *  4. Real-time Live Reactive Recalculation across all inputs
 */

(function () {
    // 1. COPY CALCULATION SUMMARY
    window.copyCalculationSummary = async function () {
        if (typeof window.customCopyCalculationSummary === 'function') {
            return window.customCopyCalculationSummary();
        }

        const titleEl = document.querySelector('h1');
        const title = titleEl ? titleEl.innerText.replace(/\s+/g, ' ').trim() : document.title.split('|')[0].trim();
        const canonicalEl = document.querySelector('link[rel="canonical"]');
        const pageUrl = canonicalEl ? canonicalEl.href : window.location.href;

        // Locate results card surrounding copy button
        const copyBtn = document.getElementById('copySummaryBtn');
        const resultCard = copyBtn ? (copyBtn.closest('.card-shadow') || copyBtn.closest('div[class*="rounded"]') || copyBtn.parentElement) : null;

        let lines = [];
        lines.push(`${title} (ArthCalculator.in)`);
        lines.push('-------------------------------------------');

        // Extract key metrics from results card
        if (resultCard) {
            const items = [];

            // Primary hero metric
            const heroVal = resultCard.querySelector('.text-3xl, .text-4xl, .text-5xl, [id*="resTotal"], [id*="maturityValue"], [id*="mainTax"], [id*="cagrValue"], [id*="netProfit"], [id*="finalDeclare"]');
            if (heroVal) {
                let heroLabel = 'Primary Result';
                const parent = heroVal.closest('div');
                const prevLabel = parent ? parent.querySelector('h2, h3, h4, p, span.text-xs, span.text-sm') : null;
                if (prevLabel && prevLabel !== heroVal) {
                    heroLabel = prevLabel.innerText.replace(/\s+/g, ' ').trim();
                }
                const heroText = heroVal.innerText.replace(/\s+/g, ' ').trim();
                if (heroText) {
                    items.push(`${heroLabel}: ${heroText}`);
                }
            }

            // Sub-metrics / breakdown rows
            const rows = resultCard.querySelectorAll('.flex.justify-between, .flex.items-center.justify-between, [class*="justify-between"]');
            rows.forEach(row => {
                if (copyBtn && row.contains(copyBtn)) return;
                if (row.closest('#insightsBox')) return;
                const children = Array.from(row.children).filter(c => c.innerText.trim());
                if (children.length >= 2) {
                    const lbl = children[0].innerText.replace(/\s+/g, ' ').trim();
                    const val = children[children.length - 1].innerText.replace(/\s+/g, ' ').trim();
                    if (lbl && val && lbl !== val && val.length < 35 && (val.includes('₹') || val.includes('%') || /\d/.test(val))) {
                        items.push(`${lbl}: ${val}`);
                    }
                }
            });

            // Deduplicate items
            const seen = new Set();
            items.forEach(it => {
                if (!seen.has(it)) {
                    seen.add(it);
                    lines.push(it);
                }
            });
        }

        // Add key user inputs if available (up to 5 inputs)
        const mainContainer = document.querySelector('#calculator, main') || document.body;
        const inputs = mainContainer.querySelectorAll('input:not([type="range"]):not([type="hidden"]), select');
        const inputItems = [];
        inputs.forEach(inp => {
            if (inp.type === 'button' || inp.type === 'submit' || inp.type === 'reset') return;
            let label = '';
            if (inp.id) {
                const lbl = document.querySelector(`label[for="${inp.id}"]`);
                if (lbl) label = lbl.innerText.replace(/\s+/g, ' ').trim();
            }
            if (!label) {
                const parent = inp.closest('div');
                const prev = parent ? parent.querySelector('label, span.text-xs, span.text-sm, p') : null;
                if (prev && !prev.contains(inp)) label = prev.innerText.replace(/\s+/g, ' ').trim();
            }
            let val = inp.type === 'checkbox' ? (inp.checked ? 'Yes' : 'No') : inp.value;
            if (label && val && label.length < 40 && val.length < 30) {
                inputItems.push(`${label}: ${val}`);
            }
        });

        if (inputItems.length > 0 && inputItems.length <= 6) {
            lines.push('-------------------------------------------');
            inputItems.forEach(it => lines.push(it));
        }

        lines.push('-------------------------------------------');
        lines.push(`Calculate yours at: ${pageUrl}`);

        const summaryText = lines.join('\n');

        // Clipboard write with fallback
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(summaryText);
            } else {
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = summaryText;
                tempTextArea.style.position = 'fixed';
                tempTextArea.style.left = '-9999px';
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);
            }

            const textSpan = document.getElementById('copySummaryText');
            if (textSpan) {
                const original = textSpan.innerText;
                textSpan.innerText = '✓ Copied!';
                setTimeout(() => { textSpan.innerText = original; }, 2000);
            }
        } catch (err) {
            console.error('Clipboard copy failed:', err);
        }
    };

    // 2. RESET CALCULATOR
    window.resetCalculator = function () {
        if (typeof window.customResetCalculator === 'function') {
            return window.customResetCalculator();
        }

        const existingResetBtn = document.querySelector('#btnReset, #resetBtn, button[type="reset"]');
        if (existingResetBtn && existingResetBtn.id !== 'actionResetBtn' && !existingResetBtn.hasAttribute('onclick')) {
            existingResetBtn.click();
            return;
        }

        const container = document.querySelector('#calculator, main') || document.body;
        const inputs = container.querySelectorAll('input, select, textarea');
        inputs.forEach(el => {
            if (el.type === 'button' || el.type === 'submit' || el.type === 'reset') return;
            if (el.type === 'checkbox' || el.type === 'radio') {
                el.checked = el.defaultChecked;
            } else if (el.defaultValue !== undefined && el.defaultValue !== '') {
                el.value = el.defaultValue;
            }
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
        });

        triggerRecalculation();
    };

    // Helper: Trigger recalculation safely
    function triggerRecalculation() {
        if (typeof window.calculate === 'function') window.calculate();
        else if (typeof window.updateCalculations === 'function') window.updateCalculations();
        else if (typeof window.calculateEMI === 'function') window.calculateEMI();
        else if (typeof window.runCalculations === 'function') window.runCalculations();
        else if (typeof window.updateUI === 'function') window.updateUI();
        else if (typeof window.calculateTax === 'function') window.calculateTax();
        else if (typeof window.calculateZScore === 'function') window.calculateZScore();
        else if (typeof window.calculate44AD === 'function') window.calculate44AD();
        else {
            const calcBtn = document.querySelector('#calcBtn, #calculateBtn, #btnCalculate, button[onclick*="calc"], button[onclick*="update"]');
            if (calcBtn && typeof calcBtn.click === 'function') {
                calcBtn.click();
            }
        }
        setTimeout(updateDynamicInsights, 100);
    }

    // 3. LIVE REACTIVE RECALCULATION
    function initLiveCalculation() {
        const container = document.querySelector('#calculator, main') || document.body;

        container.querySelectorAll('input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="hidden"]), select').forEach(el => {
            if (el._liveBound) return;
            el._liveBound = true;

            const handleUpdate = () => {
                triggerRecalculation();
            };

            el.addEventListener('input', handleUpdate);
            el.addEventListener('change', handleUpdate);
        });
    }

    // 4. DYNAMIC FINANCIAL INSIGHTS HELPER
    function updateDynamicInsights() {
        const box = document.getElementById('insightsBox');
        if (!box) return;

        // If page has a custom insight and it wasn't auto-generated by us, don't overwrite
        if (box.dataset.customInsight === 'true') return;

        // 1. Check for loan metrics
        const totalPayment = document.getElementById('totalPaymentDisp') || document.getElementById('resTotalPayment');
        const totalInterest = document.getElementById('totalInterestDisp') || document.getElementById('resTotalInterest');
        const netLoan = document.getElementById('netLoanDisp') || document.getElementById('resNetLoan');

        if (totalPayment && totalInterest && netLoan && totalInterest.textContent !== '₹0') {
            box.dataset.autoInsight = 'true';
            box.innerHTML = `<p>💡 <strong>Smart Debt Insight:</strong> On your current loan, total interest is <strong>${totalInterest.textContent}</strong>. Prepaying just 5% of your principal annually can save up to <strong>35% of total interest</strong> and reduce your tenure by years.</p>`;
            return;
        }

        // 2. Check for investment metrics
        const maturity = document.getElementById('maturityValue') || document.getElementById('resFinalDeclare');
        const invested = document.getElementById('totalInvestedMobile') || document.getElementById('totalInvested') || document.getElementById('investedLabel');
        const wealthGain = document.getElementById('wealthGainedMobile') || document.getElementById('growthLabel');

        if (maturity && wealthGain && invested && wealthGain.textContent !== '₹0') {
            box.dataset.autoInsight = 'true';
            box.innerHTML = `<p>💡 <strong>Compounding Insight:</strong> Your estimated wealth gain is <strong>${wealthGain.textContent}</strong> on an investment of <strong>${invested.textContent}</strong>. Staying invested for the full tenure maximizes the exponential effect of compound interest.</p>`;
            return;
        }

        // 3. Check for tax metrics
        const mainTax = document.getElementById('mainTaxDisplay') || document.getElementById('resTax');
        const effRate = document.getElementById('effectiveRate');

        if (mainTax && effRate && mainTax.textContent !== '₹0') {
            box.dataset.autoInsight = 'true';
            box.innerHTML = `<p>💡 <strong>Tax Optimization Insight:</strong> Your estimated tax payable is <strong>${mainTax.textContent}</strong> with an effective tax rate of <strong>${effRate.textContent}</strong>. Compare Old vs New regime deductions to maximize your take-home pay.</p>`;
            return;
        }

        // 4. Default general financial takeaway if box is empty
        if (!box.innerHTML.trim()) {
            box.dataset.autoInsight = 'true';
            box.innerHTML = `<p>💡 <strong>Financial Pro-Tip:</strong> Review key assumptions annually to account for inflation, interest rate fluctuations, and changing tax laws.</p>`;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initLiveCalculation();
            setTimeout(updateDynamicInsights, 300);
        });
    } else {
        initLiveCalculation();
        setTimeout(updateDynamicInsights, 300);
    }
})();
