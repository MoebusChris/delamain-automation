// Navigation Links & Sitemap

export const menuNavLinks: any = [

    //Workflow
    {
        id: 'workflow',
        title: 'Workflow',
        list: [
                { href: '/workflow/overview', label: 'Overview', keywords: 'workflow, schedule, plan' },
        ]
    },

    // Accounting tools
    {
        id: 'accounting',
        title: 'Accounting',
        list: [
                { href: '/accounting/overview', label: 'Overview', keywords: 'accounting, accumulated, depreciation' },
                { href: '/accounting/asset', label: 'Asset', keywords: 'accounting, asset' },
                { href: '/accounting/accu-depre', label: 'Depreciation', keywords: 'accounting, accumulated, depreciation' },
                { href: '/accounting/fs', label: 'Balance Sheet', keywords: 'accounting, balance sheet' },
        ]
    },

    // Financial Tools
    {
        id: 'finance',
        title: 'Finance',
        list: [
                { href: '/finance/overview', label: 'Overview', keywords: 'finance, overview' },
                { href: '/finance/fair-value', label: 'Valuation', keywords: 'finance, financial, statement' },
                { href: '/finance/sales-forecast', label: 'Sales Forecast', keywords: 'finance, financial, statement' },
                { href: '/finance/prof-max', label: 'Profit Maximization', keywords: 'finance, financial, statement' },
                { href: '/finance/cost-min', label: 'Cost Minimization', keywords: 'finance, financial, statement' },
        ]
    },

    // Automation Tools
    {
        id: 'automation',
        title: 'Automation',
        list: [
                { href: '/automation/pdf-tool', label: 'PDF Tools', keywords: 'automation, overview' },
                { href: '/automation/email-tool', label: 'Email Automation Tools', keywords: 'automation, automation' },
                { href: '/automation/md-gen', label: 'MD Generator', keywords: 'automation, automation' },
                { href: '/automation/invoice-gen', label: 'Invoicing Tools', keywords: 'automation, automation' },
        ]
    }

];