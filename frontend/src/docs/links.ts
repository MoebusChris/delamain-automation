// Navigation Links & Sitemap

export const menuNavLinks: any = [

    //Workflow
    {
        id: 'workflow',
        title: 'Workflow',
        list: [
                { href: '/workflow/mytask', label: 'My Task', keywords: 'workflow, task, work' },
                { href: '/workflow/plan', label: 'Team Planning', keywords: 'workflow, schedule, plan, planning' },
                { href: '/workflow/inbox', label: 'Inbox', keywords: 'Inbox, message, talk, communication' },
        ]
    },

    // Accounting tools
    {
        id: 'accounting',
        title: 'Accounting',
        list: [
                { href: '/accounting/asset', label: 'Assets', keywords: 'accounting, asset' },
                { href: '/accounting/amol', label: 'Amoltization', keywords: 'accounting, accumulated, depreciation' },
                { href: '/accounting/depre', label: 'Depreciation', keywords: 'accounting, accumulated, depreciation' },
                { href: '/accounting/prepaid', label: 'Prepaid Expense', keywords: 'accounting, balance sheet' },
                { href: '/accounting/acrud-rev', label: 'Accrued Revenue', keywords: 'accounting, balance sheet' },
                { href: '/accounting/acrud-exp', label: 'Accrued Expense', keywords: 'accounting, balance sheet' },
        ]
    },

    // Financial Tools
    {
        id: 'finance',
        title: 'Finance',
        list: [
                { href: '/finance/dashboard', label: 'Dashboard', keywords: 'finance, overview' },
        ]
    },
    {
        id: 'input',
        title: 'Input',
        list: [
                { href: '/input/dimensions', label: 'Dimensions', keywords: 'finance, overview' },
            //    { href: '/finance/fair-value', label: 'Valuation', keywords: 'finance, financial, statement' },
            //    { href: '/finance/sales-forecast', label: 'Sales Forecast', keywords: 'finance, financial, statement' },
            //    { href: '/finance/prof-max', label: 'Profit Maximization', keywords: 'finance, financial, statement' },
                { href: '/input/source-data', label: 'Source Data', keywords: 'finance, financial, statement' },
        ]
    },
    {
        id: 'output',
        title: 'Output',
        list: [
                { href: '/output/audit', label: 'Audit', keywords: 'finance, overview' },
            //    { href: '/finance/fair-value', label: 'Valuation', keywords: 'finance, financial, statement' },
            //    { href: '/finance/sales-forecast', label: 'Sales Forecast', keywords: 'finance, financial, statement' },
                { href: '/output/template', label: 'Template', keywords: 'finance, financial, statement' },
                { href: '/output/exporter', label: 'Data Exporter', keywords: 'finance, financial, statement' },
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