// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample-page',
            title: 'Consent',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'documentation',
            title: 'Sustainability@Zuhlke',
            type: 'item',
            url: 'https://confluence.zuehlke.com/pages/viewpage.action?pageId=217450821',
            icon: icons.IconHelp,
            external: true,
            target: true
        }
    ]
};

export default other;
